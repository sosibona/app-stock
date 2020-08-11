import { getRandomInt } from '../service/helper'

export default {
  state: {
    products: []
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
