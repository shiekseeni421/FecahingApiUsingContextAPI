import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "../styles/showData.scss";

function ShowData() {
  const { arrayData } = useContext(DataContext);
  return (
    <div className="showDataContainer">
      {arrayData.map((item) => {
        return (
          <div>
            <p>
              <span className="heading">Name</span>: {item.name}{" "}
              <span className="heading">City</span>: {item.city}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ShowData;
