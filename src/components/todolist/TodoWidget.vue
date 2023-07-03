<template>
  <div class="todolist_widget" ref="widget" :style="{ left: widgetLeft + 'px', top: widgetTop + 'px' }" @mousedown="startDrag">
    <todo-list-header :widgetFlag="true" />
    <todo-list class="scroll"
      :todoList="todoList"
      :widgetFlag="widgetFlag"
    />
    <div class="widget_footer">
      <button class="btn__footer" @click.prevent="$router.push( '/todolist' )">Открыть вкладку</button>
    </div>
  </div>
</template>

<script>
import widgetMixin from "@/mixins/widgetMixin";
import todolistItemsMixin from "@/mixins/todolistItemsMixin";
import TodoList from "@/components/todolist/TodoList.vue";
import TodoListHeader from "@/components/todolist/UI/TodoListHeader.vue";

export default {
  name: "TodoWidget",
  components: {TodoListHeader, TodoList},
  mixins: [widgetMixin, todolistItemsMixin],
  data() {
    return {
      widgetLeft: 700,
      widgetTop: 200,
      widgetWidth: 0,
      widgetHeight: 0,
      widgetFlag: true,
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.todolist_widget {
  width: 400px;
  // height: 397px такое никуда не годится согласен)),
  // но я уже что-то не стал заморачиваться
  // и просто статическую высоту задавал,
  // чтобы на стили сильно много времени не тратить
  height: 397px;
  position: absolute;
  top: 90px;
  left: 212px;
  background-color: #d4e8fa;
  border: 1px solid #153654;
  border-radius: 5px;
  cursor: grab;
  box-shadow: 0 0 10px rgb(0, 0, 0, .25);
}

.scroll {
  max-height: 283px;
  overflow-x: scroll;
}

.widget_footer {
  background-color: #6b96c2;
  padding: 10px 20px;
  border-top: 1px solid #153654;
}

.btn__footer {
  width: 100%;
  height: 40px;
  font-weight: 600;
  font-size: 16px;
  background-color: #4077be;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  color: #fffaf5;
  cursor: pointer;
  &:hover {
    background-color: #3968a6;
  }
  &:active {
    background-color: #31598d;
  }
}

</style>