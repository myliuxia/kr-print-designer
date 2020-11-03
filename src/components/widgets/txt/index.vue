<template>
  <div
    class="widgets"
    v-html="val.value"
    :contenteditable="!!val.isEdit"
    @blur="(e) => updateText(e, val.uuid)"
    :style="{
      position:'absolute',
      left: val.left + 'px' ,
      top:  val.top + 'px',
      width: val.width + 'px',
      minHeight: val.height + 'px',
      zIndex: val.style.zIndex,
      fontSize: val.style.FontSize + 'pt',
      color: val.style.FontColor,
      textAlign: val.style.Alignment==1?'left':val.style.Alignment==2?'center':'right',
      fontWeight: val.style.Bold ? 'bold': 'normal'
    }"
  ></div>
</template>

<script>
// let itemAttr = {
//   type: 'braid-txt',
//   isEdit: 0,
//   title: '收货人手机',
//   value: '{收货人手机}',
//   defaultValue: '18982068702',
//   name: 'buyerPhone'
// }

import vptd from '../../../mixins/vptd'
const WIDGET_NAME = 'braid-txt'

export default {
  mixins: [vptd],
  name: WIDGET_NAME,
  setting: {
    type: WIDGET_NAME,
    isEdit: true,
    dragable: true, // 是否可拖拽
    resizable: true, // 尺寸是否可变
    dynamic: false, // 是否为动态内容
    width: 120,
    height: 40,
    left: 50,
    top: 0,
    title: '自定义文本',
    value: '自定义文本',
    defaultValue: '自定义文本',
    name: '',
    style: {
      zIndex: 0,
      FontSize: 9,
      FontColor: '#000000',
      Bold: 0, // 1代表粗体，0代表非粗体
      Italic: 0, // 1代表斜体，0代表非斜体
      Underline: 0, // 1代表有下划线，0代表无下划线
      Alignment: 1, // 对齐方式 1--左靠齐 2--居中 3--右靠齐
      ItemType: 0, // 打印类型 0--普通项 1--页眉页脚 2--页号项 3--页数项 4--多页项
    },
  },
  props: [
    'val', // 文本对象
  ],
  methods: {
    updateText(e, uuid) {
      let text = e.target.innerHTML
      this.$vptd.commit('updateData', {
        uuid: uuid,
        key: 'value',
        value: text,
      })
    },
  },
}
</script>

