import React, { useEffect, useState } from "react";
import { ApiGet } from "../../../helpers/API/ApiData";
import "./immobilienSection.scss";
import ImmobilienSlider from "./immobilienSlider";
export default function ImmobilienSection() {
  const [informationData, setInformationData] = useState({});

  const getInformationData = async () => {
    await ApiGet(`static/get-all-static`)
      .then((res) => {
        console.log("informationData", res);
        setInformationData(
          res?.data?.payload?.getStatic?.filter((item) => {
            return item?._id === "639c18c87bf600d6b595289f";
          })
        );
      })
      .catch((err) => {
        console.log("erre", err);
      });
  };

  useEffect(() => {
    getInformationData();
  }, []);
  console.log("informationDataqqqq", informationData);
  return (
    <div>
      <div className="immobilien-section-all-content-alignment">
        <div className="left-side-content-alignment">
          <div className="flex">
            <div className="flex-items">
              <div className="text-style">
                <h4>
                  {informationData?.[0]?.title} <br/>
                  <span>{informationData?.[0]?.subTitle}</span>
                </h4>
                <div className="description-styleaa"
                  dangerouslySetInnerHTML={{
                    __html: informationData?.[0]?.description,
                  }}
                ></div>
                 <a href="/kaufen">
                <button>Alle Objekte</button>
                </a>
              </div>
            </div>
            <div className="flex-items">
              <ImmobilienSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
