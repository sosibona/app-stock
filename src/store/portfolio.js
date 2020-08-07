export default {
  state: {
    money: 10000,
    shares: []
  },
  mutations: {
    buyProducts (state, payload) {
      const { quanity, productId, price } = payload
      state.money = state.money - quanity * price
      const hasProduct = state.shares.find(share => share.id === productId)
      if (hasProduct) {
        hasProduct.quanity += quanity
      } else {
        state.shares.push({ id: productId, quanity: quanity })
      }
    },
    sellProducts (state, payload) {
      const { quanity, productId, price } = payload
      state.money = state.money + quanity * price
      const product = state.shares.find(share => share.id === productId)
      product.quanity -= quanity
      if (product.quanity === 0) {
        state.shares = state.shares.filter(share => share.id !== productId)
      }
    },
    setDataPortfolio2 (state, payload) {
      state.money = payload.money
      state.shares = payload.shares ? payload.shares : []
    }
  },
  actions: {
    buyProducts ({ commit }, payload) {
      commit('buyProducts', payload)
    },
    sellProducts ({ commit }, payload) {
      commit('sellProducts', payload)
    },
    setDataPortfolio ({ commit }, payload) {
      commit('setDataPortfolio2', payload)
    }
  },
  getters: {
    money (state) {
      return state.money
    },
    shares (state, getters) {
      const allShares = state.shares.map(share => {
        const product = getters.allProducts.find(value => value.id === share.id)
        return {
          id: product.id,
          quanity: share.quanity,
          name: product.name,
          price: product.price
        }
      })
      return allShares
    }
  }
}
