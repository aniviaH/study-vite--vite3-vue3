import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 路由
import router from '@/router'
// vuex
import store from '@/store'

// 全局样式
import 'styles/index.scss'

// ElementPlus
import ElementPlus from 'plugins/element-plus'

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount('#app')
