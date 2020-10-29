import Vue from 'vue'
import App from './App.vue'
import vuePrintDesigner from '../src'

Vue.use(vuePrintDesigner)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
})
