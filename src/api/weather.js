import api from 'utilities/axios'

export default {
  getWeather: (lat, lon) => api.get(`/api/current?lat=${lat}&lon=${lon}`).then(res => res.data)
}
