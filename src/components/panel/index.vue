<template>
  <div class="mini-collapse">
    <el-collapse v-model="activeNames">
      <el-collapse-item title name="1">
        <template slot="title">
          <span class="pd-l-10">页面参数</span>
        </template>
        <page class="pd-l-10" />
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <span class="pd-l-10">样式</span>
        </template>
        <appearance class="pd-l-10" />
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <span class="pd-l-10">组件</span>
        </template>
        <options class="pd-l-10" />
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <span class="pd-l-10">已加组件</span>
        </template>
        <layers class="pd-l-10" />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import page from './page.vue'
import style from './style.vue'
import options from './options.vue'
import layers from './layers.vue'

export default {
  components: {
    page,
    appearance: style,
    options,
    layers,
  },

  data() {
    return {
      activeNames: ['1', '2', '3', '4'],
    }
  },
}
</script>
<style lang="scss" scoped>
.mini-collapse {
  color: #555555;
  ::v-deep.el-collapse-item__content {
    padding-bottom: 10px;
  }
}
</style>
