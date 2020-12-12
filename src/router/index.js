import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/common/Home.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/common/404.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/common/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
