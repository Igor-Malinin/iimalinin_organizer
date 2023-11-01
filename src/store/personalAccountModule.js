export const personalAccountModule = {
  state: () => ({
    accountInfo: {
      id: 1,
      surname: 'Малинин',
      name: 'Игорь',
      patronymic: 'Игоревич',
      birthDate: '25.08.1999',
      age: 24,
      img: 'https://images.wallpaperscraft.ru/image/single/tigr_art_goluboglazyj_136938_2780x2780.jpg'
    }
  }),
  getters: {
    getAccountInfo(state) {
      return state.accountInfo
    }
  },
  mutations: {
    setAccountInfo(state, accountInfo) {
      state.accountInfo = accountInfo
    },
  },
  namespaced: true
}