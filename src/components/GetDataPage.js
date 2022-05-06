import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import Axios from "axios";

function GetDataPage() {
  const { arrayData, setToggle, setArrayData } = useContext(DataContext);

  useEffect(() => {
    Axios.get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8").then(
      (res) => {
        setArrayData(res.data);
      }
    );
  });

  let GetData = () => {
    let arrayLength = arrayData.length;
    if (arrayLength > 0) {
      setToggle(true);
    }
  };

  return (
    <div>
      <button onClick={GetData}>Click to Get Data </button>
    </div>
  );
}

export default GetDataPage;
