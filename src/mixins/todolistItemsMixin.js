import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  data() {
    return {
      isEventFormOpen: false,
      isCreatingTodoItem: false,
      isEditingTodoItem: false,
      isCreatedTodo: false,
      isUpdatedTodo: false
    }
  },
  methods: {
    ...mapMutations({
      setTodoList: "postTodos/setTodoList"
    }),
    createTodoItem(todoItem) {
      this.isCreatingTodoItem = false
      this.isCreatedTodo = true
      this.getTodoList.push(todoItem)
    },
    updateTodoItem(todoItem) {
      this.isEditingTodoItem = false
      this.isUpdatedTodo = true
      this.getTodoList.filter(todo => {
        if (todo.id === todoItem.id) {
          todo.title = todoItem.title
          todo.description = todoItem.description
          todo.todoEvent = todoItem.todoEvent
          todo.color = todoItem.color
        }
      })
    },
  },
  computed: {
    ...mapState({
      todoList: state => state.postTodos.todoList
    }),
    ...mapGetters({
      getTodoList: "postTodos/getTodoList",
      getCalendarEvents: "postEvents/getCalendarEvents"
    })
  }
}