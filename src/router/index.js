import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '../components/Header/Home.vue'
import Stocks from '../components/Stock/Stocks.vue'
import Portfolio from '../components/Portfolio/Portfolio.vue'
import Login from '../components/Auth/Login.vue'
import Registration from '../components/Auth/Registration.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: AuthGuard
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: Stocks,
    beforeEnter: AuthGuard
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    beforeEnter: AuthGuard
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
