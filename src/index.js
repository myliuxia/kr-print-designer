import KrPrintDesigner from './App.vue'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/index.scss'
// LODOP打印服务
import './libs/lodop/LodopFuncs.js'
import lodop from './libs/lodop/index.js'

const install = function (Vue, opts = {}) {
  Vue.use(ElementUI);
  Vue.component('kr-print-designer', KrPrintDesigner)
  Vue.prototype.$lodop = lodop

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {
  install,
  KrPrintDesigner
}
