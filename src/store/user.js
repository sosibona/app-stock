// import * as firebase from 'firebase/app'
import axios from '../service/axios-auth'
import globalAxios from 'axios'
import router from '../router/index'

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
      state.userId = payload.userId
    },
    clearUserData (state) {
      state.idToken = null
      state.email = null
      state.userId = null
    }
  },
  actions: {
    async registrationUser ({ commit, dispatch }, payload) {
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
          userId: user.data.localId,
          email: user.data.email
        })
        localStorage.setItem('token', user.data.idToken)
        localStorage.setItem('userId', user.data.localId)
        localStorage.setItem('email', user.data.email)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async loginUser ({ commit }, payload) {
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
          userId: user.data.localId,
          email: user.data.email
        })
        localStorage.setItem('token', user.data.idToken)
        localStorage.setItem('userId', user.data.localId)
        localStorage.setItem('email', user.data.email)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    tryAutoLogin ({ commit }) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const userId = localStorage.getItem('userId')
      const email = localStorage.getItem('email')
      const user = {
        token,
        userId,
        email
      }
      commit('setUser', user)
    },
    logOut ({ commit }) {
      commit('clearUserData')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('email')
      router.push('/login')
    },
    fetchuser ({ commit, state }) {
      if (!state.idToken) {
        return
      }
      globalAxios.get('/data.json' + '?auth=' + state.idToken)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    },
    storeUser ({ commit, state }, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.post('https://app-stock-trader.firebaseapp.com/data.json' + '?auth=' + state.idToken, userData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    // async fetchUser ({ commit }) {
    //   const user = await globalAxios.get('/data')
    // }
    // async registrationUser ({ commit }, payload) {
    //   commit('clearError')
    //   commit('setLoading', true)
    //   const { email, password } = payload
    //   try {
    //     const user = await axios.post('/accounts:signUp?key=AIzaSyBDkE0rOjsD5X2_T2fmdFOrX9QyVt0RFQg', {
    //       email,
    //       password,
    //       returnSecureToken: true
    //     })
    //     console.log(user)
    //     const newUser = {
    //       email: user.data.email,
    //       userId: user.data.localId,
    //       token: user.data.idToken
    //     }
    //     // const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
    //     // const newUser = {
    //     //   email: user.user.email,
    //     //   id: user.user.uid
    //     // }
    //     commit('setUser', newUser)
    //     localStorage.setItem('token', user.data.idToken)
    //     localStorage.setItem('userId', user.data.localId)
    //     commit('setLoading', false)
    //   } catch (error) {
    //     commit('setLoading', false)
    //     commit('setError', error.message)
    //     throw error
    //   }
    // },
    // async loginUser ({ commit }, { email, password }) {
    //   commit('clearError')
    //   commit('setLoading', true)
    //   try {
    //     const user = await axios.post('/accounts:signInWithPassword?key=AIzaSyBDkE0rOjsD5X2_T2fmdFOrX9QyVt0RFQg', {
    //       email,
    //       password,
    //       returnSecureToken: true
    //     })
    //     // const user = await firebase.auth().signInWithEmailAndPassword(email, password)
    //     console.log(user)
    //     const newUser = {
    //       email: user.data.email,
    //       userId: user.data.localId,
    //       token: user.data.idToken
    //     }
    //     commit('setUser', newUser)
    //     localStorage.setItem('token', user.data.idToken)
    //     localStorage.setItem('userId', user.data.userId)
    //     commit('setLoading', false)
    //   } catch (error) {
    //     commit('setLoading', false)
    //     commit('setError', error.message)
    //     throw error
    //   }
    // },
    // autoLogInUser ({ commit }) {
    //   console.log('autoLogInUser')
    //   const token = localStorage.getItem('token')
    //   const userId = localStorage.getItem('userId')
    //   commit('setUser', { token, userId })
    //   // commit('setUser', { email, id: uid })
    // },
    // logOutUser ({ commit }) {
    //   commit('logOut')
    //   localStorage.removeItem('token')
    //   localStorage.removeItem('userId')
    //   commit('setUser', null)
    // }
  },
  getters: {
    user (state) {
      return state.user
    },
    isUserLogIn (state) {
      return state.idToken !== null
    }
  }
}
