
<template>
<keep-alive>
    <div class="detail-container">
        <div class="detail-out">
            <div class="detail-inner">
                <div class="swiper-box">
                    <div class="icont">
                          <i class="icon-back" @click="handleClick"></i>
                    </div>

                  
                    <swiper :options="swiperOption" ref="mySwiper" class="swiper-inner" >
                           <swiper-slide>
                            <img :src="detailitem.pic" alt="">
                            </swiper-slide>
                            <swiper-slide>
                            <img :src="detailitem.pic" alt="">
                            </swiper-slide>
                            <swiper-slide>
                            <img :src="detailitem.pic" alt="">
                            </swiper-slide>
                           <div class="swiper-pagination"  slot="pagination"></div>
    
                       </swiper>
                </div>
                <div class="detail-title">
                    <div class="tianmao">天猫</div>
                    <div class="title">{{detailitem.d_title}}</div>
                </div>
                <div class="detailmoney">
                    <div class="quanhou">券后价￥<span>{{detailitem.yuanjia}}</span></div>
                    <div class="allsale">已售 {{detailitem.xiaoliang}} 件</div>
                </div>
                <div class="tuiguang">推广5元</div>
                <div class="youhuiquan">
                    <div class="left">
                        <div class="leftone">5元优惠券</div>
                        <div class="lefttwo">使用期限：2019.7.3-2019.7.5</div>

                    </div>
                </div>

            </div>
        </div>
        <div class="bottom">
            <li class="one">
                <img src="https://m.huanle800.com/static/wap/images/detail_tab_share.svg" alt="">
                <b>分享</b>
            </li>
             <li class="one">
                <img src="https://m.huanle800.com/static/wap/images/detail_tab_share.svg" alt="">
                <b>收藏</b>
            </li>
            <div class="two">
                <div class="a">口令购买</div>
                <div class="b">立即领券</div>


            </div>
             
        </div>

    </div>
    </keep-alive>
</template>



<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl'
.detail-container
  width 100%
  height 100%
  display flex
  flex-direction column
  .detail-out
    flex 1
    overflow hidden
    .detail-inner
      overflow-y scroll
      .swiper-box
        width 100%
        height 3.75rem
        position relative
        .icont
          z-index 99
          position absolute
          top .16rem
          left .2rem
          width .35rem
          height .35rem
          background rgba(0,0,0,.3)
          border-radius 50%
          i
            display block
            position absolute
            left 0 
            top 0
            right 0
            bottom 0
            margin auto
            width .16rem
            height .16rem
            border-bottom 2px solid #fff
            border-left 2px solid #fff
            -webkit-transform rotate(45deg)
            transform rotate(45deg)
        .swiper-inner
          height 100%
          width 100%
          img
            height 100%
            width 100%
      .detail-title
        height .45rem
        width 100%
        padding .14rem .14rem 0.08rem .14rem
        .tianmao
          padding 0 0.05rem 0 0.05rem
          border 1px solid #FC3F78
          color #FC3F78
          font-size .12rem
          margin-right 0.05rem
          float left 
        .title
          width 2.9rem
          height 100%
          float left 
          overflow hidden
          font-size .15rem
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
      .detailmoney
        height .28rem
        width 100%
        padding-left .14rem
        padding-right .14rem
        .quanhou
          float left
          height .28rem
          width 1.2rem
          font-size .12rem
          color #FC4D52
          span 
            font-size .21rem
            color #FC4D52
        .allsale
          font-size .12rem
          height .28rem
          line-height .28rem
          width .80rem
          float right
      .tuiguang
        height .33rem
        line-height .33rem
        text-align center
        width 1.2rem
        border-radius 5px
        padding-left .22rem
        padding-right .22rem
        margin-left .1rem
        background #2b9c31
        font-size .14rem
        color white
      .youhuiquan
        position relative
        height .89rem
        width 100%
        background url(https://m.huanle800.com/static/wap/images/goods_quan.png)
        background-size 100% .89rem
        .left
          position absolute
          width 2.5rem
          height .4rem
          left .3rem
          top .2rem
          text-align center
          color white
          p
           width 100%
           height .2rem
           line-height .2rem
          .leftone
            font-size .14rem
          .lefttwo
            font-size .12rem
  .bottom
    height .56rem
    width 100%
    display flex
    flex-direction row
    padding-right 0.05rem
    .one
      width .62rem
      height 100%
      display flex
      flex-direction column
      justify-content center
      align-items center
      img
        width .25rem
        height .25rem
      b 
        font-weight normal
    .two
      flex 1
      border 1px solid #FC3F78
      border-radius 3px
      display flex
      >div
        flex 1
        color #FE9F69
        font-size .14rem
        text-align center
        line-height .54rem
      .b
        background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%)
        color white




</style>


<script>
import 'swiper/dist/css/swiper.css' 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import http from '../../utils/http'
export default {
    components: {  
    swiper,
    swiperSlide
  },
    data(){
        return{
            swiperOption: { 
            pagination: {
             el: '.swiper-pagination',
            },   
          } ,  
            detailitem:[],
            currentpage:1
        }
  
    },
     created() {
    this.detailitem.id= this.$route.params.id
    this.detailitem.d_title = this.$route.params.d_title
    this.detailitem.yuanjia = this.$route.params.yuanjia
    this.detailitem.xiaoliang = this.$route.params.xiaoliang 
    this.detailitem.pic = this.$route.params.pic


  },
    activated() {
    this.detailitem.id= this.$route.params.id
    this.detailitem.d_title = this.$route.params.d_title
    this.detailitem.yuanjia = this.$route.params.yuanjia
    this.detailitem.xiaoliang = this.$route.params.xiaoliang 
    this.detailitem.pic = this.$route.params.pic

  },
    
    // async mounted(){
    //     // console.log(this.$route.params.id)
    //     let result = await http.get({
    //          url:'/ajax/?m=ajax&a=ajaxnew&page=1',
    //           params: {
    //           detailitemId: this.$route.params.id
    //     }
              
    //     })
    //     this.detailitem = result.detailitem
    //     // this.detailitem = result.data.data
    //     console.log(this.detailitem)
       
        
        
    // },

   methods: {
    handleClick() {
      this.$router.go(-1)
    }
  }
    
}
</script>


