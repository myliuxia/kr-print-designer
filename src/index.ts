import KrPrintDesigner from './App.vue'
import ElementUI from 'element-ui';
import widgets from '@/components/widgets/index'

import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/index.scss'
// LODOP打印服务
import './libs/lodop/LodopFuncs.js'
import lodop from './libs/lodop/index'
import vptd from './store/index'

const install = function (Vue:any, opts = {}) {
  Vue.use(ElementUI);
  Vue.use(widgets);
  Vue.component('kr-print-designer', KrPrintDesigner)
  Vue.prototype.$lodop = lodop
  Vue.prototype.$vptd = vptd

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {
  install,
  KrPrintDesigner
}
