import axios from 'axios'
import store from '../store'

const baseUrl = 'https://app-stock-trader.firebaseio.com/data.json'

export function savedData (data) {
  console.log(store.state.user.idToken)
  return axios.post(baseUrl + '?auth=' + store.state.user.idToken, data)
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => err)
}

export function updateData (data) {
  console.log(data)
  console.log(store.state.user.idToken)
  console.log(store.state.user.userId)
  // return axios.get(`https://app-stock-trader.firebaseio.com/data/data/${store.state.user.userId}.json` + '?auth=' + store.state.user.idToken)
  return axios.put(`https://app-stock-trader.firebaseio.com/data/${store.state.user.userId}.json` + '?auth=' + store.state.user.idToken, data)
  // return axios.put('https://app-stock-trader.firebaseio.com/data/' + store.state.user.userId + '.json', data)
    .then(r => console.log(r))
    .catch(err => err)
}

// export function savedData (data) {
//   console.log(store.state.user.idToken)
//   return axios.put(baseUrl + '/' + store.state.user.userId, data)
//     .then(response => {
//       console.log(response)
//       return response.data
//     })
//     .catch(err => err)
// }

export function getData () {
  return axios.get('https://app-stock-trader.firebaseio.com/data.json' + '?auth=' + store.state.user.idToken)
    .then(data => data)
    .catch(error => error)
}
