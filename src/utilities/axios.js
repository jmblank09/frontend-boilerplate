import axios from 'axios'

let instance = axios.create({
  baseURL: 'https://fcc-weather-api.glitch.me', // sample base url
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }

  return config
})

instance.interceptors.response.use(
  res => res,
  err => Promise.reject(err)
)

export default instance
