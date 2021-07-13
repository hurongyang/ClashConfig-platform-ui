import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局样式表
import './views/css/global.css'

import axios from 'axios'
// 设置 axios baseURL
axios.defaults.baseURL = 'http://localhost:9000/api'
// axios 请求拦截器
axios.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/json'
  }
  return config
})

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
// axios 挂载到 Vue 全局属性上
app.config.globalProperties.$http = axios
