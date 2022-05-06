import React, { useState } from "react";
import { DataContext } from "../context/DataContext";
import GetDataPage from "./GetDataPage";
import ShowData from "./ShowData";

import "../styles/parentComponent.scss";

function ParentComponent() {
  const [arrayData, setArrayData] = useState([]);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="wrapperContainer">
      <DataContext.Provider
        value={{ toggle, arrayData, setToggle, setArrayData }}
      >
        {toggle ? <ShowData /> : <GetDataPage />}
      </DataContext.Provider>
    </div>
  );
}

export default ParentComponent;
