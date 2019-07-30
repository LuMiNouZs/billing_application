import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/login.action";
import { withRouter } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenu: "dashboard"
    };
  }

  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="" className="brand-link">
          <img
            src="images/logo/logo1.png"
            alt="Bliing Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-normal">
            Billing Application
          </span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                {this.props.loginReducer.result} Full Stack Developer
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-header">GENERAL</li>
              <li className="nav-item has-treeview menu-open ">
                <a href="#" className="nav-link">
                  <i className="nav-icon fa fa-home" />
                  <p>
                    Main Menu
                    <i className="right fa fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/dashboard" className={this.state.selectedMenu === 'dashboard' ? 'nav-link active' : 'nav-link' } onClick={()=>this.setState({selectedMenu: 'dashboard'})}>
                      <i className="fa fa-tachometer nav-icon" />
                      <p>Dashboard</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/account" className={this.state.selectedMenu === 'account' ? 'nav-link active' : 'nav-link' } onClick={()=>this.setState({selectedMenu: 'account'})}>
                      <i className="fa fa fa-suitcase nav-icon" />
                      <p>Accounts</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cdr" className={this.state.selectedMenu === 'cdr' ? 'nav-link active' : 'nav-link' } onClick={()=>this.setState({selectedMenu: 'cdr'})}>
                      <i className="fa fa-database nav-icon" />
                      <p>Transaction</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/billing" className={this.state.selectedMenu === 'billing' ? 'nav-link active' : 'nav-link' } onClick={()=>this.setState({selectedMenu: 'billing'})}>
                      <i className="fa fa-newspaper-o nav-icon" />
                      <p>Billing</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  onClick={() => this.props.logout(this.props.history)}
                  className="nav-link"
                >
                  <i className="nav-icon fa fa-sign-out" />
                  <p>Log-Out</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({
  loginReducer
});

//const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  actions
)(withRouter(Menu));
