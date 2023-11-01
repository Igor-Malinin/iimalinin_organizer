<template>
  <div class="numbers">
    <div class="weekdays">
      <div class="weekday" v-for="weekday in weekdays" :key="weekday">{{ weekday }}</div>
    </div>
    <div class="calendar_numbers">
      <div class="days">
        <button
          v-for="(date, index) in days"
          :key="index" class="btn__day"
          :class="setClasses(date)"
          :style="`background-color: ${setColor(date)}`"
          @click="openModalEvents(date)"
        >
          <span>{{ date === undefined ? '' : date.day }}</span>
          <span>{{ eventsSpan(date) }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarEventForm from "@/components/calendar/CalendarEventForm.vue";
import CalendarEventsList from "@/components/calendar/CalendarEventsList.vue";

export default {
  name: "CalendarNumbers",
  components: {CalendarEventsList, CalendarEventForm},
  data() {
    return {
      isEditingEvent: false
    }
  },
  props: {
    weekdays: Array,
    days: Array,
    calendarEvents: Array,
    widgetFlag: Boolean,
    eventsAmount: Number
  },
  methods: {
    hasDate(event, date) {
      return event.eventDays.some(eventDate =>
          date !== undefined ?
              eventDate.day === date.day &&
              eventDate.month === date.month &&
              eventDate.year === date.year :
              false
      )
    },
    hasEvent(date) {
      return this.calendarEvents.some(event => this.hasDate(event, date))
    },
    getEvents(date) {
      let checkEvent = this.calendarEvents.filter(event => this.hasDate(event, date)).map(event => event)
      return checkEvent.length > 0 ? checkEvent : ''
    },
    pastEvent(date) {
      date = new Proxy({...date}, {})
      let evaluationDate = new Date()
      new Date(date.year, date.month - 1, date.day) <
      new Date(evaluationDate.getFullYear(), evaluationDate.getMonth(), evaluationDate.getDate()-1, 23, 59, 59)
          ?
         this.hasEvent(date)
          :
         false
    },
    eventsSpan(date) {

      return date === undefined ? '' :
          this.hasEvent(date) && !this.widgetFlag ?
              `${this.pastEvent(date) ? 'Прошло' : 'События'}: ${this.getEvents(date).length}` : ''
    },
    setClasses(date) {
      return {
        'empty': date === undefined,
        'has_event': this.hasEvent(date),
        'past_event': this.pastEvent(date),
        'not_widget': !this.widgetFlag
      }
    },
    setColor(date) {
      let color = ''
      this.hasEvent(date) ?
          color = this.getEvents(date)[0].color :
          date !== undefined ?
              color = '#fff' :
              color = 'inherit'
      return color
    },
    openModalEvents(date) {
      this.hasEvent(date) ? this.$emit('openModalEvents', date, this.getEvents(date)) : ''
    }
  }
}
</script>

<style lang="scss" scoped>

.numbers {
  height: 100%;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
}

.calendar_numbers {
  padding: 10px;
}

.weekdays {
  width: 100%;
  display: flex;
  padding: 8px;
  background-color: #317ac5;
  color: #fffaf5;
}

.weekday {
  flex: 1;
  text-align: center;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

button:active {
  cursor: grabbing;
}

.btn__day {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 35px;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #94ccea;
  border-radius: 5px;
  cursor: grab;
}

.not_widget {
  height: 50px;
  cursor: default;
  &:active {
    cursor: default;
  }
}

.empty {
  border: none;
  background-color: inherit;
  cursor: grab;
}
.empty.not_widget {
  cursor: default;
}

.event__info {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  p {
    margin-bottom: 8px;
  }
}
.event__info:last-child {
  margin-bottom: 0;
}

.has_event {
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 10px #888888;
  }
  &:active {
    box-shadow: inset 0 0 20px #a6a6a6;
    cursor: pointer;
  }
}

.past_event {
  background-color: #e1e6e8 !important;
  border: 1px solid #05d07b;
  color: #039a44;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 10px #76c99a;
  }
  &:active {
    box-shadow: inset 0 0 20px #76c99a;
    cursor: pointer;
  }
}

</style>