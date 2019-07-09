<template>
    <div >
      <div class="title_ct">
            
      </div>
      <div class="main_ct">
            <div class="main">
                  <div class="table">
                        <ul class="tab_navs">
                              <li class="active">
                                  <i class="icon-back" @click="handleClick"></i>
                                   <span>登录</span>
                              </li>
                            
                        </ul>
                        <div class="tab_content">
                              <form class="box_active" id="form">
                                  <div class="us">
                                      <i class="iconfont">&#xe623;</i>
                                      <input name="txt" type="text" id="username" placeholder="用户名"></div>
                                   <div class="ps">
                                       <i class="iconfont">&#xe62b;</i>
                                       <input  name="psd" type="password"  id="password" placeholder="密码"></div>     
                                          
                                          
                                          <button class="btn">立即登录</button>
                                          <p class="regis">还没账号？立即<router-link to="/register" tag="a">注册</router-link></p>
                                          <div class="alert">
                                                <p></p>
                                          </div>
                
                              </form>
                              <form class="box" style="display:none;" >
                              <img src="http://img.shop.hisense.com/2018/11/09/40759e0a-87c2-43c4-87dd-17df128c452b.png">
                              </form>

                        </div>
                  </div>
            </div>
      </div>




         
    </div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl'
@font-face {
   font-family myFirstFont
   src: url('../../assets/iconfont/iconfont.ttf')
        url('../../aseets/iconfont/iconfont.woff') 
   font-weight bold
}

.active
  height 1rem
  width 100%
  text-align center
  line-height .45rem
  position relative
  i 
    display: block;
    position: absolute;
    top: 0.1rem;
    left: .2rem;
    width: .13rem;
    height: .13rem;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    -webkit-transform: rotate(45deg); 
    transform: rotate(45deg);
    span
      fonr-size .16rem
 #form
   width 100%
   padding-left .30rem
   padding-right .30rem
   height 2rem
   .us 
     padding-top .1rem
     padding-bottom .1rem
     height .45rem
     width 100%
     border-bottom 1px solid #eee
     padding-left 0.05rem
     .iconfont
       font-size: .19rem;
       color: black ;
       font-family: myFirstFont;

     #username
       padding-left .1rem
       border 0
       background white
    .ps
      padding-top .1rem
      padding-bottom .1rem
      height .45rem
      width 100%
      border-bottom 1px solid #eee
      padding-left 0.05rem
      .iconfont
        font-size: .19rem;
        color: black ;
        font-family: myFirstFont;
      #password
        border 0
        background white
    .btn
      width 100%
      height .30rem
      padding 0.07rem .28rem 0.07rem .28rem  
      border 0
      background #eee
    .regis
      margin-top .1rem
     

</style>


<script>
export default{
    methods: {
    handleClick() {
      this.$router.go(-1)
    }
  },
  mounted(){
      (function () {
    var form = document.getElementById("form");
    var login = document.querySelector(".btn");
    var userInput = document.getElementById("username");
    var pwdInput = document.getElementById("password");
    var cookie_username = getCookie("username");
    // var cookie_username = Encode(cookie_username);
    var cookie_password = getCookie("password");
    var alert = document.querySelector(".alert");
    var loading = false;
    if (cookie_username && cookie_password) {
        userInput.value = cookie_username;
        pwdInput.value = cookie_password;
        // console.log( pwdInput.value);
       
        
    }
    form.onsubmit = function (evt) {
        var e = evt || window.event;
        e.preventDefault();
    }
    login.onclick = function () {
        if(loading) return false;
        var username = userInput.value;
        var password = pwdInput.value;
        loading = true;
        login.disabled = "disabled";
        login.innerHTML= "loading";

        xhrPost("http://47.107.82.140/zhangwanwan/login.php", { username, password }).then(res => {
            console.log(res);
            loading= false;
            login.removeAttribute("disabled");
            login.innerHTML = "登录";
            res = JSON.parse(res);

            if(res.statu === "success"){
                showInfo("success","恭喜您登录成功！");
                setTimeout(() => {
                    location.href = "./index.html";
                }, 1000)
            }else if(res.statu === "error"){
                showInfo("error",res.errorType);
                
          }
          

        })
    }
    //提示的封装
    function showInfo(type,text){
        var children = alert.children[0];
        if(type === "success"){
            alert.className = "alert success";
        }else if(type === "error"){
            alert.className = "alert danger";
        }
        //显示内容
        children.innerHTML = text;
        alert.style.display = "block";

       
        setTimeout(() => {
            alert.style.display = "none";
        }, 3000)

  }
  
    function xhrPost(url, data) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var _data = [];
            for (let key in data) {
                _data.push(`${key}=${data[key]}`);
            }
            xhr.send(_data.join("&"));
            xhr.onload = function () {
                xhr.status === 200 ? resolve(xhr.responseText) : reject(xhr.status);
            }
        })
    }
    function getCookie(key) {
        var _cookie = document.cookie;
        // "key=value; key2=value; key3=value";
        var _cookie_item = _cookie.split("; ");
        var _key = [];
        var _value = _cookie_item.map(item => {
            var _temp = item.split("=");
            _key.push(_temp[0]);
            return _temp[1];
        })
        var index = _key.indexOf(key);
        if (index !== -1) {
            return _value[index];
        }
        return "";
    }
})()








  }
}
</script>
