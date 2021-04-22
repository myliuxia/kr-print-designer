
import { getDefaultProps } from '../libs/props.js'
import widgets from '@/components/widgets/index'
export default {
  zoom: 100, // 画布缩放百分比
  type: 'page', // 选中元素类型
  index: -1, // 选中元素索引
  uuid: -1, // 选中元素uuid

  originX: 0, // 选中元件的横向初始值
  originY: 0, // 选中元件的纵向初始值
  startX: 0, // 鼠标摁下时的横坐标
  startY: 0, // 鼠标摁下时的纵坐标
  moving: false, // 是否正在移动元件（参考线仅在移动元件时显示）

  activeElement: getDefaultProps(), // 选中对象，要么是元件，要么是页面

  // 模板信息
  page: {
    title: 'demo',
    width: 750,
    height: 550,
    pageWidth: 750,
    pageHeight: 550,
    tempItems: [], // 模板已选项
  },
  optionItems: [], // 可选项

  //模板参数
  tempId: '', // 模板Id
  loading: false, // 是否正在初始化中

  widgetSetting: widgets.getWidgetsSetting(), // 模板组件默认属性
}
