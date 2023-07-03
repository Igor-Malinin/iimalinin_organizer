import { createApp } from 'vue'
import App from './App.vue'
import mainComponents from '@/components/mainUI'
import calendarComponents from '@/components/calendar/UI'
import router from './router'
import store from './store'

const app = createApp(App)

mainComponents.forEach(component => {
  app.component(component.name, component)
})
calendarComponents.forEach(component => {
  app.component(component.name, component)
})

app.use(store).use(router).mount('#app')
