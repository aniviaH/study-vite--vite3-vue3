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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router