import axios from 'axios'

const baseUrl = 'https://app-stock-trader.firebaseio.com/data.json'

export function savedData (data) {
  return axios.put(baseUrl, data)
    .then(response => {
      return response.data
    })
    .catch(err => err)
}

export function getData () {
  return axios.get('https://app-stock-trader.firebaseio.com/data.json')
    .then(data => data)
    .catch(error => error)
}
