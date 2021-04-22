import KrPrintDesigner from './App.vue'
import {
  Button,
  Scrollbar,
  Input,
  InputNumber,
  Switch,
  Select,
  RadioGroup,
  Radio,
  Popover,
  Checkbox,
  Row,
  Col,
  Collapse,
  CollapseItem,
  Form,
  FormItem,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/index.scss'
// LODOP打印服务
import './libs/lodop/LodopFuncs.js'
import lodop from './libs/lodop/index.js'
import vptd from './store/index'
import widgets from '@/components/widgets/index'

const install = function (Vue, opts = {}) {
  Vue.component(Button.name, Button)
  Vue.component(Scrollbar.name, Scrollbar)
  Vue.component(Input.name, Input)
  Vue.component(InputNumber.name, InputNumber)
  Vue.component(Switch.name, Switch)
  Vue.component(Select.name, Select)
  Vue.component(RadioGroup.name, RadioGroup)
  Vue.component(Radio.name, Radio)
  Vue.component(Popover.name, Popover)
  Vue.component(Checkbox.name, Checkbox)
  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)
  Vue.component(Collapse.name, Collapse)
  Vue.component(CollapseItem.name, CollapseItem)
  Vue.component(Form.name, Form)
  Vue.component(FormItem.name, FormItem)

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
