<template>
<div class="home-search">
    <router-link to="/search" tag="div" class="input">输入您需要的商品名称
    </router-link>
    <a href="https://m.huanle800.com/?m=user&a=down">
    <i class="iconfont" >&#xe646;</i>
    </a>
 </div>
  
</template>

<style lang="stylus" scoped>
@font-face {
   font-family mytwoFont
   src: url('../../assets/iconfont/iconfont.ttf')
        url('../../aseets/iconfont/iconfont.woff') 
   font-weight bold
}
@import '~@/assets/styles/border.styl'
.home-search
  position relative
  height .45rem
  width 100%
  border-bottom (0 0 1px 0)
  background:-webkit-linear-gradient(
   left,orange,#FA4DBE
  )
  .input
    border-radius .20rem
    height .3rem
    width 3rem
    padding-left 0.2rem
    position absolute
    left 0.1rem
    top 0.08rem
    background white
    color #ccc
    font-size .14rem
    line-height .3rem
  a
     position absolute
     top .1rem
     right 0.05rem
     width .29rem
     height .31rem
     display block
     display flex
     flex-direction column
  .iconfont 
    font-size .25rem
    color white
    font-family: mytwoFont;

     


  
</style>