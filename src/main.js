import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 路由
import router from '@/router'
// vuex
import store from '@/store'

// 全局样式
import 'styles/index.scss'

// 全局引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount('#app')
