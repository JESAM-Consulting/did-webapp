import React from "react";
import "./kaufenHeroSection.scss";
import KaufunBanner from "../../../assets/images/kufun-banner.png";
import KaufunBanner2 from "../../../assets/images/mobile-banner2.png";
import PageArrow from "../../../assets/icons/full-page-arrow.svg";
import { NavLink } from "react-router-dom";

export default function KaufenHeroSection() {
  return (
    <div>
      <div className="kaufen-hero-section-content-alignment">
        <div className="grid">
          <div className="grid-items">
            <div className="center-button-text-alignment-global-hero">
              {/* <div>
                <a href="#seek">
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
              <h2>Kaufen</h2>
              <p>Der Verkauf einer Immobilie ist eine </p>
              <p>eine persönliche Angelegenheit.</p>
              <p>Deshalb arbeiten wir verantwortungsvollsvoll </p>
              <p>und transparent.</p>
              <p>Für Sie, für den erfolgreichen Verkauf. </p>
              <NavLink to="/suchauftrag-step">
                <button>Suchauftrag erstellen</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
