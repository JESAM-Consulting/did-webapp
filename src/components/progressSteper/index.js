import React from "react";
import "./progressSteper.scss";
export default function ProgressSteper(props) {
  const { width } = props;
  return (
    <div>
      <div className="steoper-progress-main">
        <div className="active-progress" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
}
