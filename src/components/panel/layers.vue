<template>
  <div class="tag-box">
    <el-tag
      v-for="(layer,index) in layers"
      :key="index"
      :closable="layer === activeElement?true:false"
      size="small"
      :type="layer === activeElement?'':'info'"
      @click="(e) => {activeLayer(e, layer)}"
      @close="(e) => {dele(e, layer)}"
    >{{ layer.title }}</el-tag>
  </div>
</template>

<script>
import { cumulativeOffset, checkInView } from '../../utils/offset'

export default {
  computed: {
    // 已添加的组件
    layers() {
      return this.$vptd.state.page.tempItems
    },
    activeElement() {
      return this.$vptd.state.activeElement
    },
  },
  methods: {
    activeLayer(e, item) {
      this.$vptd.commit('select', {
        uuid: item.uuid,
      })
      let viewport = document.querySelector('#viewport')
      if (viewport) {
        let target = viewport.querySelector(`[data-uuid='${item.uuid}']`)
        if (target && !checkInView(target)) {
          viewport.scrollTop = cumulativeOffset(target).top - 50
        }
      } else {
        console.error('未找到 "#viewport" 的节点')
      }
    },

    // 删除元件
    dele(e, item) {
      this.$vptd.commit('delete', item.uuid)
    },
  },
}
</script>
<style lang="scss" scoped>
.tag-box {
  .el-tag {
    margin-bottom: 10px;
    margin-right: 10px;
  }
}
</style>
