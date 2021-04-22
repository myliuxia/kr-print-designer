<template>
  <div class="options-box">
    <template v-for="(item,index) in optionItems">
      <el-popover
        v-if="item.type == 'braid-table'"
        :key="index"
        placement="top"
        width="200"
        v-model="tablePopover"
      >
        <div>
          <el-checkbox-group v-model="item.selectCol">
            <el-row>
              <el-col v-for="col in item.columnsAttr" :key="col.name" :span="12">
                <el-checkbox :label="col.name">{{col.title}}</el-checkbox>
              </el-col>
            </el-row>
          </el-checkbox-group>
          <el-button size="mini" type="primary" @click="(e) => {addTempItem(e,item)}">确定</el-button>
        </div>
        <el-button size="mini" slot="reference">{{ item.title }}</el-button>
      </el-popover>
      <el-button
        v-else
        size="mini"
        :key="index"
        @click="(e) => {addTempItem(e,item)}"
      >{{ item.title }}</el-button>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tablePopover: false,
    }
  },
  computed: {
    optionItems() {
      return this.$vptd.state.optionItems
    },
  },
  methods: {
    // 添加组件
    addTempItem(e, item) {
      switch (item.type) {
        case 'braid-table': {
          let selectCol = []
          item.selectCol.forEach((itemName) => {
            let colInfo = item.columnsAttr.find((col) => col.name === itemName)
            if (colInfo) {
              selectCol.push(colInfo)
            }
          })
          item.columns = selectCol //表格显示的字段
          this.$vptd.dispatch('addTempItem', item)
          this.tablePopover = false
          break
        }
        default:
          this.$vptd.dispatch('addTempItem', item)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.options-box {
  .el-button {
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 0;
  }
}
</style>
