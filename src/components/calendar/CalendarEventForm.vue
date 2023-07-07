<template>
  <div class="form_container">
    <form class="event_form" @submit.prevent>
      <h4 class="event_form__title" v-if="!eventForUpdate">Создание события</h4>
      <h4 class="title_edit" v-else>Редактирование события</h4>
      <div class="event_form__group name">
        <label for="event_name">Наименование:</label>
        <main-textarea
          class="event_name"
          :style="'padding-right: 40px'"
          id="event_name"
          type="text"
          v-model="calendarEvent.eventName"
          :readonly="readableOnlyCalendarEvent"
          :maxLength="256"
          required
        />
      </div>
      <div class="event_form__group">
        <label for="event_start">Дата и время начала:</label>
        <main-input
          id="event_start"
          type="datetime-local"
          v-model="calendarEvent.eventStart"
          :min="minStartDate"
          :max="maxStartDate"
          :readonly="readableOnlyCalendarEvent"
          required
        />
      </div>
      <div class="event_form__group">
        <label for="event_end">Дата и время окончания:</label>
        <main-input
          id="event_end"
          type="datetime-local"
          v-model="calendarEvent.eventEnd"
          :min="minEndDate"
          :readonly="isAllDay || readableOnlyCalendarEvent"
          required
        />
      </div>
      <div class="event_form__group check_color">
        <div class="checkbox_allday">
          <label for="event_allday">Целый день:</label>
          <input
            id="event_allday"
            type="checkbox"
            v-model="isAllDay"
            :disabled="readableOnlyCalendarEvent"
            @change="updateEndDate">
        </div>
        <div class="color_picker">
          <label for="color_pick">Цвет:</label>
          <input
            class="input_color"
            type="color"
            id="head"
            name="color_pick"
            :disabled="readableOnlyCalendarEvent"
            v-model="calendarEvent.color">
        </div>
      </div>
      <div class="event_form__error" v-if="errorToggle">Пожалуйста заполните все обязательные поля</div>
      <div class="event_form__error" v-if="timeErrorToggle">Пожалуйста введите корректное время</div>
      <div class="control__btns">
        <main-button class="btn__form_control" type="button" @click="resetForm" :disabled="readableOnlyCalendarEvent">
          Отменить
        </main-button>
        <main-button class="btn__form_control" type="button" @click="saveEvent" :disabled="readableOnlyCalendarEvent">
          Сохранить
        </main-button>
      </div>
    </form>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CalendarEventForm",
  props: {
    eventForUpdate: Object,
    readableOnlyCalendarEvent: Object
  },
  data() {
    return {
      minStartDate: this.getCurrentDate(),
      maxStartDate: '',
      minEndDate: this.getCurrentDate(),
      isAllDay: false,
      errorToggle: false,
      timeErrorToggle: false,
      isSaved: false,
      calendarEvent: {
        eventName: '',
        eventStart: '',
        eventEnd: '',
        eventDays: [],
        color: '#C4F6C8',
      }
    }
  },
  created() {
    this.calendarEvent.eventStart = this.getCurrentDate()
    if (this.eventForUpdate)
      this.calendarEvent = {...this.eventForUpdate}
    if(this.readableOnlyCalendarEvent) {
      this.calendarEvent = {...this.readableOnlyCalendarEvent}
    }
  },
  updated() {
    new Date(this.minStartDate) > new Date(this.calendarEvent.eventStart) ||
    new Date(this.calendarEvent.eventStart) > new Date(this.calendarEvent.eventEnd) ?
      this.timeErrorToggle = true : this.timeErrorToggle = false
    this.minEndDate = this.calendarEvent.eventStart
    this.maxStartDate = this.calendarEvent.eventEnd
  },
  methods: {
    resetForm() {
      if (!this.eventForUpdate) {
        this.calendarEvent.eventName = ''
        this.calendarEvent.eventStart = this.getCurrentDate()
        this.minEndDate = this.calendarEvent.eventStart
        this.isAllDay = false
        this.calendarEvent.eventEnd = ''
      }
      else {
        this.$emit('cancel')
      }
    },
    getCurrentDate() {
      const currentDate = new Date()
      const year = currentDate.getFullYear()
      const month = String(currentDate.getMonth() + 1).padStart(2, '0')
      const day = String(currentDate.getDate()).padStart(2, '0')
      let hours = String(currentDate.getHours()).padStart(2, '0')
      let minutes = String(currentDate.getMinutes()).padStart(2, '0')
      return `${year}-${month}-${day}T${hours}:${minutes}`
    },
    updateEndDate() {
      if (this.isAllDay) {
        const startDate = new Date(this.calendarEvent.eventStart)
        if (!isNaN(startDate.getTime())) {
          const endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 23, 59)
          endDate.setMinutes(endDate.getMinutes() - startDate.getTimezoneOffset())
          this.calendarEvent.eventEnd = endDate.toISOString().slice(0, 16)
        }
      } else {
        this.calendarEvent.eventEnd = ''
      }
    },
    getEventDays(start, end) {
      const duration = Math.floor((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24))
      let eventDays = []
      for (let i = 0; i <= duration; i++) {
        let currentDate = new Date(new Date(start).getTime() + (i * 24 * 60 * 60 * 1000));
        eventDays.push({
          year: currentDate.getFullYear(),
          month: currentDate.getMonth() + 1,
          day: currentDate.getDate()
        });
      }
      return eventDays
    },
    saveEvent() {
      if (this.calendarEvent.eventName && this.calendarEvent.eventStart && (!this.isAllDay || this.calendarEvent.eventEnd) && !this.timeErrorToggle) {
        this.calendarEvent.eventDays = this.getEventDays(this.calendarEvent.eventStart, this.calendarEvent.eventEnd)
        if(!this.eventForUpdate) {
          this.calendarEvent.id = Date.now()
          this.$emit('createEvent', this.calendarEvent)
        }
        else {
          this.$emit('updateEvent', this.calendarEvent)
        }

        this.calendarEvent = {
          eventName: '',
          eventStart: '',
          eventEnd: '',
          eventDays: []
        }
        this.errorToggle = false
      }
      else {
        if (!this.timeErrorToggle)
          this.errorToggle = true
      }
    },
  },
  computed: {
    ...mapGetters({
      getCalendarEvents: "postEvents/getCalendarEvents"
    })
  }
}
</script>

<style lang="scss" scoped>

.event_form {
  display: flex;
  flex-direction: column;
}

.event_form__title {
  text-align: center;
  margin-bottom: 20px;
}
.title_edit {
  margin: 8px 0;
}

.event_form__group.check_color {
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    margin-right: 5px;
  }
  .color_picker {
    display: flex;
    align-items: center;
    .input_color {
      padding: 2px;
      border: 1px solid #2c3e50;
      background-color: #ffffff;
      border-radius: 3px;
    }
  }
}

.event_form__error {
  margin-top: 10px;
  color: lightcoral;
}

.control__btns {
  align-self: flex-end;
  margin-top: 15px;
}

.btn__form_control {
  margin-left: 20px;
}

</style>