import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Header/Home.vue'
import Stocks from '../components/Stock/Stocks.vue'
import Portfolio from '../components/Portfolio/Portfolio.vue'
import Login from '../components/Auth/Login.vue'
import Registration from '../components/Auth/Registration.vue'

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

export default router
