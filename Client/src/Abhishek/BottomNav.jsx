import React, { useEffect, useState } from "react";
import "./Styles/bottomNav.css";
import data from "./cat.json";
export const BottomNav = ({ category }) => {
  const [values, setValues] = useState([]);
  // console.log("cat",category);
  useEffect(() => {
    if (category == "mac") {
      setValues(data.MacBook);
    } else if (category == "iPhone") {
      setValues(data.iPhone);
    } else if (category == "iPad") {
      setValues(data.iPad);
    } else if (category == "apple_watch") {
      setValues(data.Watch);
    }
    console.log(values);
  });
  return (
    <div id="flexGrp">
      {values.length !== 0 &&
        values.map((el) => (
          <div key={el.title} className="card">
            <img src={el.img} alt={el.title} />
            <p>{el.title}</p>
          </div>
        ))}
    </div>
  );
};
