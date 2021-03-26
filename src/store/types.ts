
import {TempItem,Temp} from '@/types/index' 
export interface State {
  zoom: number // 画布缩放百分比
  type: string // 选中元素类型
  index: number // 选中元素索引
  uuid: string|number|undefined // 选中元素uuid

  originX: number // 选中元件的横向初始值
  originY: number // 选中元件的纵向初始值
  startX: number // 鼠标摁下时的横坐标
  startY: number // 鼠标摁下时的纵坐标
  moving: boolean // 是否正在移动元件（参考线仅在移动元件时显示）

  activeElement: TempItem // 选中对象，要么是元件，要么是页面

  // 模板信息
  page:Temp 
  optionItems: TempItem[] // 可选项

  //模板参数
  tempId: string // 模板Id
  loading: boolean // 是否正在初始化中

  widgetSetting: Object // 模板组件默认属性
}