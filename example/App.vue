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
      uploadOption: {
        url: 'https://jsonplaceholder.typicode.com/photos',
      },
    }
  },

  created() {
    let data = window.localStorage.getItem('vpd-data')
    if (data) {
      this.value = JSON.parse(data)
    }
  },

  methods: {
    handleSave(data) {
      console.log('saving:', data)
    },
    handleUpload(files) {
      console.log('uploading:', files)
      return new Promise((resolve) => {
        resolve({
          files: files,
          status: 200,
        })
      })
    },
  },
}
</script>

<style>
#app {
  height: 100%;
}
</style>
