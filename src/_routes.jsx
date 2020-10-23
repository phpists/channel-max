import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Switch, Route, Redirect } from 'react-router-dom'


const Private = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => {
      if (rest.isLogged) {
        return rest.isEmailConfirmed ? <Component {...props} /> : <Redirect to="/resend-confirm-email" />
      }
      return <Redirect to="/login" />
    }} />
  )
}

const mapStateToProps = (state) => ({
  isLogged: selectors.authorization.isLogged(state),
})

const PrivateRoute = connect(mapStateToProps)(Private)

export const Routes = () => {
  return (
    <Router history={history}>
      <LastLocationProvider>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/friends" component={FriendsPage} />
          <Route component={() => <>404 not found</>} />
        </Switch>
      </LastLocationProvider>
    </Router>
  )
}

export const history = createBrowserHistory()