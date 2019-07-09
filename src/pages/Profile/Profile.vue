<template>
<div class="mainxia">
  <div class="cent">
      <div class="col-mar-row-s">
          <div class="touxiang">
              <img src="https://m.huanle800.com/static/wap/images/user_info_tx.png" alt="">
          </div>
          <div class="zd">
              <!-- <div class="register">注册/</div>
              <div class="login">登录</div> -->
               <router-link to="/register" tag="div" class="register">注册/</router-link>
              <router-link to="/login" tag="div" class="login">登录</router-link>
          </div>
      </div>
  </div>
  <div class="liebiao">
      <div class="liebiao1">
          <img src="https://m.huanle800.com/static/wap/images/yaoqing.svg" alt="">
          <div class="select-name">邀请好友</div>
          <i></i>
      </div>
       <div class="liebiao1">
          <img src="https://m.huanle800.com/static/wap/images/wode_icon_like.svg" alt="">
          <div class="select-name">我的收藏</div>
          <i></i>
      </div>
       <div class="liebiao1">
          <img src="https://m.huanle800.com/static/wap/images/wode_icon_history.svg" alt="">
          <div class="select-name">浏览记录</div>
          <i></i>
      </div>
       <div class="liebiao1">
          <img src="https://m.huanle800.com/static/wap/images/help-s.svg" style="height:.24rem; width:.24rem;" alt="">
          <div class="select-name">常见问题</div>
          <i></i>
      </div>
       <div class="liebiao1">
          <img src="https://m.huanle800.com/static/wap/images/FAQ.svg" style="height:.24rem; width:.24rem;" alt="">
          <div class="select-name">返利帮助</div>
          <i></i>
      </div>
       <div class="liebiao1">
          <img src="https://m.huanle800.com/static/wap/images/wode_icon_help.svg" alt="">
          <div class="select-name">领券帮助</div>
          <i></i>
      </div>
        <div class="liebiao1">
          <img src="https://m.huanle800.com/static/wap/images/wode_icon_servicer.svg" alt="">
          <div class="select-name">联系客服</div>
          <i></i>
      </div>
       <div class="liebiao1">
          <img src="https://m.huanle800.com/static/wap/images/wode_setting_download.svg" alt="">
          <div class="select-name">下载APP</div>
          <i></i>
      </div>

  </div>
</div>
  
    
</template>

<style lang="stylus" scoped>
.mainxia
  height 100%
  width 100%
  display flex
  flex-direction column
.cent
  height 1.8rem
  width 100%
  padding-left .14rem
  padding-right .14rem
  background:-webkit-linear-gradient(
   left,orange,#FA4DBE
  )
  .col-mar-row-s
      padding-top .45rem
      padding-bottom .45rem
      height 1.76rem
      .touxiang
        width .83rem
        height .83rem
        margin-right .14rem
        float left 
        img 
          height 100%
          width 100%
      .zd
         height .83rem
         width 1rem
         float left
         font-size .18rem
         color white
         line-height .83rem
         
         .register
           width 50%
           height 100%
           float left 
           text-align center
           
         .login
           width 50%
           height 100%
           float left 
           text-align center
.liebiao
  flex 1
  .liebiao1
      width 100%
      height .54rem
      padding-top .14rem
      padding-bottom .14rem    
      margin 0
      padding-left .2rem 
      position relative
      img
        float left
      .select-name
        height .32rem
        line-height .32rem
        padding-left 0.05rem
        width 1rem
        float left 
        font-size .14rem
       i 
         display: block;
         position: absolute;
         top: .25rem;
         right : .2rem;
         width: .10rem;
         height: .10rem;
         border-top: 0.01rem solid black ;
         border-right: 0.01rem solid black ;
         -webkit-transform: rotate(45deg); 
         transform: rotate(45deg);

      


</style>

