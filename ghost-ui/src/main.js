import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局样式表
import './views/css/global.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000/api/v1'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
// axios 挂载到 Vue 全局属性上
app.config.globalProperties.$http = axios
