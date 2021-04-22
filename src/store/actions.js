export default {
  // 添加模板项
  addTempItem({ state, commit }, item) {
    commit('addTempItem', item)
    // 设置选中
    commit('select', {
      uuid: state.page.tempItems[state.page.tempItems.length - 1].uuid
    })
  },

  // 初始化模板设计器
  async designerInit({ state, commit }, tempInfo) {
    commit('initOptionItems', tempInfo.options)
    commit('initPage', tempInfo.tempValue)
  }

}
