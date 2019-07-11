<template>
 <div class="pinkagenavheader">
     <div class="jiu">
           <i class="icon-back" @click="handleClick"></i>
         <img src="https://m.huanle800.com/static/wap/images/nine_title.svg" alt="">
     </div>

 </div>
</template>
<script>
export default {
    methods: {
    handleClick() {
      this.$router.go(-1)
    }
  },
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl'
.pinkagenavheader
  height .45rem
  width 100%
  border-bottom (0 0 1px 0)
  background:-webkit-linear-gradient(
    left,orange,#FA4DBE
  )
  padding 0.08rem 0.1rem 0.08rem 0.1rem
  .jiu
    width 3.55rem
    height .28rem
    position relative
    i
     
      display: block;
      position: absolute;
      top: 0.08rem;
      left: .2rem;
      width: 13px;
      height: 13px;
      border-bottom: 1px solid #fff;
      border-left: 1px solid #fff;
      -webkit-transform: rotate(45deg); 
      transform: rotate(45deg);
    img
      width .65rem
      height .26rem
      display inline-block
      position absolute
      left 0
      top 0
      right 0
      bottom 0
      margin auto
    
</style>
