import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/common/Home'
import Intro from '@/views/common/Intro'
import User from '@/views/SysMng/User'
import Dept from '@/views/SysMng/Dept'
import Role from '@/views/SysMng/Role'
import Menu from '@/views/SysMng/Menu'
import Log from '@/views/SysMng/Log'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home,
    children: [
      { path: '', component: Intro, name: '系统介绍' },
      { path: '/user', component: User, name: '用户管理' },
      { path: '/dept', component: Dept, name: '机构管理' },
      { path: '/role', component: Role, name: '角色管理' },
      { path: '/menu', component: Menu, name: '菜单管理' },
      { path: '/log', component: Log, name: '日志管理' }
    ]
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

// 添加导航守卫
router.beforeEach((to, from, next) => {
  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  let user = sessionStorage.getItem('user')
  if (to.path === '/login') {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    if(user) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (!user) {
      // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
      next({ path: '/login' })
    } else {
      next()
    }
  }
})

export default router
