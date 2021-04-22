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

<script>
const WIDGET_NAME = 'braid-table'

export default {
  name: WIDGET_NAME,
  setting: {
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
    selectCol: [], // 已选表格列name数组（用于多选框双向绑定）
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
  },
  props: [
    'val', // 文本对象
  ],
  computed: {
    // 去掉type='row'的数据
    columns() {
      let col = this.val.columns || []
      return col
    },
  },
  methods: {},
}
</script>

