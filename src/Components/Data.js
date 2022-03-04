import React, { useState, useEffect } from "react";

function Data() {
  const [data, setData] = useState([]);

  const [statedata, setStateData] = useState();
  const [districtsdata, setDistrictsData] = useState([]);
  const getCountries = async () => {
    await fetch("data.json", {
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(
          "TESTSTS",
          myJson.states.filter((data) => console.log(data))
        );
        setData(myJson);
        // setDistrictsData(myJson);
      });
  };
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });
  const state = [
    ...new Set(
      Object.keys(data).length > 0
        ? data && data.states.map((item) => item.state)
        : ""
    ),
  ];
  state.sort();
  const changeSelectOptionHandler = (event) => {
    event.preventDefault();
    let States = data.states.filter(
      (data) => data.state === event.target.value
    );
    States = [...new Set(States.map((item) => item.districts))];
    // States.sort();
    // console.log(States);
    setDistrictsData(States);
  };
  // state.sort();
  // console.log(state);
  // const changeSelectOptionHandler = (event) => {
  //   let States = data.filter((data) => data.state === event.target.value);
  //   States = [...new Set(States.map((item) => item.districts))];
  //   States.sort();
  //   console.log(States);
  //   setData(States);
  // };
  // };
  // setSelected({ selected: event.target.value });
  // districtsdata.states.filter((data) => {
  //   return data.districts
  //     .toString()
  //     .toLowerCase()
  //     .includes(selected.toString().toLowerCase());
  // });
  // console.log(districtsdata);
  // setDistrictsData(districtsdata);
  const HandleSubmit = (event) => {
    event.preventDefault();
    alert(`${districtsdata} `);
  };
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <>
      <div className="row" className="hdr">
        <div className="col-sm-12 btn btn-info">Dropdown in ReactJS</div>
      </div>
      <form className="form-group dropdn" onSubmit={HandleSubmit}>
        <select
          className="form-control"
          name="state"
          onChange={(event) => changeSelectOptionHandler(event)}
          //   value={stateId}
          //   onChange={ChangeDistrict}
        >
          <option>selectState</option>
          {Object.keys(state).length > 0
            ? state &&
              state.map((items) => (
                <option key={items} value={statedata}>
                  {items}
                </option>
              ))
            : ""}
          )
        </select>

        <select className="form-control">
          <option value="option1">select districts</option>
          {console.log(typeof districtsdata)}
          {console.log(districtsdata[0])}
          {Object.keys(districtsdata).length > 0
            ? districtsdata[0].map((items) => (
                <option key={items}>{items}</option>
              ))
            : ""}
        </select>
        <button type="submit">Submit</button>
        {/* <option>{data.districts}</option> */}
      </form>
    </>
  );
}

export default Data;
