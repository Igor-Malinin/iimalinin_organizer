<template>
  <div class="todolist__item">
    <div class="todolist__item_inner">
      <div class="todolist_todos" :class="{'widget': widgetFlag}">
        <div class="child dark">{{ todoItem.title }}</div>
        <div class="child light overflow">{{ todoItem.description }}</div>
        <div class="child dark" :style="`background-color: ${todoItem.todoEvent.color}`">
          <div :class="{'event_modal': todoItem.todoEvent.eventName}" @click="openEventForm">
            {{ todoItem.todoEvent.eventName }}
          </div>
        </div>
        <div class="child light">
          <div class="checkbox_item">
            <input class="todo_checkbox" type="checkbox" :id="todoItem.id" v-model="todoItem.isFinished" />
            <label :for="todoItem.id"> {{ !widgetFlag ? (todoItem.isFinished ? "Завершено" : "Завершить") : '' }} </label>
          </div>
        </div>
        <div v-if="!widgetFlag" class="child dark">
          <button class="btn_edit" @click="editTodoItem">Редактировать</button>
        </div>
      </div>
    </div>
    <main-modal v-model:show="isEditingTodoItem">
      <todo-list-form
        :isEditingTodoItem="isEditingTodoItem"
        :todoToUpdate="todoItem"
        :calendarEvents="getCalendarEvents"
        @updateTodoItem="updateTodoItem"
        @cancel="editTodoItem"
      />
    </main-modal>
    <main-modal v-model:show="isEventFormOpen">
      <calendar-event-form
        :readableOnlyCalendarEvent="todoItem.todoEvent"
      />
    </main-modal>
    <main-modal msg="Дело Обновлено" v-model:show="isUpdatedTodo" />
  </div>
</template>

<script>
import TodoListForm from "@/components/todolist/TodoListForm.vue";
import CalendarEventForm from "@/components/calendar/CalendarEventForm.vue";
import toggleMixin from "@/mixins/toggleMixin";
import todolistItemsMixin from "@/mixins/todolistItemsMixin";

export default {
  name: "TodoListItem",
  components: {CalendarEventForm, TodoListForm},
  mixins: [toggleMixin, todolistItemsMixin],
  props: {
    todoItem: Object,
    widgetFlag: Boolean
  }
}
</script>

<style lang="scss" scoped>

.widget {
  .child {
    width: 28%;
  }
  .child:last-of-type {
    width: 16%;
  }
}
.todolist_todos {
  width: 100%;
  display: flex;
  text-align: center;
  word-break: break-all;
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  .light {
    background-color: #f6fcff;
  }
  .dark {
    background-color: #eaf7fc;
  }
}

.event_modal {
  height: 100%;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: rgba(215, 215, 215, 0.25);
    border-radius: 4px;
    box-shadow: inset 0 0 20px rgba(100, 100, 100, 0.32);
  }
  &:active {
    background-color: rgba(215, 215, 215, 0.40);
    box-shadow: inset 0 0 40px rgba(100, 100, 100, 0.42);
  }
}

.checkbox_item {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  input {
    cursor: pointer;
  }
  label {
    cursor: pointer;
    &:hover {
      color: #2a92ff;
    }
  }
}

.todo_checkbox {
  margin-right: 5px;
}

.btn_edit {
  padding: 8px;
  background-color: #98eeff;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #87d2e1;
  }
  &:active {
    background-color: #75b7c4;
  }
}

</style>