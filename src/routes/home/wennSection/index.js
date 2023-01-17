import React, { useEffect, useState } from "react";
import "./wennSection.scss";
import WemmImage from "../../../assets/images/wemm.png";
import ComaImage from "../../../assets/icons/coma.svg";
import ComaTwoImage from "../../../assets/icons/coma-two.svg";
import { NavLink } from "react-router-dom";
import { ApiGet } from "../../../helpers/API/ApiData";
export default function WennSection() {
  const [informationData, setInformationData] = useState({});

  const getInformationData = async () => {
    await ApiGet(`static/get-all-static`)
      .then((res) => {
        console.log("informationData", res);
        setInformationData(
          res?.data?.payload?.getStatic?.filter((item) => {
            return item?._id === "639c6dcda884a77b8615fb2d";
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
      <div className="wenn-section-all-content-alignment">
        <div className="container-md-3">
          <div className="grid">
            <div className="grid-items">
              <div className="wenn-image-style">
                <img src={informationData[0]?.image[0]} alt="WemmImage" />
              </div>
            </div>
            <div className="grid-items">
              <div className="coma-first-image">
                <img src={ComaImage} alt="ComaImage" />
              </div>
              <div
                className="description-styleaa"
                dangerouslySetInnerHTML={{
                  __html: informationData?.[0]?.description,
                }}
              ></div>
              <div className="last-content-alignment">
                <div>
                  <img src={ComaTwoImage} alt="ComaTwoImage" />
                </div>
                <div className="line-text-alignment">
                  <div className="line"></div>
                  <span>{informationData?.[0]?.subTitle}</span>
                </div>
              </div>
              <NavLink to="/kontakt">
                <button>Kontakt aufnehmen</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
