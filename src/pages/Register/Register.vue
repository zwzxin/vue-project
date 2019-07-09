<template>
    <div>
        <!-- 注册页面头部 start -->
    <div class="register-header">
        <div class="wrap">
            <div class="title">
                <span class="icon-back" @click="handleClick"></span>
                注册</div>
            <div class="register-header-right">
                <span>您好，欢迎光临
                    <router-link to="/login" tag="a" >请登录</router-link>
                </span>
                
            </div>
        </div>
    </div>
    <!-- 注册页面头部 end -->
    <!-- 注册页面主体 start -->
    <div class="register-container-box">
        <div class="register-container">
            <div class="alert tip" role="alert">
                <a href="javascript:void(0)" class="alert-link"></a>
            </div>
            
            <div class="register-form" id="form">
                <ul>
                    <li>
                        <div class="same-item">
                             <i class="iconfont">&#xe623;</i>
                            <span>用户名</span>
                            <input type="text" name="username" id="username">
                        </div>
                        <div class="tip" id="tipsuser">
                            <div class="tip-rel">
                                <i></i>
                                <div class="tip-words" id="user-words">4-20位字符，可由中文、英文、数字或符号"_"组成</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="same-item">
                            <i class="iconfont">&#xe60f;</i>
                            <span>手机号</span>
                            <input type="text" name="phone" id="phone">
                        </div>
                        <div class="tip" id="phonetip">
                            <div class="tip-rel">
                                <!-- <i></i> -->
                                <div class="tip-words">请填写正确的手机号码，以便 接收订单通知，找回密码等</div>
                            </div>
                        </div>
                    </li>
           
                    <li>
                        <div class="same-item">
                            <i class="iconfont">&#xe62c;</i>
                            <span>设置密码</span>
                            <input type="password" name="password" id="password">
                        </div>
                        <div class="tip" id="tip-pass">
                            <div class="tip-rel">
                                <!-- <i id="iicon"></i> -->
                                <div class="tip-words" id="pass-words">6-20个大小写英文字母、符号或数字组合</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="same-item">
                             <i class="iconfont">&#xe62c;</i>
                            <span>确认密码</span>
                            
                            <input type="password" id="define">
                        </div>
                        <div class="tip" id="definePass">
                            <div class="tip-rel">
                                <!-- <i id="iicon"></i> -->
                                <div class="tip-words" id="define-words">两次输入密码密码不一致</div>
                            </div>
                        </div>
                    </li>
                    <li class="ul-lastLi">
                        <div class="register-agree">
                           
                            <button class="agreeRegister" id="register">注册</button>
                            <!-- <router-link to="./login" class="login">登录</router-link> -->
                        </div>
                    </li>
                </ul>
            </div>
        </div>
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
    mounted(){
        var user = document.getElementById("username"),
    usertip = document.getElementById("tipsuser"),
    userwords = document.getElementById("user-words"),


    pass = document.getElementById("password"),
    passtip = document.getElementById("tip-pass"),
    passwords = document.getElementById("pass-words"),

    // iicon = document.getElementById("iicon"),
    define=document.getElementById("define"),
    defpass=document.getElementById("definePass"),
    defwords=document.getElementById("define-words"),
    
    phoneInput=document.getElementById("phone"),
    phonetip=document.getElementById("phonetip");


function sucess(tipEle) {
    tipEle.style.display = "none";
}
function error(tip, tipEle, tipwords) {
    tipEle.style.dispaly = "block";
    tipwords.innerHTML = tip;
}

var validates = {
    "preNumber": /^\d+$/,
    "minLength4": /^.{0,4}$/,
    "wanzheng": /[a-z0-9\u2E80-\u9FFF-_{4,20}]/i,
    "hasNumber": /\d/,
    "hasLetter": /[a-zA-Z]/,
    "minLength6": /^.{0,6}$/,
    "teshu": /[\~\!\@\#\$\%\^\&\*]/,
    "phone":/^1[3|4|5|7|8]\d{9}$/,
}
function validate(str, reg) {
    return reg.test(str)
}
//验证用户名
function validateUser() {
    var userValue = user.value;
    if (validate(userValue, validates.minLength4)) {
        return error("长度不能少于4个字符", usertip, userwords)
    }
    if (validate(userValue, validates.preNumber)) {
        return error("用户名不能为纯数字", usertip, userwords)
    }
    if (validate(userValue, validates.wanzheng)) {
        return sucess(usertip)
    }
}
//验证电话号码
function validatePhone(){
    var phoneValue=phoneInput.value;
    //电话号码符合规范
    if (validate(phoneValue, validates.phone)) {
        phonetip.style.display="none";
    }else{
        phonetip.style.display="block";

    }
}
//验证密码的格式以及密码强度
function validatePass() {
    var passValue = pass.value;
    var strength = 0;
    if (validate(passValue, validates.minLength6)) {
        return error("密码强度不能少于6位", passtip, passwords)
    }
    if (validate(passValue, validates.hasNumber)) {
        strength++
    }
    if (validate(passValue, validates.hasLetter)) {
        strength++
    }
    if (validate(passValue, validates.teshu)) {
        strength++
    }
    switch (strength) {
        case 1: error("密码强度过低,建议升级", passtip, passwords); break;
        case 2: sucess(passtip); break;
    }
}
//确认密码的验证
function validateDefinePass(){
    var defVale=define.value;
    var passValue=pass.value;
    if(!(defVale===passValue)){
        defpass.style.display="block";
        error("两次输入密码不匹配，请重新输入！",defpass,defwords)
    }else{
        sucess(defpass);
    }
}
//  phone.addEventListener("blur",validatePhone);
 phoneInput.addEventListener("blur",validatePhone);



/**register.js */

; (function () {

    var form = document.getElementById("form");
    var register = document.getElementById("register");
    var userInput = document.getElementById("username");
    var pwdInput = document.getElementById("password");
    var phInput = document.getElementById("phone");
    // var valiInput = document.getElementById("validate");
    var defineInput = document.getElementById("define");
    var loading = false;
    var alert = document.querySelector(".alert");

    //input框输入时出现提示的功能
    function changeFocus(args) {
        for(let i=0,ele;ele=args[i++];){
            ele.addEventListener("focus", () => {
                ele.previousElementSibling.style.left = "250px";
                //就是提示框
                ele.parentElement.nextElementSibling.style.display = "block";
            })
        }
    }
    //input框失焦时提示消失的功能
    function changeBlur(args) {
        for(let i=0,ele;ele=args[i++];){
            ele.addEventListener("blur", () => {
                //输入框失去焦点以后会去验证用户名和密码的强度
                validateUser();
                validatePass();
            })
        }
    }
    var arr = [];
    arr.push(userInput,pwdInput,phInput);
    changeBlur(arr);
    changeFocus(arr);

    // valiInput.addEventListener("focus", () => {
    //     valiInput.previousElementSibling.style.left = "250px";
    //     valiInput.parentElement.nextElementSibling.nextElementSibling.style.display = "block";
    // })
    //确认密码获得焦点
    defineInput.addEventListener("focus", () => {
        defineInput.previousElementSibling.style.left = "250px";
    })
    //确认密码失去焦点
    defineInput.addEventListener("blur",()=>{
        validateDefinePass();
    })
    form.onsubmit = function (evt) {
        var e = evt || window.event;
        e.preventDefault();
    }
    register.onclick = function () {
        var username_zww = userInput.value;
        var password_zww = pwdInput.value;
        var phone_zww = phInput.value;
        loading = true;
        register.disabled = "disabled";
        register.innerHTML = "loading...";


        xhrPost("http://47.107.82.140/zhangwanwan/register.php", { username_zww, password_zww,phone_zww }).then(res => {
            console.log(res);
            loading = false;
            register.removeAttribute("disabled");
            register.innerHTML = "注册";

            //注册信息处理
            res = JSON.parse(res);
            console.log(res);
            if (res.statu === "success") {
                  showInfo("success", "注册成功，请登录");
                setTimeout(() => {
                    cookie("password", res.password, {
                        path: "/"
                    });
                    cookie("username", username_zww, {
                        path: "/"
                    });
                //    this.$router.push({
				// 	path: '/login'
				// });

                }, 3000)
            } else if(res.statu === "error"){
                showInfo("error" , res.errorType)
            }
        })
    }
    function showInfo(type, text) {
        var children = alert.children[0];
        if (type === "success") {
            alert.className = "alert-success"
        } else if (type === "error") {
            alert.className = "alert-danger"
        }
        children.innerHTML = text;
        alert.style.display = "block";

        setTimeout(() => {
            alert.style.display = "none";
        }, 3000)
    }

    //post请求的封装
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
    //coolie的封装
    function cookie(key, value, options) {
        var res = "";
        res += key + "=" + encodeURI(value);
        // 有没有过期时间;
        if (typeof options.expires === "number") {
            var d = new Date()
            d.setDate(d.getDate() + options.expires);
            res += ";expires=" + d;
        }
        res += options.path ? ";path=" + options.path : "";
        res += options.domain ? ";domain=" + options.domain : "";

        document.cookie = res;
    }

})();
    }
}
</script>

<style lang="stylus" scoped>
@font-face {
   font-family myFirstFont
   src: url('../../assets/iconfont/iconfont.ttf')
        url('../../aseets/iconfont/iconfont.woff') 
   font-weight bold
}

body
    background: white;
    height: 700px;;

    font: 12px Arial,Helvetica,sans-serif;
    color: #333;
    width:100%;
    min-width: 1070px;

.register-header
    visibility: visible;
    display: flex;
    padding:16px;
    border:1px solid #e1e1e1;
   
    .wrap
        display: block;
        font-size: 20px;
        width:1200px;
        margin:0 auto;
        .title
          font-size .16rem
          margin-right .40rem
          text-align center
          span
                display: block;
                display: block;
                position: absolute;
                top: 0.2rem;
                left: .3rem;
                width: 13px;
                height: 13px;
                border-bottom: 2px solid black;
                border-left: 2px solid black;
                -webkit-transform: rotate(45deg); 
                transform: rotate(45deg);
        .logo
            display:block;
            float:left;
            height:48px;
            width:54px;
        
        .register-header-right
            float: right;
            line-height: 18px;
            font-family: "SimSun";
            color: #999;
            span
                line-height: 18px;
                font-size: 12px;
                a
                    color:#0066cc;
                
            
            .help
                float:right;
                margin-left:25px;
                padding:0 6px;
                a
                    display:block;
                    font-size: 12px;
                    line-height: 18px;
                    b
                        display:block;
                        width:16px;
                        height:18px;
                        font-size: 14px;
                        color:#ccc;
                        float: left;
                        text-align: center;
                        margin-right: 4px;
                    
                    .xiala
                        display: block;
                        float: right;
                    
.register-container-box
    position: relative;
    border-bottom: 1px solid #f4f4f4;
    background: white;
    padding: 30px 0 40px;
    height: 600px;
    .register-container
        width:330px;
        height:463px;
        margin:0 auto;
        background: white;
        .alert tip
            display: none;
            width: 500px;
            height: 200px;

        
        .alert alert-success
            background: #00cc00;
        
        .alert alert-danger
            background: red;
        
        h4
            display: block;
            width:100%;
            height:50px;
            line-height: 50px;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
        
        .register-form
            width:100%;
            height:403px;
            ul
                width:100%;
                height:100%;
                li
                    background: white;
                    margin-top:10px;
                    width:250px;
                    height:52px;
                    position: relative;
                    .same-item
                        width:220px;
                        height:40px;
                        border:1px solid #dedede;
                        border-radius: 3px;
                        position: relative;
                        padding-top 0.05rem
                        padding-bottom 0.05rem
                        line-height 40px
                        .iconfont
                           font-size: .19rem;
                           color: black ;
                           font-family: myFirstFont;

                        span
                            display: block;
                            width:60px;
                            height:50px;
                            line-height: 50px;
                            font-size: 14px;
                            color:#666;
                            position: absolute;
                            left:20px;
                            top:0;
                        
                        input
                            position absolute
                            left 0
                            top -0.05rem
                          
                            z-index: 2;
                            width: 250px;
                            height: 20px;
                            margin-top: 15px;
                            padding: 0px 20px;
                            background: 0;
                            border: 0;
                            outline: 0;
                            font-size: 14px;
                            line-height: 20px;
                            color: #666;
                        
                    
                    .tip
                        position: absolute;
                        left: 0;
                        top: 29px;
                        font-size: 12px;
                        color: #666;
                        display: none;
                        .tip-rel
                            background:white;
                            padding:10px;
                            .tip-words
                                max-width: 300px;
                                line-height: 20px;
                                color: red;
                                
                    
                    .validate
                        width:192px;
                        float: left;
                        input
                            width:160px;
                        
                    
                    .getValidate
                        float: left;
                        width:126px;
                        height:50px;
                        margin-left: 10px;
                        text-align: center;
                        background-color: #57565f;
                        line-height: 52px;
                        color: #fff;
                        cursor: pointer;
                        border-radius: 2px;
                        font-size: 14px;
                    
                
                .ul-lastLi
                    height:93px;
                    .register-agree
                        border:0;
                        height: 35px;
                        line-height: 35px;
                        color:#666;
                        text-indent: 1em;
                        .service
                            color:#06c;
                            font-size: 12px;
                        
                        .agreeRegister
                            display: block;
                            border:none;
                            width: 330px;
                            height: 42px;
                            margin-top: 6px;
                            background-color:#eee;
                            font-size: 16px;
                            line-height: 52px;
                            color: black;
                            text-align: center;
                            border-radius: 2px;
                        


.register-main
    width:100%;
    background:#fff;
    .register-main-top
        width:100%;
        height:30px;
        h1
            display: block;
            float: left;
            font-size: 14px;
            color:#666;
            font-weight: bold;
        
        a
            display: block;
            float:right;
            color:#0066cc;
        
    
    .register-main-form
        .form-top,.form-middle
            width:294px;
            height:24px;
            padding:14px 18px;
            margin-bottom: 10px;
            background: #fff;
            border:1px solid #dedede;
            line-height: 24px;
            label
                display: block;
                float: left;
                font-size: 18px;
                width:42px;
                color:#666;
            
            input
                display: block;
                float: left;
                border:none;
                height:24px;
                line-height: 24px;
                width:230px;
                padding-left:3px;
                color:#ccc;
                font-size: 14px;
            
        
    
    .form-bottom
        width:100%;
        height:24px;
        line-height: 24px;
        color:#999;
        margin-bottom:10px;
        input
            display: block;
            margin-top:5px;
            float: left;
        
        a
            display: block;
            float: right;
            color:#999;
        
    
    button
        width:100%;
        height:52px;
        border-radius: 3px;
        background:#10A8ff;
        font-size: 16px;
        color:#fff;
        cursor: pointer;
        text-shadow: 1px 1px 1px #10a8ff;
        line-height: 52px;
      
        border:0 none;
    
    p
        display: block;
        padding:15px 0;
        color:#666;
    
    .register-main-bottom
        width:100%;
        height:35px;
        ul
            width:230px;
            height:35px;
            float: left;
            li
                width:32px;
                height:35px;
                float: left;
                margin-right:20px;
                a
                    display: inline-block;
                    font-size: 32px;
                
                .qq
                    color:#10A8ff;
                
                .jd
                    color:#c81825;
                
                .weixin
                    color:#00cc00;
                
                .sina
                    color:#DD2E37;
                
        
        .moreWeb
            display: block;
            height:35px;
            width:97px;
            float:right;
            line-height: 35px;
            color:#999;
            b
                display: inline-block;
                width: 20px;
                height: 35px;
                vertical-align: middle;
                font-size: 12px;
                margin-left:5px;
                line-height: 35px;
            
.register-bottoms
    width:980px;
    margin:20px auto 0;
    text-align: center;
    a
        margin:0 8px;
        color:#333;
    
    a:hover
        color:#c00;
    
    p
        margin-top:10px;
        color:#333;
    

</style>


