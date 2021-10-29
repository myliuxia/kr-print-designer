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
import cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'kr-print-designer',
  components: { Viewport, Panel },
  props: {
    widgetOptions: {
      type: Array,
      default: () => [],
    },
    tempValue: {
      type: Object,
      default: () => ({ title: 'demo', width: 750, height: 550, pageWidth: 750, pageHeight: 550, tempItems: [] }),
    },
  },
  created() {
    this.initTemp(this.tempValue,this.widgetOptions)
  },
  methods: {
    // 保存模板
    saveTemp() {
      let page = this.$vptd.state.page
      this.$emit('save', cloneDeep(page))
    },
    // 预览模板
    previewTemp() {
      let page = { ...this.$vptd.state.page }
      this.$lodop.previewTemp(cloneDeep(page))
    },
    
    // 初始化设计器
    initTemp(tempValue,widgetOptions){
      this.$vptd.dispatch('designerInit', {
        tempValue: cloneDeep(tempValue),
        options: cloneDeep(widgetOptions),
      })
    }
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
