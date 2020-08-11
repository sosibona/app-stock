import axios from 'axios'
import store from '../store'

const baseUrl = 'https://app-stock-trader.firebaseio.com/data.json'

export function saveData (data) {
  return axios.post(baseUrl + '?auth=' + store.state.user.idToken, data)
    .then(response => response)
    .catch(err => err)
}

export function updateData (data) {
  return axios.put(`https://app-stock-trader.firebaseio.com/data/${store.state.user.userId}.json` + '?auth=' + store.state.user.idToken, data)
    .then(response => response)
    .catch(err => err)
}

export function getData () {
  return axios.get(baseUrl + '?auth=' + store.state.user.idToken)
    .then(response => response)
    .catch(err => err)
}
