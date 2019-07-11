<template>
<div class="home-outcont">
   <div class="home-innercont">
    
        <div class="swiper">
          <swiper :options="swiperOption" ref="mySwiper" class="swiper-inner" >
   
    <swiper-slide>
      <img src="https://img.alicdn.com/imgextra/i3/797391738/O1CN01fNwPBB1Oi2u337Enz_!!797391738.png_430x430q90.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="https://img.alicdn.com/imgextra/i4/797391738/O1CN01lFgcQ11Oi2u2jrW0X_!!797391738.png_430x430q90.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="https://img.alicdn.com/imgextra/i3/797391738/O1CN01PdtTbu1Oi2u2jqF1y_!!797391738.png_430x430q90.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="https://img.alicdn.com/imgextra/i4/797391738/O1CN017cxuUC1Oi2tpQXAM3_!!797391738.gif_430x430q90.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="https://img.alicdn.com/imgextra/i2/797391738/O1CN01jHyMqr1Oi2tnwQ1ng_!!797391738.gif_430x430q90.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="https://img.alicdn.com/imgextra/i2/797391738/O1CN01VYpDHs1Oi2u3ndCo1_!!797391738.png_430x430q90.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="https://img.alicdn.com/imgextra/i2/797391738/O1CN01WN2Ade1Oi2tTs3QYI_!!797391738.png_430x430q90.jpg" alt="">
    </swiper-slide>

    <div class="swiper-pagination"  slot="pagination"></div>
    
   
  </swiper>
        </div>
         <div class="miaosha-brand">
           <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN018T7S7S2JJhx0tTGNe_!!2053469401.gif_430x430q90.jpg" alt="">
         </div>
      <div class="home-icons">
      <router-link to="/goodslistone" tag="li">
       <img src="https://m.huanle800.com/data/upload/waplink/1812/14/5c13a39ee8296.png">
       <b>疯狂抢</b>
      </router-link>
      <router-link to="/goodslisttwo" tag="li">
       <img src="https://m.huanle800.com/data/upload/waplink/1812/14/5c13a3a8d3461.png">
       <b>大领券</b>
      </router-link>
      <router-link to="/goodslistthree" tag="li">
       <img src="https://m.huanle800.com/data/upload/waplink/1812/14/5c13a3c7d16b2.png">
       <b>折上折</b>
     </router-link>
      <router-link to="/goodslistfour" tag="li">
       <img src="https://m.huanle800.com/data/upload/waplink/1812/14/5c13a3dee5e68.png">
       <b>品牌券</b>
     </router-link>
   </div>
   <div class="list-wrap">
     <listitem
       v-for="item in itemList"
       :key="item.id"
       :item = "item"
     ></listitem>
   </div>
   
</div>
</div>




</template>


<script>
import 'swiper/dist/css/swiper.css' 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import listitem from '../../components/listitem'
import http from '../../utils/http'
import BScroll from 'better-scroll'
import { Indicator, Toast } from 'mint-ui'


// import {swiper,swiperSlide}from 'vue-awesome-swiper'
export default {
  components: {
   listitem,
    swiper,
    swiperSlide
  },
  data(){
    return {     
        // swiper轮播的参数           
        swiperOption: { 
            pagination: {
             el: '.swiper-pagination',
            },   
        } ,  
         itemList: []   ,
         currentPage :3      
    } 
                       
  },
 
  async mounted(){
    
     Indicator.open({
      text: '加载中...',
      spinnerType: 'triple-bounce'
    })
    let result = await http.get({
      url:'/ajax/?m=ajax&a=ajaxnew&page=1'
      
    })
    this.itemList = result.data.data
   
    Indicator.close()


    this.$nextTick(()=>{
      let bScroll = new BScroll('.home-outcont',{
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







<style lang="stylus" >
@import '~@/assets/styles/border.styl'
.home-outcont
  flex 1
  width 100%
  overflow-y scroll
  .home-innercont
   
    width 100%
    overflow-y scroll 
    .swiper 
      height 1.56rem
      border(0 0 1px 0)
      
      .swiper-inner
        width 100%
        height 100%
        img 
          width 100%
          height 100%
    .miaosha-brand
      
      width 100%
      height 1.03rem
      img
        height 100%
        width 100%
    .home-icons
      height 1.02rem
      
      width 100%
      display flex
      li
         flex 1
         display flex
         flex-direction column
         justify-content center
         align-items center
         font-size .12rem
         img
           height .6rem
           width .6rem
         b
           font-weight normal
    




  

</style>