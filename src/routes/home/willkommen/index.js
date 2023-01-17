import React, { useEffect, useState } from "react";
import "./willkommen.scss";
import LeftIcon from "../../../assets/icons/left-green.svg";
import RightIcon from "../../../assets/icons/right-green.svg";
import WillkommenImage from "../../../assets/images/willkommen.png";
import { NavLink } from "react-router-dom";
import MobileWillkommenImage from "../../../assets/images/mobile-willkommen.png";
import { ApiGet } from "../../../helpers/API/ApiData";
export default function Willkommen() {
  const [informationData, setInformationData] = useState({});

  const getInformationData = async () => {
    await ApiGet(`static/get-all-static`)
      .then((res) => {
        console.log("informationData", res);
        setInformationData(
          res?.data?.payload?.getStatic?.filter((item) => {
            return item?._id === "639c6e1aa884a77b8615fb3d";
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
  console.log("informationData", informationData);
  return (
    <div>
      <div id="welcome" className="willkommen-all-content-alignment">
        <div className="container-md-3">
          <div className="grid">
            <div className="grid-items">
              <div className="page-title">
                <h2>{informationData?.[0]?.title}</h2>
                <h5>{informationData?.[0]?.subTitle}</h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: informationData?.[0]?.description,
                  }}
                ></div>
              </div>
              <div className="globally-button">
                <NavLink to="/steper">
                  <button>Immobilie bewerten lassen</button>
                </NavLink>
              </div>
              <div className="three-col-grid">
                <div className="three-col-grid-items">
                  <div className="globally-button">
                    <NavLink to="/kaufen">
                      <button>KAUFEN</button>
                    </NavLink>
                  </div>
                </div>
                <div className="three-col-grid-items">
                  <div className="two-icon-alignment">
                    <img src={LeftIcon} alt="LeftIcon" />
                    <img src={RightIcon} alt="RightIcon" />
                  </div>
                </div>
                <div className="three-col-grid-items">
                  <div className="globally-button">
                    <NavLink to="/verkaufen">
                      <button>VERKAUFEN</button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="globally-button">
                <NavLink to="/suchauftrag-step">
                  <button>Suchauftrag erstellen</button>
                </NavLink>
              </div>
            </div>
            <div className="grid-items">
              <div className="image-style">
                <img src={informationData[0]?.image[0]} alt="WillkommenImage" />
                <img src={informationData[0]?.image[0]} alt="MobileWillkommenImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
