import axios from '../service/axios-auth'
import router from '../router/index'
import { saveData, getData } from '../service/api'
import store from '../store'
import { getRandomInt } from '../service/helper'

export default {
  state: {
    idToken: null,
    userId: null,
    email: null
  },
  mutations: {
    setUser (state, payload) {
      state.idToken = payload.token
      state.email = payload.email
    },
    clearUserData (state) {
      state.idToken = null
      state.email = null
      state.userId = null
    },
    setUserId (state, userId) {
      state.userId = userId
    }
  },
  actions: {
    setData ({ commit, dispatch }, payload) {
      const { money, stocks, shares, userId } = payload
      commit('setUserId', userId)
      dispatch('setLoadData', { money, portfolio: shares, stocks }, { root: true })
    },
    async registrationUser ({ commit, dispatch, store }, payload) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await axios.post('/accounts:signUp?key=AIzaSyBDkE0rOjsD5X2_T2fmdFOrX9QyVt0RFQg', {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
        commit('setUser', {
          token: user.data.idToken,
          email: user.data.email
        })
        const data = {
          money: 10000,
          shares: [],
          stocks: [
            { id: '1', name: 'Google', price: getRandomInt(50, 100) },
            { id: '2', name: 'Amazon', price: getRandomInt(50, 100) },
            { id: '3', name: 'Audi', price: getRandomInt(50, 100) },
            { id: '4', name: 'LG', price: getRandomInt(50, 100) }
          ]
        }
        dispatch('setData', data)
        dispatch('setUserData')
        localStorage.setItem('token', user.data.idToken)
        localStorage.setItem('email', user.data.email)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.response.data.error.message)
        throw error
      }
    },
    async loginUser ({ commit, dispatch }, payload) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await axios.post('/accounts:signInWithPassword?key=AIzaSyBDkE0rOjsD5X2_T2fmdFOrX9QyVt0RFQg', {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
        commit('setUser', {
          token: user.data.idToken,
          email: user.data.email
        })
        const response = await getData()
        const dataRes = response.data
        for (const key in dataRes) {
          const user = dataRes[key]
          if (user.email === payload.email) {
            const data = {
              userId: key,
              money: user.money,
              stocks: user.stocks,
              shares: user.portfolio ? user.portfolio : []
            }
            dispatch('setData', data)
          }
        }
        localStorage.setItem('token', user.data.idToken)
        localStorage.setItem('email', user.data.email)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.response.data.error.message)
        throw error
      }
    },
    tryAutoLogin ({ commit }) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const email = localStorage.getItem('email')
      commit('setUser', { token, email })
    },
    logOut ({ commit }) {
      commit('clearUserData')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('email')
      router.push('/login')
    },
    setUserData ({ commit, dispatch, state }) {
      if (!state.idToken) {
        return
      }
      const data = {
        money: store.getters.money,
        email: state.email,
        stocks: store.getters.allProducts,
        shares: store.getters.shares
      }
      saveData(data)
        .then(response => commit('setUserId', response.name))
        .catch(error => {
          dispatch('setError', error)
          throw error
        })
    }
  },
  getters: {
    userEmail (state) {
      return state.email
    },
    isUserLogIn (state) {
      return state.idToken !== null
    }
  }
}
