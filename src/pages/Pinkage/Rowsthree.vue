<template>
   <div class="rowone-cont">
    <div class="titleone">
        精品推荐
    </div>
    <div class="row-outthree">
       <div class="row-inner">
         <div class="rowitem" v-for="rowitemtwo in rowListthree"  :key="rowitemtwo.id"  :rowitemtwo= "rowitemtwo">
           <img :src="rowitemtwo.pic" alt=""/>
            <div class="text">疯抢{{rowitemtwo.xiaoliang}}件</div>
            <div class="rowname" style="height:.16rem;overflow:hidden;font-size:.12rem;color #666;">{{rowitemtwo.d_title}}</div>
            <div class=rowmoney>￥{{rowitemtwo.yuanjia}}</div>
         </div>
         <router-link to="/Home" tag="div" class="rowitem after" style="background:#FFF3F3">
            <div class="more">更多商品</div>
            <div class="moreicon">
              <i>
                <img src="https://m.huanle800.com/static/wap/images/nine_new.png" alt="">
              </i>
            </div>
         </router-link>
        
       </div>
    </div>
    </div>
</template>

<script>
import http from '../../utils/http'
import BScroll from 'better-scroll'
export default {
  data(){
   return{
     rowListthree:[]
   }
  },
  async mounted(){
    let result = await http.get({
      url:'/ajax/?m=ajax&a=ajaxnew&page=6'
    })
    this. rowListthree = result.data.data
    console.log( this. rowListthree)
   this.$nextTick(()=>{
   let bScrollthree = new BScroll('.row-outthree',{
      click:true,
      scrollX:true,

    })
    bScrollthree.refresh()
  })
  }
}
 
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
.rowone-cont
  height 2.06rem
  width 100%
  .titleone
    height .40rem
    text-align center
    line-height .40rem
    color #FC436D
    font-size .15rem
  .row-outthree
    width 100%
    height 1.66rem
    overflow hidden
    .row-inner
      height 1.66rem
      overflow-x scroll
      padding-left .10rem
      width: max-content
      .rowitem
        width 1.1rem
        height 1.66rem
        padding-right .1rem
        float left 
        img
           width .995rem
           height 1rem
           display block
          .text
              width 100%
              border-radius: 0 0 0.02rem 0.02rem;
              text-align: center;
              background: #FFF3F3;
              border: 0.01rem solid #ffbdbf;
              color: red;
              font-size: .1rem;
              overflow: hidden;
              height: .14rem;
              line-height: .14rem;
              .rowname
                 ellipsis(100%)
                 width 100%
                 height .16rem
                 font-size .12rem
                 padding 0.05rem 0 0
                 margin-bottom 0.05rem
                 overflow hidden
                 color #666
                .rowmoney
                   height .19rem
                   width 100%
            .more
           width 100%
           height .50rem
           text-align center
           line-height .70rem
           color #FC7D7D
        .moreicon
           height .50rem
           width 100%
           position relative
           i
             position absolute
             left 0
             right 0
             bottom 0
             top 0
             margin auto
             height .26rem
             width .26rem
             img
              height 100%
              width 100%
          



</style>




