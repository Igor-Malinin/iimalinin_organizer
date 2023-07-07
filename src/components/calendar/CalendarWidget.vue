<template>
  <main-widget :left="300" :footerLink="'/calendar'">
    <calendar-header
      @prevMonth="prevMonth"
      @nextMonth="nextMonth"
      @updateSelectedDate="updateSelectedDate"
      :selectedDate="selectedDate"
      :currentDate="currentDate"
    />
    <calendar-numbers
      :weekdays="weekdays"
      :days="days"
      :calendarEvents="getCalendarEvents"
      :widgetFlag="true"
      @openModalEvents="openModalEvents"
    />
  </main-widget>

  <main-modal  v-model:show="isOpenModalEvents">
    <calendar-events-list
        :calendarEvents="eventsList"
        :widgetFlag="true"
    />
  </main-modal>
</template>

<script>
import calendarControlMixin from "@/mixins/calendarControlMixin";
import calendarEventsMixin from "@/mixins/calendarEventsMixin";
import toggleMixin from "@/mixins/toggleMixin";
import CalendarEventsList from "@/components/calendar/CalendarEventsList.vue";

export default {
  name: "CalendarWidget",
  components: {CalendarEventsList},
  mixins: [calendarControlMixin, calendarEventsMixin, toggleMixin]
}
</script>

<style lang="scss" scoped>
input {
  color: #56a7ff;
}
</style>
