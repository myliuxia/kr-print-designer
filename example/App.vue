<template>
  <div id="app">
    <kr-print-designer :temp-value="value" :widgets="widgets" @save="handleSave" />
  </div>
</template>

<script>
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
      widgets: [
        { type: 'braid-txt', title: '静态文本', value: '静态文本', defaultValue: '静态文本' },
        { type: 'braid-txt', title: '动态文本', value: '', defaultValue: '动态文本', dynamic: true },
        { type: 'braid-image', title: '图片', value: '', defaultValue: '' },
        { type: 'braid-html', title: 'html', value: '<div>html<div>', defaultValue: '<div>html<div>' },
      ],
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
