import Vue from 'vue'
import App from './App.vue'
import vuePrintDesigner from '../src'
import VueRouter from 'vue-router'
import Designer from './page/designer.vue'
import Index from './page/index.vue'
import { outStockTemp } from './data/defaultTemp'

// 默认设置一条模板示例
let tempList
try {
  tempList = JSON.parse(localStorage.getItem('tempList')) || []
} catch (error) {
  tempList = []
}

if (tempList.length == 0) {
  localStorage.setItem('tempList', outStockTemp)
}



Vue.use(VueRouter)
Vue.use(vuePrintDesigner)
const routes = [
  { path: '/', component: Index },
  { path: '/designer', component: Designer }
]
const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
