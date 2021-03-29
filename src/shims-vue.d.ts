
import lodop from './libs/lodop/index'
import vptd from './store/index'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module "vue/types/vue" {
  interface Vue {
    $vptd: vptd
    $lodop: lodop
  }
}