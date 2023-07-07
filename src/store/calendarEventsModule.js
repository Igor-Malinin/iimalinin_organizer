export const calendarEventsModule = {
  state: () => ({
    calendarEvents: [
      {id: 1, eventName: 'Учеба', eventStart: '2023-07-02T08:30', eventEnd: '2023-07-03T17:00', eventDays: [
          {year: 2023, month: 7, day: 2},
          {year: 2023, month: 7, day: 3}
        ], color: '#f6dcc6'
      },
      {id: 2, eventName: 'Поход по магазинам', eventStart: '2023-07-14T09:40', eventEnd: '2023-07-14T17:30', eventDays: [
          {year: 2023, month: 7, day: 14}
        ], color: '#c6f6ca'
      },
      {id: 3, eventName: 'Празднование Дня рождения', eventStart: '2023-07-10T10:25', eventEnd: '2023-07-12T23:30', eventDays: [
          {year: 2023, month: 7, day: 10},
          {year: 2023, month: 7, day: 11},
          {year: 2023, month: 7, day: 12},
        ], color: '#eff6c4'
      },
      {id: 4, eventName: 'Совещания', eventStart: '2023-07-17T08:35', eventEnd: '2023-07-21T18:30', eventDays: [
          {year: 2023, month: 7, day: 17},
          {year: 2023, month: 7, day: 18},
          {year: 2023, month: 7, day: 19},
          {year: 2023, month: 7, day: 20},
          {year: 2023, month: 7, day: 21},
        ], color: '#e0c4f6'
      },
      {id: 5, eventName: 'Готовка', eventStart: '2023-07-27T11:40', eventEnd: '2023-07-27T13:00', eventDays: [
          {year: 2023, month: 7, day: 27},
        ], color: '#98f3e2'
      },
      {id: 6, eventName: 'Прогулка', eventStart: '2023-07-24T10:30', eventEnd: '2023-07-24T19:00', eventDays: [
          {year: 2023, month: 7, day: 24},
        ], color: '#f3a398'
      },
      {id: 7, eventName: 'Командировка', eventStart: '2023-07-18T15:30', eventEnd: '2023-07-19T22:00', eventDays: [
          {year: 2023, month: 7, day: 18},
          {year: 2023, month: 7, day: 19},
        ], color: '#98a0f3'
      },
      {id: 8, eventName: 'Выезд в город', eventStart: '2023-07-18T10:30', eventEnd: '2023-07-18T13:00', eventDays: [
          {year: 2023, month: 7, day: 18},
        ], color: '#98f39a'
      },
    ],
  }),
  getters: {
    getCalendarEvents(state) {
      return state.calendarEvents
    }
  },
  mutations: {
    setCalendarEvents(state, calendarEvents) {
      state.calendarEvents = calendarEvents
    },
  },
  namespaced: true
}