import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        {/* To the right */}
        <div className="float-right d-sm-none d-md-block">
          
        </div>
        {/* Default to the left */}
        <strong>
          Copyright © 2019 <a href="#">LuminouZs</a>.
        </strong>{" "}
        All rights reserved.
      </footer>
    );
  }
}

export default Footer;
