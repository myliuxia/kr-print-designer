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
import { create } from 'domain'
import { watch } from 'fs'
export default {
  name: WIDGET_NAME,
  setting: {
    type: WIDGET_NAME,
    name: '',
    isEidt: true,
    isUpload: true,
    dragable: true, // 是否可拖拽
    resizable: true, // 尺寸是否可变
    width: 120,
    height: 40,
    left: 50,
    top: 0,
    value: '图片',
    title: '',
    defaultValue: '',
    style: {
      zIndex: 0,
      ItemType: 0, // 打印类型 0--普通项 1--页眉页脚 2--页号项 3--页数项 4--多页项
    },
  },
  props: [
    'val', // 图片对象
  ],
  data() {
    return {
      imageUrl: this.val.value,
    }
  },
  watch: {
    val(newVal) {
      this.imageUrl = newVal.value
    },
  },
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
