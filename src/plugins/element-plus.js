// 全局引入ElementPlus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 按需加载
import { ElButton, ElInput } from "element-plus"
// import 'element-plus/theme-chalk/el-button.css' // 样式不生效，需要使用下面的引入路径方式
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/input/style/css'

export default function (app) {
  // 完整
  // app.use(ElementPlus)

  app
    .use(ElButton)
    .use(ElInput)
}