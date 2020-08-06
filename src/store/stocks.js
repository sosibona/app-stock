function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export default {
  state: {
    products: [
      { id: '1', name: 'Google' },
      { id: '2', name: 'Amazon' },
      { id: '3', name: 'Audi' },
      { id: '4', name: 'LG' }
    ]
  },
  mutations: {
    endDay (state) {
      const newPrice = state.products.map(product => {
        return {
          ...product,
          price: getRandomInt(50, 100)
        }
      })
      state.products = newPrice
    }
  },
  actions: {
    changePrice ({ commit }) {
      commit('endDay')
    }
  },
  getters: {
    allProducts (state) {
      return state.products
    }
  }
}
