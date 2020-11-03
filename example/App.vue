<template>
  <div id="app">
    <kr-print-designer :temp-value="value" :widget-options="widgets" @save="handleSave" />
  </div>
</template>

<script>
import { OutStockOptions } from './data/options'
export default {
  data() {
    return {
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

  created() {},

  methods: {
    handleSave(data) {
      console.log('saving:', data)
    },
  },
}
</script>

<style>
#app {
  height: 100%;
}
</style>
