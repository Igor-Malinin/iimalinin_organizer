<template>
  <div class="calendar">
    <main-window msg="Календарь" :style="'background-color: #f2f9ff'">
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
            @openModalEvents="openModalEvents"
            @updateEvent="updateEvent"
        />
        <div class="calendar__content_footer">
          <button class="btn__create_event" @click="openCreateEvent">Создать событие</button>
        </div>

    </main-window>

    <main-modal v-model:show="isCreatingEvent">
      <calendar-event-form
          @createEvent="createEvent"
      />
    </main-modal>

    <main-modal  v-model:show="isOpenModalEvents">
      <calendar-events-list
          :calendarEvents="eventsList"
      />
    </main-modal>

    <main-modal msg="Событие Сохранено" v-model:show="isCreatedEvent" />
  </div>
</template>

<script>
import calendarControlMixin from "@/mixins/calendarControlMixin";
import CalendarEventForm from "@/components/calendar/CalendarEventForm.vue";
import toggleMixin from "@/mixins/toggleMixin";
import calendarEventsMixin from "@/mixins/calendarEventsMixin";
import CalendarEventsList from "@/components/calendar/CalendarEventsList.vue";

export default {
  name: "CalendarView",
  components: {CalendarEventsList, CalendarEventForm},
  mixins: [calendarControlMixin, toggleMixin, calendarEventsMixin]
}
</script>

<style lang="scss" scoped>

.calendar__content {
}

.calendar__content_footer {
  background-color: #5495d3;
  text-align: center;
  padding: 15px 0;
  border-top: 1px solid #2c3e50;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.btn__create_event {
  padding: 10px;
  background-color: #13a1fa;
  font-size: 16px;
  color: #fffaf5;
  border: 1px solid #011c36;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #1190e0;
  }
  &:active {
    background-color: #107bbe;
  }
}

</style>