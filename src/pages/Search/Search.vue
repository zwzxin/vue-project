 <template>
    <div class="search">
        <div class="nav">
            <i class="icon-back" @click="handleClick"></i>
            <div class="ipt">
                <input type="text">
                <div class="btn">搜索</div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.search
  width 100%
  height 100%
  .nav
     width 100%
     height .9rem
     padding 0.08rem 0.1rem
     background:-webkit-linear-gradient(
       left,orange,#FA4DBE)
     position relative
     i  
        display: block;
        position: absolute;
        top: .47rem;
        left: .3rem;
        width: 14px;
        height: 14px;
        border-bottom: 1px solid #fff;
        border-left: 1px solid #fff;
        -webkit-transform: rotate(45deg); 
        transform: rotate(45deg);
      .ipt
        position absolute
        padding-left 0.05rem
        left .60rem
        top .40rem
        width 2.6rem
        height .28rem
        background white
        border-radius .3rem
        input 
          border 0
          position absolute
          left .2rem
          top 0.05rem

        .btn
            position absolute
            right 0
            top 0
            width .63rem
            height .28rem
            background #FFB925
            color white
            border-radius .3rem
            text-align center
            line-height .28rem

        
          
       
         

</style>

<script>
export default {
    methods: {
    handleClick() {
      this.$router.go(-1)
    }
  },
}
</script>
