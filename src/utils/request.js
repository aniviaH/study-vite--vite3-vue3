import axios from 'axios'
import {ElMessage, ElMessageBox  } from 'element-plus'
import store from '@/store'

// 创建axios实例
const service = axios.create({
  // 在请求地址前面加上baseURL
  baseURL: import.meta.env.VITE_BASE_URL,
  // 当发送跨域请求是携带cookie
  // withCredentials: true,
  timeout: 5000,
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // 指定请求令牌
    // if (store.getters.token) {
    //   // 自定义令牌的字段名为X-Token,根据自己后台设置
    //   config.headers['X-Token'] = store.getters.token
    //   return config
    // }
    
    return config
  },
  (error) => {
    // 请求错误的统一处理
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  /* 通过判断状态码统一处理响应，根据情况修改，同时也可以通过HTTP状态码判断请求结果 */
  (response) => {
    const res = response.data

    // 如果状态码不是20000则认为有错误
    if (res.code !== 20000) {
      ElMessage.error({
        message: res.message || 'Error',
        duration: 5 * 1000
      })

      // 50008：非法令牌；50012：其它客户端已登录； 50014：令牌过期
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 重新登录
        ElMessageBox.confirm('您已登出，请重新登录', '确认', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      ElMessage({
        type: 'success',
        message: res.message || 'Success',
        duration: 5 * 1000
      })
      return Promise.resolve(res.data)
    }
  },
  (error) => {
    console.log('err', error) // for debug

    ElMessage({
      // message: error.message,
      message: `${error.response.status} ${error.response.statusText}`,
      type: 'error',
      duration: 5 * 1000
    })
  }
)

export default service