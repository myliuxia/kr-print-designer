<template>
  <div class="options-box">
    <template v-for="(item,index) in defaultOptions">
      <el-button size="mini" :key="index" @click="(e) => {addTempItem(e,item)}">{{ item.title }}</el-button>
    </template>
    <template v-for="item in optionItems">
      <el-popover v-if="item.type == 'braid-table'" :key="item.title" placement="top" width="200">
        <div>
          <el-checkbox-group v-model="item.columns">
            <el-row>
              <el-col class="mg-b-5" v-for="col in item.columnsAttr" :key="col.name" :span="12">
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
        :key="item.title"
        @click="(e) => {addTempItem(e,item)}"
      >{{ item.title }}</el-button>
    </template>
  </div>
</template>

<script>
//
import vptd from '../../mixins/vptd'
import { cumulativeOffset, checkInView } from '../../utils/offset'
import { getDefaultProps } from '../../libs/props'

export default {
  mixins: [vptd],
  data() {
    return {
      defaultOptions: [
        {
          type: 'braid-txt',
          isEidt: 1,
          title: '自定义文本',
          value: '自定义文本',
          defaultValue: '自定义文本',
          name: '',
        },
        {
          type: 'braid-image',
          isEidt: 1,
          isUpload: 1,
          title: '图片',
          value: ' ',
          defaultValue: ' ',
          name: '',
        },
      ],
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
          item.columns.forEach((col) => {
            for (let colAttr of item.columnsAttr) {
              if (colAttr.name == col) {
                selectCol.push(colAttr)
                break
              }
            }
          })
          item.columns = selectCol //表格显示的字段
          this.$vptd.dispatch('addTempItem', item)
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
