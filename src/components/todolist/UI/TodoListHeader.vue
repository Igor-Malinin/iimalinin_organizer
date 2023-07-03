<template>
  <div class="todolist_header">
    <div class="header">
      <strong>Название</strong>
      <strong>Описание</strong>
      <strong>Событие</strong>
      <strong>Статус</strong>
      <strong v-if="!widgetFlag">Редактировать</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoListHeader",
  props: {
    widgetFlag: Boolean
  }
}
</script>

<style lang="scss" scoped>

.header {
  height: 51px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #91c2f1;
  border-bottom: 1px solid #153654;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  strong {
    width: 28%;
  }
  strong:last-of-type {
    width: 16%;
  }
}

</style>