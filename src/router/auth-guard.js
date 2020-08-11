import store from '../store'

export default async function (to, from, next) {
  if (store.state.user.idToken) {
    next()
  } else {
    await store.dispatch('tryAutoLogin')

    if (store.state.user.idToken) {
      next()
    } else {
      next('/login')
    }
  }
}
