import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { connect } from 'react-redux'
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ForgetPwd from "./pages/Authentication/ForgetPassword";
import UserProfile from "./pages/Authentication/UserProfile";
import Pages404 from "./pages/Utility/pages-404"
import Dashboard from "./pages/Dashboard/index";
import VerticalLayout from "./components/VerticalLayout";
import HorizontalLayout from "./components/HorizontalLayout";
import "./assets/scss/theme.scss";

// function getLayout(layout) {
//   let layoutCls = VerticalLayout;

//   switch (layout.layoutType) {
//     case "horizontal":
//       layoutCls = HorizontalLayout;
//       break;
//     default:
//       layoutCls = VerticalLayout;
//       break;
//   }
//   return layoutCls;
// };


const Private = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest} render={props => {
      if (rest.authData) {
        return <VerticalLayout><Component {...props} /></VerticalLayout>
      }
      return <Redirect to="/login" />
    }} />
  )
}

const mapStateToProps = (state) => ({
  authData: state.authorization.authData,
  layout: state.Layout,
})

const PrivateRoute = connect(mapStateToProps)(Private)

export const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgetPwd} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/profile" component={UserProfile} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route component={Pages404} />
      </Switch>
    </Router>
  )
}

export const history = createBrowserHistory()