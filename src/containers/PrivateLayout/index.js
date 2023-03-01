import React from 'react'
import * as styled from './styled'
import Navigation from 'containers/Navigation'

const PrivateLayout = ({ children }) => {
  return (
    <styled.Wrapper iconPath="/icons">
      <h1>Hi user, you are currently logged in.</h1>

      <Navigation />

      <div style={{marginTop: 20}}>
      { children}
      </div>
    </styled.Wrapper>
  )
}

export default PrivateLayout