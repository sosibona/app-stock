import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

Vue.filter('localeDisplayMoney', (value) => {
  return value.toLocaleString('en')
})

axios.defaults.baseURL = 'app-stock-trader.firebaseapp.com'
axios.defaults.headers.get.Accepts = 'application/json'

axios.interceptors.response.use((response) => {
  console.log(response)
  if (response.status === 401) {
    alert('You are not authorized')
  }
  return response
}, (error) => {
  console.log(error)
  if (error.response && error.response.data) {
    return Promise.reject(error.response.data)
  }
  return Promise.reject(error.message)
})

Vue.use(ElementUI)

// const config = {
//   apiKey: 'AIzaSyBDkE0rOjsD5X2_T2fmdFOrX9QyVt0RFQg',
//   authDomain: 'app-stock-trader.firebaseapp.com',
//   databaseURL: 'https://app-stock-trader.firebaseio.com',
//   projectId: 'app-stock-trader',
//   storageBucket: 'app-stock-trader.appspot.com',
//   messagingSenderId: '733172533551',
//   appId: '1:733172533551:web:1dc60373e5ab28aeb4f9da'
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
