import { getDefaultProps, styleMap } from '../libs/props.js'
import { attrJson } from '../libs/data.js'

export default {
  // 添加模板项
  addTempItem({ state, commit, store }, item) {
    commit('addTempItem', { item })
    // 设置选中
    commit('select', {
      uuid: state.tempItems[state.tempItems.length - 1].uuid
    })
  },

  // 初始化模板设计器
  async designerInit({ state, commit, store }, tempInfo) {

    commit('initOptionItems', tempInfo.options)
    commit('initPage', tempInfo.pageInfo)
    commit('initTempItems', tempInfo.tempItems)

  }
}
