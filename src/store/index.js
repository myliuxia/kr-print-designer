import Store from '../plugins/store'

import state from './state'
import actions from './actions'
import mutations from './mutation'

/**
 * 自定义状态管理器
 */
export default new Store({
  state,
  actions,
  mutations
})
