import { useState, useEffect } from 'react'
import queryString from 'query-string'
import { useHistory } from 'react-router-dom'

const useGetQueryParams = () => {
  const [queryParams, setQueryParams] = useState({})

  const { location } = useHistory()

  useEffect(() => {
    // eslint-disable-next-line
    const params = queryString.parse(location.search)

    setQueryParams(params)
  }, [])

  return queryParams
}

export default useGetQueryParams
