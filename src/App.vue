<template>
  <div id="app">
    <app-trader></app-trader>
  </div>
</template>

<script>
import Trader from './components/Trader.vue'
import { getData } from './service/api'

export default {
  components: {
    appTrader: Trader
  },
  async mounted () {
    const email = localStorage.getItem('email')
    const token = localStorage.getItem('token')
    if (!token && !email) {
      return
    }
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
            shares: user.portfolio ? user.portfolio : []
          }
          this.$store.dispatch('setData', data)
        }
      }
    } catch (error) {
      this.$store.dispatch('setError', error)
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
