import api from 'api'
import * as types from './types'

export const fetchWeather = (lat, lon) => {
  return async dispatch => {
    dispatch(fetchWeatherRequest())

    try {
      const data = await api.weather.getWeather(lat, lon)

      dispatch(fetchWeatherSuccess(data))
    } catch (error) {
      dispatch(fetchWeatherFailure(error))
    }
  }
}

const fetchWeatherRequest = () => ({
  type: types.FETCH_WEATHER_REQUEST
})

const fetchWeatherSuccess = data => ({
  payload: data,
  type: types.FETCH_WEATHER_SUCCESS
})

const fetchWeatherFailure = error => ({
  error,
  type: types.FETCH_WEATHER_ERROR
})
