import React from 'react'
import * as styled from './styled'

const PrivateLayout = ({ children }) => {
  return (
    <styled.Wrapper iconPath="/icons">
      { children}
    </styled.Wrapper>
  )
}

export default PrivateLayout