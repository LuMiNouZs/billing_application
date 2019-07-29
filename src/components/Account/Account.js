import React, { Component } from "react";
import "./Account.css";

import { connect } from "react-redux";
import * as actions from "../../actions/account.action";
import { Link } from "react-router-dom";
//import _ from "lodash";
import Moment from "react-moment";
import NumberFormat from "react-number-format";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationTotalStandalone,
  PaginationListStandalone,
  SizePerPageDropdownStandalone
} from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import ToolkitProvider, {
  ColumnToggle,
  Search
} from "react-bootstrap-table2-toolkit";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getAccount();
  }

  renderTable = () => {
    const options = {
      custom: true,
      paginationSize: 4,
      pageStartIndex: 1,
      firstPageText: "First",
      prePageText: "Back",
      nextPageText: "Next",
      lastPageText: "Last",
      nextPageTitle: "First page",
      prePageTitle: "Pre page",
      firstPageTitle: "Next page",
      lastPageTitle: "Last page",
      showTotal: true,
      totalSize: this.props.accountReducer.length
    };
    const { SearchBar } = Search;
    const { ToggleList } = ColumnToggle;
    const headerSortingStyle = { backgroundColor: "#c8e6c9" };
    const columns = [
      {
        dataField: "_id",
        text: "ID",
        headerClasses: "text-center",
        hidden: true,
        sort: true,
        classes: "text-center",
        headerSortingStyle
      },
      {
        dataField: "accountCode",
        text: "Account Code",
        headerClasses: "text-center",
        sort: true,
        classes: "text-center",
        headerSortingStyle
      },
      {
        dataField: "accountName",
        text: "AccountName",
        headerClasses: "text-center w-50",
        sort: true,
        headerSortingStyle
      },
      {
        dataField: "status",
        text: "Status",
        headerClasses: "text-center",
        sort: true,
        classes: "text-center",
        headerSortingStyle,
        formatter: (cellContent, row) => {
          if (row.status == 1) {
            return (
              <div>
                <span className="badge bg-success" role="alert">
                  {" "}
                  Active
                </span>
              </div>
            );
          }
          return (
            <div>
              <span className="badge bg-danger" role="alert">
                {" "}
                inActive
              </span>
            </div>
          );
        }
      },
      {
        dataField: "type",
        text: "Type",
        headerClasses: "text-center",
        sort: true,
        classes: "text-center",
        headerSortingStyle
      },
      {
        dataField: "created",
        text: "Created",
        headerClasses: "text-center",
        hidden: true,
        sort: true,
        classes: "text-center",
        headerSortingStyle
      },
      {
        dataField: "df2",
        isDummyField: true,
        text: "Action",
        headerClasses: "text-center",
        classes: "text-center",
        headerSortingStyle,
        formatter: (cellContent, row) => {
          if (row._id) {
            return (
              <div>
                <a className="btn btn-primary btn-sm" href="#">
                  <i class="fa fa-folder" aria-hidden="true" />
                </a>
                <a className="btn btn-info btn-sm" href="#">
                  <i class="fa fa-pencil" aria-hidden="true" />
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i class="fa fa-trash" aria-hidden="true" />
                </a>
              </div>
            );
          }
          return (
            <h5>
              <span className="label label-danger"> Backordered</span>
            </h5>
          );
        }
      }
    ];
    const defaultSorted = [
      {
        dataField: "accountCode",
        order: "desc"
      }
    ];
    const contentTable = ({ paginationProps, paginationTableProps }) => (
      <div>
        <PaginationListStandalone {...paginationProps} />
        <ToolkitProvider
          bootstrap4
          keyField="_id"
          columns={columns}
          data={this.props.accountReducer.result}
          defaultSorted={defaultSorted}
          search
          columnToggle
        >
          {toolkitprops => (
            <div>
              <ToggleList {...toolkitprops.columnToggleProps} />
              <SearchBar {...toolkitprops.searchProps} />
              <BootstrapTable
                striped
                hover
                {...toolkitprops.baseProps}
                {...paginationTableProps}
                headerClasses="table-primary table-sm project"
                noDataIndication="Table is Empty"
              />
            </div>
          )}
        </ToolkitProvider>
        <SizePerPageDropdownStandalone {...paginationProps} />
        <PaginationTotalStandalone {...paginationProps} />
        <PaginationListStandalone {...paginationProps} />
      </div>
    );
    return (
      <div className="table-container">
        {this.props.accountReducer.isFetching ? (
          <div className="text-center">
            <span>Loading...</span>
          </div>
        ) : (
          this.props.accountReducer.result && (
            <PaginationProvider pagination={paginationFactory(options)}>
              {contentTable}
            </PaginationProvider>
          )
        )}
      </div>
    );
  };

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-0">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Accounts</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/dashboard" className="linkCustom">
                      <p>Home</p>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">Account</li>
                </ol>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-right">
                <Link to="/account-create" className="linkCustom">
                  <div className="btn btn-success btn-sm">
                    <i className="fa fa-plus-circle nav-icon" />
                    <br />
                    <h6 className="text-sm-white">New Account</h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row ">
                      <h3 className="card-title align-middle">Accounts List</h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className=""> {this.renderTable()}</div>
                  </div>
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
const mapStateToProps = ({ accountReducer }) => ({
  accountReducer
});

export default connect(
  mapStateToProps,
  actions
)(Account);
