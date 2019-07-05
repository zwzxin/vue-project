import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index'


import Home from '../pages/Home/Home'
import Pinkage from '../pages/Pinkage/Pinkage'
import Profile from '../pages/Profile/Profile'

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
    }
  
  
    
]

export default new VueRouter({
    routes
})