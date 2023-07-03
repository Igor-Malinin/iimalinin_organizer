<template>
  <div class="todolist">
    <div class="todolist_items">
      <todo-list-item
        v-for="todoItem in todoList"
        class="todolist_list"
        :todoItem="todoItem"
        :key="todoItem.id"
        :widgetFlag="widgetFlag"
      />
    </div>
  </div>
</template>

<script>
import TodoListItem from "@/components/todolist/TodoListItem.vue";

export default {
  name: "TodoList",
  components: {TodoListItem},
  props: {
    todoList: Array,
    widgetFlag: Boolean
  }
}
</script>

<style lang="scss" scoped>

.todolist_list {
  border-bottom: 1px solid #2c3e50;
}
.todolist_list:last-child {
  border-bottom: none;
}

</style>