<template>
  <main-widget :left="700" :footerLink="'/todolist'">
    <todo-list-header :widgetFlag="true" />
    <todo-list class="scroll"
      :todoList="todoList"
      :widgetFlag="true"
    />
  </main-widget>
</template>

<script>
import todolistItemsMixin from "@/mixins/todolistItemsMixin";
import TodoList from "@/components/todolist/TodoList.vue";
import TodoListHeader from "@/components/todolist/UI/TodoListHeader.vue";

export default {
  name: "TodoWidget",
  components: {TodoListHeader, TodoList},
  mixins: [todolistItemsMixin],
}
</script>

<style lang="scss" scoped>
.scroll {
  overflow-x: scroll;
}
</style>