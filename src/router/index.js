import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/LogIn.vue'
import ClientLayout from '../views/Clientviews/ClientLayout.vue'
import TplInformation from '../views/Clientviews/TplInformation.vue'
import AddTpl from '../views/Clientviews/AddTpl.vue'

Vue.use(VueRouter)
const routes = [
  { path: '*', redirect: 'login' },
  {
    path: '/',
    name:'Login',
    component:Login
  },
  {
    path: '/Login',
    name:'Login',
    component:Login
  },
  {
    path: '/Client',
    name: 'Client',
    component:ClientLayout,
    meta: { requiresAuth: true },
    children: [
        {
          path:'/Client/ClientLayout',
          name:'ClientLayout',
          component:ClientLayout,
          meta: { requiresAuth: true } 
        },
        {
          path: '/Client/TplInformation',
          name:'TplInformation',
          component:TplInformation,
          meta: { requiresAuth: true } 
        },
        {
          path:'/Client/AddTpl',
          name:'AddTpl',
          component:AddTpl,
          meta: { requiresAuth: true } 
        }
        
    ]
}, 
    

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
