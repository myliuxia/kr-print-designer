<template>
  <el-popover placement="top" width="300">
    <el-form ref="form" :model="optionInfo" label-width="80px" size="mini" :rules="rules">
      <el-form-item label="项名称" prop="title">
        <el-input v-model="optionInfo.title"></el-input>
      </el-form-item>
      <el-form-item label="变量名称" prop="name">
        <el-input v-model="optionInfo.name" @change="nameChange"></el-input>
      </el-form-item>
      <el-form-item label="默认值" prop="defaultValue">
        <el-input v-model="optionInfo.defaultValue"></el-input>
      </el-form-item>
      <el-button size="mini" type="primary" @click="submit">确定</el-button>
    </el-form>
    <el-button size="mini" slot="reference">{{ item.title }}</el-button>
  </el-popover>
</template>
<script>
import vptd from '../../../../mixins/vptd'
export default {
  mixins: [vptd],
  props: {
    item: Object,
  },
  data() {
    return {
      optionInfo: {},
      rules: {
        title: { required: true, trigger: 'change', message: '请输入打印项名称' },
        name: { required: true, trigger: 'change', message: '请输入变量名称' },
        defaultValue: { required: true, trigger: 'change', message: '请输入默认值' },
      },
    }
  },
  created() {
    this.optionInfo = { ...this.item, style: { ...this.item.style } }
  },
  methods: {
    submit() {
      this.$refs['form'].validate((isPass) => {
        if (isPass) {
          this.$vptd.dispatch('addTempItem', this.optionInfo)
        }
      })
    },
    nameChange(val) {
      this.optionInfo.value = '{' + val + '}'
    },
  },
}
</script>