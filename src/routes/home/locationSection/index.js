import React from "react";
import "./locationSection.scss";
import LocationImage from "../../../assets/images/location.png";
import VERKAUFENImage from "../../../assets/images/VERKAUFEN.png";
import MANAGEMENTImage from "../../../assets/images/MANAGEMENT.png";
import { NavLink } from "react-router-dom";
export default function LocationSection() {
  return (
    <div>
      <div className="all-location-content-alignment">
        <div className="location-grid">
          <div className="location-grid-items">
            <div className="card-image">
              <img src={LocationImage} alt="LocationImage" />
            </div>
            <div className="card-details">
              <NavLink to="/kaufen">
                <p>KAUFEN</p>
              </NavLink>
            </div>
          </div>
          <div className="location-grid-items">
            <div className="card-image">
              <img src={VERKAUFENImage} alt="VERKAUFENImage" />
            </div>
            <div className="card-details">
              <NavLink to="/verkaufen">
                <p>VERKAUFEN</p>
              </NavLink>
            </div>
          </div>
          <div className="location-grid-items">
            <div className="card-image">
              <img src={MANAGEMENTImage} alt="MANAGEMENTImage" />
            </div>
            <div className="card-details">
              <NavLink to="property-page">
                <p>POPERTY MANAGEMENT</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
