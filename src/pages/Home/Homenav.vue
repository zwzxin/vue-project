<template>
<div class="home-search">
    <div class="input">输入您需要的商品名称</div>
</div>

</template>

<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl'
.home-search
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
    position absolute
    left 0.1rem
    top 0.08rem
    background white
    color #ccc
    font-size .14rem
    line-height .3rem


  
</style>