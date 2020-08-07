import store from '../store'

export default function (to, from, next) {
  console.log(store.getters.user)
  if (store.getters.user) {
    next()
  } else {
    next('/login')
  }
}
