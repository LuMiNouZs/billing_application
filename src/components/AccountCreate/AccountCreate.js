import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions/account.action";
import { Link } from "react-router-dom";
import DropdownList from 'react-widgets/lib/DropdownList'

import "./AccountCreate.css";
import 'react-widgets/dist/css/react-widgets.css'

class AccountCreate extends Component {
  onClickSubmit = formValues => {
    var formData = new FormData();
    formData.append("account_code", formValues.accountCode);
    formData.append("account_name", formValues.accountName);
    formData.append("status", formValues.accountStatus);
    formData.append("type", formValues.accountType);
    formData.append("telephone", formValues.accountTelephone);
    formData.append("fax", formValues.accountFax);
    formData.append("address", formValues.accountAddress);
    formData.append("description", formValues.accountDescription);

    this.props.addAccount(this.props.history, formData);
    
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const accountStatus = [ 
      { status: 'Active', value: 1 } ,
      { status: 'inActive', value: 0 },
    ]
    const accountType = [
      { label: "Retention", value: "Retention" },
      { label: "Government", value: "Government" },
      { label: "Wholesale", value: "Wholesale" },
    ];
    const accountIndustry= [
      { label: "CallCenter", value: "CallCenteroutbound" },
      { label: "Communications", value: "Communications" },
      { label: "Engineering", value: "Engineering" },
      { label: "Manufacturing", value: "Manufacturing" },
      { label: "Media", value: "Media" },
      { label: "Recreation", value: "Recreation" },
      { label: "Retail", value: "Retail" },
      { label: "Recruitment", value: "Recruitment" },
      { label: "IT", value: "IT" },
      { label: "Telecommunications", value: "Telecommunications" },
      { label: "Outsource", value: "Outsource" },
      { label: "Other", value: "Other" },
    ];
    return (
      <div className="content-wrapper">
         {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-0">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark text-uppercase">Create</h1>
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
                      Create Account
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
                  <button type="Button" className="col-1 btn btn-outline-secondary btn-sm pull-left mr-1"
                     disabled={pristine || submitting} onClick={reset}
                  >
                    <i className="fa fa-retweet nav-icon" />
                    <h6 className="text-sm-white text-uppercase font-weight-bold ">Clear</h6>
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
                        <label htmlFor="text" className="col-sm-2 control-label">
                          Code
                        </label>
                        <div className="col-sm-4">
                          <Field
                            name="accountCode" component="input" placeholder="Code"
                            className="form-control" type="text" id="accountCode"
                          />
                        </div>
                        <label htmlFor="text" className="col-sm-2 control-label">
                          Name
                        </label>
                        <div className="col-sm-4">
                          <Field 
                            name="accountName" component="input" placeholder="Name"
                            className="form-control" type="text" id="accountName"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="text" className="col-sm-2 control-label">
                          Status
                        </label>
                        <div className="col-sm-4">
                          <Field name="accountStatus" component="select" className="form-control"  id="accountStatus">
                          <option >-- Select --</option>
                          <option value="1">Active</option>
                          <option value="0">InActive</option>
                          </Field>
                        </div>
                        <label htmlFor="text" className="col-sm-2 control-label">
                          Type
                        </label>
                        <div className="col-sm-4">
                          <Field name="accountType" component="select"  className="form-control" id="accountType" >
                          <option >-- Select --</option>
                          <option value="Retention">Retention</option>
                          <option value="Government">Government</option>
                          <option value="Wholesale">Wholesale</option>
                          </Field>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="text" className="col-sm-2 control-label">
                          Email
                        </label>
                        <div className="col-sm-4">
                          <Field
                            name="accountEmail" component="input" placeholder="Email"
                            className="form-control" type="email" id="accountEmail"
                          />
                        </div>
                        <label htmlFor="text" className="col-sm-2 control-label">
                          External ID
                        </label>
                        <div className="col-sm-4">
                          <Field 
                            name="accountExternalId" component="input" placeholder="External ID"
                            className="form-control" type="text" id="accountExternalId"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="text" className="col-sm-2 control-label">
                          Telephone
                        </label>
                        <div className="col-sm-4">
                          <Field
                            name="accountTelephone" component="input" placeholder="Telephone"
                            className="form-control" type="phonenumber" id="accountTelephone"
                          />
                        </div>
                        <label htmlFor="text" className="col-sm-2 control-label">
                          Fax
                        </label>
                        <div className="col-sm-4">
                          <Field 
                            name="accountFax" component="input" placeholder="Fax"
                            className="form-control" type="phonenumber" id="accountFax"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="text" className="col-sm-2 control-label">
                          Address
                        </label>
                        <div className="col-sm-10">
                          <Field
                            name="accountAddress" component="textarea" placeholder="Address"
                            className="form-control" type="text" id="accountAddress"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="text" className="col-sm-2 control-label">
                          Description
                        </label>
                        <div className="col-sm-10">
                          <Field 
                            name="accountDescription" component="textarea" placeholder="Description"
                            className="form-control" type="text" id="accountDescription"
                          />
                        </div>
                      </div> 
                    </form>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                      <div className="row">
                          <h3 className="card-title">PBX Information</h3>
                          <div className="card-tools align-right">
                            <button type="button" className="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                              <i className="fa fa-minus"  aria-hidden="true"/>
                            </button>
                          </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <form className="form-horizontal">
                        <div className="form-group row">
                          <label htmlFor="text" className="col-sm-2 control-label">
                            PBX SN
                          </label>
                          <div className="col-sm-4">
                            <Field
                              name="sn" component="input" placeholder="PBX SN"
                              className="form-control" type="text" id="sn"
                            />
                          </div>
                          <label htmlFor="text" className="col-sm-2 control-label">
                            PBX Name
                          </label>
                          <div className="col-sm-4">
                            <Field 
                              name="pbxName" component="input" placeholder="PBX Name"
                              className="form-control" type="text" id="pbxName"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="text" className="col-sm-2 control-label">
                            Status
                          </label>
                          <div className="col-sm-4">
                            <Field name="status" component="select" className="form-control"  id="status">
                            <option>-- Select --</option>
                            <option value="1">Active</option>
                            <option value="0">InActive</option>
                            </Field>
                          </div>
                          <label htmlFor="text" className="col-sm-2 control-label">
                            PBX Type
                          </label>
                          <div className="col-sm-4">
                            <Field name="pbxType" component="select"  className="form-control" id="pbxType" >
                            <option>-- Select --</option>
                            <option value="Trial">Trial</option>
                            <option value="Commercial">Commercial</option>
                            </Field>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="text" className="col-sm-2 control-label">
                            Extension
                          </label>
                          <div className="col-sm-4">
                            <Field
                              name="extension" component="input" placeholder="Extension"
                              className="form-control" type="text" id="extension"
                            />
                          </div>
                          <label htmlFor="text" className="col-sm-2 control-label">
                            Concurrent
                          </label>
                          <div className="col-sm-4">
                            <Field 
                              name="concurrent" component="input" placeholder="Concurrent Call"
                              className="form-control" type="text" id="concurrent"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="text" className="col-sm-2 control-label">
                              URL
                            </label>
                            <div className="col-sm-8">
                              <Field
                                name="url" component="input" placeholder="Url"
                                className="form-control" type="text" id="url"
                              />
                           </div>
                           <label htmlFor="text" className="col-sm-2 control-label">
                              .sipper.co.th
                            </label>
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

const mapStateToProps = (form, appReducer) => ({
  form: form.accountCreateForm,
  appReducer
});

const AccountCreateRedux = connect(
  mapStateToProps,
  actions
)(AccountCreate);

export default reduxForm({
  form: "accountCreateForm",
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
})(AccountCreateRedux);
