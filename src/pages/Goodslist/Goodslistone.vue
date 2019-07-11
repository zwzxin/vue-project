<template>
<div class="content">
    <div class="nav">
       <i class="icon-back" @click="handleClick"></i>
       <div class="img">
         <img src="https://m.huanle800.com/static/wap/images/title.svg" alt="">
       </div>
    </div>
    <div class="goodslistout">
      <div class="goodslistone">
        <listitem
       v-for="item in itemList"
       :key="item.id"
       :item = "item"
       ></listitem>
      </div>

    </div>
</div>
    
</template>

<style lang="stylus" scoped>
.content
  width 100%
  height 100%
  display flex
  flex-direction column
  .nav
    width 100%
    height .54rem
    padding 0.08rem 0.1rem 0.2rem 0.1rem
    background:-webkit-linear-gradient(left,orange,#FA4DBE)
    position relative
    text-align center
    line-height .44rem
    i 
      display: block;
      position: absolute;
      top: .2rem;
      left: .3rem;
      width: 13px;
      height: 13px;
      border-bottom: 1px solid #fff;
      border-left: 1px solid #fff;
      -webkit-transform: rotate(45deg); 
      transform: rotate(45deg);
      padding-top 0
    .img
      display block
      margin 0 auto
      width 1.36rem
      height .30rem
      img
        width 100%
        height 100%
  .goodslistout
    width 3.75rem
    flex 1
    overflow hidden
    .goodslistone
       width 100%
       overflow scroll
      




</style>

<script>
import listitem from '../../components/listitem'
import http from '../../utils/http'
import BScroll from 'better-scroll'
import { Indicator, Toast } from 'mint-ui'
export default {
   components:{
     listitem
   },
   methods: {
    handleClick() {
      this.$router.go(-1)
    }
  },
   data(){
    return {     
         
         itemList: []   ,
         currentPage :4     
    } 
                       
  },
  async mounted(){
    
     Indicator.open({
      text: '加载中...',
      spinnerType: 'triple-bounce'
    })
    let result = await http.get({
      url:'/ajax/?m=ajax&a=ajaxnew&page=2'
      
    })
    this.itemList = result.data.data
   
    Indicator.close()


    this.$nextTick(()=>{
      let bScroll = new BScroll('.goodslistout',{
        click:true,
        pullUpLoad:true
      })
       bScroll.on('pullingUp',async()=>{
      Indicator.open()
      let result = await http.get({
        url:`/ajax/?m=ajax&a=ajaxnew&page=${++this.currentPage}`
      })
      this.itemList = [...this.itemList,...result.data.data]
      
      Indicator.close()
      bScroll.refresh()
      bScroll.finishPullUp()
        
      // this.$nextTick(()=>{
      //      bScroll.refresh() // 重置bScroll高度
      //     // Indicator.close() // 关闭loading
      //     bScroll.finishPullUp()
      //     Toast({
      //       message:'到底了~',
      //       position:'botttom',
      //       duration:2000
      //     })
      // })
    })
    })
   
   

  }
  
}
</script>
