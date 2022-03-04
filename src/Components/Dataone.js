import React, { useEffect, useState } from "react";

function Dataone() {
  const [data, setData] = useState([]);
  const getCountries = async () => {
    await fetch("data.json", {
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (responce) {
        console.log(responce);
        return;
        responce.json();
      })
      .then(function (myJson) {
        console.log(myJson.states.filter((data) => console.log(data)));
        setData(myJson);
      });
  };
}
useEffect(() => {
  getCountries();
}, []);
return (
  <>
    <div className="row" className="hdr">
      <div className="col-sm-12 btn btn-info">Dropdown ReactJS</div>
    </div>
    <form className="form-group dropdn">
      <select
        className="form-control"
        name="state"
        onChange={(event) => changeSelectOptionHandler(event)}
      >
        <option>select state</option>
      </select>
      <select className="form-control">
        <option>select district</option>
      </select>
    </form>
  </>
);

export default Dataone;
