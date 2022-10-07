import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
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
      component: () => import('@/layouts/index.vue'),
      children: [
        {
          // path: 'home', component: () => import('views/home.vue')
          path: '/', component: () => import('views/home.vue')
        },
        {
          path: 'about', component: () => import('views/about.vue')
        }
      ]
    },
  ]
})

export default router