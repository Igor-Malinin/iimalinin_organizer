<template>
  <div class="calendar-widget" ref="widget" :style="{ left: widgetLeft + 'px', top: widgetTop + 'px' }" @mousedown="startDrag">
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
      :widgetFlag="widgetFlag"
      @openModalEvents="openModalEvents"
    />
    <div class="footer">
      <button class="btn__footer" @click.prevent="$router.push( '/calendar' )">Открыть вкладку</button>
    </div>
    <main-modal  v-model:show="isOpenModalEvents">
      <calendar-events-list
          :calendarEvents="eventsList"
          :widgetFlag="true"
      />
    </main-modal>
  </div>
</template>

<script>
import calendarControlMixin from "@/mixins/calendarControlMixin";
import calendarEventsMixin from "@/mixins/calendarEventsMixin";
import widgetMixin from "@/mixins/widgetMixin";
import toggleMixin from "@/mixins/toggleMixin";
import CalendarEventsList from "@/components/calendar/CalendarEventsList.vue";

export default {
  name: "CalendarWidget",
  components: {CalendarEventsList},
  mixins: [calendarControlMixin, calendarEventsMixin, widgetMixin, toggleMixin],
  data() {
    return {
      widgetLeft: 300,
      widgetTop: 200,
      widgetWidth: 0,
      widgetHeight: 0,
      widgetFlag: true
    };
  },
}
</script>

<style lang="scss" scoped>
.calendar-widget {
  width: 320px;
  position: absolute;
  top: 90px;
  left: 212px;
  background-color: #d4e8fa;
  border: 1px solid #153654;
  border-radius: 5px;
  cursor: grab;
  box-shadow: 0 0 10px rgb(0, 0, 0, .25);
}
.calendar-widget:active {
  cursor: grabbing;
}

h3 {
  margin: 0;
}

.footer {
  background-color: #6b96c2;
  padding: 10px 20px;
  border-top: 1px solid #153654;
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
