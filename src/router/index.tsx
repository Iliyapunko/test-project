import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router'

import * as Routes from 'constants/routing'

const Main = React.lazy(() => import('pages/Main'))

const Router = () => (
  <Suspense fallback={null}>
    <Switch>
      <Redirect exact from="/" to={Routes.MAIN} />
      <Route exact path={Routes.MAIN} component={Main} />
    </Switch>
  </Suspense>
)

export default Router
