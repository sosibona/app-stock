export default {
  state: {
    money: 0,
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
    setDataPortfolio (state, payload) {
      console.log('no register 7 setDataPortfolio', payload)
      state.money = payload.money
      state.shares = payload.portfolio ? payload.portfolio : []
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
      commit('setDataPortfolio', payload)
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
