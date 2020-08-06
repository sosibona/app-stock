import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Header/Home.vue'
import Stocks from '../components/Stock/Stocks.vue'
import Portfolio from '../components/Portfolio/Portfolio.vue'
import Login from '../components/Auth/Login.vue'
import Registration from '../components/Auth/Registration.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: Stocks
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Registration
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Register' && !store.getters.user) next()
  else if (to.name !== 'Login' && !store.getters.user) next({ name: 'Login' })
  else next()
})

export default router
