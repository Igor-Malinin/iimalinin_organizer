export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openCreateEvent() {
      this.isCreatingEvent = true
    },
    openModalEvents(date, events) {
      this.eventsList = events
      this.currentEventDate = date
      this.isOpenModalEvents = !this.isOpenModalEvents
    },
    openCreateTodoItem() {
      this.isCreatingTodoItem = true
    },
    editTodoItem() {
      this.isEditingTodoItem = !this.isEditingTodoItem
    },
    openEventForm() {
      this.isEventFormOpen = !this.isEventFormOpen
    },
    hideModal() {
      this.$emit('update:show', false)
    }
  },
}