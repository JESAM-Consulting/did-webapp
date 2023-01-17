import React from "react";
import WhiteHeader from "../../../components/whiteHeader";
import "./heroBanner.scss";
import LocationIcon from "../../../assets/icons/location.svg";
import RightIcon from "../../../assets/icons/right-icon.svg";
import LeftIcon from "../../../assets/icons/left-icon.svg";
import ArrowIcon from "../../../assets/icons/page-arrow.svg";
import { NavLink } from "react-router-dom";
export default function HeroBanner() {
  return (
    <>
      <div className="home-hero-banner">
        <WhiteHeader />
        <div className="container-md-2">
          <div className="hero-section-all-content-alignment">
            <div className="page-title">
              <h1>Deutscher Immobilien Dienst</h1>
              <h2>Ihre Zufriendenheit ist unser Job</h2>
            </div>
            <div className="grid">
              <div className="grid-items">
                <p>
                  Digitaler Vorsprung, lokales Know-how und jahrelange Erfahrung
                  gepart mit smarten Strategien in unsicheren Zeiten. Mit uns
                  erreichen Sie Ihre Ziele auf dem Immobilienmarkt.
                </p>
              </div>
              <div className="grid-items">
                <div className="location-right-alignment">
                  <img src={LocationIcon} alt="LocationIcon" />
                </div>
                <div className="main-button">
                  <NavLink to="/steper">
                    <button>Immobilie bewerten lassen</button>
                  </NavLink>
                </div>
                <div className="button-grid">
                  <div className="button-grid-items">
                    <NavLink to="/verkaufen">
                      <button>VERKAUFEN</button>
                    </NavLink>
                  </div>
                  <div className="button-grid-items">
                    <div className="two-icon-alignment">
                      <img src={RightIcon} alt="RightIcon" />
                      <img src={LeftIcon} alt="LeftIcon" />
                    </div>
                  </div>
                  <div className="button-grid-items">
                    <NavLink to="/kaufen">
                      <button>KAUFEN</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-section-to-page-dwon">
              <a href="#welcome">
                <p>Jetzt mehr erfahren</p>
                <div className="icon-center-alignment">
                  <img src={ArrowIcon} alt="ArrowIcon" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
