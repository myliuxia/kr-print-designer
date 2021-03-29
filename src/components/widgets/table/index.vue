<template>
  <div
    class="widgets"
    :style="{
      left: val.left + 'px' ,
      top:  val.top + 'px',
      width: val.width + 'px',
      height: val.height + 'px',
      textAlign: val.style.Alignment,
      fontSize: val.style.FontSize + 'pt',
      color: val.style.FontColor,
    }"
    style="position:absolute;overflow:hidden"
  >
    <table
      border="1"
      width="100%"
      cellspacing="0"
      cellpadding="2"
      style="border-collapse:collapse;font-size:12px;"
      bordercolor="#000000"
    >
      <tr>
        <th
          v-for="item in columns"
          :key="item.name"
          :width="item.name==='_seq'?40:''"
        >{{item.title}}</th>
      </tr>
      <tr>
        <td v-for="item in columns" :key="item.name">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script  lang="ts">
import { TempItem, TempTabelCol } from '@/types'
import { Component, Vue, Prop } from 'vue-property-decorator'
let itemAttr = {
  type: 'braid-table',
  isEdit: 0,
  title: '订单商品明细',
  name: 'details',
  value: '{details}',
  style: {},
  defaultValue: [
    {
      productName: '面条机全自动',
      brandName: '九阳（Joyoung）',
      specModel: '165L',
      productUnitName: '件',
      weight: '0.1kg',
      volume: '10cm*10cm*10cm',
      quantity: 1,
      univalent: 190,
      salePrice: 100,
    },
    {
      productName: '商品002',
      brandName: '九阳（Joyoung）',
      specModel: '165L',
      productUnitName: '件',
      weight: '0.1kg',
      volume: '10cm*10cm*10cm',
      quantity: 1,
      univalent: 100,
      salePrice: 100,
    },
  ],
  tabelHtml: '',
  columnsAttr: [
    {
      title: '商品名',
      value: '{商品名称}',
      name: 'productName',
      style: {},
    },
    {
      title: '品牌',
      value: '{品牌}',
      name: 'brandName',
    },
    {
      title: '规格',
      value: '{规格}',
      name: 'specModel',
    },
    {
      title: '单位',
      value: '{单位}',
      name: 'productUnitName',
    },
    {
      title: '重量',
      value: '{重量}',
      name: 'weight',
    },
    {
      title: '体积',
      value: '{体积}',
      name: 'volume',
    },
    {
      title: '数量',
      value: '{数量}',
      name: 'quantity',
    },
    {
      title: '单价',
      value: '{单价}',
      name: 'univalent',
    },
    {
      title: '金额',
      value: '{金额}',
      name: 'salePrice',
    },
    {
      title: '商品序列号',
      value: '{商品序列号}',
      name: 'salePrice',
      type: 'row',
    },
  ],
  columns: [],
}

const WIDGET_NAME = 'braid-table'

export const setting: TempItem = {
  type: WIDGET_NAME,
  isEdit: false, // 是否可编辑
  dragable: true, // 是否可拖拽
  resizable: true, // 尺寸是否可变
  width: 240,
  height: 60,
  left: 50,
  top: 10,
  title: '表格',
  value: [],
  defaultValue: [],
  tabelHtml: '',
  columnsAttr: [], // 表格列选项
  columns: [], // 已选表格列表
  selectCol: [],
  name: '',
  style: {
    zIndex: 0,
    Alignment: 'left', // 对齐方式 1--左靠齐 2--居中 3--右靠齐
    FontSize: 9,
    FontColor: '#000000',
    BorderColor: '#000000',
    AutoHeight: false, // 高度自动（模板在该元素位置以下的元素都关联打印）
    BottomMargin: 0, // 距离下边距
  },
}
@Component
export default class BraidTable extends Vue {
  public name = WIDGET_NAME
  @Prop() val!: TempItem
  get columns(): TempTabelCol[] {
    let col = this.val.columns || []
    return col
  }
}
</script>

