<template>
  <div
    class="bar-code"
    :style="{
      position: 'absolute',
      width: val.width + 'px',
      height: val.height + 'px',
      left: val.left + 'px',
      top: val.top +'px',
      zIndex: val.zIndex,
    }"
  >
    <img :src="codeImg" />
    <div
      class="text"
      :style="{
        display:val.style.ShowBarText== 1 ? '' : 'none',
        fontSize: val.style.FontSize + 'pt',
        fontWeight: val.style.Bold ? 'bold' : 'normal'
      }"
    >1234567890</div>
  </div>
</template>

<script>
const WIDGET_NAME = 'bar-code'
export default {
  name: WIDGET_NAME,
  setting: {
    type: WIDGET_NAME,
    isEdit: false,
    dragable: true, // 是否可拖拽
    resizable: true, // 尺寸是否可变
    width: 120,
    height: 40,
    left: 50,
    top: 0,
    title: '条码',
    value: '1234567890',
    defaultValue: '1234567890',
    name: '',
    style: {
      zIndex: 0,
      FontSize: 9,
      ShowBarText: 0, // 条码是否显示值 0--不显示 1--显示
      codeType: 'Code39', // 条码类型
      ItemType: 0, // 打印类型 0--普通项 1--页眉页脚 2--页号项 3--页数项 4--多页项
    },
  },
  props: ['val'],
  data() {
    return {
      codeImg: require('../../../assets/image/barCode.png'),
    }
  },
}
</script>
<style lang="scss" scoped>
.bar-code {
  &:hover {
    outline: 1px solid #ddd !important;
  }
  &.active {
    outline: 1px solid #2196f3 !important;
    &:hover {
      outline: 1px solid #2196f3 !important;
    }
  }
  img {
    width: 100%;
    height: 100%;
    user-select: none;
    -webkit-user-drag: none;
    pointer-events: none;
  }
  .text {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: #ffffff;
  }
}
</style>