<template>
  <div
    class="widgets"
    v-html="val.value"
    :contenteditable="!!val.isEidt"
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
//   isEidt: 0,
//   title: '收货人手机',
//   value: '{收货人手机}',
//   defaultValue: '18982068702',
//   name: 'buyerPhone'
// }

import vptd from '../../../mixins/vptd'
const WIDGET_NAME = 'braid-html'

export default {
  mixins: [vptd],
  name: WIDGET_NAME,
  props: [
    'val' // 文本对象
  ],
  methods: {
    updateText(e, uuid) {
      let text = e.target.innerHTML
      this.$vptd.commit('updateData', {
        uuid: uuid,
        key: 'value',
        value: text
      })
    }
  }
}
</script>

