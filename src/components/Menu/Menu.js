import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/login.action";
import { withRouter } from "react-router-dom";


class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //selectedMenu: "shop"
    };
  }

  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
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
                Administrator
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
              <li className="nav-item has-treeview menu-open">
                <a href="#" className="nav-link ">
                  <i className="nav-icon fa fa-home" />
                  <p>
                    Main Menu
                    <i className="right fa fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <div className="nav-link ">
                      <Link to="/dashboard" className="linkCustom">
                        <i className="fa fa-tachometer nav-icon" />
                        <p>Dashboard</p>
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link ">
                      <Link to="/cdr" className="linkCustom">
                        <i className="fa fa-database nav-icon" />
                        <p>CDR</p>
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link ">
                      <Link to="/billing" className="linkCustom">
                        <i className="fa fa-newspaper-o nav-icon" />
                        <p>Billing</p>
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link ">
                      <i className="fa fa-refresh nav-icon" />
                      <p>Import</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fa fa-suitcase" />
                  <p>
                    Accounts
                    <i className="fa fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <div className="nav-link ">
                      <Link to="/accountCreate" className="linkCustom">
                        <i className="fa fa-plus-circle nav-icon" />
                        <p>Create Account</p>
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link ">
                      <Link to="/account" className="linkCustom ">
                        <i className="fa fa-eye nav-icon" />
                        <p>View Account</p>
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link ">
                      <a
                        href="pages/examples/profile.html"
                        className=""
                      >
                        <i className="fa fa-refresh nav-icon" />
                        <p>Import Account</p>
                      </a>
                    </div>
                  </li>
                </ul>
              </li>

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fa fa-book" />
                  <p>
                    Report
                    <i className="fa fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/examples/invoice.html" className="nav-link">
                      <i className="fa fa-circle-o nav-icon" />
                      <p>Lumpsum</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/profile.html" className="nav-link">
                      <i className="fa fa-circle-o nav-icon" />
                      <p>Minimum</p>
                    </a>
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
