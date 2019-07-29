import React, { Component } from "react";
import "./CDRs.css";
import { connect } from "react-redux";
import * as actions from "../../actions/cdr.action";
import { Link } from "react-router-dom";
//import _ from "lodash";
import Moment from "react-moment";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";

//import NumberFormat from "react-number-format";

class CDRs extends Component {
  componentDidMount() {
    let year = "2019"; //this.props.match.params.id;
    let month = "3";
    let type = "all";
    this.props.getCdrByCDRsPerMonth(year, month, type);
  }

  createRows = () => {
    const { result } = this.props.cdrReducer;
    return (
      result != null &&
      result.map(item => (
        <tr style={{ cursor: "pointer" }}>
          <td className="" style={{}}>
            {item.id}
          </td>
          <td className="" style={{}}>
            <Moment format="YYYY/MM/DD HH:mm">{item.date_time}</Moment>
          </td>
          <td className="" style={{}}>
            {item.source_no}
          </td>
          <td className="" style={{}}>
            {item.destination_no}
          </td>

          <td className="" style={{}}>
            {item.province_source}
          </td>
          <td className="" style={{}}>
            {item.feature_description_1}
          </td>
          <td className="" style={{}}>
            {item.feature_description_2}
          </td>
          <td className="" style={{}}>
            {item.duration}
          </td>
          <td className="" style={{}} />
          <td className="td_left" style={{}}>
            {item.total_charge}
          </td>
        </tr>
      ))
    );
  };



  render() {
    const durationFormatter = (cell, row) => {
      return <span>{cell / 60}</span>;
    };
    const nameFormatter = (cell, row) => {
      let name = cell;
      name.str(0.4);
      return <span>{name}</span>;
    };
    const { SearchBar } = Search;
    const cdr = [
      {
        id: "22fe97cf-10c3-4c93-a3e1-dda05bb2d5ba",
        customerCode: "1-01199",
        customerName: "HRH Princess Maha Chakri Sirindhorn Medical Center",
        sippyNameAccount: "HRH_Medical_Center",
        sourceNo: "37395085",
        dateTime: "2019-01-31T16:59:28.000Z",
        cldIn: "0849166608",
        cliIn: "HRH_Medical_Center",
        provinceSource: "THAILAND",
        destinationNo: "66849166608",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.65,
        type: "sippy45"
      },
      {
        id: "20c497c7-9f17-11e9-9730-005056be871f",
        customerCode: "1-02315",
        customerName: "Ramkhamhaeng Hospital Pub Co., Ltd.",
        sippyNameAccount: null,
        sourceNo: "023086000",
        dateTime: "2019-01-31T16:59:08.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "",
        destinationNo: "0817334082",
        description1: "MB BKK AIS3G",
        description2: "Fixed Line To Mobile",
        duration: "60",
        totalCharge: 0.45,
        type: "tot"
      },
      {
        id: "84747a44-d168-45c9-82f4-28d13858e8ce",
        customerCode: null,
        customerName: null,
        sippyNameAccount: null,
        sourceNo: "0625869055",
        dateTime: "2019-01-31T16:57:37.000Z",
        cldIn: "009447815004424",
        cliIn: "0625869055",
        provinceSource: "UNITED KINGDOM",
        destinationNo: "009447815004424",
        description1: "Mobile",
        description2: "",
        duration: "72.0",
        totalCharge: 7.704,
        type: "sippy40"
      },
      {
        id: "f968aeab-81e7-11e9-96a3-005056be871f",
        customerCode: "1-00161",
        customerName: "KTB Leasing Company Limited",
        sippyNameAccount: null,
        sourceNo: "0631900465",
        dateTime: "2019-01-31T16:57:33.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "900975",
        description1: "",
        description2: "",
        duration: "60",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "7a0e50bd-81e6-11e9-96a3-005056be871f",
        customerCode: "BOSS",
        customerName: "คุณพรพิมล นนท์โสภา",
        sippyNameAccount: null,
        sourceNo: "0818333600",
        dateTime: "2019-01-31T16:57:25.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "",
        description1: "internet",
        description2: "",
        duration: "162360",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "7a0db21c-81e6-11e9-96a3-005056be871f",
        customerCode: "BOSS",
        customerName: "คุณพรพิมล นนท์โสภา",
        sippyNameAccount: null,
        sourceNo: "0818333600",
        dateTime: "2019-01-31T16:57:21.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "",
        description1: "internet",
        description2: "",
        duration: "2040",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "203e50c5-9f17-11e9-9730-005056be871f",
        customerCode: "1-02315",
        customerName: "Ramkhamhaeng Hospital Pub Co., Ltd.",
        sippyNameAccount: null,
        sourceNo: "023086000",
        dateTime: "2019-01-31T16:57:11.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "",
        destinationNo: "0818212608",
        description1: "MB BKK AIS3G",
        description2: "Fixed Line To Mobile",
        duration: "60",
        totalCharge: 0.45,
        type: "tot"
      },
      {
        id: "e3a33a3e-2472-4cbe-aba7-de18b025e56d",
        customerCode: "1-00412",
        customerName: "One to One Contacts Public Company Limited.",
        sippyNameAccount: "One_To_One_EW",
        sourceNo: "28699200",
        dateTime: "2019-01-31T16:56:57.000Z",
        cldIn: "17176620323533",
        cliIn: "28699200",
        provinceSource: "THAILAND",
        destinationNo: "6620323533",
        description1: "Bangkok",
        description2: "",
        duration: "60",
        totalCharge: 0.57,
        type: "sippy45"
      },
      {
        id: "b09f9c6b-0fca-4243-8c36-f9709f6870f6",
        customerCode: "1-01199",
        customerName: "HRH Princess Maha Chakri Sirindhorn Medical Center",
        sippyNameAccount: "HRH_Medical_Center",
        sourceNo: "37395085",
        dateTime: "2019-01-31T16:56:07.000Z",
        cldIn: "0831342966",
        cliIn: "HRH_Medical_Center",
        provinceSource: "THAILAND",
        destinationNo: "66831342966",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.65,
        type: "sippy45"
      },
      {
        id: "f9680af1-81e7-11e9-96a3-005056be871f",
        customerCode: "1-00161",
        customerName: "KTB Leasing Company Limited",
        sippyNameAccount: null,
        sourceNo: "0631900465",
        dateTime: "2019-01-31T16:55:58.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "900975",
        description1: "",
        description2: "",
        duration: "60",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "83382d2c-d993-45e6-8622-1d550be3ad9e",
        customerCode: "1-01199",
        customerName: "HRH Princess Maha Chakri Sirindhorn Medical Center",
        sippyNameAccount: "HRH_Medical_Center",
        sourceNo: "37395085",
        dateTime: "2019-01-31T16:55:23.000Z",
        cldIn: "0859080791",
        cliIn: "HRH_Medical_Center",
        provinceSource: "THAILAND",
        destinationNo: "66859080791",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.65,
        type: "sippy45"
      },
      {
        id: "7a0d1190-81e6-11e9-96a3-005056be871f",
        customerCode: "BOSS",
        customerName: "คุณพรพิมล นนท์โสภา",
        sippyNameAccount: null,
        sourceNo: "0818333600",
        dateTime: "2019-01-31T16:55:23.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "",
        description1: "internet",
        description2: "",
        duration: "44340",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "c849e960-9f20-11e9-9730-005056be871f",
        customerCode: "1-02315",
        customerName: "Ramkhamhaeng Hospital Pub Co., Ltd.",
        sippyNameAccount: null,
        sourceNo: "023086000",
        dateTime: "2019-01-31T16:55:08.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "",
        destinationNo: "0851346183",
        description1: "MB BKK DTAC3G",
        description2: "Fixed Line To Mobile",
        duration: "60",
        totalCharge: 0.45,
        type: "tot"
      },
      {
        id: "2358d2a9-d408-49c2-994f-7fd97757f656",
        customerCode: "1-02226",
        customerName: "AURORA TRADING CO.,LTD.",
        sippyNameAccount: "1-02226-Aurora",
        sourceNo: "21789999",
        dateTime: "2019-01-31T16:55:02.000Z",
        cldIn: "7100036627707786",
        cliIn: "5887896",
        provinceSource: "THAILAND",
        destinationNo: "6627707786",
        description1: "Bangkok",
        description2: "",
        duration: "60",
        totalCharge: 1.5,
        type: "sippy45"
      },
      {
        id: "2347fff4-601e-484d-87b7-3fcd4cf5b969",
        customerCode: "1-02206",
        customerName: "Bangkok Phuket International Hospital",
        sippyNameAccount: "Phuket_International_Hospital",
        sourceNo: "76361888",
        dateTime: "2019-01-31T16:54:43.000Z",
        cldIn: "17176676330721",
        cliIn: "1006",
        provinceSource: "THAILAND",
        destinationNo: "6676330721",
        description1: "Proper",
        description2: "",
        duration: "1320",
        totalCharge: 1,
        type: "sippy45"
      },
      {
        id: "94b261ae-9f16-11e9-9730-005056be871f",
        customerCode: "1-00291",
        customerName: "บริษัท เลบาร่า จำกัด",
        sippyNameAccount: null,
        sourceNo: "022490193",
        dateTime: "2019-01-31T16:54:42.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "",
        destinationNo: "076330721",
        description1: "Phuket - TOT",
        description2: "Fixed Line To LD",
        duration: "1260",
        totalCharge: 9.45,
        type: "tot"
      },
      {
        id: "daf13943-ec70-4967-b0af-f05e7001824d",
        customerCode: null,
        customerName: null,
        sippyNameAccount: null,
        sourceNo: "022122955",
        dateTime: "2019-01-31T16:54:11.000Z",
        cldIn: "00915303422957",
        cliIn: "022122955",
        provinceSource: "UNITED STATES",
        destinationNo: "00915303422957",
        description1: "North America",
        description2: "",
        duration: "18.0",
        totalCharge: 0.321,
        type: "sippy40"
      },
      {
        id: "aa89a230-1b53-4dad-b3d8-9e900a2913c1",
        customerCode: "1-02226",
        customerName: "AURORA TRADING CO.,LTD.",
        sippyNameAccount: "1-02226-Aurora",
        sourceNo: "21789999",
        dateTime: "2019-01-31T16:53:54.000Z",
        cldIn: "7100036627707786",
        cliIn: "5887896",
        provinceSource: "THAILAND",
        destinationNo: "6627707786",
        description1: "Bangkok",
        description2: "",
        duration: "60",
        totalCharge: 1.5,
        type: "sippy45"
      },
      {
        id: "fd6becc7-7359-4492-b075-7bc7c7f18645",
        customerCode: "1-01180",
        customerName: "The Erawan Group Public Company Limited (Mercure)",
        sippyNameAccount: "Mercure_Hotel_1",
        sourceNo: "28747111",
        dateTime: "2019-01-31T16:53:48.000Z",
        cldIn: "0618564011",
        cliIn: "Mercure_Hotel_1",
        provinceSource: "THAILAND",
        destinationNo: "66618564011",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.9,
        type: "sippy45"
      },
      {
        id: "94b6cb62-02d4-4e8b-9f0d-9856968b3cdb",
        customerCode: "1-02462",
        customerName: "SYNPHAET CO.,LTD.",
        sippyNameAccount: "1-02462-Synphaet-Hospital",
        sourceNo: "27935099",
        dateTime: "2019-01-31T16:53:38.000Z",
        cldIn: "171766818444696",
        cliIn: "onetoall",
        provinceSource: "THAILAND",
        destinationNo: "66818444696",
        description1: "Mobile",
        description2: "",
        duration: "120",
        totalCharge: 1.4,
        type: "sippy45"
      },
      {
        id: "5b3df712-3795-4e11-8083-c4fa14a3f3e8",
        customerCode: "1-02206",
        customerName: "Bangkok Phuket International Hospital",
        sippyNameAccount: "Phuket_International_Hospital",
        sourceNo: "76361888",
        dateTime: "2019-01-31T16:53:28.000Z",
        cldIn: "171766862979887",
        cliIn: "1006",
        provinceSource: "THAILAND",
        destinationNo: "66862979887",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.5,
        type: "sippy45"
      },
      {
        id: "c8529fe7-9a0b-48db-a80f-c0da3770263e",
        customerCode: null,
        customerName: null,
        sippyNameAccount: null,
        sourceNo: "021105555",
        dateTime: "2019-01-31T16:53:26.000Z",
        cldIn: "0625858199",
        cliIn: "021105555",
        provinceSource: "THAILAND",
        destinationNo: "66625858199",
        description1: "Mobile",
        description2: "",
        duration: "1590.0",
        totalCharge: 21.2,
        type: "sippy40"
      },
      {
        id: "6aae86e2-3e20-4aee-b3e7-5cd34db2e41f",
        customerCode: "1-01635",
        customerName: "Chevron Thailand Exploration and Production LTD.",
        sippyNameAccount: "Chevron",
        sourceNo: "25455555",
        dateTime: "2019-01-31T16:53:15.000Z",
        cldIn: "171766954165669",
        cliIn: "25455555",
        provinceSource: "THAILAND",
        destinationNo: "66954165669",
        description1: "Mobile",
        description2: "",
        duration: "660",
        totalCharge: 10.45,
        type: "sippy45"
      },
      {
        id: "c073a2d4-050b-40f4-a62c-609277f4ba13",
        customerCode: "1-01199",
        customerName: "HRH Princess Maha Chakri Sirindhorn Medical Center",
        sippyNameAccount: "HRH_Medical_Center",
        sourceNo: "37395085",
        dateTime: "2019-01-31T16:52:57.000Z",
        cldIn: "0831342966",
        cliIn: "HRH_Medical_Center",
        provinceSource: "THAILAND",
        destinationNo: "66831342966",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.65,
        type: "sippy45"
      },
      {
        id: "97633012-377b-48e5-89c8-ff31084d7b6e",
        customerCode: null,
        customerName: null,
        sippyNameAccount: null,
        sourceNo: "0938940242",
        dateTime: "2019-01-31T16:52:41.000Z",
        cldIn: "009916364385725",
        cliIn: "0938940242",
        provinceSource: "INDIA",
        destinationNo: "009916364385725",
        description1: "Proper",
        description2: "",
        duration: "348.0",
        totalCharge: 18.618,
        type: "sippy40"
      },
      {
        id: "f967698e-81e7-11e9-96a3-005056be871f",
        customerCode: "1-00161",
        customerName: "KTB Leasing Company Limited",
        sippyNameAccount: null,
        sourceNo: "0631900465",
        dateTime: "2019-01-31T16:52:11.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "900975",
        description1: "",
        description2: "",
        duration: "60",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "52fd4bf5-bb95-47d4-9f5b-200612d22907",
        customerCode: "1-02467",
        customerName: "Ceva Freight (Thailand) Ltd.",
        sippyNameAccount: "1-02467-Ceva-Suvan",
        sourceNo: "27158388",
        dateTime: "2019-01-31T16:51:23.000Z",
        cldIn: "171766982757434",
        cliIn: "27158388",
        provinceSource: "THAILAND",
        destinationNo: "66982757434",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 3,
        type: "sippy45"
      },
      {
        id: "d8144cdb-4651-4119-b0cf-78e87f303f4e",
        customerCode: "1-00412",
        customerName: "One to One Contacts Public Company Limited.",
        sippyNameAccount: "One_To_One_EW",
        sourceNo: "28699200",
        dateTime: "2019-01-31T16:51:15.000Z",
        cldIn: "17176629786080",
        cliIn: "28699200",
        provinceSource: "THAILAND",
        destinationNo: "6629786080",
        description1: "Bangkok",
        description2: "",
        duration: "300",
        totalCharge: 2.85,
        type: "sippy45"
      },
      {
        id: "522f7ca5-997c-4e8c-9451-f73d335951fe",
        customerCode: "1-02371",
        customerName:
          "Sea Pearl Beach Co., Ltd. (Wyndham Sea Pearl Resort Phuket)",
        sippyNameAccount: "1-02371-Wyndham-Phuket",
        sourceNo: "76303500",
        dateTime: "2019-01-31T16:51:15.000Z",
        cldIn: "171766986711218",
        cliIn: "anonymous",
        provinceSource: "THAILAND",
        destinationNo: "66986711218",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 1,
        type: "sippy45"
      },
      {
        id: "ba1e7a93-81e8-11e9-96a3-005056be871f",
        customerCode: "Employees",
        customerName: "One-to-all",
        sippyNameAccount: null,
        sourceNo: "0854846841",
        dateTime: "2019-01-31T16:50:42.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "Bangkok",
        destinationNo: "0898115450",
        description1: "IN",
        description2: "",
        duration: "780",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "f966c5f8-81e7-11e9-96a3-005056be871f",
        customerCode: "1-00161",
        customerName: "KTB Leasing Company Limited",
        sippyNameAccount: null,
        sourceNo: "0631900465",
        dateTime: "2019-01-31T16:50:38.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "900975",
        description1: "",
        description2: "",
        duration: "60",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "725dd758-5e35-4cfb-b4df-80a488d0cc2f",
        customerCode: "1-02206",
        customerName: "Bangkok Phuket International Hospital",
        sippyNameAccount: "Phuket_International_Hospital",
        sourceNo: "76361888",
        dateTime: "2019-01-31T16:49:48.000Z",
        cldIn: "17176626963626",
        cliIn: "3321",
        provinceSource: "THAILAND",
        destinationNo: "6626963626",
        description1: "Bangkok",
        description2: "",
        duration: "120",
        totalCharge: 1,
        type: "sippy45"
      },
      {
        id: "f1bf7217-c145-4511-8f95-c65e3aec55aa",
        customerCode: "1-01199",
        customerName: "HRH Princess Maha Chakri Sirindhorn Medical Center",
        sippyNameAccount: "HRH_Medical_Center",
        sourceNo: "37395085",
        dateTime: "2019-01-31T16:49:44.000Z",
        cldIn: "0882672538",
        cliIn: "HRH_Medical_Center",
        provinceSource: "THAILAND",
        destinationNo: "66882672538",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.65,
        type: "sippy45"
      },
      {
        id: "3ebbf0ee-dfa1-4f93-a080-da2e363eaa96",
        customerCode: "1-00412",
        customerName: "One to One Contacts Public Company Limited.",
        sippyNameAccount: "One_To_One_EW",
        sourceNo: "28699200",
        dateTime: "2019-01-31T16:49:39.000Z",
        cldIn: "17176621508844",
        cliIn: "28699200",
        provinceSource: "THAILAND",
        destinationNo: "6621508844",
        description1: "Bangkok",
        description2: "",
        duration: "60",
        totalCharge: 0.57,
        type: "sippy45"
      },
      {
        id: "129a34a5-9d4a-4c5f-b7d8-592baba5f45a",
        customerCode: null,
        customerName: null,
        sippyNameAccount: null,
        sourceNo: "021105555",
        dateTime: "2019-01-31T16:49:26.000Z",
        cldIn: "0930377922",
        cliIn: "021105555",
        provinceSource: "THAILAND",
        destinationNo: "66930377922",
        description1: "Mobile",
        description2: "",
        duration: "690.0",
        totalCharge: 9.2,
        type: "sippy40"
      },
      {
        id: "f966268a-81e7-11e9-96a3-005056be871f",
        customerCode: "1-00161",
        customerName: "KTB Leasing Company Limited",
        sippyNameAccount: null,
        sourceNo: "0631900465",
        dateTime: "2019-01-31T16:49:08.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "900975",
        description1: "",
        description2: "",
        duration: "60",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "cb471c0e-b44e-4e6c-8e0c-5e2dfc564e88",
        customerCode: "1-00711",
        customerName: "Bangkok Hospital Sanamchan",
        sippyNameAccount: "BKHS",
        sourceNo: "34219600",
        dateTime: "2019-01-31T16:48:50.000Z",
        cldIn: "171766982916932",
        cliIn: "anonymous",
        provinceSource: "THAILAND",
        destinationNo: "66982916932",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 2,
        type: "sippy45"
      },
      {
        id: "c4ced060-36b8-4778-8ff4-81519627fbe9",
        customerCode: "1-02337",
        customerName: "Minburi Medical Co.,Ltd (Navamin 9 Hospital)",
        sippyNameAccount: "1-02337-Navamin-9-Hospital",
        sourceNo: "25181818",
        dateTime: "2019-01-31T16:48:47.000Z",
        cldIn: "171766817837602",
        cliIn: "25181818",
        provinceSource: "THAILAND",
        destinationNo: "66817837602",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.8,
        type: "sippy45"
      },
      {
        id: "87da89a1-0993-4622-bbef-3790a9d52b22",
        customerCode: "1-02462",
        customerName: "SYNPHAET CO.,LTD.",
        sippyNameAccount: "1-02462-Synphaet-Hospital",
        sourceNo: "27935099",
        dateTime: "2019-01-31T16:48:27.000Z",
        cldIn: "171766891428157",
        cliIn: "onetoall",
        provinceSource: "THAILAND",
        destinationNo: "66891428157",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.7,
        type: "sippy45"
      },
      {
        id: "bdce4a01-c201-4bdd-b6c3-77021f0451b6",
        customerCode: "1-02206",
        customerName: "Bangkok Phuket International Hospital",
        sippyNameAccount: "Phuket_International_Hospital",
        sourceNo: "76361888",
        dateTime: "2019-01-31T16:48:01.000Z",
        cldIn: "171766887535291",
        cliIn: "1006",
        provinceSource: "THAILAND",
        destinationNo: "66887535291",
        description1: "Mobile",
        description2: "",
        duration: "120",
        totalCharge: 1,
        type: "sippy45"
      },
      {
        id: "f965808f-81e7-11e9-96a3-005056be871f",
        customerCode: "1-00161",
        customerName: "KTB Leasing Company Limited",
        sippyNameAccount: null,
        sourceNo: "0631900465",
        dateTime: "2019-01-31T16:47:50.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "900975",
        description1: "",
        description2: "",
        duration: "60",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "9cc32b70-e944-4adc-b01f-4e5f1e4cc96f",
        customerCode: "1-01495",
        customerName: "Impact Exhibition Management Co., Ltd.",
        sippyNameAccount: "Impact",
        sourceNo: "28335189",
        dateTime: "2019-01-31T16:46:57.000Z",
        cldIn: "171766840904089",
        cliIn: "28335189",
        provinceSource: "THAILAND",
        destinationNo: "66840904089",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.75,
        type: "sippy45"
      },
      {
        id: "4b75453e-d69a-4e62-b33e-7cdb17a13c63",
        customerCode: "1-02371",
        customerName:
          "Sea Pearl Beach Co., Ltd. (Wyndham Sea Pearl Resort Phuket)",
        sippyNameAccount: "1-02371-Wyndham-Phuket",
        sourceNo: "76303500",
        dateTime: "2019-01-31T16:46:46.000Z",
        cldIn: "171766638409590",
        cliIn: "anonymous",
        provinceSource: "THAILAND",
        destinationNo: "66638409590",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 1,
        type: "sippy45"
      },
      {
        id: "945f5d09-83ef-4d18-a04c-6b0f43b1f526",
        customerCode: "1-02206",
        customerName: "Bangkok Phuket International Hospital",
        sippyNameAccount: "Phuket_International_Hospital",
        sourceNo: "76361888",
        dateTime: "2019-01-31T16:46:36.000Z",
        cldIn: "171766890226404",
        cliIn: "1380",
        provinceSource: "THAILAND",
        destinationNo: "66890226404",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.5,
        type: "sippy45"
      },
      {
        id: "855b5243-4157-46ce-b06a-39073a9e03ef",
        customerCode: null,
        customerName: null,
        sippyNameAccount: "735975454525",
        sourceNo: "0894119535",
        dateTime: "2019-01-31T16:46:14.000Z",
        cldIn: "00918453386060",
        cliIn: "0894119535",
        provinceSource: "UNITED STATES",
        destinationNo: "00918453386060",
        description1: "North America",
        description2: "",
        duration: "210.0",
        totalCharge: 3.745,
        type: "sippy40"
      },
      {
        id: "f964de75-81e7-11e9-96a3-005056be871f",
        customerCode: "1-00161",
        customerName: "KTB Leasing Company Limited",
        sippyNameAccount: null,
        sourceNo: "0631900465",
        dateTime: "2019-01-31T16:46:10.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "900975",
        description1: "",
        description2: "",
        duration: "60",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "a8d6030d-793f-4b67-b662-71133ea62fc7",
        customerCode: "1-02337",
        customerName: "Minburi Medical Co.,Ltd (Navamin 9 Hospital)",
        sippyNameAccount: "1-02337-Navamin-9-Hospital",
        sourceNo: "25181818",
        dateTime: "2019-01-31T16:45:32.000Z",
        cldIn: "171766817837602",
        cliIn: "25181818",
        provinceSource: "THAILAND",
        destinationNo: "66817837602",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.8,
        type: "sippy45"
      },
      {
        id: "24f53f1c-9f38-459c-a1ab-266c3b1fde1d",
        customerCode: "1-01199",
        customerName: "HRH Princess Maha Chakri Sirindhorn Medical Center",
        sippyNameAccount: "HRH_Medical_Center",
        sourceNo: "37395085",
        dateTime: "2019-01-31T16:45:22.000Z",
        cldIn: "0831090200",
        cliIn: "HRH_Medical_Center",
        provinceSource: "THAILAND",
        destinationNo: "66831090200",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.65,
        type: "sippy45"
      },
      {
        id: "d0818206-81e8-11e9-96a3-005056be871f",
        customerCode: "1-00053",
        customerName: "Krungthai Car Rent & Lease PLC",
        sippyNameAccount: null,
        sourceNo: "0982801141",
        dateTime: "2019-01-31T16:44:41.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "",
        description1: "internet",
        description2: "",
        duration: "720",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "f96437ac-81e7-11e9-96a3-005056be871f",
        customerCode: "1-00161",
        customerName: "KTB Leasing Company Limited",
        sippyNameAccount: null,
        sourceNo: "0631900465",
        dateTime: "2019-01-31T16:44:21.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "900975",
        description1: "",
        description2: "",
        duration: "60",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "e351b723-c320-41e0-9541-3873ac640a18",
        customerCode: "1-00412",
        customerName: "One to One Contacts Public Company Limited.",
        sippyNameAccount: "One_To_One_EW",
        sourceNo: "28699200",
        dateTime: "2019-01-31T16:44:07.000Z",
        cldIn: "171766844391690",
        cliIn: "28699200",
        provinceSource: "THAILAND",
        destinationNo: "66844391690",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.57,
        type: "sippy45"
      },
      {
        id: "ae0f4e95-63d9-4107-81f5-c6804126be61",
        customerCode: "1-02337",
        customerName: "Minburi Medical Co.,Ltd (Navamin 9 Hospital)",
        sippyNameAccount: "1-02337-Navamin-9-Hospital",
        sourceNo: "25181818",
        dateTime: "2019-01-31T16:43:50.000Z",
        cldIn: "171766817837602",
        cliIn: "25181818",
        provinceSource: "THAILAND",
        destinationNo: "66817837602",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.8,
        type: "sippy45"
      },
      {
        id: "e1e677de-920c-4775-9b81-42bfff3a45f0",
        customerCode: "1-01635",
        customerName: "Chevron Thailand Exploration and Production LTD.",
        sippyNameAccount: "Chevron",
        sourceNo: "25455555",
        dateTime: "2019-01-31T16:43:48.000Z",
        cldIn: "171766866561656",
        cliIn: "25455555",
        provinceSource: "THAILAND",
        destinationNo: "66866561656",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.95,
        type: "sippy45"
      },
      {
        id: "fe62f5be-7052-4831-8fa0-d462997b0d6e",
        customerCode: "1-02226",
        customerName: "AURORA TRADING CO.,LTD.",
        sippyNameAccount: "1-02226-Aurora",
        sourceNo: "21789999",
        dateTime: "2019-01-31T16:43:26.000Z",
        cldIn: "7100036627707786",
        cliIn: "5887896",
        provinceSource: "THAILAND",
        destinationNo: "6627707786",
        description1: "Bangkok",
        description2: "",
        duration: "60",
        totalCharge: 1.5,
        type: "sippy45"
      },
      {
        id: "9aa1f48b-100b-4e34-a201-2d912c6470b1",
        customerCode: null,
        customerName: null,
        sippyNameAccount: null,
        sourceNo: "021105555",
        dateTime: "2019-01-31T16:43:17.000Z",
        cldIn: "0814737646",
        cliIn: "021105555",
        provinceSource: "THAILAND",
        destinationNo: "66814737646",
        description1: "Mobile",
        description2: "",
        duration: "1782.0",
        totalCharge: 23.76,
        type: "sippy40"
      },
      {
        id: "f1f653bf-e5be-41ff-a7f9-3518822fce44",
        customerCode: "1-00970",
        customerName: "Stampede Co., Ltd.",
        sippyNameAccount: "Stampede Solution",
        sourceNo: "0926424368",
        dateTime: "2019-01-31T16:43:05.000Z",
        cldIn: "21560324",
        cliIn: "0926424368",
        provinceSource: "THAILAND",
        destinationNo: "6621560324",
        description1: "Bangkok",
        description2: "",
        duration: "60.0",
        totalCharge: 0,
        type: "sippy40"
      },
      {
        id: "8e053496-d2cd-48f0-8ce5-16ef5d370248",
        customerCode: null,
        customerName: null,
        sippyNameAccount: null,
        sourceNo: "0938940242",
        dateTime: "2019-01-31T16:42:57.000Z",
        cldIn: "009916364385725",
        cliIn: "0938940242",
        provinceSource: "INDIA",
        destinationNo: "009916364385725",
        description1: "Proper",
        description2: "",
        duration: "222.0",
        totalCharge: 11.877,
        type: "sippy40"
      },
      {
        id: "957283af-e0fe-41d4-93e4-de537b4dc1fa",
        customerCode: null,
        customerName: null,
        sippyNameAccount: "San_Paolo",
        sourceNo: "32532579",
        dateTime: "2019-01-31T16:42:23.000Z",
        cldIn: "0854056866",
        cliIn: "San_Paolo",
        provinceSource: "THAILAND",
        destinationNo: "66854056866",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 2,
        type: "sippy45"
      },
      {
        id: "90055bc9-2e46-452d-a221-6c69ebedc0a7",
        customerCode: "1-02226",
        customerName: "AURORA TRADING CO.,LTD.",
        sippyNameAccount: "1-02226-Aurora",
        sourceNo: "21789999",
        dateTime: "2019-01-31T16:42:23.000Z",
        cldIn: "7100036627707786",
        cliIn: "5887896",
        provinceSource: "THAILAND",
        destinationNo: "6627707786",
        description1: "Bangkok",
        description2: "",
        duration: "60",
        totalCharge: 1.5,
        type: "sippy45"
      },
      {
        id: "da77c966-81e8-11e9-96a3-005056be871f",
        customerCode: "Employees",
        customerName: "One-to-all",
        sippyNameAccount: null,
        sourceNo: "0988349029",
        dateTime: "2019-01-31T16:41:33.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "",
        description1: "internet",
        description2: "",
        duration: "11880",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "b1c294fd-b679-4e85-877c-293fdb886af1",
        customerCode: null,
        customerName: null,
        sippyNameAccount: null,
        sourceNo: "0874056801",
        dateTime: "2019-01-31T16:40:59.000Z",
        cldIn: "00912098833393",
        cliIn: "0874056801",
        provinceSource: "UNITED STATES",
        destinationNo: "00912098833393",
        description1: "North America",
        description2: "",
        duration: "666.0",
        totalCharge: 11.877,
        type: "sippy40"
      },
      {
        id: "458c5cfb-b4b2-4c86-8e82-4d1c1b63e2e6",
        customerCode: "1-01199",
        customerName: "HRH Princess Maha Chakri Sirindhorn Medical Center",
        sippyNameAccount: "HRH_Medical_Center",
        sourceNo: "37395085",
        dateTime: "2019-01-31T16:40:59.000Z",
        cldIn: "0876755082",
        cliIn: "HRH_Medical_Center",
        provinceSource: "THAILAND",
        destinationNo: "66876755082",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.65,
        type: "sippy45"
      },
      {
        id: "c7755654-400e-49ac-a0d8-1b1c03195f2e",
        customerCode: "1-02205",
        customerName: "Bangkok Hospital Phuket",
        sippyNameAccount: "Bangkok_Phuket_Hospital",
        sourceNo: "76254425",
        dateTime: "2019-01-31T16:40:51.000Z",
        cldIn: "171766993199215",
        cliIn: "1132",
        provinceSource: "THAILAND",
        destinationNo: "66993199215",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.5,
        type: "sippy45"
      },
      {
        id: "1ec08c7c-a3db-4a25-813a-83d576be98bb",
        customerCode: null,
        customerName: null,
        sippyNameAccount: "1-02469-Seriruk-Hospital",
        sourceNo: "27619888",
        dateTime: "2019-01-31T16:40:34.000Z",
        cldIn: "171766918041758",
        cliIn: "27619888",
        provinceSource: "THAILAND",
        destinationNo: "66918041758",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.7,
        type: "sippy45"
      },
      {
        id: "74d7d485-994e-43c8-a549-66ad6f37015a",
        customerCode: "1-02415",
        customerName: "Bangkok Hospital Hatyai",
        sippyNameAccount: "1-02415-BKKHospital-Hatyai",
        sourceNo: "74272800",
        dateTime: "2019-01-31T16:40:19.000Z",
        cldIn: "171766815986966",
        cliIn: "74272800",
        provinceSource: "THAILAND",
        destinationNo: "66815986966",
        description1: "Mobile",
        description2: "",
        duration: "180",
        totalCharge: 1.5,
        type: "sippy45"
      },
      {
        id: "39f230e0-d2bc-4a45-8917-62b776d916d7",
        customerCode: "1-01779",
        customerName: "Chaiyos land Company Limited.",
        sippyNameAccount: "Chaiyos_land",
        sourceNo: "22079300",
        dateTime: "2019-01-31T16:40:11.000Z",
        cldIn: "0985621740",
        cliIn: "Chaiyos_land",
        provinceSource: "THAILAND",
        destinationNo: "66985621740",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.9,
        type: "sippy45"
      },
      {
        id: "a86cd2f6-df1f-4421-bf76-172164f7c2f2",
        customerCode: "1-02415",
        customerName: "Bangkok Hospital Hatyai",
        sippyNameAccount: "1-02415-BKKHospital-Hatyai",
        sourceNo: "74272800",
        dateTime: "2019-01-31T16:39:52.000Z",
        cldIn: "171766998151953",
        cliIn: "74272800",
        provinceSource: "THAILAND",
        destinationNo: "66998151953",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.5,
        type: "sippy45"
      },
      {
        id: "f0e3a20b-67c7-4cfd-a30f-b7f8c7bafb1a",
        customerCode: "1-02337",
        customerName: "Minburi Medical Co.,Ltd (Navamin 9 Hospital)",
        sippyNameAccount: "1-02337-Navamin-9-Hospital",
        sourceNo: "25181818",
        dateTime: "2019-01-31T16:39:50.000Z",
        cldIn: "171766897127385",
        cliIn: "25181818",
        provinceSource: "THAILAND",
        destinationNo: "66897127385",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.8,
        type: "sippy45"
      },
      {
        id: "65cbe7b4-36b6-4dda-887b-c8e3154ffe7d",
        customerCode: null,
        customerName: null,
        sippyNameAccount: null,
        sourceNo: "0938940242",
        dateTime: "2019-01-31T16:39:50.000Z",
        cldIn: "009916364385725",
        cliIn: "0938940242",
        provinceSource: "INDIA",
        destinationNo: "009916364385725",
        description1: "Proper",
        description2: "",
        duration: "12.0",
        totalCharge: 0.642,
        type: "sippy40"
      },
      {
        id: "f9639bef-81e7-11e9-96a3-005056be871f",
        customerCode: "1-00161",
        customerName: "KTB Leasing Company Limited",
        sippyNameAccount: null,
        sourceNo: "0631900465",
        dateTime: "2019-01-31T16:39:03.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "900975",
        description1: "",
        description2: "",
        duration: "60",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "d704b5ad-7b55-49a8-8d59-5dedaaca78c5",
        customerCode: "1-01199",
        customerName: "HRH Princess Maha Chakri Sirindhorn Medical Center",
        sippyNameAccount: "HRH_Medical_Center",
        sourceNo: "37395085",
        dateTime: "2019-01-31T16:38:49.000Z",
        cldIn: "0877739022",
        cliIn: "HRH_Medical_Center",
        provinceSource: "THAILAND",
        destinationNo: "66877739022",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.65,
        type: "sippy45"
      },
      {
        id: "6bbbe994-e8e0-4265-807e-ccae143a3748",
        customerCode: "1-01178",
        customerName: "The Erawan Group Public Company Limited (Ibis Hua-Hin)",
        sippyNameAccount: "Ibis_Hua-Hin_Hotel",
        sourceNo: "32610388",
        dateTime: "2019-01-31T16:38:24.000Z",
        cldIn: "0909799665",
        cliIn: "Ibis_Hua-Hin_Hotel",
        provinceSource: "THAILAND",
        destinationNo: "66909799665",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.9,
        type: "sippy45"
      },
      {
        id: "54dada03-7fe1-44aa-b44b-21993ebc4fbf",
        customerCode: null,
        customerName: null,
        sippyNameAccount: "515336807734",
        sourceNo: "0629398815",
        dateTime: "2019-01-31T16:38:24.000Z",
        cldIn: "0098613528448318",
        cliIn: "0629398815",
        provinceSource: "CHINA",
        destinationNo: "0098613528448318",
        description1: "Mobile",
        description2: "",
        duration: "582.0",
        totalCharge: 10.379,
        type: "sippy40"
      },
      {
        id: "8fc426cd-49eb-4d1b-a265-7763e3d681a8",
        customerCode: null,
        customerName: null,
        sippyNameAccount: "Mercure_Pattaya",
        sourceNo: "38769688",
        dateTime: "2019-01-31T16:38:13.000Z",
        cldIn: "0861117299",
        cliIn: "Mercure_Pattaya",
        provinceSource: "THAILAND",
        destinationNo: "66861117299",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.9,
        type: "sippy45"
      },
      {
        id: "bd1bdfb3-81e4-11e9-96a3-005056be871f",
        customerCode: "1-00077",
        customerName: "Delta Electronics (Thailand) PCL.",
        sippyNameAccount: null,
        sourceNo: "0631915190",
        dateTime: "2019-01-31T16:37:57.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "Chachoengsao",
        destinationNo: "0843220833",
        description1: "OUT",
        description2: "",
        duration: "60",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "9e62cb80-0716-4334-a940-c9fe6d8c3b1e",
        customerCode: null,
        customerName: null,
        sippyNameAccount: "San_Paolo",
        sourceNo: "32532577",
        dateTime: "2019-01-31T16:37:53.000Z",
        cldIn: "0898056650",
        cliIn: "San_Paolo",
        provinceSource: "THAILAND",
        destinationNo: "66898056650",
        description1: "Mobile",
        description2: "",
        duration: "120",
        totalCharge: 4,
        type: "sippy45"
      },
      {
        id: "f962f785-81e7-11e9-96a3-005056be871f",
        customerCode: "1-00161",
        customerName: "KTB Leasing Company Limited",
        sippyNameAccount: null,
        sourceNo: "0631900465",
        dateTime: "2019-01-31T16:37:48.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "900975",
        description1: "",
        description2: "",
        duration: "60",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "586de5a3-dd72-4dec-ab5c-681bf5fa395a",
        customerCode: null,
        customerName: null,
        sippyNameAccount: "1-02469-Seriruk-Hospital",
        sourceNo: "27619888",
        dateTime: "2019-01-31T16:37:07.000Z",
        cldIn: "171766909733397",
        cliIn: "27619888",
        provinceSource: "THAILAND",
        destinationNo: "66909733397",
        description1: "Mobile",
        description2: "",
        duration: "120",
        totalCharge: 1.4,
        type: "sippy45"
      },
      {
        id: "8161ce5b-f9e1-4b08-b451-de9598e700f9",
        customerCode: null,
        customerName: null,
        sippyNameAccount: "362095497758",
        sourceNo: "0817594477",
        dateTime: "2019-01-31T16:36:31.000Z",
        cldIn: "009497253931966",
        cliIn: "0817594477",
        provinceSource: "GERMANY",
        destinationNo: "009497253931966",
        description1: "Proper",
        description2: "",
        duration: "1656.0",
        totalCharge: 44.436,
        type: "sippy40"
      },
      {
        id: "1e27c456-e60f-4b11-8e84-4720b53349ec",
        customerCode: "1-01199",
        customerName: "HRH Princess Maha Chakri Sirindhorn Medical Center",
        sippyNameAccount: "HRH_Medical_Center",
        sourceNo: "37395085",
        dateTime: "2019-01-31T16:36:26.000Z",
        cldIn: "0877739022",
        cliIn: "HRH_Medical_Center",
        provinceSource: "THAILAND",
        destinationNo: "66877739022",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.65,
        type: "sippy45"
      },
      {
        id: "538d50f9-2daa-4a30-a824-39ff7fbb7688",
        customerCode: "1-01188",
        customerName: "Royal Time Citi Co., Ltd.",
        sippyNameAccount: "RoyalTimeCity",
        sourceNo: "34452452",
        dateTime: "2019-01-31T16:36:15.000Z",
        cldIn: "0890131554",
        cliIn: "onetoall",
        provinceSource: "THAILAND",
        destinationNo: "66890131554",
        description1: "Mobile",
        description2: "",
        duration: "60.0",
        totalCharge: 1,
        type: "sippy40"
      },
      {
        id: "f9625a5c-81e7-11e9-96a3-005056be871f",
        customerCode: "1-00161",
        customerName: "KTB Leasing Company Limited",
        sippyNameAccount: null,
        sourceNo: "0631900465",
        dateTime: "2019-01-31T16:35:47.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "AIS",
        destinationNo: "900975",
        description1: "",
        description2: "",
        duration: "60",
        totalCharge: 0,
        type: "ais"
      },
      {
        id: "f2a4198e-ee61-4349-9006-8f82a87949e9",
        customerCode: "1-02462",
        customerName: "SYNPHAET CO.,LTD.",
        sippyNameAccount: "1-02462-Synphaet-Hospital",
        sourceNo: "27935099",
        dateTime: "2019-01-31T16:35:28.000Z",
        cldIn: "171766950577869",
        cliIn: "onetoall",
        provinceSource: "THAILAND",
        destinationNo: "66950577869",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.7,
        type: "sippy45"
      },
      {
        id: "60621d1c-8a2d-4779-8c8d-2958bb1fd054",
        customerCode: null,
        customerName: null,
        sippyNameAccount: "441271027583",
        sourceNo: "0846639936",
        dateTime: "2019-01-31T16:34:39.000Z",
        cldIn: "00912064342461",
        cliIn: "0846639936",
        provinceSource: "UNITED STATES",
        destinationNo: "00912064342461",
        description1: "North America",
        description2: "",
        duration: "48.0",
        totalCharge: 0.856,
        type: "sippy40"
      },
      {
        id: "ffb80cb7-d4ae-4f79-a828-18f1b6f05124",
        customerCode: "1-02371",
        customerName:
          "Sea Pearl Beach Co., Ltd. (Wyndham Sea Pearl Resort Phuket)",
        sippyNameAccount: "1-02371-Wyndham-Phuket",
        sourceNo: "76303500",
        dateTime: "2019-01-31T16:34:36.000Z",
        cldIn: "171766937214509",
        cliIn: "anonymous",
        provinceSource: "THAILAND",
        destinationNo: "66937214509",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 1,
        type: "sippy45"
      },
      {
        id: "d0d8e06d-9f1c-11e9-9730-005056be871f",
        customerCode: "0269-00",
        customerName: "บริษัท โรงแรมเซ็นทรัลเวิลด์ จำกัด",
        sippyNameAccount: null,
        sourceNo: "022635599",
        dateTime: "2019-01-31T16:34:33.000Z",
        cldIn: "",
        cliIn: "",
        provinceSource: "",
        destinationNo: "0958820745",
        description1: "MB BKK CDMA",
        description2: "Fixed Line To Mobile",
        duration: "60",
        totalCharge: 0.45,
        type: "tot"
      },
      {
        id: "712b738f-a620-4980-83ac-949509f1f9d6",
        customerCode: null,
        customerName: null,
        sippyNameAccount: null,
        sourceNo: "0870538118",
        dateTime: "2019-01-31T16:34:17.000Z",
        cldIn: "00985296288806",
        cliIn: "0870538118",
        provinceSource: "HONG KONG",
        destinationNo: "00985296288806",
        description1: "Mobile",
        description2: "",
        duration: "270.0",
        totalCharge: 4.815,
        type: "sippy40"
      },
      {
        id: "035c2988-d2a5-4590-a91f-59a5cf7eca9c",
        customerCode: null,
        customerName: null,
        sippyNameAccount: null,
        sourceNo: "0938940242",
        dateTime: "2019-01-31T16:33:51.000Z",
        cldIn: "009916364385725",
        cliIn: "0938940242",
        provinceSource: "INDIA",
        destinationNo: "009916364385725",
        description1: "Proper",
        description2: "",
        duration: "24.0",
        totalCharge: 1.284,
        type: "sippy40"
      },
      {
        id: "1d4066bf-d78f-4289-b175-ee5e399a2ca0",
        customerCode: "1-02205",
        customerName: "Bangkok Hospital Phuket",
        sippyNameAccount: "Bangkok_Phuket_Hospital",
        sourceNo: "76254425",
        dateTime: "2019-01-31T16:33:39.000Z",
        cldIn: "171766818032818",
        cliIn: "anonymous",
        provinceSource: "THAILAND",
        destinationNo: "66818032818",
        description1: "Mobile",
        description2: "",
        duration: "240",
        totalCharge: 2,
        type: "sippy45"
      },
      {
        id: "dc592a87-0fa7-49ae-8c0b-60c3c9d98c26",
        customerCode: null,
        customerName: null,
        sippyNameAccount: "San_Paolo",
        sourceNo: "32532580",
        dateTime: "2019-01-31T16:33:33.000Z",
        cldIn: "0898056650",
        cliIn: "San_Paolo",
        provinceSource: "THAILAND",
        destinationNo: "66898056650",
        description1: "Mobile",
        description2: "",
        duration: "180",
        totalCharge: 6,
        type: "sippy45"
      },
      {
        id: "8e0b1a1f-ab4b-430c-a89e-7e0a288d541e",
        customerCode: "1-01635",
        customerName: "Chevron Thailand Exploration and Production LTD.",
        sippyNameAccount: "Chevron",
        sourceNo: "25455555",
        dateTime: "2019-01-31T16:33:31.000Z",
        cldIn: "171766814822932",
        cliIn: "25455555",
        provinceSource: "THAILAND",
        destinationNo: "66814822932",
        description1: "Mobile",
        description2: "",
        duration: "840",
        totalCharge: 13.3,
        type: "sippy45"
      },
      {
        id: "79687b54-1e6b-4b2d-a88c-cd272d98bfec",
        customerCode: "1-02226",
        customerName: "AURORA TRADING CO.,LTD.",
        sippyNameAccount: "1-02226-Aurora",
        sourceNo: "21789999",
        dateTime: "2019-01-31T16:33:04.000Z",
        cldIn: "7100036627707786",
        cliIn: "5887896",
        provinceSource: "THAILAND",
        destinationNo: "6627707786",
        description1: "Bangkok",
        description2: "",
        duration: "60",
        totalCharge: 1.5,
        type: "sippy45"
      },
      {
        id: "c6f553fe-281a-4993-a62d-85fa147f6ef0",
        customerCode: null,
        customerName: null,
        sippyNameAccount: "485645531329",
        sourceNo: "0922955971",
        dateTime: "2019-01-31T16:32:32.000Z",
        cldIn: "00918047324019",
        cliIn: "0922955971",
        provinceSource: "UNITED STATES",
        destinationNo: "00918047324019",
        description1: "North America",
        description2: "",
        duration: "732.0",
        totalCharge: 13.054,
        type: "sippy40"
      },
      {
        id: "024187ec-cc2f-482a-983a-c45015ca75f0",
        customerCode: "1-02205",
        customerName: "Bangkok Hospital Phuket",
        sippyNameAccount: "Bangkok_Phuket_Hospital",
        sourceNo: "76254425",
        dateTime: "2019-01-31T16:32:26.000Z",
        cldIn: "171766818032818",
        cliIn: "anonymous",
        provinceSource: "THAILAND",
        destinationNo: "66818032818",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.5,
        type: "sippy45"
      },
      {
        id: "e239f2e9-99ae-47ab-89e6-3a0b2887cff0",
        customerCode: "1-02371",
        customerName:
          "Sea Pearl Beach Co., Ltd. (Wyndham Sea Pearl Resort Phuket)",
        sippyNameAccount: "1-02371-Wyndham-Phuket",
        sourceNo: "76303500",
        dateTime: "2019-01-31T16:32:24.000Z",
        cldIn: "171766638409590",
        cliIn: "anonymous",
        provinceSource: "THAILAND",
        destinationNo: "66638409590",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 1,
        type: "sippy45"
      },
      {
        id: "bb1890c5-5367-48cf-acbc-69e00249d6f6",
        customerCode: "1-02206",
        customerName: "Bangkok Phuket International Hospital",
        sippyNameAccount: "Phuket_International_Hospital",
        sourceNo: "76361888",
        dateTime: "2019-01-31T16:32:13.000Z",
        cldIn: "171766966434842",
        cliIn: "1006",
        provinceSource: "THAILAND",
        destinationNo: "66966434842",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.5,
        type: "sippy45"
      },
      {
        id: "2c46be52-8ab6-4a77-b66a-1546ec20d157",
        customerCode: "1-01199",
        customerName: "HRH Princess Maha Chakri Sirindhorn Medical Center",
        sippyNameAccount: "HRH_Medical_Center",
        sourceNo: "37395085",
        dateTime: "2019-01-31T16:31:47.000Z",
        cldIn: "0863537721",
        cliIn: "HRH_Medical_Center",
        provinceSource: "THAILAND",
        destinationNo: "66863537721",
        description1: "Mobile",
        description2: "",
        duration: "120",
        totalCharge: 1.3,
        type: "sippy45"
      },
      {
        id: "5bc9055c-b69a-46e8-9e08-0cbd5d418c10",
        customerCode: "1-02462",
        customerName: "SYNPHAET CO.,LTD.",
        sippyNameAccount: "1-02462-Synphaet-Hospital",
        sourceNo: "27935099",
        dateTime: "2019-01-31T16:31:41.000Z",
        cldIn: "171766820909209",
        cliIn: "onetoall",
        provinceSource: "THAILAND",
        destinationNo: "66820909209",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.7,
        type: "sippy45"
      },
      {
        id: "0deb63f7-d164-46a2-8e13-dc6abbc758db",
        customerCode: "1-02206",
        customerName: "Bangkok Phuket International Hospital",
        sippyNameAccount: "Phuket_International_Hospital",
        sourceNo: "76361888",
        dateTime: "2019-01-31T16:31:26.000Z",
        cldIn: "171766831546491",
        cliIn: "1006",
        provinceSource: "THAILAND",
        destinationNo: "66831546491",
        description1: "Mobile",
        description2: "",
        duration: "60",
        totalCharge: 0.5,
        type: "sippy45"
      },
      {
        id: "4ece3dcc-18a3-4c86-b5c2-7a56edcd2894",
        customerCode: null,
        customerName: null,
        sippyNameAccount: null,
        sourceNo: "021105555",
        dateTime: "2019-01-31T16:31:19.000Z",
        cldIn: "0648415859",
        cliIn: "021105555",
        provinceSource: "THAILAND",
        destinationNo: "66648415859",
        description1: "Mobile",
        description2: "",
        duration: "1062.0",
        totalCharge: 14.16,
        type: "sippy40"
      }
    ];

    //let result  = this.props.cdrReducer;
    const defaultSorted = [
      {
        dataField: "dateTime",
        order: "desc"
      }
    ];
    const rowClasses = "nowarp";
    //const rowStyle = { backgroundColor: '#c8e6c9' };
    const headerSortingStyle = { backgroundColor: "#c8e6c9" };

    const columns = [
      {
        dataField: "id",
        text: "ID CDRs",
        headerClasses: "text-center",
        classes: "text-nowarp",
        hidden: true
      },
      {
        dataField: "customerCode",
        text: "CustomerCode",
        sort: true,
        headerSortingStyle,
        headerClasses: "align-middle text-center",
        classes: "align-middle text-center text-nowarp",
        headerStyle: { width: "12%" }
      },
      {
        dataField: "customerName",
        text: "CustomerName",
        headerClasses: "align-middle text-center text-nowarp",
        classes: " align-middle text-nowarp",
        headerStyle: { width: "30%" },
        //formatter: nameFormatter
      },
      {
        dataField: "dateTime",
        text: "Date",
        sort: true,
        headerClasses: "align-middle text-center",
        headerSortingStyle,
        classes: "align-middle text-center text-nowarp",
        formatter: cell => {
          let dateObj = cell;
          if (typeof cell !== "object") {
            dateObj = new Date(cell);
          }
          return `${("0" + dateObj.getDate()).slice(-2)}/${(
            "0" +
            (dateObj.getMonth() + 1)
          ).slice(-2)}/${dateObj.getFullYear()}`;
        },
        editor: {
          type: Type.DATE
        },
        headerStyle: { width: "8%" }
      },
      {
        dataField: "sourceNo",
        text: "Source",
        headerClasses: "align-middle text-center",
        classes: "align-middle text-center text-nowarp",
        headerStyle: { width: "15%" }
      },
      {
        dataField: "destinationNo",
        text: "Destination",
        headerClasses: "align-middle text-center",
        classes: "align-middle text-center text-nowarp",
        headerStyle: { width: "15%" }
      },
      {
        dataField: "duration",
        text: "Duration / Min",
        headerClasses: "align-middle text-center",
        classes: "align-middle text-right text-nowarp",
        headerStyle: { width: "10%" },
        formatter: durationFormatter
      },
      {
        dataField: "price",
        text: "Rate",
        headerClasses: "align-middle text-center",
        classes: "align-middle text-nowarp",
        headerStyle: { width: "8%" }
      },
      {
        dataField: "totalCharge",
        text: "TotalCharge",
        headerClasses: "align-middle text-center",
        classes: "align-middle text-right text-nowarp",
        headerStyle: { width: "10%" }
      },
      {
        dataField: "type",
        text: "Type",
        headerClasses: "align-middle text-center",
        classes: "align-middle text-center text-nowarp",
        headerStyle: { width: "8%" }
      }
    ];

    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">CDRs</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/dashboard" className="linkCustom">
                      <p>Home</p>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">CDRs</li>
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
                  <h3 className="card-title">CDRs Transaction</h3>
                </div>
                <div className="card-body">
                  <div className="table-container">
                    <ToolkitProvider
                      keyField="id"
                      data={cdr}
                      columns={columns}
                      search
                    >
                      {props => (
                        <div>
                          <SearchBar
                            {...props.searchProps}
                            className="custome-search-field"
                            delay={2000}
                            placeholder="Search"
                          />
                          <hr />
                          <BootstrapTable
                            {...props.baseProps}
                            bootstrap4
                            keyField="id"
                            data={cdr}
                            columns={columns}
                            //rowStyle={ rowStyle }
                            rowClasses={rowClasses}
                            defaultSorted={defaultSorted}
                            striped
                            hover
                            condensed
                            headerClasses="table-primary text-nowarp"
                            pagination={paginationFactory()}
                          />
                        </div>
                      )}
                    </ToolkitProvider>
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

const mapStateToProps = ({ cdrReducer }) => ({
  cdrReducer
});

export default connect(
  mapStateToProps,
  actions
)(CDRs);
