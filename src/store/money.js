export default {
  state: {
    money: 10000,
    shares: []
  },
  mutations: {
    buyProducts (state, payload) {
      const { quantity, productId, price } = payload
      state.money = state.money - quantity * price
      const hasProduct = state.shares.find(share => share.id === productId)
      if (hasProduct) {
        hasProduct.quantity += quantity
      } else {
        state.shares.push({ id: productId, quantity: quantity })
        console.log(state.shares)
      }
    },
    sellProducts (state, payload) {
      const { quantity, productId, price } = payload
      state.money = state.money + quantity * price
      const product = state.shares.find(share => share.id === productId)
      product.quantity -= quantity
      if (product.quantity === 0) {
        state.shares = state.shares.filter(share => share.id !== productId)
      }
    }
  },
  actions: {
    buyProducts ({ commit }, payload) {
      commit('buyProducts', payload)
    },
    sellProducts ({ commit }, payload) {
      commit('sellProducts', payload)
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
          quantity: share.quantity,
          name: product.name,
          price: product.price
        }
      })
      return allShares
    }
  }
}
