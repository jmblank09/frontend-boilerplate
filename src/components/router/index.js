import React, { lazy, Suspense } from 'react'
import { Switch } from 'react-router-dom'

import * as paths from 'configs/paths'

import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import SpinnerWrapper from '../SpinnerWrapper'
import ErrorBoundary from '../error/ErrorBoundary'
import errorApiHandler from '../error/errorApiHandler'

const PageHome = lazy(() => import('pages/PageHome'))
const PageTodoList = lazy(() => import('pages/PageTodoList'))
const PageNotFound = lazy(() => import('pages/PageNotFound'))
const PageDashboard = lazy(() => import('pages/PageDashboard'))

const Router = () => (
  <ErrorBoundary>
    <Suspense fallback={<SpinnerWrapper />}>
      <Switch>
        <PublicRoute exact path={paths.PATH_HOMEPAGE} component={PageHome} />
        <PrivateRoute exact path={paths.PATH_DASHBOARD} component={PageDashboard} />
        <PrivateRoute exact path={paths.PATH_TODOLIST} component={PageTodoList} />
        <PublicRoute component={PageNotFound} />
      </Switch>
    </Suspense>
  </ErrorBoundary>
)

export default errorApiHandler(Router)
