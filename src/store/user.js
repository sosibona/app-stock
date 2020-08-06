import * as firebase from 'firebase/app'

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async registrationUser ({ commit }, payload) {
      commit('clearError')
      commit('setLoading', true)
      const { email, password } = payload
      try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        const newUser = {
          email: user.user.email,
          id: user.user.uid
        }
        commit('setUser', newUser)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async loginUser ({ commit }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(user)
        const newUser = {
          email: user.user.email,
          id: user.user.uid
        }
        commit('setUser', newUser)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
