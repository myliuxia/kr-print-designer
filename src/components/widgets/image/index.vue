<template>
  <div
    class="widgets"
    :style="{
      position: 'absolute',
      width: val.width + 'px',
      height: val.height + 'px',
      left: val.left + 'px',
      top: val.top +'px',
      zIndex: val.zIndex
    }"
  >
    <img class="braid-image" :src="imageUrl" />
  </div>
</template>

<script>
// let itemAttr = {
//   type: 'braid-image',
//   isEidt: 0,
//   title: '水洗标样式1',
//   value: '/group1/M00/00/07/wKgH1l4ESr-AS1ooAAB8D-KqTTA670.png',
//   defaultValue: '/group1/M00/00/07/wKgH1l4ESr-AS1ooAAB8D-KqTTA670.png',
//   name: ''
// }
const WIDGET_NAME = 'braid-image'
import { getFullImageUrl } from '@/libs/util'
import { create } from 'domain'
import { watch } from 'fs'
export default {
  name: WIDGET_NAME,
  props: [
    'val' // 图片对象
  ],
  data() {
    return {
      imageUrl: getFullImageUrl(this.val.value)
    }
  },
  watch: {
    val(newVal) {
      this.imageUrl = getFullImageUrl(newVal.value)
    }
  }
}
</script>

<style scoped>
.braid-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
}
</style>
