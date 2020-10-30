import Vue from 'vue'
import App from './App.vue'
import vuePrintDesigner from '../src'

Vue.use(vuePrintDesigner)

new Vue({
  render: h => h(App)
}).$mount('#app')
