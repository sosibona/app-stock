import Vue from 'vue'
import Vuex from 'vuex'
import products from './stocks'
import money from './portfolio'
import user from './user'
import information from './information'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    money,
    user,
    information
  }
})
