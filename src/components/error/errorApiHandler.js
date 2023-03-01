import React, { Component } from 'react'

import api from 'utilities/axios'

const errorApiHandler = WrappedComponent => {
  class ErrorAPIHOC extends Component {
    UNSAFE_componentWillMount() {
      this.apiInterceptor = api.interceptors.response.use(
        response => response,
        error => this.handleError(error)
      )
    }

    handleError = (error, type) => {
      if (error.message === 'Network Error' || error.response?.status === 500) {
        console.log('API Error')
        // do something with the error
      }

      return Promise.reject(error)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }

    componentWillUnmount() {
      api.interceptors.response.eject(this.apiInterceptor)
    }
  }

  return ErrorAPIHOC
}

export default errorApiHandler
