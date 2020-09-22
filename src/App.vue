<template>
  <div id="app">
    <viewport style="flex:1" />
    <div class="tool-bar">
      <el-scrollbar flex-box="1" class="full">
        <panel class="control-panel" />
      </el-scrollbar>
      <!-- <div>
        <el-button size="mini" type="primary" @click="savePreview">保存并预览</el-button>
        <el-button size="mini" type="primary" @click="save">保存</el-button>
      </div> -->
    </div>
  </div>
</template>

<script>
import Viewport from './components/viewport'
import Panel from './components/panel'

export default {
  name: 'App',
  components: { Viewport ,Panel }
}
</script>

<style lang="scss">
body,html{
  padding: 0;
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.tool-bar{
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;

}
</style>
