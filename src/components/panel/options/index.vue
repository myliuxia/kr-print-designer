<template>
  <div class="options-box">
    <template v-for="(item,index) in optionItems">
      <!-- <txt-option v-if="item.type == 'braid-txt' && item.dynamic" :item="item" :key="index"></txt-option>
      <image-option v-else-if="item.type == 'braid-image'" :item="item" :key="index"></image-option>
      <image-option v-else-if="item.type == 'braid-html'" :item="item" :key="index"></image-option>-->
      <el-popover v-if="item.type == 'braid-table'" :key="index" placement="top" width="200">
        <div>
          <el-checkbox-group v-model="item.columns">
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
//
import vptd from '../../../mixins/vptd'
import { cumulativeOffset, checkInView } from '../../../utils/offset'
import { getDefaultProps } from '../../../libs/props'
import TxtOption from './option-item/txt-option'
import ImageOption from './option-item/image-option'
import HtmlOption from './option-item/html-option'

export default {
  // components: { TxtOption, ImageOption, HtmlOption },
  mixins: [vptd],
  data() {
    return {}
  },
  computed: {
    optionItems() {
      return this.$vptd.state.optionItems
    },
    // 系统打印项
    systemLayers() {
      let widget = this.$vptd.state.widgetSetting
      return [
        { ...widget['braid-txt'], title: '静态文本', value: '静态文本', dynamic: false },
        { ...widget['braid-txt'], title: '动态文本', dynamic: true },

        { ...widget['braid-image'], title: '静态图片', dynamic: false },
        { ...widget['braid-image'], title: '动态图片', dynamic: true },

        { ...widget['braid-html'], title: '静态html', dynamic: false },
        { ...widget['braid-html'], title: '动态html', dynamic: true },

        { ...widget['braid-tabel'], title: '表格', dynamic: true },
      ]
    },
  },
  mounted() {
    // console.log(this.systemLayers)
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
