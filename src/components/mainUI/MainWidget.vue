<template>
  <div class="widget" ref="widget" :style="{ left: widgetLeft + 'px', top: widgetTop + 'px' }" @mousedown="startDrag">
    <slot></slot>
    <div class="widget_footer">
      <button class="btn__footer" @click.prevent="$router.push( footerLink )">Открыть вкладку</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainWidget",
  props: {
    left: Number,
    footerLink: String
  },
  data() {
    return {
      widgetLeft: this.left,
      widgetTop: 200,
      widgetWidth: 0,
      widgetHeight: 0,
      widgetFlag: true
    };
  },
  mounted() {
    this.widget = this.$refs.widget
  },
  methods: {
    startDrag(event) {
      event.preventDefault()
      this.widgetWidth = this.$refs.widget.offsetWidth
      this.widgetHeight = this.$refs.widget.offsetHeight
      document.addEventListener('mousemove', this.dragWidget)
      document.addEventListener('mouseup', this.stopDrag)
      this.initialX = event.clientX
      this.initialY = event.clientY
    },
    dragWidget(event) {
      event.preventDefault()
      const newLeft = this.widgetLeft + event.clientX - this.initialX
      const newTop = this.widgetTop + event.clientY - this.initialY
      const maxLeft = window.innerWidth - this.widgetWidth
      const maxTop = window.innerHeight - this.widgetHeight
      this.widgetLeft = Math.max(0, Math.min(newLeft, maxLeft))
      this.widgetTop = Math.max(60, Math.min(newTop, maxTop))
      this.initialX = event.clientX
      this.initialY = event.clientY
    },
    stopDrag() {
      document.removeEventListener('mousemove', this.dragWidget)
      document.removeEventListener('mouseup', this.stopDrag)
    },
  }
}
</script>

<style lang="scss" scoped>
.widget {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  max-height: 410px;
  position: absolute;
  background-color: #d4e8fa;
  border: 1px solid #153654;
  border-radius: 5px;
  cursor: grab;
  box-shadow: 0 0 10px rgb(0, 0, 0, .25);
}

.widget:active {
  cursor: grabbing;
}

.widget_footer {
  background-color: #6b96c2;
  padding: 10px 20px;
  border-top: 1px solid #153654;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.btn__footer {
  width: 100%;
  height: 40px;
  font-weight: 600;
  font-size: 16px;
  background-color: #4077be;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  color: #fffaf5;
  cursor: pointer;
  &:hover {
    background-color: #3968a6;
  }
  &:active {
    background-color: #31598d;
  }
}
</style>