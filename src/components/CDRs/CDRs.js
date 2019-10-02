import React, { Component } from "react";
import "./CDRs.css";
import { connect } from "react-redux";
import * as actions from "../../actions/transaction.action";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationTotalStandalone,
  PaginationListStandalone,
  SizePerPageDropdownStandalone
} from "react-bootstrap-table2-paginator";
import filterFactory, {
  textFilter,
  dateFilter,
  Comparator
} from "react-bootstrap-table2-filter";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import ToolkitProvider, {
  ColumnToggle,
  Search
} from "react-bootstrap-table2-toolkit";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";

class CDRs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getTransaction();
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
      totalSize: this.props.transactionReducer.length
    };
    const CustomToggleList = ({ columns, onColumnToggle, toggles }) => (
      <div className="btn-group btn-group-toggle "  >
        <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Column Hidden
    </button>
    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
        {columns
          .map(column => ({
            ...column,
            toggle: toggles[column.dataField]
          }))
          .map(column => (
            <div
             
              key={column.dataField}
              className={`dropdown-item label  ${column.toggle ? "active" : ""}`}
              
              aria-pressed={column.toggle ? "true" : "false"}
              onClick={() => onColumnToggle(column.dataField)}
            >
              {column.text}
            </div>
          ))}
          </div>
      </div>
    );

    const { SearchBar } = Search;
    const { ToggleList } = ColumnToggle;
    const headerSortingStyle = { backgroundColor: "#c8e6c9" };
    const columns = [
      {
        dataField: "callid",
        text: "Call ID",
        headerClasses: "text-center",
        sort: true,
        hidden: true,
        classes: "align-middle text-center",
        headerSortingStyle
      },
      {
        dataField: "timestart",
        text: "Time Start",
        headerClasses: "align-middle text-center",
        sort: true,
        classes: "align-middle text-center",
        headerSortingStyle,
      },
      {
        dataField: "callfrom",
        text: "Call From",
        headerClasses: "text-center",
        classes: "align-middle text-center",
        headerSortingStyle,
        filter: textFilter()
      },
      {
        dataField: "callto",
        text: "Call To",
        headerClasses: "text-center",
        classes: "align-middle text-center",
        headerSortingStyle,
        filter: textFilter()
      },
      {
        dataField: "callduraction",
        text: "Call Duration",
        headerClasses: "align-middle text-center",
        sort: true,
        hidden: true,
        classes: "align-middle text-center",
        headerSortingStyle
      },
      {
        dataField: "talkduraction",
        text: "Talk Duration",
        headerClasses: "align-middle text-center",
        sort: true,
        classes: "align-middle text-center",
        headerSortingStyle
      },
      {
        dataField: "dsttrunkname",
        text: "Des Trunk",
        hidden: true,
        headerClasses: "align-middle text-center",
        sort: true,
        classes: "align-middle text-center",
        headerSortingStyle
      },
      {
        dataField: "status",
        text: "Status",
        headerClasses: "align-middle text-center",
        sort: true,
        classes: "align-middle text-center",
        headerSortingStyle
      },
      {
        dataField: "type",
        text: "Type",
        headerClasses: "align-middle text-center",
        sort: true,
        classes: "align-middle text-center",
        headerSortingStyle
      },
      {
        dataField: "created",
        text: "Created",
        headerClasses: "align-middle text-center",
        hidden: true,
        sort: true,
        classes: "align-middle text-center",
        headerSortingStyle
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
        <ToolkitProvider
          bootstrap4
          keyField="_id"
          columns={columns}
          data={this.props.transactionReducer.result}
          defaultSorted={defaultSorted}
          search
          columnToggle
        >
          {toolkitprops => (
            <div className="row">
              <div className="col-10">
                <CustomToggleList {...toolkitprops.columnToggleProps} />
              </div>
              <div className="col-2">
                <SearchBar {...toolkitprops.searchProps} />
              </div>
              <div className="col-12">
                <PaginationListStandalone {...paginationProps} />
              </div>
              <div className="col-12">
                <BootstrapTable
                  striped
                  hover
                  filter={filterFactory()}
                  {...toolkitprops.baseProps}
                  {...paginationTableProps}
                  headerClasses="table-primary"
                  noDataIndication="Table is Empty"
                />
              </div>
            </div>
          )}
        </ToolkitProvider>
        <SizePerPageDropdownStandalone {...paginationProps} />
        <PaginationTotalStandalone {...paginationProps} />
        <PaginationListStandalone {...paginationProps} />
      </div>
    );
    return (
      <div className="table-container ">
        {this.props.transactionReducer.isFetching ? (
          <div className="text-center">
            <span>Loading...</span>
          </div>
        ) : (
          this.props.transactionReducer.result && (
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
                <h1 className="m-0 text-dark">Transactions</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/dashboard" className="linkCustom">
                      <p>Home</p>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">Transaction</li>
                </ol>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-right" />
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
                      <h3 className="card-title align-middle">
                        Transactions List
                      </h3>
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

const mapStateToProps = ({ transactionReducer }) => ({
  transactionReducer
});

export default connect(
  mapStateToProps,
  actions
)(CDRs);
