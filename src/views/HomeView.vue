<template>
  <div class="home">
    <h2 class="home__title">
      Главная страница отображает виджеты календаря и списка дел.
      Для создания событий в календаре, списка дел или редактирования
      существующих откройте соответствующую вкладку
    </h2>
    <calendar-widget/>
    <todo-widget/>
  </div>
</template>

<script>
import CalendarWidget from "@/components/calendar/CalendarWidget.vue";
import TodoWidget from "@/components/todolist/TodoWidget.vue";

export default {
  name: 'HomeView',
  components: {TodoWidget, CalendarWidget}
}
</script>

<style lang="scss" scoped>

.home {
  padding: 0 60px;
}

.home__title {
  margin-top: 20px;
  text-align: center;
}

</style>
