<template>
<div>
 <div class="list-item" @click="handleClick(item.id,item.d_title,item.pic,item.yuanjia,item.xiaoliang)">
    <div class="imgbox">
        <img :src="item.pic" alt="">
    </div>
    <div class="messagebox">
        <div class="d_title">{{item.d_title}}</div>
        <div class="moneymsg">
           <div class="tianmaomoney">天猫价￥{{item.yuanjia}}</div>
           <div class="all-sale">已售{{item.xiaoliang}}</div>
        </div>
        <div class="quanmsg">
            <div class="quanhou">券后价<span>4.8</span></div>
            <div class="quan">{{item.quan_jine}}元券</div>
        </div>
    </div>
    
</div>
</div>

    
</template>

<script>
export default {
    props:{
        item:Object
    },
    methods:{
      handleClick(id,d_title,pic,yuanjia,xiaoliang){
        this.$router.push({
          name:'detail',
          params:{
            id,
            d_title,
            pic,
            yuanjia,
            xiaoliang
          }
        })
      }
    }
}
</script>


<style lang="stylus" scoped>
.list-item
  width 100%
  height 1.36rem
  padding-top .1rem
  padding-left .1rem
  display flex
  flex-direction row
  justify-content space-between
  .imgbox
    width 1.28rem
    height 100%
    img 
      width 1.26rem
      height 1.26rem
  .messagebox
    
    height 100%
    
    .d_title
      width 2.08rem
      height .40rem
      font-size .14rem
      margin-bottom .12rem
      margin-right .10rem
   .moneymsg
      width 2.08rem
      height .30rem
      padding-top .20rem
      padding-right .10rem
      display flex
      flex-direction row
      justify-content space-between
      font-size .12rem
      color #aaa
      .tianmaomoney
        width 1.5rem
        height .21rem
      .all-sale
        height .21rem
        width .64rem
    .quanmsg
        width 2.08rem
        height .24rem
        display flex
        padding-top .10rem
        flex-direction row
        justify-content space-between
        .quanhou
          width .70rem
          height 100%
          color #FC4D52
          span
            font-size .18rem
            padding-left 0.02rem
        .quan
          width .70rem
          line-height 140%
          text-align center
          height 140%
          background #FC4D52
          color white
        







</style>


