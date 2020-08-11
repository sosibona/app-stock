import axios from 'axios'
// import router from '../router'

const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1'
})

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
