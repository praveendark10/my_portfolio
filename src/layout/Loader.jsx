import React from "react";
import "../style/Loader.scss";

function Loader() {
  return (
    <>
      <div className="loader">
        <div className="body">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="base">
            <span></span>
            <div className="face"></div>
          </div>
        </div>
        <div className="longfazers">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 className="loading_txt">Loading</h1>
      </div>
    </>
  );
}

export default Loader;
