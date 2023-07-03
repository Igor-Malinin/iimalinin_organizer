<template>
  <form class="todolist__form" @submit.prevent>
    <h4 class="todolist__title">Создание элемента</h4>
    <div class="todolist__form_group">
      <label for="todo_name">Наименование:</label>
      <main-textarea
        name="todo_name"
        v-model="todoItem.title"
        :style="'padding-right: 40px'"
        :maxLength="256"
        required
      />
    </div>
    <div class="todolist__form_group">
      <label for="todo_description">Описание:</label>
      <main-textarea
        name="todo_description"
        v-model="todoItem.description"
        :style="'padding-right: 50px'"
        :maxLength="2048"
      />
    </div>
    <div class="todolist__form_group chooseEvent">
      <label for="todo_event">Событие: <span>{{todoItem.todoEvent.eventName}}</span></label>
      <main-button @click="chooseEvent = !chooseEvent">{{!chooseEvent ? 'Выбрать событие' : 'Закрыть список'}}</main-button>
      <div v-if="chooseEvent" class="calendar_events__list">
        <div class="list__inner">
          <button
            v-for="calendarEvent in calendarEvents"
            type="button"
            class="calendar_event"
            :style="`background-color: ${calendarEvent.color}`"
            @click="updateEventItem(calendarEvent)"
          >
            {{calendarEvent.eventName}}
          </button>
        </div>
      </div>
    </div>
    <div class="event_form__error" v-if="errorToggle">Пожалуйста заполните все обязательные поля</div>
    <div class="control__btns">
      <main-button class="btn__todolist" type="button" @click="resetForm">Отменить</main-button>
      <main-button class="btn__todolist" type="button" @click="saveTodoItem">Сохранить</main-button>
    </div>
  </form>
</template>

<script>
import MainButton from "@/components/mainUI/MainButton.vue";
import {mapGetters} from "vuex";
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "TodoListForm",
  components: {MainButton},
  props: {
    calendarEvents: Array,
    isEditingTodoItem: Boolean,
    todoToUpdate: Object,
  },
  data() {
    return {
      chooseEvent: false,
      errorToggle: false,
      todoItem: {
        title: '',
        description: '',
        todoEvent: {
          eventName: '',
          eventStart: '',
          eventEnd: '',
          color: ''
        },
        isFinished: false
      }
    }
  },
  created() {
    if (this.todoToUpdate)
      this.todoItem = {...this.todoToUpdate}
  },
  methods: {
    resetForm() {
      if (this.isEditingTodoItem)
        this.$emit('cancel')
      else {
        this.todoItem.title = ''
        this.todoItem.description = ''
        this.todoItem.todoEvent = ''
      }
    },
    updateEventItem(calendarEvent) {
      this.todoItem.todoEvent = {
        eventName: calendarEvent.eventName,
        eventStart: calendarEvent.eventStart,
        eventEnd: calendarEvent.eventEnd,
        color: calendarEvent.color
      }
      this.chooseEvent = false
    },
    saveTodoItem() {
      if (this.todoItem.title) {
        if (!this.isEditingTodoItem) {
          this.todoItem.id = Date.now()
          this.$emit('createTodoItem', this.todoItem)
        }
        else {
          this.$emit('updateTodoItem', this.todoItem)
        }
        this.errorToggle = false
      }
      else {
        this.errorToggle = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.todolist__form {
  display: flex;
  flex-direction: column;
}

.todolist__form_group.chooseEvent {
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 10px;
    span {
      color: #5ca400;
    }
  }
}

.calendar_events__list {
  width: 100%;
  position: relative;
}

.list__inner {
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-x: scroll;
  background-color: #ffffff;
  border: 1px solid #2c3e50;
  border-top: none;
  border-radius: 4px;
}

.calendar_event {
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 10px rgb(0, 0, 0, .20);
  }
  &:active {
    box-shadow: inset 0 0 20px rgb(0, 0, 0, .30);
  }
}
.calendar_event:last-child {
  margin-bottom: 0;
}

.event_form__error {
  margin-top: 10px;
  color: lightcoral;
}

.control__btns {
  margin-top: 20px;
  align-self: flex-end;
}
.btn__todolist {
  margin-left: 20px;
}

</style>