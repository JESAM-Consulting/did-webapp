import React from "react";
import "./detailSeiteHeroSection.scss";
import KaufunBanner from "../../../assets/images/home.png";
import moment from "moment";
import { NavLink } from "react-router-dom";

export default function DetailSeiteHeroSection(props) {
  console.log("propsvvvv", props);
  let property = props?.props.location.state;
  return (
    <div>
      <div className="deails-seite-hero-section-content-alignment">
        <div className="grid">
          <div className="grid-items"></div>
          <div className="grid-items">
            <img src={property?.propertyImage[0]} alt="KaufunBanner" />
          </div>
        </div>
        <div className="content-top-alignment">
          <div className="container-md">
            <div className="white-box">
              <h1>{property?.propertyName}</h1>
              <h6>
                {property?.city}, {property?.state}
              </h6>
              <p>{moment(property?.createdAt).format("dddd LL LT")}</p>
              <h5>
                Anfragen:{" "}
                <a href="tel:0421 / 1 67 61 80-0">
                  <span>0421 / 1 67 61 80-0</span>
                </a>
              </h5>
              <NavLink to="/suchauftrag-step">
                <button>Anfrage starten</button>
              </NavLink>
            </div>
            <div className="col-grid">
              <div className="col-grid-items">
                <span>KAUFPREIS</span>
                <h4>€{property?.price}m</h4>
              </div>
              <div className="col-grid-items">
                <span>WEITERE INFORMATIONEN</span>
                <h2>
                  {property?.areaSize}m2 - {property?.roomCount}Zimmer
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
