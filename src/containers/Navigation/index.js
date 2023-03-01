import React from 'react'
import { IconSettings } from '@salesforce/design-system-react'
import * as paths from 'configs/paths'
import * as styled from './styled'
import { ButtonLink } from 'components/Buttons'
import { useHistory } from 'react-router-dom'

const Navigation = () => {
  const history = useHistory()
  
  const onLogout = () => {
    localStorage.removeItem('token')
    history.push(paths.PATH_HOMEPAGE)
  }

  return (
    <IconSettings iconPath="/icons">
      <styled.UL>
        <styled.LI>
          <styled.MenuLink to={paths.PATH_DASHBOARD} activeClassName='selected'>Go to Dashboard page</styled.MenuLink>
        </styled.LI>
        <styled.LI>
          <styled.MenuLink to={paths.PATH_TODOLIST} activeClassName='selected'>Go to Todolist page</styled.MenuLink>
        </styled.LI>
        <styled.LI>
          <ButtonLink onClick={onLogout}>Logout</ButtonLink>
        </styled.LI>
      </styled.UL>
    </IconSettings>
  )
}

export default Navigation