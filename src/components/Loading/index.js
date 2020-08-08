import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

export default function Loading() {
  const show = useSelector((state) => {
    return state.loadingReducer.display;
  });

  return (
    <div id="loading" className={`${show ? "" : "d-none"}`}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
