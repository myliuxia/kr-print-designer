
export default {
  methods: {
    /**
     * 初始化鼠标拖拽事件
     * @param {*} e 
     */
    initmovement(e) {
      var target = this.$vptd.state.activeElement

      // 设置移动状态初始值
      this.$vptd.commit('initmove', {
        startX: e.pageX,
        startY: e.pageY,
        originX: target.left,
        originY: target.top
      })

      // 绑定鼠标移动事件
      document.addEventListener('mousemove', this.handlemousemove, true)

      // 取消鼠标移动事件
      document.addEventListener('mouseup', this.handlemouseup, true)
    },

    /**
     * 鼠标移动
     * @param {*} e 
     */
    handlemousemove(e) {
      e.stopPropagation()
      e.preventDefault()

      this.$vptd.commit('move', {
        x: e.pageX,
        y: e.pageY
      })
    },

    /**
     * 鼠标up
     */
    handlemouseup() {
      document.removeEventListener('mousemove', this.handlemousemove, true)
      document.removeEventListener('mouseup', this.handlemouseup, true)
      this.$vptd.commit('stopmove')
    }
  }
}
