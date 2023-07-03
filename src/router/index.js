import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import( '../views/CalendarView.vue')
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import( '../views/TodoListView.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import( '../views/PersonalAccountView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
