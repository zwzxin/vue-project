import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index'


import Home from '../pages/Home/Home'
import Pinkage from '../pages/Pinkage/Pinkage'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Detail from '../pages/detail/Detail'
import Search from '../pages/Search/Search'
import Goodslistone from '../pages/Goodslist/Goodslistone'
import Goodslisttwo from '../pages/Goodslist/Goodslisttwo'
import Goodslistthree from '../pages/Goodslist/Goodslistthree'
import Goodslistfour from '../pages/Goodslist/Goodslistfour'
import Class from '../pages/Class/Class'

Vue.use(VueRouter)

let routes = [
    {
        path:'/',
        redirect:'/Home',
        component:Index,
        children:[
            {
                path:'/Home',
                name:'Home',
                component:Home
            },
            {
                path:'/Pinkage',
                name:'Pinkage',
                component:Pinkage
            },
            {
                path:'show',
                name:'show',
                component:Class

            },
            {
                path:'/Profile',
                name:'Profile',
                component:Profile
            }

        ]
    },
    {
        path:'/detail/:id',
        name:'detail',
        component:Detail
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/register',
        name:'register',
        component:Register
    },
    {
        path:'/search',
        name:'search',
        component:Search
    },
    {
        path:'/goodslistone',
        name :'goodslistone',
        component:Goodslistone
    },
    {
        path:'/goodslisttwo',
        name :'goodslisttwo',
        component:Goodslisttwo
    },
    {
        path:'/goodslistthree',
        name :'goodslistthree',
        component:Goodslistthree
    },
    {
        path:'/goodslistfour',
        name :'goodslistfour',
        component:Goodslistfour
    }
  
  
    
]

export default new VueRouter({
    routes
})