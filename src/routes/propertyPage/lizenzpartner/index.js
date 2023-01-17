import React, { useEffect, useState } from "react";
import "./lizenzpartner.scss";
import LizenzpartnerImage from "../../../assets/images/lizenzpartner.png";
import { NavLink } from "react-router-dom";
import { ApiGet } from "../../../helpers/API/ApiData";
export default function Lizenzpartner() {
  const [informationData, setInformationData] = useState({});
  const [informationData1, setInformationData1] = useState({});
  const [informationData2, setInformationData2] = useState({});
  const [informationData3, setInformationData3] = useState({});

  const getInformationData = async () => {
    await ApiGet(`static/get-all-static`)
      .then((res) => {
        console.log("informationData", res);
        setInformationData(
          res?.data?.payload?.getStatic?.filter((item) => {
            return item?._id === "639c309f7bf600d6b59528ed";
          })
        );
        setInformationData1(
          res?.data?.payload?.getStatic?.filter((item) => {
            return item?._id === "639c33887bf600d6b5952904";
          })
        );
        setInformationData2(
          res?.data?.payload?.getStatic?.filter((item) => {
            return item?._id === "639c34bf7bf600d6b5952918";
          })
        );
        setInformationData3(
          res?.data?.payload?.getStatic?.filter((item) => {
            return item?._id === "639c351e7bf600d6b5952920";
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
  console.log("informationDatafirst", informationData);

  return (
    <div>
      <div className="lizenzpartner-all-content-alignment">
        <div className="container-md-16">
          <div className="grid">
            <div className="grid-items">
              <h3>Lizenzpartner</h3>
              <h4>
                Die beste Lösung <br />
                für beide Seiten
              </h4>
              <p>
                Keine Kosten, dafür mehr Erfolg und weniger Stress: Erleichtern
                Sie sich Ihre Immobilien-Pläne mit dieser Markenlizenz!Denn
                unsichere Zeiten benötigen smarte Strategien, neuste Technologie
                und Daten.
              </p>
              <NavLink to="/lizenzpartner-step">
                <button>Jetzt informieren</button>
              </NavLink>
            </div>
            <div className="grid-items">
              <div className="image-style">
                <img src={LizenzpartnerImage} alt="LizenzpartnerImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-green-banner-content-alignment">
        <div className="property-details-right-button-alignment">
          <NavLink to="/lizenzpartner-step">
            <button>Anfrage für Lizenzpartner</button>
          </NavLink>
        </div>
        <div className="container-md-15">
          <div className="service-title-alignment">
            <p>SERVICES</p>
            <p>Lizenzpartner</p>
          </div>
          <div className="sec-service-grid-all-content-alignment">
            <div className="service-grid">
              <div className="service-grid-items">
                <h5>{informationData?.[0]?.subTitle}</h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: informationData?.[0]?.description,
                  }}
                ></div>
              </div>
              <div className="service-grid-items">
                <div className="green-box"></div>
              </div>
            </div>
            <div className="service-grid">
              <div className="service-grid-items">
                <h5>{informationData1?.[0]?.subTitle}</h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: informationData1?.[0]?.description,
                  }}
                ></div>
              </div>
              <div className="service-grid-items">
                <div className="green-box"></div>
              </div>
            </div>
            <div className="service-grid">
              <div className="service-grid-items">
                <h5>{informationData2?.[0]?.subTitle}</h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: informationData2?.[0]?.description,
                  }}
                ></div>
              </div>
              <div className="service-grid-items">
                <div className="green-box"></div>
              </div>
            </div>
            <div className="service-grid">
              <div className="service-grid-items">
                <h5>{informationData3?.[0]?.subTitle}</h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: informationData3?.[0]?.description,
                  }}
                ></div>
              </div>
              <div className="service-grid-items">
                <div className="green-box"></div>
              </div>
            </div>
          </div>
          <div className="mobile-view-property-last-button">
            <NavLink to="/lizenzpartner-step">
              <button>Anfrage für Lizenzpartner</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
