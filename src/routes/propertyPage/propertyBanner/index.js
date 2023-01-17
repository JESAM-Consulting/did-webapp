import React from "react";
import "./propertyBanner.scss";
import KaufunBanner from "../../../assets/images/proparty-banner.png";
import KaufunBanner2 from "../../../assets/images/proparty-banner2.png";
import PageArrow from "../../../assets/icons/full-page-arrow.svg";
import { NavLink } from "react-router-dom";

export default function PropertyBanner() {
  return (
    <div>
      <div className="property-new-hero-section-content-alignment">
        <div className="grid">
          <div className="grid-items">
            <div className="center-button-text-alignment">
              {/* <div>
                <a href="#property">
                  <p>Jetzt mehr erfahren</p>
                  <div className="page-arrow-alignment">
                    <img src={PageArrow} alt="PageArrow" />
                  </div>
                </a>
              </div> */}
            </div>
          </div>
          <div className="grid-items mobile-view-show ">
            <img src={KaufunBanner} alt="KaufunBanner" />
            <img src={KaufunBanner2} alt="KaufunBanner2" />
          </div>
        </div>
        <div className="content-top-alignment">
          <div className="container-md">
            <div className="white-box">
              <h1>Immobilien </h1>
              <h2>Poperty Management</h2>
              <p>
                Als Ihr Hausverwalter ist es unser Ziel, die Betriebskosten ohne Qualitätseinbußen zu senken und die Erträge nachhaltig zu steigern.
              </p>
              <NavLink to="/property-management-steper" >
                <button style={{ position: "relative", zIndex: 99999999999, display: "block" }}>Property Management anfragen</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="container-md-14">
        <div className="verkauf-all-content-alignment-one">
          <div className="text-grid">
            <div className="text-grid-items">
              <h2>
                Deutscher Immobilien Dienst <br />
                <span>Transparent und Vertantwortungsvoll</span>
              </h2>
            </div>
            <div className="text-grid-items"></div>
          </div>
        </div>
      </div>
      <div className="container-md-14">
        <div className="button-right-alignment">
          <a href="tel:0421 / 1 67 61 80-0">
            <button>0421 / 1 67 61 80-0</button>
          </a>
        </div>
      </div>
    </div>
  );
}
