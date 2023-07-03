<template>
  <div class="eventsList">
    <div class="event__container">
      <div class="event__info" v-if="calendarEvents">
        <h4 class="eventslist_title">События</h4>
        <calendar-events-list-item
          v-for="calendarEvent in calendarEvents"
          class="event__info_event"
          :calendarEvent="calendarEvent"
          :key="calendarEvent.id"
          :widgetFlag="widgetFlag"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarEventForm from "@/components/calendar/CalendarEventForm.vue";
import CalendarEventsListItem from "@/components/calendar/CalendarEventsListItem.vue";

export default {
  name: "CalendarEventsList",
  components: {CalendarEventsListItem, CalendarEventForm},
  props: {
    calendarEvents: Array,
    widgetFlag: Boolean
  }
}
</script>

<style scoped>

.event__info_event {
  margin-bottom: 15px;
}
.event__info_event:last-child {
  margin-bottom: 0;
}

.eventslist_title {
  text-align: center;
  margin-bottom: 10px;
}

</style>