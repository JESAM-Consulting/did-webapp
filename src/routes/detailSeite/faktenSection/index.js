import React, { useState } from "react";
import "./faktenSection.scss";
export default function FaktenSection(props) {
  const [tab, setTab] = useState("description");

  const handleTab = (data) => {
    setTab(data);
  };

  console.log("firsttab", tab);

  return (
    <div>
      <div className="fakten-all-content-alignment">
        <div className="container-md-11">
          <div className="fakten-heading-style-new">
            <h1>Fakten</h1>
            <h2>& Beschreibung</h2>
            </div>
          <div className="grid">
            <div className="grid-items">
              <span onClick={() => handleTab("description")}>Beschreibung</span>
              <span onClick={() => handleTab("furniture")}>Ausstattung</span>
              <span onClick={() => handleTab("location")}>Lage</span>
            </div>
            <div className="grid-items">
              {tab === "description" && (
                <div className="left-content-alignment">
                  <p>{props?.props?.location?.state?.description}</p>
                </div>
              )}
              {tab === "furniture" && (
                <div className="left-content-alignment">
                  <p>{props?.props?.location?.state?.description}</p>
                </div>
              )}
              {tab === "location" && (
                <div className="left-content-alignment">
                  <p>
                    {props?.props?.location?.state?.city},
                      {props?.props?.location?.state?.state}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
