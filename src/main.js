import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

Vue.filter('localeDisplayMoney', (value) => {
  if (value > 0) {
    return value.toLocaleString('en')
  }
})

axios.defaults.baseURL = 'app-stock-trader.firebaseapp.com'
axios.defaults.headers.get.Accepts = 'application/json'

axios.interceptors.response.use((response) => {
  return response
}, function (error) {
  if (error.response.status === 401 || error.response.status === 403) {
    router.push('/login')
  }
  return error.response
})

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
