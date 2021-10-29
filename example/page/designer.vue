<template>
  <kr-print-designer ref="printDesigner" :temp-value="value" :widget-options="widgets" @save="handleSave" />
</template>
<script>
import { OutStockOptions, InStockOptions } from '../data/options'
export default {
  data() {
    return {
      index: '',
      value: {
        title: 'demo',
        width: 750,
        height: 550,
        pageWidth: 750,
        pageHeight: 550,
        tempItems: [],
      },
      widgets: OutStockOptions,
    }
  },

  created() {
    this.index = this.$route.query.index
    try {
      let tempList = JSON.parse(localStorage.getItem('tempList')) || []
      this.value = tempList[this.index]
      this.widgets = this.value.type == 1 ? OutStockOptions : InStockOptions
    } catch (err) {
      console.error(err)
    }
  },
  methods: {
    handleSave(data) {
      let tempList = JSON.parse(localStorage.getItem('tempList')) || []
      tempList[this.index] = data
      localStorage.setItem('tempList', JSON.stringify(tempList))
      this.$router.back()
    },
    // 手动初始话模板数据
    initTemp(){
      this.$refs.printDesigner.initTemp(this.value,this.widgets)
    }
  },
}
</script>
