 <template>
    <div class="search">
        <div class="nav">
            <i class="icon-back" @click="handleClick"></i>
            <div class="ipt">
                <input type="text" placeholder="请输入关键字" v-model="keyword" @keyup ="get($event)" @keydown.down="selectDown()" @keydown.enter="search()">
                <div class="btn">搜索</div>
                <ul class="menu">
                  <li v-for="(value,index) in myData" :key="index" @click="liclick">{{value}}</li>
                </ul>
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
        .menu
            position absolute
            left -.4rem
            top .45rem
            width 2.6rem
            li
              width 100%
              height .36rem
              padding-top 0.09rem
              padding-bottom 0.09rem
              
        
          
       
         

</style>

<script>
import http from '../../utils/http'
export default {
    data(){
      return{
       myData:[],
       keyword:'短袖'
      }
    },
    methods: {
    handleClick() {
      this.$router.go(-1)
    },
   async get(e){
     
       if(e.keyCode == 38 || e.keyCode == 40){
         return;
       }
        let  result = await  http.get({
              url:'/ajax/?m=ajax&a=kwarr',
              params:{
                 kw:this.keyword
                }
               })
                console.log(this.keyword)
        //console.log(result)
       this.myData = result.data
       console.log(this.myData)
    },
    liclick(){
      var li = document.querySelector('li')
      for(var i = 0;i<li.length;i++){
        var val = li[i].innerHtml
        console.log(val)
      }

    },
   
    }
    }
    // async mounted(){
    //   console.log(this.txt)
    //   let result = await http.get({
    //     url:'/ajax/?m=ajax&a=kwarr',
    //     params:{
    //       kw:'this.txt'
    //     }
    //   })
    //   this.myData = result.data
    //   console.log(myData)
    // }
    //  get:function(event){
    //         if(event.keyCode==38 || event.keyCode==40){
    //           return;
    //         }
    //         if(event.keyCode==13){
    //           window.open("https://www.baidu.com/s?wd="+this.txt);
    //           this.txt="";
    //         }
    //         this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",{
    //           wd:this.txt
    //         },{
    //           jsonp:"cb"
    //         }).then(function(res){
    //           this.myData=res.data.s
    //         },function(res){
    //           alert(res.status);
    //         });
    //       },


</script>
