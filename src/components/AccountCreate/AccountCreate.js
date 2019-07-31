import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions/account.action";
import { Link } from "react-router-dom";
import DropdownList from 'react-widgets/lib/DropdownList'
import Swal from 'sweetalert2'
import "./AccountCreate.css";
import 'react-widgets/dist/css/react-widgets.css'

class AccountCreate extends Component {


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
    this.props.addAccount(this.props.history, formData, Toast.fire({ type: 'success', title: 'Created successfully' }));


    var formApiData = new FormData();
    formApiData.append("account_code", formApiData.accountCode);
    formApiData.append("account_name", formValues.accountName);
    formApiData.append("status", formValues.accountStatus);
    formApiData.append("type", formValues.accountType);
    formApiData.append("email", formValues.accountEmail);
    formApiData.append("telephone", formValues.accountTelephone);
    formApiData.append("fax", formValues.accountFax);
    formApiData.append("address", formValues.accountAddress);
    formApiData.append("description", formValues.accountDescription);

  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const accountStatus = [
      { status: 'Active', value: 1 },
      { status: 'inActive', value: 0 },
    ]
    const accountType = [
      { label: "Retention", value: "Retention" },
      { label: "Government", value: "Government" },
      { label: "Wholesale", value: "Wholesale" },
    ];
    const accountIndustry = [
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
      <div className="content-wrapper" style={{}}>
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
                <div className="card ">
                  <div className="card-header">
                    <h5 className="card-title ">Account Information</h5>
                    <div className="card-tools align-right">
                      <button type="button" className="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                        <i className="fa fa-minus" aria-hidden="true" />
                      </button>
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
                          <Field name="accountStatus" component="select" className="form-control form-control-sm" id="accountStatus">
                            <option />
                            <option value="1">Active</option>
                            <option value="0">InActive</option>
                          </Field>
                        </div>
                        <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                          Type
                        </label>
                        <div className="col-sm-4">
                          <Field name="accountType" component="select" className="form-control form-control-sm" id="accountType" >
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
                <div className="row">
                  <div className=" col-sm-6">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title">PBX API Information</h5>
                        <div className="card-tools">
                          <button type="button" className="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <form className="form-horizontal">
                          <div className="form-group row">
                            <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                              PBX SN
                          </label>
                            <div className="col-sm-4">
                              <Field
                                name="pbxSn" component="input" placeholder="PBX SN"
                                className="form-control form-control-sm " type="text" id="pbxSn"
                              />
                            </div>
                            <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                              PBX Name
                          </label>
                            <div className="col-sm-4">
                              <Field
                                name="pbxName" component="input" placeholder="PBX Name"
                                className="form-control form-control-sm" type="text" id="pbxName"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                              Status
                          </label>
                            <div className="col-sm-4">
                              <Field name="pbxStatus" component="select" className="form-control form-control-sm" id="pbxStatus">
                                <option />
                                <option value="1">Active</option>
                                <option value="0">InActive</option>
                              </Field>
                            </div>
                            <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                              PBX Type
                          </label>
                            <div className="col-sm-4">
                              <Field name="pbxType" component="select" className="form-control form-control-sm" id="pbxType" >
                                <option />
                                <option value="Trial">Trial</option>
                                <option value="Commercial">Commercial</option>
                              </Field>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                              URL
                          </label>
                            <div className="input-group input-group-sm col-sm-10">
                              <Field
                                name="url" component="input" placeholder="Url"
                                className="form-control form-control-sm" type="text" id="url"
                              />
                              <div class="input-group-append">
                                <span class="input-group-text">@sipper.co.th</span>
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm ">
                              User API
                          </label>
                            <div className="col-sm-4 ">
                              <Field
                                name="pbxUserApi" component="input" placeholder="User API"
                                className="form-control form-control-sm " type="text" id="pbxUserApi"
                              />
                            </div>
                            <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                              Pass API
                          </label>
                            <div className="col-sm-4">
                              <Field
                                name="pbxPasswordApi" component="input" placeholder="Password API"
                                className="form-control form-control-sm" type="password" id="Password Api"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title">Rate Information</h5>
                        <div className="card-tools">
                          <button type="button" className="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <form className="form-horizontal">
                          <div className="form-group row">
                            <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                              Rate Name
                          </label>
                            <div className="col-sm-4">
                              <Field
                                name="pbxSn" component="input" placeholder="Rate Code"
                                className="form-control form-control-sm " type="text" id="pbxSn"
                              />
                            </div>
                            <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                              Status
                          </label>
                            <div className="col-sm-4">
                              <Field name="pbxStatus" component="select" className="form-control form-control-sm" id="pbxStatus">
                                <option />
                                <option value="1">Active</option>
                                <option value="0">InActive</option>
                              </Field>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                              Rate Cycle
                            </label>
                            <div className="col-sm-4">
                              <Field
                                name="pbxName" component="input" placeholder="Cycle"
                                className="form-control form-control-sm" type="text" id="pbxName"
                              />
                            </div>
                            <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                              Local
                            </label>
                            <div className="input-group input-group-sm col-sm-2">
                              <Field
                                name="url" component="input" placeholder=""
                                className="form-control form-control-sm" type="number" id="url"
                              />
                              <div class="input-group-append">
                                <span class="input-group-text">฿</span>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <Field name="pbxStatus" component="select" className="form-control form-control-sm" id="pbxStatus">
                                <option value="Min">Min</option>
                                <option value="Time">Time</option>
                              </Field>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                             Long Distance
                            </label>
                            <div className="input-group input-group-sm col-sm-2">
                              <Field
                                name="url" component="input" placeholder=""
                                className="form-control form-control-sm" type="number" id="url"
                              />
                              <div class="input-group-append">
                                <span class="input-group-text">฿</span>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <Field name="pbxStatus" component="select" className="form-control form-control-sm" id="pbxStatus">
                                <option value="Min">Min</option>
                                <option value="Time">Time</option>
                              </Field>
                            </div>
                            <label htmlFor="text" className="col-sm-2 col-form-label col-form-label-sm">
                             Inter
                            </label>
                            <div className="input-group input-group-sm col-sm-2">
                              <Field
                                name="url" component="input" placeholder=""
                                className="form-control form-control-sm" type="number" id="url"
                              />
                              <div class="input-group-append">
                                <span class="input-group-text">฿</span>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <Field name="pbxStatus" component="select" className="form-control form-control-sm" id="pbxStatus">
                                <option value="Min">Min</option>
                                <option value="Time">Time</option>
                              </Field>
                            </div>
                          </div>

                        </form>
                      </div>
                    </div>
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
    accountCode: "",
    accountName: "",
    accountStatus: 1,
    accountType: "",
    accountEmail: "",
    accountExternalId: "",
    accountTelephone: "",
    accountFax: "",
    accountAddress: "",
    accountDescription: ""
  }
})(AccountCreateRedux);
