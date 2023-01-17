import React from "react";
import "./zahlenContent.scss";
import GateIcon from "../../../assets/icons/gate.svg";
import GolfIcon from "../../../assets/icons/golf.svg";
import FamilyIcon from "../../../assets/icons/family.svg";
import PoolIcon from "../../../assets/icons/pool.svg";
import moment from "moment";
export default function ZahlenContent(props) {
  let property = props?.props?.location?.state;
  return (
    <div>
      <div className="zahlen-content-all-alignment">
        <div className="container-md-10">
          <div className="section-title">
            <h2>In</h2>
            <h3>Zahlen</h3>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="right-content">
                <p>BESCHREIBUNG</p>
              </div>
              <div className="three-text-alignment">
                <div>
                  <h2>{property?.roomCount}</h2>
                  <span>Zimmer</span>
                </div>
                <div>
                  <h2>{property?.basementCount}</h2>
                  <span>1 Tiefgaragen-Stellplatz</span>
                </div>
                <div>
                  <h2>{property?.houseType}</h2>
                  <span>Etagenwohnung</span>
                </div>
              </div>
              <div className="two-new-col-grid">
                <div className="two-new-col-grid-items">
                  <div className="box-title">
                    <p>LOT</p>
                  </div>
                  <div className="box-body">
                    <h3>{property?.livingSpaceSize}m2</h3>
                    <p>Wohnfläche</p>
                  </div>
                </div>
                <div className="two-new-col-grid-items">
                  <div className="box-title">
                    <p>YEAR</p>
                  </div>
                  <div className="box-body">
                    <h3>{moment(property?.availableFrom).format("DD.MM.YY")}</h3>
                    <p>Bezugsfrei ab</p>
                  </div>
                </div>
              </div>
            </div>
            {property?.isFurniture == true && (
              <div className="grid-items">
                <div className="right-content">
                  <p>AUSSTATTUNG</p>
                </div>
                <div className="image-grid">
                  <div className="image-grid-items">
                    <img src={GateIcon} alt="GateIcon" />
                  </div>
                  <div className="image-grid-items">
                    <img src={GolfIcon} alt="GolfIcon" />
                  </div>
                  <div className="image-grid-items">
                    <img src={FamilyIcon} alt="FamilyIcon" />
                  </div>
                  <div className="image-grid-items">
                    <img src={PoolIcon} alt="PoolIcon" />
                  </div>
                </div>
                <div className="dummy-text">
                  <span>Blick: Wassr/ Parkblick</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
