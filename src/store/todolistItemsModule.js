export const todolistItemsModule = {
  state: () => ({
    todoList: [
      { id: 1, title: "Завтрак", description: "Позавтракать: фрукты, каша", todoEvent:
          {eventName: 'Утренние дела', eventStart: '2023-11-02T06:40', eventEnd: '2023-11-02T8:30', color: '#dcfffa'},
        isFinished: true
      },
      { id: 2, title: "Сходить в магазин", description: "Купить: шубу, сапоги, носки, шапку, варежки", todoEvent:
          {eventName: 'Поход по магазинам', eventStart: '2023-11-14T09:40', eventEnd: '2023-11-14T17:30', color: '#c6f6ca'},
        isFinished: false
      },
      { id: 3, title: "Приготовить обед", description: "Рис с овощами: морковка, болгарка, помидоры; салат: помидоры, огурцы, зелень, масло", todoEvent:
          {eventName: 'Готовка', eventStart: '2023-11-27T11:40', eventEnd: '2023-11-27T13:00', color: '#98f3e2'},
        isFinished: false
      },
      { id: 4, title: "Погулять", description: "Сходить в новый парк, искупаться в речке, покормить белок", todoEvent:
          {eventName: 'Прогулка', eventStart: '2023-11-24T10:30', eventEnd: '2023-11-24T19:00', color: '#f3a398'},
        isFinished: false
      }
    ],
  }),
  getters: {
    getTodoList(state) {
      return state.todoList
    },
    getTodoIsFinished(state) {
      return state.todoList.map(todo => todo.isFinished)
    }
  },
  mutations: {
    setTodoList(state, todoList) {
      state.todoList = todoList
    },
  },
  namespaced: true
}