import { createStore } from 'vuex'

export default createStore({
  state: {
    drinks : [
      {
        id: 1,
        name: 'Heiße Schokolade',
        preis: '2,45 €'
      },
      {
        id: 2,
        name: 'Cappuccino',
        preis: '2,15 €'
      },
      {
        id: 3,
        name: 'Kräutertee',
        preis: '1,80 €'
      },
      {
        id: 4,
        name: 'Espresso',
        preis: '1,20 €'
      },
      {
        id: 5,
        name: 'Orangina',
        preis: '2,95 €'
      }

    ]
  },
  getters: {
    getDrinks(state) {
      return state.drinks
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
