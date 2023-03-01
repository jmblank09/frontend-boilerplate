import React from 'react'
import { IconSettings, Button } from '@salesforce/design-system-react'
import { useHistory } from 'react-router-dom'
import * as paths from 'configs/paths'

const PageHome = () => {
  const history = useHistory()

  const onLogin = () => {
    localStorage.setItem('token', 'ac2ds23f')
    history.push(paths.PATH_DASHBOARD)
  }

  return (
    <IconSettings iconPath="/icons">
      <h1>Home Page</h1>
      You are currently logged out, Please <Button variant='default' onClick={onLogin}>login here.</Button>
    </IconSettings>
  )
}

export default PageHome