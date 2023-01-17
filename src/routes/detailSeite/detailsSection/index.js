import React from "react";
import "./detailsSection.scss";
import LocationIcon from "../../../assets/icons/location-icon.svg";
import GavelIcon from "../../../assets/icons/gavel.svg";
import DateIcon from "../../../assets/icons/date.svg";
import EyeIcon from "../../../assets/icons/eye.svg";
import moment from "moment";
export default function DetailsSection(props) {
  let property = props?.props?.location?.state;
  console.log("firstproperty", property);
  return (
    <div>
      <div className="page-all-details-section-content-alignment">
        <div className="container-md-8">
          <div className="page-section-title">
            <span>Moderne 3-Zimmer-Neubauwohnung direkt am Wasser</span>
            <p>{property?.description}</p>
          </div>
          <div className="sec-row-content-alignment">
            <div className="left-content">
              {property?.isBalcony == true && <span>Balkon/ Terrasse </span>}
              {property?.isBasement == true && <span>Keller</span>}
              {property?.isGueElevator == true && <span>Personenaufzug</span>}
              {property?.isGueToilet == true && <span>Gäste-WC</span>}
            </div>
            <div className="right-content">
              <a href="tel:0421 / 1 67 61 80-0">
                <button>0421 / 1 67 61 80-0</button>
              </a>
            </div>
          </div>
        </div>
        <div className="container-md-9">
          <div className="all-icon-content-alignment">
            <div className="icon-grid">
              <div className="icon-grid-items">
                <img src={LocationIcon} alt="LocationIcon" />
              </div>
              <div className="icon-grid-items">
                <span>
                  {property?.city}, {property?.state}
                </span>
              </div>
            </div>
            <div className="icon-grid">
              <div className="icon-grid-items">
                <img src={GavelIcon} alt="GavelIcon" />
              </div>
              <div className="icon-grid-items">
                <span>€{property?.price}m</span>
              </div>
            </div>
            <div className="icon-grid">
              <div className="icon-grid-items">
                <img src={DateIcon} alt="DateIcon" />
              </div>
              <div className="icon-grid-items">
                <span>
                  Bezugsfrei ab{" "}
                  {moment(property?.availableFrom).format("DD.MM.YY")}
                </span>
              </div>
            </div>
          </div>
          <div className="only-button-center-align">
            <button>JETZT ANFRAGEN</button>
          </div>
          <div className="all-icon-content-alignment">
            <div className="icon-grid">
              <div className="icon-grid-items">
                <img src={EyeIcon} alt="EyeIcon" />
              </div>
              <div className="icon-grid-items">
                <span>Besichtigung nach Anfrage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
