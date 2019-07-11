<template>
    <div class="index-container">
        <main >
       <router-view></router-view>
        </main>
        <nav>
            <ul>
                <router-link to="/Home" tag="li" active-class="active">
                <i class="iconfont">&#xe626;</i>
                <b>首页</b>
                </router-link>
                <router-link to="/Pinkage" tag="li" active-class="active">
                <i class="iconfont">&#xe6bf;</i>
                <b>9.9包邮</b>
                </router-link>
                <router-link to="/show" tag="li" active-class="active">
                <i class="iconfont">&#xe665;</i>
                <b>买家秀</b>
                </router-link>
                <router-link to="/Profile" tag="li" active-class="active">
                <i class="iconfont">&#xe8a0;</i>
                <b>我的</b>
                </router-link>
            </ul>
        </nav>


    </div>
   
</template>



<script>
export default{
data(){
     return {
    }
}
}

</script>


<style lang="stylus" scoped>
@font-face {
   font-family mytwoFont
   src: url('../assets/iconfont/iconfont.ttf')
        url('../aseets/iconfont/iconfont.woff') 
   font-weight bold
}

@import '~@/assets/styles/border.styl'
.index-container
  height 100%
  display flex
  flex-direction column
  main
    flex 1
    background #fff
    overflow hidden
  nav
    height .57rem
    border_1px(1px 0 0 0)
    background #fff
    ul
       display flex
       height 100%
       flex-direction row
       li
         flex 1
         display flex
         flex-direction column
         justify-content center
         align-items center
         font-size .12rem
         transform scale(1)
         .iconfont
           color: black ;
           font-size .32rem
           line-height .32rem
           font-family: mytwoFont;
          b

           font-weight normal
          &.active
            color rgb(253, 87, 92)
            i 
              color rgb(253, 87, 92)
        

          
       
      

  
</style>

