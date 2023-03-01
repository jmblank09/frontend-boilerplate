import React from 'react'
import { IconSettings } from '@salesforce/design-system-react'
import { useHistory } from 'react-router-dom'
import { ButtonLink } from 'components/Buttons'
import * as paths from 'configs/paths'

const PageNotFound = () => {
  const history = useHistory()

  const goToHomepage = () => {
    history.push(paths.PATH_HOMEPAGE)
  }

  return (
    <IconSettings iconPath="/icons">
      <IconSettings iconPath="/icons">
        <h1>Page Not Found</h1>
        The requested page was not found. Visit <ButtonLink variant='default' onClick={goToHomepage}>homepage.</ButtonLink>
      </IconSettings>
    </IconSettings>
  )
}

export default PageNotFound