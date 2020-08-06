import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import * as firebase from 'firebase'

Vue.config.productionTip = false

Vue.filter('localeDisplayMoney', (value) => {
  return value.toLocaleString('en')
})

Vue.use(ElementUI)

new Vue({
  router,
  store,
  created () {
    this.$store.dispatch('changePrice')
    firebase.initializeApp({
      apiKey: 'AIzaSyBDkE0rOjsD5X2_T2fmdFOrX9QyVt0RFQg',
      authDomain: 'app-stock-trader.firebaseapp.com',
      databaseURL: 'https://app-stock-trader.firebaseio.com',
      projectId: 'app-stock-trader',
      storageBucket: 'app-stock-trader.appspot.com',
      messagingSenderId: '733172533551',
      appId: '1:733172533551:web:1dc60373e5ab28aeb4f9da'
    })
  },
  render: h => h(App)
}).$mount('#app')
