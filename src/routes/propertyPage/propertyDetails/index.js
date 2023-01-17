import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ApiGet } from "../../../helpers/API/ApiData";
import "./propertyDetails.scss";
export default function PropertyDetails() {
  const [informationData, setInformationData] = useState({});
  const [informationData1, setInformationData1] = useState({});
  const [informationData2, setInformationData2] = useState({});
  const [informationData3, setInformationData3] = useState({});
  const [informationData4, setInformationData4] = useState({});

  const getInformationData = async () => {
    await ApiGet(`static/get-all-static`)
      .then((res) => {
        console.log("informationData", res);
        setInformationData(
          res?.data?.payload?.getStatic?.filter((item) => {
            return item?._id === "639c35d67bf600d6b595292a";
          })
        );
        setInformationData1(
          res?.data?.payload?.getStatic?.filter((item) => {
            return item?._id === "639c36c17bf600d6b5952934";
          })
        );
        setInformationData2(
          res?.data?.payload?.getStatic?.filter((item) => {
            return item?._id === "639c37a17bf600d6b595293c";
          })
        );
        setInformationData3(
          res?.data?.payload?.getStatic?.filter((item) => {
            return item?._id === "639c38d19549e9b6b7aacd87";
          })
        );
        setInformationData4(
          res?.data?.payload?.getStatic?.filter((item) => {
            return item?._id === "639c39829549e9b6b7aacd95";
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
  console.log("informationDatafirst", informationData2);

  return (
    <div id="property">
      <div className="property-details-all-content-alignment">
        <div className="property-details-right-button-alignment">
          <NavLink to="/property-management-steper">
            <button>Anfrage für Property Management</button>
          </NavLink>
        </div>
        <div className="container-md-15">
          <div className="section-title">
            <h1>{informationData3?.[0]?.title}</h1>
            <h2>{informationData4?.[0]?.title}</h2>
            <h3>{informationData4?.[0]?.subTitle}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: informationData3?.[0]?.description,
              }}
            ></div>
            <div className="sapcer"></div>
            <div
              dangerouslySetInnerHTML={{
                __html: informationData4?.[0]?.description,
              }}
            ></div>
          </div>
          <div className="service-title-alignment">
            <p>SERVICES</p>
            <p>Verkauf mit DID</p>
          </div>
          <div className="service-all-details-alignment">
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
                <div className="icon"></div>
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
                <div className="icon"></div>
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
                <div className="icon"></div>
              </div>
            </div>
          </div>
          <div className="mobile-view-property-last-button">
            <button>Anfrage für Property Management</button>
          </div>
        </div>
      </div>
    </div>
  );
}
