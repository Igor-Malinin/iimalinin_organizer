import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  data() {
    return {
      currentEventDate: '',
      eventsList: [],
      isCreatingEvent: false,
      isEditing: false,
      isOpenModalEvents: false,
      isCreatedEvent: false,
      isUpdatedEvent: false
    }
  },
  methods: {
    ...mapMutations({
      setCalendarEvents: "postEvents/setCalendarEvents"
    }),
    createEvent(event) {
      this.isCreatedEvent = true
      this.isCreatingEvent = false
      this.getCalendarEvents.push(event)
    },
    updateEvent(event) {
      this.isUpdatedEvent = true
      this.isEditing = false
      this.getCalendarEvents.filter(calendarEvent => {
        if (calendarEvent.id === event.id) {
          calendarEvent.eventName = event.eventName
          calendarEvent.eventStart = event.eventStart
          calendarEvent.eventEnd = event.eventEnd
          calendarEvent.eventDays = event.eventDays
          calendarEvent.color = event.color
        }
      })
    },
  },
  computed: {
    ...mapState({
      calendarEvents: state => state.postEvents.calendarEvent
    }),
    ...mapGetters({
      getCalendarEvents: "postEvents/getCalendarEvents"
    })
  }
}