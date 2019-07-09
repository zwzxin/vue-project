import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index'


import Home from '../pages/Home/Home'
import Pinkage from '../pages/Pinkage/Pinkage'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Detail from '../pages/detail/Detail'

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
    }
  
  
    
]

export default new VueRouter({
    routes
})