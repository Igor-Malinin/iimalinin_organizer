<template>
  <div class="todolist">
    <main-window msg="Список дел" :style="'background-color: #caf1ff'">
        <todo-list-header class="todo__header" />
        <todo-list class="todo_list" :todoList="todoList" />
        <main-button class="btn__todolist_create" @click="openCreateTodoItem">Создать</main-button>
    </main-window>

    <main-modal v-model:show="isCreatingTodoItem">
      <todo-list-form
        :calendarEvents="getCalendarEvents"
        @createTodoItem="createTodoItem"
      />
    </main-modal>

    <main-modal msg="Дело Сохранено" v-model:show="isCreatedTodo" />
  </div>
</template>

<script>
import TodoList from "@/components/todolist/TodoList.vue";
import todolistItemsMixin from "@/mixins/todolistItemsMixin";
import TodoListForm from "@/components/todolist/TodoListForm.vue";
import toggleMixin from "@/mixins/toggleMixin";
import TodoListHeader from "@/components/todolist/UI/TodoListHeader.vue";

export default {
  name: "TodoListView",
  components: {TodoListHeader, TodoListForm, TodoList},
  mixins: [todolistItemsMixin, toggleMixin],
}
</script>

<style lang="scss" scoped>

.todo_list {
  max-height: 450px;
  border-bottom: 1px solid #2c3e50;
  overflow-x: scroll;
}

.btn__todolist_create {
  font-size: 16px;
  font-weight: 500;
  align-self: center;
  width: 100px;
  background-color: #87caf5;
  color: #2c3e50;
  margin: 20px;
  &:hover {
    background-color: #7db9e0;
  }
  &:active {
    background-color: #6a9cbd;
  }
}

</style>