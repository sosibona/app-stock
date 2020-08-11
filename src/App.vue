<template>
  <div id="app">
    <app-trader></app-trader>
  </div>
</template>

<script>
import Trader from './components/Trader.vue'
import { getData } from './service/api'
import { getRandomInt } from './service/helper'

export default {
  components: {
    appTrader: Trader
  },
  async mounted () {
    const email = localStorage.getItem('email')
    const token = localStorage.getItem('token')
    if (!email || !token) {
      console.log('no register')
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
      this.$store.dispatch('setData', data)
      return
    }
    console.log(email)
    try {
      const response = await getData()
      const dataRes = response.data
      for (const key in dataRes) {
        const user = dataRes[key]
        if (user.email === email) {
          const data = {
            email,
            token,
            userId: key,
            money: user.money,
            stocks: user.stocks,
            shares: user.shares ? user.shares : []
          }
          this.$store.dispatch('setData', data)
        }
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
</script>

<style>
body {
  background-color: #e5e9f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
