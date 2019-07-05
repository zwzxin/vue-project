<template>
    <div class="index-container">
        <main >
       <router-view></router-view>
        </main>
        <nav>
            <ul>
                <router-link to="/Home" tag="li" class="active">
                <i class="iconfont">
                    <img src="https://img.alicdn.com/imgextra/i4/2053469401/TB24KbjnZj_B1NjSZFHXXaDWpXa-2053469401.png">
                </i>
                <b>首页</b>
                </router-link>
                <router-link to="/Pinkage" tag="li" class="active">
                <i class="iconfont">
                    <img src="https://img.alicdn.com/imgextra/i4/2053469401/TB24KbjnZj_B1NjSZFHXXaDWpXa-2053469401.png">
                </i>
                <b>9.9包邮</b>
                </router-link>
                <router-link to="/category" tag="li" class="active">
                <i class="iconfont">
                    <img src="https://img.alicdn.com/imgextra/i4/2053469401/TB24KbjnZj_B1NjSZFHXXaDWpXa-2053469401.png">
                </i>
                <b>分类</b>
                </router-link>
                <router-link to="/Profile" tag="li" class="active">
                <i class="iconfont">
                    <img src="https://img.alicdn.com/imgextra/i4/2053469401/TB24KbjnZj_B1NjSZFHXXaDWpXa-2053469401.png">
                </i>
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
         i
           width .32rem
           height  .32rem
           text-align center
           img
             width 100%
             height 100%
         b
           font-weight normal
        &.active b
          color rgb(253, 87, 92)

          
       
      

  
</style>

