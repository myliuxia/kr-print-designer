<template>
  <div class="kr-designer">
    <viewport class="kr-designer-view" />
    <div class="kr-designer-tool">
      <el-scrollbar class="kr-designer-tool_con">
        <panel class="control-panel" />
      </el-scrollbar>
      <div class="kr-designer-tool_bar">
        <el-button size="mini" type="success" @click="saveTemp">保存</el-button>
        <el-button size="mini" type="primary" @click="previewTemp">预览</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Viewport from './components/viewport/index.vue'
import Panel from './components/panel/index.vue'
import vptd from './mixins/vptd'
import Vue from 'vue'
import { attrJson } from './libs/data.js'
import widgets from './components/widgets'

export default {
  mixins: [vptd],
  name: 'kr-print-designer',
  components: { Viewport, Panel },
  props: {
    widgetOptions: {
      type: Array,
      default: () => [
        { type: 'braid-txt', title: '静态文本', value: '静态文本', defaultValue: '静态文本' },
        { type: 'braid-txt', title: '动态文本', value: '', defaultValue: '动态文本', dynamic: true },
      ],
    },
    tempValue: {
      type: Object,
      default: () => ({ title: 'demo', width: 750, height: 550, pageWidth: 750, pageHeight: 550, tempItems: [] }),
    },
  },
  created() {
    Vue.use(widgets)
    // 模板页面信息
    let pageInfo = {
      title: 'demo',
      width: 750,
      height: 550,
      pageWidth: 750,
      pageHeight: 550,
      imageUrl: '',
    }

    // 模板设计选项
    let options = attrJson()
    // 模板内容
    let tempItems = []

    // 设置模板组件默认属性
    this.$vptd.commit('setWidgetSetting', widgets.getWidgetsSetting())
    // 初始化设计器
    this.$vptd.dispatch('designerInit', { tempValue: this.tempValue, options: this.widgetOptions })
  },
  methods: {
    // 保存模板
    saveTemp() {
      let tempItems = this.$vptd.state.tempItems
      let page = this.$vptd.state.page
      this.$emit('save', { ...page, tempItems: tempItems })
      // console.log(tempItems)
      // console.log(page)
    },
    // 预览模板
    previewTemp() {
      let tempItems = [...this.$vptd.state.tempItems]
      let page = { ...this.$vptd.state.page }
      console.log(this.$lodop)
      this.$lodop.previewTemp({ ...page, tempItems: tempItems })
    },
  },
}
</script>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
}
.kr-designer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: row;
  .kr-designer-view {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .kr-designer-tool {
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    .el-scrollbar__wrap {
      overflow: auto;
    }
    &_con {
      flex: 1;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    &_bar {
      padding: 10px;
      text-align: center;
    }
  }
}

.kr-form {
  .el-form-item--mini.el-form-item {
    margin-bottom: 10px;
  }
  .min-input {
    width: 100px;
  }
  .unit-text {
    font-size: 12px;
    color: #999999;
    margin-left: 5px;
  }
}

.kr-collapse {
  color: #555555;
  width: 400px;

  .el-collapse-item__header {
    box-sizing: border-box;
    padding-left: 10px;
  }

  .el-collapse-item__content {
    box-sizing: border-box;
    padding: 10px;
  }
}
</style>
