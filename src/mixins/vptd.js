import vptd from '../store'

export default {
  beforeCreate() {
    this.$vptd = vptd
  }
}
