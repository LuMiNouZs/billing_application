import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/account.edit.action";
import AccountRequest from "./../../models/account";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import Swal from 'sweetalert2'
class AccountEdit extends Component {

  componentDidMount() {
    let accountId = this.props.match.params._id;
    console.log(accountId)
    this.props.getAccountById(accountId);
  }
  
  onClickSubmit = formValues => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    }); 

    var formData = new FormData();
    formData.append("account_code", formValues.accountCode);
    formData.append("account_name", formValues.accountName);
    formData.append("status", formValues.accountStatus);
    formData.append("type", formValues.accountType);
    formData.append("email", formValues.accountEmail);
    formData.append("telephone", formValues.accountTelephone);
    formData.append("fax", formValues.accountFax);
    formData.append("address", formValues.accountAddress);
    formData.append("description", formValues.accountDescription);
    formData.append("_id", this.props.match.params._id);
    console.log("form data: " + JSON.stringify(formData));
    this.props.updateAccount(this.props.history, formData, Toast.fire({ type: 'success', title: 'Updated successfully'}));
    
  };


  // onClickSubmit = () => {
  //   const { props } = this;

  //   let accountRequest = new AccountRequest();
  //   accountRequest.account_code = props.form.accountEditForm.values.accountCode;
  //   accountRequest.account_name = props.form.accountEditForm.values.accountName;
  //   accountRequest.status = props.form.accountEditForm.values.accountStatus;
  //   accountRequest.type = props.form.accountEditForm.values.accountType;
  //   accountRequest.telephone = props.form.accountEditForm.values.accountTelephone;
  //   accountRequest.fax = props.form.accountEditForm.values.accountFax;
  //   accountRequest.address = props.form.accountEditForm.values.accountAddress;
  //   accountRequest.description = props.form.accountEditForm.values.accountDescription;
  //   console.log("form data: " + JSON.stringify(accountRequest));
  //   this.props.updateAccount(this.props.history,accountRequest);
  // };
  
  render() {
    const { result } = this.props.accountEditReducer;
    if (result != null && !this.props.accountEditReducer.isInitialed) {
      this.props.change("accountCode", result.account_code);
      this.props.change("accountName", result.account_name);
      this.props.change("accountStatus", result.status);
      this.props.change("accountType", result.type);
      this.props.change("accountEmail", result.email);
      this.props.change("accountTelephone", result.telephone);
      this.props.change("accountFax", result.fax);
      this.props.change("accountAddress", result.address);
      this.props.change("accountDescription", result.description);
      this.props.finishInitialization(true);
    }
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="content-wrapper">
         {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-0">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark text-uppercase">Edit</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/dashboard" className="linkCustom">
                      <p>Home</p>
                    </Link>
                  </li>
                  <li className="breadcrumb-item ">
                    <Link to="/account" className="linkCustom">
                      Account
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                      Edit Account
                  </li>
                </ol>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                  <button type="button" className="col-1 btn btn-outline-success btn-sm pull-left mr-1"
                      disabled={pristine || submitting}
                      onClick={handleSubmit(this.onClickSubmit)}
                  >
                    <i className="fa fa-floppy-o nav-icon" />
                    <h6 className="text-sm-white text-uppercase font-weight-bold ">Save</h6>
                  </button>
                  <button type="Button" className="col-1 btn btn-outline-danger btn-sm pull-left mr-1"
                    onClick={() => {
                      this.props.history.goBack();
                    }}
                  >
                    <i className="fa fa-close nav-icon" />
                    <h6 className="text-sm-white text-uppercase font-weight-bold ">Cancel</h6>
                  </button>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row">
                        <h3 className="card-title">Account Information</h3>
                        <div className="card-tools align-right">
                          <button type="button" className="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                            <i className="fa fa-minus"  aria-hidden="true"/>
                          </button>
                        </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <form className="form-horizontal" onSubmit={handleSubmit(this.onClickSubmit)}>
                      <div className="form-group row">
                        <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                          Code
                        </label>
                        <div className="col-sm-4">
                          <Field
                            name="accountCode" component="input" placeholder="Code"
                            className="form-control form-control-sm" type="text" id="accountCode"
                          />
                        </div>
                        <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                          Name
                        </label>
                        <div className="col-sm-4">
                          <Field 
                            name="accountName" component="input" placeholder="Name"
                            className="form-control form-control-sm" type="text" id="accountName"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                          Status
                        </label>
                        <div className="col-sm-4">
                          <Field name="accountStatus" component="select" className="form-control form-control-sm"  id="accountStatus">
                          <option />
                          <option value="1">Active</option>
                          <option value="0">InActive</option>
                          </Field>
                        </div>
                        <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                          Type
                        </label>
                        <div className="col-sm-4">
                          <Field name="accountType" component="select"  className="form-control form-control-sm" id="accountType" >
                          <option />
                          <option value="Retention">Retention</option>
                          <option value="Government">Government</option>
                          <option value="Wholesale">Wholesale</option>
                          </Field>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                          Email
                        </label>
                        <div className="col-sm-4">
                          <Field
                            name="accountEmail" component="input" placeholder="Email"
                            className="form-control form-control-sm" type="email" id="accountEmail"
                          />
                        </div>
                        <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                          External ID
                        </label>
                        <div className="col-sm-4">
                          <Field 
                            name="accountExternalId" component="input" placeholder="External ID"
                            className="form-control form-control-sm" type="text" id="accountExternalId"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                          Telephone
                        </label>
                        <div className="col-sm-4">
                          <Field
                            name="accountTelephone" component="input" placeholder="Telephone"
                            className="form-control form-control-sm" type="phonenumber" id="accountTelephone"
                          />
                        </div>
                        <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                          Fax
                        </label>
                        <div className="col-sm-4">
                          <Field 
                            name="accountFax" component="input" placeholder="Fax"
                            className="form-control form-control-sm" type="phonenumber" id="accountFax"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                          Address
                        </label>
                        <div className="col-sm-10">
                          <Field
                            name="accountAddress" component="textarea" placeholder="Address"
                            className="form-control form-control-sm" type="text" id="accountAddress"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                          Description
                        </label>
                        <div className="col-sm-10">
                          <Field 
                            name="accountDescription" component="textarea" placeholder="Description"
                            className="form-control form-control-sm" type="text" id="accountDescription"
                          />
                        </div>
                      </div> 
                    </form>
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


const mapStateToProps = (state) => ({
  form: state.form.accountEditForm,
  accountEditReducer: state.accountEditReducer,
  initialValues: state.accountEditReducer.result
});

const AccountEditRedux = connect(
  mapStateToProps,
  actions
)(AccountEdit);

export default reduxForm({
  form: "accountEditForm",
  initialValues: { 
    accountCode : "",
    accountName : "",
    accountStatus : 1,
    accountType : "",
    accountEmail : "",
    accountExternalId : "",
    accountTelephone : "",
    accountFax : "",
    accountAddress : "",
    accountDescription : ""
  }
})(AccountEditRedux);
