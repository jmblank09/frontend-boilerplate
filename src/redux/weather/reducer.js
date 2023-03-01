import * as types from './types'

const INITIAL_STATE = {
  data: null,
  error: null,
  loading: false
}

const weatherReducer = (state = INITIAL_STATE, action) => {
  const { type, error, payload } = action

  switch (type) {
    case FETCH_WEATHER_REQUEST:
      return { ...state, loading: true }
    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        error: null,
        data: payload,
        loading: false
      }
    case FETCH_WEATHER_ERROR:
      return { ...state, error, loading: false }
    default:
      return state
  }
}

export default weatherReducer
