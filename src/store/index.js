import { createStore } from 'vuex'
import {calendarEventsModule} from "@/store/calendarEventsModule";
import {todolistItemsModule} from "@/store/todolistItemsModule";
import {personalAccountModule} from "@/store/personalAccountModule";

export default createStore({
  modules: {
    postEvents: calendarEventsModule,
    postTodos: todolistItemsModule,
    postAccount: personalAccountModule,
  }
})
