import { getRandomInt } from '../service/helper'

export default {
  state: {
    products: [
      // { id: '1', name: 'Google', price: getRandomInt(50, 100) },
      // { id: '2', name: 'Amazon', price: getRandomInt(50, 100) },
      // { id: '3', name: 'Audi', price: getRandomInt(50, 100) },
      // { id: '4', name: 'LG', price: getRandomInt(50, 100) }
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
    },
    setDataStock (state, payload) {
      state.products = payload
    }
  },
  actions: {
    changePrice ({ commit }) {
      commit('endDay')
    },
    setLoadData ({ commit, dispatch }, payload) {
      const { money, portfolio } = payload
      commit('setDataStock', payload.stocks)
      dispatch('setDataPortfolio', { money, portfolio }, { root: true })
    }
  },
  getters: {
    allProducts (state) {
      return state.products
    }
  }
}
