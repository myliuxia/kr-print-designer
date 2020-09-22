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
// let itemAttr = {
//   type: 'bar-code',
//   isEidt: 0,
//   title: '订单编号',
//   value: '{orderCode}',
//   defaultValue: '1234567890',
//   name: 'orderCode'
// }
export default {
  name: 'bar-code',
  props: ['val'],
  data() {
    return {
      codeImg: require('../../../assets/image/barCode.png')
    }
  }
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