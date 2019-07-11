<template>
    <div class="mainxia">
      <div class="head">
         <i class="icon-back" @click="handleClick"></i>
        <span>分类</span>
      </div>
      <div class="home-outcont">
        
         <div class="wrapper" ref="wrapper">
          <ul class="content">
            <!-- 分类列表 -->
            <li v-for="(item,index) in detialList" :key="index" @click="listClick(index)" :class="index===active?'active':''">{{item.name}}</li>
          </ul>
        </div>
        <div class="detialList_box">
        <div class="detialList_box_innner">
            <!-- 分类详情列表 -->
          <ul class="detialList clearfix" v-for="(item,index) in detialList" v-show="index===active" :key="index">
            
            <li v-for="(item,index) in item.sub_class" :key="index">
             <a :href='"https://m.huanle800.com"+item.url'>
                <div class="imgbox">
                    <img :src="item.icon" alt="">
                    <p>{{item.name}}</p>
                </div>
              </a>
            </li>

          </ul>
          <div class="padding_color"></div>
        </div>
        
        </div>
        
    
      </div>
    </div>
  </template>
  <script>
  import http from '../../utils/http'
  import BScroll from 'better-scroll'
  import { Indicator, Toast } from 'mint-ui'
  export default {
    data() {
      return {
        detialList: [],
        active:0,
        detialtext:'保健品'
      };
    },
    methods: {
      listClick(index){ //显示隐藏分类详情
        this.active=index;
        this.detialtext=index;
      },
       handleClick() {
      this.$router.go(-1)
    }
    },
   
    async mounted() {
         Indicator.open({
         text: '加载中...',
         spinnerType: 'triple-bounce'
      })
      let result = await http.get({
          url:'/ajax/?m=ajax&a=type&type=1'
      })
      this.detialList = result.data
      Indicator.close()
      this.$nextTick(()=>{
          let a = new BScroll('.wrapper',{
              click:true,
              pullUpLoad:true
          })
           let b = new BScroll('.detialList_box',{
              click:true,
              pullUpLoad:true
          })
      })
    }
  };
  </script>
  <style lang="stylus" scoped>
  .mainxia {
     height 100%
     width 100%
     display flex
     flex-direction column
    .head {
      z-index: 999;
      top: 0;
      left: 0;
      height: 44px;
      width: 100%;
      line-height: 44px;
      text-align: center;
      color: #fff;
      background: -webkit-linear-gradient(left, #ffa500, #fa4dbe);
      i {
        display: block;
        position: absolute;
        top: .2rem;
        left: .3rem;
        width: 13px;
        height: 13px;
        border-bottom: 1px solid #fff;
        border-left: 1px solid #fff;
        -webkit-transform: rotate(45deg); 
        transform: rotate(45deg);
        padding-top 0
      }
    }
    .home-outcont {
      flex: 1;
      width :100%;
      overflow-y:hidden;
      display:flex;
      flex-direction: row;  
      .wrapper {
        overflow-y scroll
        width: 80px;
        height: 100%;
        background-color: #fff;
        .content {
          padding-bottom: 80px;
          
          li {
            height:45px;
            width: 80px;
            line-height: 40px;
            padding-left: 10px;
            text-align: left;
            border: 1px solid #efeff4;
            background-color: #efeff4;
            font-size:12px;
            text-align:center

          }
          .active {
            background-color: white;
            border-left: 2px solid #ff0000;
            color: #FC3F78
          }
        }
      }
      .detialList_box {
        height:100%;
        flex: 1;
        overflow-y:hidden;
        margin: 0 8px;
        background-color: #fff;
        .detialList_box_innner{
            width:100%;
            overflow hidden
        .detialList {
          padding-bottom: 20px;
          li {
            float: left;
            width: 33.3333333%;
            a{
                width:100%;
                height:100%;
                color:black;
                cursor:pointer;
            img {
              width: 100%;
            }
            p{
             background:white;
             text-align:center
            }
          }
          }
        }
        
        .padding_color {
          background-color: #efeff4;
          height: 100%;
        }
      }
    }
    }
  }
  </style>
  
