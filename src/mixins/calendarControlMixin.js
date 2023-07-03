export default {
  data() {
    return {
      currentDate: new Date(),
      days: [],
      weekdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      selectedDate: null,
    }
  },
  mounted() {
    this.generateCalendarDays()
  },
  methods: {
    generateCalendarDays() {
      const year = this.currentDate.getFullYear()
      const month = this.currentDate.getMonth()
      const firstDayOfMonth = new Date(year, month, 1).getDay()
      const daysInMonth = new Date(year, month + 1, 0).getDate()
      const offset = (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1)
      this.days = Array.from({ length: offset }, () => {}).concat(
        Array.from({ length: daysInMonth }, (_, i) =>
          {
            return {year: year, month: month + 1, day: i + 1}
          })
      )
      this.selectedDate = this.formatDate(this.currentDate)
    },
    prevMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1)
      this.generateCalendarDays()
      this.selectedDate = this.formatDate(this.currentDate)
    },
    nextMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1)
      this.generateCalendarDays()
      this.selectedDate = this.formatDate(this.currentDate)
    },
    updateSelectedDate(value) {
      this.selectedDate = value
      const date = new Date(value)
      if (!isNaN(date.getTime())) {
        this.currentDate = date
        this.generateCalendarDays()
      }
    },
    formatDate(date) {
      const year = date.getFullYear()
      let month = String(date.getMonth() + 1).padStart(2, '0')
      let day = String(date.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    },
  }
}