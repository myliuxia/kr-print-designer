
// import braidPic from './pic/index.vue'
import braidTxt,{setting as txtSetting} from '@/components/widgets/txt/index.vue'
import barCode ,{setting as barCodeSetting} from '@/components/widgets/bar-code/index.vue'
import table,{setting as tableSetting} from '@/components/widgets/table/index.vue'
import image,{setting as imageSetting} from '@/components/widgets/image/index.vue'
import html ,{setting as htmlSetting}from '@/components/widgets/html/index.vue'
import Vue from 'vue'
function componentsInstall(): void {
  Vue.component(txtSetting.type, braidTxt)
  Vue.component(barCodeSetting.type, barCode)
  Vue.component(tableSetting.type, table)
  Vue.component(imageSetting.type, image)
  Vue.component(htmlSetting.type, html)
}

const install = function () {
  componentsInstall()
}

const getWidgetsSetting = function () {
  return {
    [txtSetting.type]: txtSetting,
    [barCodeSetting.type]: barCodeSetting,
    [tableSetting.type]: tableSetting,
    [imageSetting.type]: imageSetting,
    [htmlSetting.type]: htmlSetting,
  }
}
export default {
  install,
  getWidgetsSetting
}