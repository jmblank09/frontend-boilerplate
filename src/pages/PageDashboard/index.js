import React, { useEffect } from 'react'
import { IconSettings } from '@salesforce/design-system-react'

import useWeatherStore from 'redux/weather/useWeatherStore'
import useGetQueryParams from 'hooks/useGetQueryParams'

const PageDashboard = () => {
  const { data, fetchWeather } = useWeatherStore()
  const queryParams = useGetQueryParams()

  useEffect(() => {
    fetchWeather(35, 139)
  }, [fetchWeather])

  console.log(data, 'weather data')
  console.log(queryParams, 'query params')

  return (
    <IconSettings iconPath="/icons">
       <h1>Dashboard Page</h1>
    </IconSettings>
  )
}

export default PageDashboard
