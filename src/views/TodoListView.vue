<template>
  <div class="todolist">
    <div class="todolist__inner">
      <h2 class="todolist__title">Список дел</h2>
      <div class="todolist__todos">
        <todo-list-header class="todo__header" />
        <todo-list
            :todoList="todoList"
        />
        <main-button class="btn__todolist_create" @click="openCreateTodoItem">Создать</main-button>
      </div>
      <main-modal v-model:show="isCreatingTodoItem">
        <todo-list-form
          :calendarEvents="getCalendarEvents"
          @createTodoItem="createTodoItem"
        />
      </main-modal>
      <main-modal msg="Дело Сохранено" v-model:show="isCreatedTodo" />
    </div>
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

.todolist__inner {
  padding: 30px 80px 50px;
}

.todolist__title {
  text-align: center;
  margin-bottom: 30px;
}

.todo__header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.todolist__todos {
  display: flex;
  flex-direction: column;
  background-color: #caf1ff;
  box-shadow: 0 0 30px rgb(0, 0, 0, .15);
  border-radius: 4px;
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