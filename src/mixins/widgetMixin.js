export default {
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
  },
}