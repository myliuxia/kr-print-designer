<template>
  <div v-show="optionsType !=='page'">
    <!-- 左 -->
    <div
      :style="{
        height: elm.height + 'px',
        top: elm.top + 'px',
        left: elm.left + 'px'
      }"
      class="verti"
      @mousedown="handlemousedown($event, 'left', 'left', 'width')"
    >
      <div class="square" />
    </div>

    <!-- 右 -->
    <div
      :style="{
        height: elm.height + 'px',
        top: elm.top + 'px',
        left: elm.left + elm.width + 'px'
      }"
      class="verti"
      @mousedown="handlemousedown($event, 'right', 'width')"
    >
      <div class="square" />
    </div>

    <!-- 上 -->
    <div
      :style="{
        width: elm.width + 'px',
        top: elm.top + 'px',
        left: elm.left + 'px'
      }"
      class="horiz"
      @mousedown="handlemousedown($event, 'up', 'top', 'height')"
    >
      <div class="square" />
    </div>

    <!-- 下 -->
    <div
      :style="{
        width: elm.width + 'px',
        top: elm.top + elm.height + 'px',
        left: elm.left + 'px'
      }"
      class="horiz"
      @mousedown="handlemousedown($event, 'down', 'height')"
    >
      <div class="square" />
    </div>
  </div>
</template>

<script>
import vptd from '../../mixins/vptd'
export default {
  mixins: [vptd],
  data() {
    return {
      type: '', // 调整方向 left | right | up | down
    }
  },
  computed: {
    optionsType() {
      return this.$vptd.state.type
    },
    elm() {
      let target = this.$vptd.state.activeElement
      if (!target.resizable) return ''
      return target
    },
  },

  methods: {
    handlemousedown(e, type, originX, originY) {
      e.stopPropagation()
      this.type = type

      this.$vptd.commit('initmove', {
        startX: e.pageX,
        startY: e.pageY,
        originX: this.elm[originX],
        originY: this.elm[originY],
      })

      document.addEventListener('mousemove', this.handlemousemove, true)
      document.addEventListener('mouseup', this.handlemouseup, true)
    },

    handlemousemove(e) {
      e.stopPropagation()
      e.preventDefault()

      this.$vptd.commit('resize', {
        x: e.pageX,
        y: e.pageY,
        type: this.type,
      })
    },

    handlemouseup() {
      document.removeEventListener('mousemove', this.handlemousemove, true)
      document.removeEventListener('mouseup', this.handlemouseup, true)
      this.$vptd.commit('stopmove')
    },
  },
}
</script>

<style scoped>
.verti,
.horiz {
  position: absolute;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.verti {
  width: 0;
  cursor: ew-resize;
}
.horiz {
  height: 0;
  cursor: ns-resize;
}
.square {
  box-sizing: border-box;
  width: 6px;
  height: 6px;
  border: 1px solid #2196f3;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
