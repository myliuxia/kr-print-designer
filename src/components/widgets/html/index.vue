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
    }"
  ></div>
</template>

<script>
import vptd from '../../../mixins/vptd'
const WIDGET_NAME = 'braid-html'

export default {
  mixins: [vptd],
  name: WIDGET_NAME,
  setting: {
    type: WIDGET_NAME,
    isEdit: false,
    dragable: true, // 是否可拖拽
    resizable: true, // 尺寸是否可变
    dynamic: false, // 是否为动态内容
    width: 120,
    height: 40,
    left: 50,
    top: 0,
    title: 'html',
    value: '<div>html<div>',
    defaultValue: '<div>html<div>',
    name: '',
    style: {
      zIndex: 0,
      ItemType: 0, // 打印类型 0--普通项 1--页眉页脚 2--页号项 3--页数项 4--多页项
      AutoHeight: 0, // 高度自动（模板在该元素位置以下的元素都关联打印）
      BottomMargin: 0, // 距离下边距
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

