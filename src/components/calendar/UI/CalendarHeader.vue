<template>
  <div class="header">
    <button class="btn__change_month" @click="$emit('prevMonth')">&#8249; {{getPrevMonthName()}}</button>
    <div class="header__date_picker">
      <input class="date_picker-input" type="date" :value="selectedDate" @input="$emit('updateSelectedDate', $event.target.value)" />
    </div>
    <button class="btn__change_month" @click="$emit('nextMonth')">{{getNextMonthName()}} &#8250;</button>
  </div>
</template>

<script>

export default {
  name: "CalendarHeader",
  props: {
    selectedDate: String,
    currentDate: Date
  },
  methods: {
    getPrevMonthName() {
      const prevMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
      const options = { month: 'long' };
      return prevMonth.toLocaleString('default', options);
    },
    getNextMonthName() {
      const nextMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
      const options = { month: 'long' };
      return nextMonth.toLocaleString('default', options);
    },
  }
}
</script>

<style lang="scss" scoped>

@mixin colors {
  border: 1px solid #2c3e50;
  border-radius: 4px;
  color: #fffaf5;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #91c2f1;
  border-bottom: 1px solid #153654;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.btn__change_month {
  @include colors;
  background-color: #398af3;
  width: 80px;
  cursor: pointer;
  &:hover {
    background-color: #347cda;
  }
  &:active {
    background-color: #2f6fc2;
  }
}

.date_picker-input {
  @include colors;
  background-color: #236fd2;
  font-weight: 600;
  padding: 0 6px;
  height: 30px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    background-color: #1f63bb;
  }
  &:active {
    background-color: #1b57a4;
  }
}

</style>