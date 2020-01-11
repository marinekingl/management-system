import Vue from 'vue'
import VueRouter from 'vue-router'
import vuex from 'vuex'

const login = () => import('@/views/login/login.vue')
const home = () => import('@/views/home/home.vue')
const user = () => import('@/views/home/sidebaritem/user.vue')
const purview = () => import('@/views/home/sidebaritem/purview.vue')
const Order = () => import('@/views/home/sidebaritem/Order.vue')
const goods = () => import('@/views/home/sidebaritem/goods.vue')

Vue.use(vuex)
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [{
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/home',
    component: home,
    children: [{
        path: '/home/user',
        component: user
      },
      {
        path: '/home/purview',
        component: purview
      },
      {
        path:'/home/Order',
        component:Order
      },
      {
        path:'goods',
        component:goods
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router