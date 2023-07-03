<template>
  <div class="events_list__item">
    <div class="item_inner">
      <p class="event__name">Событие: {{calendarEvent.eventName}} </p>
      <div class="time">
        <p class="event__start">
          Дата начала: {{separateDate(calendarEvent.eventStart).date}}
        </p>
        <p class="event__start">
          Время: {{separateDate(calendarEvent.eventStart).time}}
        </p>
      </div>
      <div class="time">
        <p class="event__end">
          Дата окончания: {{separateDate(calendarEvent.eventEnd).date}}
        </p>
        <p class="event__end">
          Время: {{separateDate(calendarEvent.eventEnd).time}}
        </p>
      </div>
      <main-button class="btn_edit" v-if="!widgetFlag" @click="editEvent">Редактировать</main-button>
      <calendar-event-form
        v-if="isEditing"
       :key="calendarEvent.id"
       :eventForUpdate="calendarEvent"
       :isEditing="isEditing"
       @updateEvent="updateEvent"
       @cancel="editEvent"
      />
    </div>
    <main-modal msg="Событие Обновлено" v-model:show="isUpdatedEvent" />
  </div>
</template>

<script>
import CalendarEventForm from "@/components/calendar/CalendarEventForm.vue";
import calendarEventsMixin from "@/mixins/calendarEventsMixin";

export default {
  name: "CalendarEventsListItem",
  components: {CalendarEventForm},
  mixins: [calendarEventsMixin],
  props: {
    calendarEvent: Object,
    widgetFlag: Boolean,
  },
  methods: {
    editEvent() {
      this.isEditing = !this.isEditing
    },
    separateDate(date) {
      return {date: date.slice(0,10), time: date.slice(11,16)}
    },
  }
}
</script>

<style lang="scss" scoped>

.item_inner {
  display: flex;
  flex-direction: column;
}

.time {
  display: flex;
  justify-content: space-between;
  .event__start {
    color: #47ab54;
  }
  .event__start:first-child {
    margin-right: 10px;
  }
  .event__end {
    color: #bb7070;
  }
  .event__end:first-child {
    margin-right: 10px;
  }
}

.btn_edit {
  margin: 10px 0 0 auto;
}

</style>