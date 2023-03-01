import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { PATH_HOMEPAGE } from 'configs/paths'

import PrivateLayout from 'containers/PrivateLayout'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = () => {
    return localStorage.getItem('token')
  }

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn() ? (
          <PrivateLayout>
            <Component {...props} />
          </PrivateLayout>
        ) : (
          <Redirect to={PATH_HOMEPAGE} />
        )
      }
    />
  )
}

export default PrivateRoute
