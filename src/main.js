import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'

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
  },
  render: h => h(App)
}).$mount('#app')
