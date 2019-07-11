<template>
    <div>
 <div class="list-item" @click="handleClick(goodsitem.id,goodsitem.d_title,goodsitem.pic,goodsitem.yuanjia,goodsitem.xiaoliang)">
    <div class="imgbox">
        <img :src="goodsitem.pic" alt="">
    </div>
    <div class="messagebox">
        <div class="d_title">{{goodsitem.d_title}}</div>
        <div class="moneymsg">
           <div class="tianmaomoney">天猫价￥{{goodsitem.yuanjia}}</div>
           <div class="all-sale">已售{{goodsitem.xiaoliang}}</div>
        </div>
        <div class="quanmsg">
            <div class="quanhou">券后价<span>4.8</span></div>
            <div class="quan">{{goodsitem.quan_jine}}元券</div>
        </div>
    </div>
    
</div>
</div>

</template>

<style lang="stylus" scoped>
.list-item
  width 50%
  height 2.83rem
  float left
  padding-top .1rem
  padding-left 0.05rem
  display flex
  flex-direction column
  justify-content space-between
  .imgbox
    width 1.28rem
    height 100%
    img 
      width 1.85rem
      height 1.85rem
  .messagebox
    height .96rem
    .d_title
      width 100%
      height .30rem
      font-size .14rem
      margin-right .10rem
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      text-indent 0.05rem
      letter-spacing 0.02rem
   .moneymsg
      width 100%
      height .30rem
      display flex
      flex-direction row
      justify-content space-between
      font-size .12rem
      color #aaa
      .tianmaomoney
        width 1rem
        height .21rem
      .all-sale
        height .21rem
        width .74rem
    .quanmsg
        width 100%
        height .24rem
        display flex
       
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
          line-height .22rem
          text-align center
          height .22rem
          background white
          border 1px solid #FC4D52
          color #FC4D52
        

</style>

<script>
export default {
    props:{
        goodsitem:Object
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

