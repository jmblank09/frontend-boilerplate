import React from 'react'
import { Spinner } from '@salesforce/design-system-react'

import * as styled from './styled'

const SpinnerWrapper = () => (
  <styled.Wrapper>
    <Spinner
      size='small'
      variant='base'
      assistiveText={{ label: 'Loading' }}
    />
  </styled.Wrapper>
)

export default SpinnerWrapper
