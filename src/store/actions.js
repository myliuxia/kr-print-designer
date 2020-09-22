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
  // 获得模板详情
  async getTempDetail({ state, commit, store }, id) {
    commit('setTempId', id)
    // commit('setLoading', true)
    // let [data, err] = await svc.getDetailSystemPrintTemp({ path_uri: id })
    // commit('setLoading', false)
    // if (err) {
    //   err.showAlert()
    //   return
    // }
    // 默认选项属性
    let defaultOptionItem = getDefaultProps()
    let optionsJson = attrJson
    // 补全默认属性
    let options = optionsJson.map(item => {
      let optionItem = { ...defaultOptionItem, ...item }
      optionItem.style = styleMap[item.type] || {}
      return optionItem
    })

    let pageInfo = {
      title: 'demo',
      width: 750,
      height: 550,
      pageWidth: 750 ,
      pageHeight: 550,
      imageUrl: ''
    }
    // 模板内容
    let tempItems =  []
    tempItems = tempItems.map(item => {
      let optionItem = { ...defaultOptionItem, ...item }
      let defaultStyle = styleMap[item.type] || {}
      optionItem.style = { ...defaultStyle, ...optionItem.style }
      return optionItem
    })


    commit('initOptionItems', options)
    commit('initPage', pageInfo)
    commit('initTempItems', tempItems)

  }
}
