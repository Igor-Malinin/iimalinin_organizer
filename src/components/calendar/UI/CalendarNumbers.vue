<template>
  <div class="calendar_numbers">
    <div class="weekdays">
      <div class="weekday" v-for="weekday in weekdays" :key="weekday">{{ weekday }}</div>
    </div>
    <div class="days">
      <button
        v-for="(date, index) in days"
        :key="index" class="btn__day"
        :class="{'empty': date === undefined, 'has_event': hasEvent(date), 'not_widget': !widgetFlag}"
        :style="`background-color: ${getColor(date)}`"
        @click="openModalEvents(date)"
      >
        <span>{{ date === undefined ? '' : date.day }}</span>
        <span>{{ date === undefined ? '' : hasEvent(date) && !widgetFlag ? `События: ${getEvents(date).length}` : '' }}</span>
      </button>
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
    getColor(date) {
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

.calendar_numbers {
  padding: 10px;
}

.weekdays {
  display: flex;
}

.weekday {
  flex: 1;
  text-align: center;
  margin-bottom: 6px;
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
  background-color: #80be91;
  color: #313131;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 10px #888888;
  }
  &:active {
    box-shadow: inset 0 0 20px #a6a6a6;
    cursor: pointer;
  }
}

</style>