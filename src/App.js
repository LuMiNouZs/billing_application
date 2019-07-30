import React, { Component } from 'react'

import Menu from './components/Menu';
import Header from './components/Header';
import DashBoard from './components/DashBoard';
import Footer from './components/Footer';
import Login from './components/Login'
import Billing from './components/Billing'
import CDRs from './components/CDRs'
import Account from './components/Account'
import AccountCreate from './components/AccountCreate'
import AccountEdit from './components/AccountEdit'

import { connect } from "react-redux"; 
import * as actions from "../src/actions/app.action";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { server } from "./constants";

const isLoggedIn =()=>{
  return localStorage.getItem(server.TOKEN_KEY) != null;
};

// Protected Route
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export class App extends Component {
  
  componentDidMount(){
    this.props.appForceUpdate(this.forceUpdateEntirely);
  }

  forceUpdateEntirely = () => {
    this.forceUpdate();
  }

  render() {
    const LoginRedirect = ()=>(<Redirect to='/login'/>)
    return (
      <Router>
        <div>
          {isLoggedIn() ? <Header/>: null }
          {isLoggedIn() ? <Menu/>: null }
          <Route exact path='/' component={LoginRedirect}/>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/dashboard' component={DashBoard}/>
          <PrivateRoute path='/billing' component={Billing}/>
          <PrivateRoute path='/cdr' component={CDRs}/>
          <PrivateRoute path='/account' component={Account}/>
          <PrivateRoute path="/account-create" component={AccountCreate}/>
          <PrivateRoute path="/account-edit" component={AccountEdit}/>
          {isLoggedIn() ? <Footer/>: null }
        </div>
      </Router>
    )
  }
}


const mapStateToProps = ({appReducer}) => ({
  appReducer
})

//const mapDispatchToProps = {}

export default connect(mapStateToProps, actions)(App);
