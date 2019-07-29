import React, { Component } from "react";
import {connect} from 'react-redux';
import {login, autoLogin} from './../../actions/login.action'

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: { username: "", password: "" }
    };
  }

  componentDidMount(){
    this.props.autoLogin(this.props.history)
  }

  onClickLogin = ()=>{
    this.props.login(this.props.history, this.state.user)
  }

  handleChange = (event)=> {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
    //console.log(name +" "+ value);
  }
  
  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <div>
            <img
              src="images/logo/logo1.png"
              alt="Bliing Logo"
              className="img-fluid img-circle elevation-3"
              style={{ opacity: ".8", height: 60 }}
            />
            <b> Billing </b> Application
          </div>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div
            className="card-body login-card-body"
            style={{ background: "whitesmoke", padding: 30, borderRadius: 10 }}
          >
            <p className="login-box-msg">
              Please Sign in to start your session
            </p>
            <form>
              <div className="form-group has-feedback">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input
                    name="username"
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="form-group has-feedback">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text fa fa-lock"> </span>
                  </div>
                  <input
                    name="password"
                    onChange={this.handleChange}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="checkbox icheck">
                    <label>
                      <input type="checkbox" /> Remember Me
                    </label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button
                    onClick={(e)=>{this.onClickLogin(); e.preventDefault()}}
                    type="submit"
                    className="btn btn-primary btn-block btn-flat"
                  >
                    Sign In
                  </button>
                  {this.props.loginReducer.isFetching ? (
                    <span>Loading...</span>
                  ): this.props.loginReducer.result && (
                    <span>{this.props.loginReducer.result}</span>
                  )
                  }
                </div>
                {/* /.col */}
              </div>
            </form>
            <div className="social-auth-links text-center mb-3" />
            <br />
            {/* /.social-auth-links */}
            <p className="mb-1">
              <a href="register.html" className="text-center">
                Register a new membership
              </a>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({loginReducer}) => ({
  loginReducer
})

const mapDispatchToProps = {
  login,autoLogin
}


export default connect(mapStateToProps, mapDispatchToProps) (Login);
