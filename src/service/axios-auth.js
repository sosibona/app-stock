import axios from 'axios'
// import router from '../router'

const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1'
})

// export function signUp (payload) {
//   console.log('100')
//   return axios.post('/accounts:signUp?key=AIzaSyBDkE0rOjsD5X2_T2fmdFOrX9QyVt0RFQg', payload)
//     .then(response => response)
//     .catch(error => error)
// }

// axios.interceptors.response.use((response) => {
//   console.log(response)
//   return response
// }, function (error) {
//   console.log('error')
//   if (error.response.status === 401 || error.response.status === 403) {
//     router.push('/login')
//   }
//   return error.response
// })

export default instance
