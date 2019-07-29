import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions/billing.action";
//import _ from "lodash";
import Moment from "react-moment";
//import NumberFormat from "react-number-format";

class Billing extends Component {

  componentDidMount() {
    let year = '2019';//this.props.match.params.id;
    let month = '3';
    let type = 'all';
    this.props.getBillingByCDRsPerMonth(year,month,type);
  }

  createRows = () => {
   
    const { result } = this.props.billingReducer;
    return (
      result != null &&
      result.map(item => (
        <tr style={{ cursor: "pointer" }}>
          <td className="td_left" style={{ width: "5%" }}>
            {item.id}
          </td>
          <td className="td_left" style={{ width: "%" }}>
            <Moment format="YYYY/MM/DD HH:mm">{item.date_time}</Moment>
          </td>
          <td className="td_left" style={{ width: "10%" }}>
            {item.source_no}
          </td>
          <td className="td_left" style={{ width: "20%" }}>
            {item.destination_no}
          </td>
          
          <td className="td_left" style={{ width: 10 }}>
            {item.province_source}
          </td>
          <td className="td_left" style={{ width: "10%" }}>
            {item.feature_description_1}
          </td>
          <td className="td_left" style={{ width: "10%" }}>
            {item.feature_description_2}
          </td>
          <td className="td_left" style={{ width: "10%" }}>
            {item.duration}
          </td>
          <td className="td_left" style={{ width: "10%" }}>
            
          </td>
          <td className="td_left" style={{ width: "10%" }}>
            {item.total_charge}
          </td>
        </tr>
      ))
    );
  };



  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Billing</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Billing</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* Main content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row" />
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Billing Transaction</h3>
                </div>
                <div className="card-body">
                <table id="biilingCDR" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                      <th>#</th>
                        <th>Date</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Province</th>
                        <th>Description1</th>
                        <th>Description2</th>
                        <th>Duration</th>
                        <th>Rate</th>
                        <th>TotalCharge</th>
                      </tr>
                    </thead>
                    <tbody>{this.createRows()}</tbody>
                    <tfoot>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Province</th>
                        <th>Description1</th>
                        <th>Description2</th>
                        <th>Duration</th>
                        <th>Rate</th>
                        <th>TotalCharge</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ billingReducer }) => ({
  billingReducer
});

//const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  actions
)(Billing);
