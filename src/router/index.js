import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/', component: () => import('views/home.vue')
    },
    {
      path: '/about', component: () => import('views/about.vue')
    }
  ]
})

export default router