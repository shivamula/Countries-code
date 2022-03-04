import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
class States extends Component {
  constructor(props) {
    super(props);

    this.state = {
      StateData: [],
      DistrictData: [],
      StateId: "",
      DistrictId: "",
    };
  }
  componentDidMount() {
    fetch("data.json", {
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log("shiva", response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.states.filter((data) => console.log(data)));
        this.setState(myJson);
      });
  }
  ChangeDistricts = (e) => {
    this.setState({
      StateId: e.target.value,
    });
    fetch(`data.json/${StateId}`, {
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log("shiva", response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.states.filter((data) => console.log(data)));
        this.setState(myJson);
      });
    // axios
    //   .get(
    //     "http://localhost:65173/get-cities-by-state?StateId=" + e.target.value
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({
    //       CityData: response.data,
    //     });
    //   });
  };
  render() {
    return (
      <div>
        <div class="row" className="hdr">
          <div class="col-sm-12 btn btn-info">
            Cascading Dropdown in ReactJS
          </div>
        </div>
        <div className="form-group dropdn">
          <select
            className="form-control"
            name="country"
            value={this.state.StateId}
            onChange={this.ChangeDistricts}
          >
            <option>Select State</option>
            {Object.keys(this.state.StateData).length > 0
              ? this.state.StateData.map((data, key) => {
                  return (
                    <option key={key} value={data.StateId}>
                      {data.state}
                    </option>
                  );
                })
              : ""}
          </select>
          <select
            className="form-control slct"
            name="state"
            value={this.state.StateId}
          >
            <label for="company">State Name</label>
            {Object.keys(this.state.DistrictData).length > 0
              ? this.state.DistrictData.map((data, key) => {
                  return (
                    <option key={key} value={data.DistrictId}>
                      {data.districts}
                    </option>
                  );
                })
              : ""}
          </select>
          {/* <select
            className="form-control slct"
            name="city"
            value={this.state.CityData}
          >
            {this.state.CityData.map((e, key) => {
              return (
                <option key={key} value={e.CityId}>
                  {e.cityName}
                </option>
              );
            })}
          </select> */}
        </div>
      </div>
    );
  }
}
export default States;
