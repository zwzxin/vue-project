<template>
<div class="home-outcont">
    <div class="home-innercont">
       <Rowsone></Rowsone>
       <Rowstwo></Rowstwo>
       <Rowsthree></Rowsthree>
       <div class="xian"></div>
       <div class="youlike-title">猜你喜欢</div>
       <dir class="pinkagelistwrap">
         <goodsitem
            v-for="goodsitem in goodsitemlist"
           :key="goodsitem.id"
           :goodsitem = "goodsitem"
          ></goodsitem>
       </dir>
       
       

    </div>
   
</div>
    
</template>
<script>
import goodsitem  from '../../components/goodsitem'
import Rowsone from './Rowsone'
import Rowstwo from './Rowstwo'
import Rowsthree from './Rowsthree'

// import Pinkageitem from '../../components/Pinkageitem'
import http from '../../utils/http'
import BScroll from 'better-scroll'
import { Indicator, Toast } from 'mint-ui'

export default {
  components:{
    Rowsone,
    Rowstwo,
    Rowsthree,
    goodsitem
    // Pinkageitem
  },
  data(){
    return{
      pinkageitemList: [] ,
      goodsitemlist: []   ,
      currentPage :1     
    }
  },
   async mounted(){
    
     Indicator.open({
      text: '加载中...',
      spinnerType: 'triple-bounce'
    })
    let result = await http.get({
      url:'/ajax/?m=ajax&a=ajaxnew&page=7'
      
    })
    let result2 = await http.get({
      url:'/ajax/?m=ajax&a=bigquan&cid=9660&page=6'
      
    })
    this.goodsitemlist = result2.data.data
    this.pinkageitemList = result.data.data
    // console.log(this.pinkageitemList)
   
    Indicator.close()


    this.$nextTick(()=>{
      let bSScroll = new BScroll('.home-outcont',{
        click:true,
        pullUpLoad:true
      })
       bSScroll.on('pullingUp',async()=>{
      Indicator.open()
      let result = await http.get({
        url:`/ajax/?m=ajax&a=ajaxnew&page=9`
      })
      this.pinkageitemList = [...this.pinkageitemList,...result.data.data]
        let result2 = await http.get({
         url:`/ajax/?m=ajax&a=bigquan&cid=9660&page=${++this.currentPage}`

      })
      this.goodsitemlist = [...this.goodsitemlist,...result2.data.data]
      
      Indicator.close()
      bSScroll.refresh()
      bSScroll.finishPullUp()
    
    })
    })
   
   

  }
  
}
</script>


<style lang="stylus" scoped>
.home-outcont
  flex 1
  width 100%
  overflow-y scroll
  .home-innercont
   
    width 100%
    overflow-y scroll
    .xian
      height 0.05rem
      width 100%
      background #eee
    .youlike-title
      height .40rem
      width 100%
      text-align center
      line-height .40rem
    .pinkagelistwrap
      width 100%
      overflow scroll
      padding 0
</style>
