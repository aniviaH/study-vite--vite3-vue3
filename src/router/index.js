import {createRouter, createWebHashHistory} from 'vue-router'

import Layout from '@/layouts/index.vue'

export const routes = [
  // {
    // path: '/', component: () => import('layouts/index.vue')
  // },
  // {
  //   path: '/home', component: () => import('views/home.vue')
  // },
  // {
  //   path: '/about', component: () => import('views/about.vue')
  // }

  {
    path: '/',
    name: 'layout',
    component: Layout,
    alwaysShow: true,
    meta: {title: '导航', icon: 'el-icon-setting'},
    children: [
      {
        // path: 'home', component: () => import('views/home.vue')
        path: '/', component: () => import('views/home.vue'),
        meta: {title: '首页', icon: 'el-icon-s-home'}
      },
      {
        path: 'about', component: () => import('views/about.vue'),
        meta: {title: '关于', icon: 'el-icon-s-home'}
      }
    ]
  },
  {
    path: '/users',
    component: Layout,
    meta: {
      title: '用户管理',
      icon: 'el-icon-user-solid',
    },
    redirect: '/users/list',
    children: [
      {
        path: 'list',
        component: () => import('views/users/list.vue'),
        meta: {
          title: '用户列表',
          icon: 'el-icon-document'
        }
      }, {
        path: 'create',
        component: () => import('views/users/create.vue'),
        hidden: true,
        meta: {
          title: '创建新用户',
          icon: 'el-icon-document',
          activeMenu: '/users/list'
        }
      }, {
        path: 'edit/:id(\\d+)',
        name: 'userEdit',
        component: () => import('views/users/edit.vue'),
        hidden: true,
        meta: {
          title: '编辑用户信息',
          activeMenu: '/users/list',
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router