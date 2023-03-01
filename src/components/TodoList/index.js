import React from 'react'
import * as styled from './styled'
import { IconSettings } from '@salesforce/design-system-react'
import AddForm from './AddForm'
import Lists from './Lists'

const TodoList = () => (
  <IconSettings iconPath='/icons'>
    <styled.Wrapper>
      <Lists />
      <AddForm />
    </styled.Wrapper>
  </IconSettings>
)

export default React.memo(TodoList)