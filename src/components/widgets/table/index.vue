<template>
  <div
    class="widgets"
    :style="{
      left: val.left + 'px' ,
      top:  val.top + 'px',
      width: val.width + 'px',
      height: val.height + 'px',
      textAlign: val.style.Alignment==1?'left':val.style.Alignment==2?'center':'right',
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
        <td
          v-for="item in columns"
          :key="item.name"
          :rowspan="item.name==='_seq'?rowspan:''"
        >{{item.value}}</td>
      </tr>
      <tr v-for="item in rows" :key="item.name">
        <td :colspan="colspan" v-html="item.value"></td>
      </tr>
    </table>
  </div>
</template>

<script>
let itemAttr = {
  type: 'braid-table',
  isEidt: 0,
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

import vptd from '../../../mixins/vptd'

const WIDGET_NAME = 'braid-table'

export default {
  mixins: [vptd],
  name: WIDGET_NAME,
  setting: {
    type: WIDGET_NAME,
    isEidt: true,
    isUpload: false,
    dragable: true, // 是否可拖拽
    resizable: true, // 尺寸是否可变
    dynamic: false, // 是否为动态内容
    width: 240,
    height: 60,
    left: 50,
    top: 10,
    title: '表格',
    value: [],
    defaultValue: [],
    name: '',
    style: {
      zIndex: 0,
      Alignment: 1, // 对齐方式 1--左靠齐 2--居中 3--右靠齐
      FontSize: 9,
      FontColor: '#000000',
      BorderColor: '#000000',
      AutoHeight: 0, // 高度自动（模板在该元素位置以下的元素都关联打印）
      BottomMargin: 0, // 距离下边距
    },
  },
  props: [
    'val', // 文本对象
  ],
  computed: {
    // 去掉type='row'的数据
    columns() {
      let col = this.val.columns.filter((item) => item.type != 'row')
      return col
    },
    // 提取出type='row'的数据
    rows() {
      let rows = this.val.columns.filter((item) => item.type == 'row')
      return rows
    },
    // 一条数据所占的行数
    rowspan() {
      return 1 + this.rows.length
    },
    // 除去序号外数据所占的列数
    colspan() {
      let contentCol = this.columns.filter((item) => item.name !== '_seq')
      return contentCol.length
    },
  },
  methods: {},
}
</script>

