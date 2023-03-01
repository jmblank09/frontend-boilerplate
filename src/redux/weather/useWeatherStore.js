import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as actions from './actions'

const useWeatherStore = () => {
  const state = useSelector(state => state.weatherReducer)
  const content = useMemo(() => {
    return state
  }, [state])

  const dispatch = useDispatch()

  const fetchWeather = useCallback((lat, long) => dispatch(actions.fetchWeather(lat, long)), [dispatch])

  return {
    ...content,
    fetchWeather
  }
}

export default useWeatherStore
