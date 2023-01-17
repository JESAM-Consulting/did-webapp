import React from "react";
import "./verkaufenBanner.scss";
import KaufunBanner from "../../../assets/images/verkaufen-banner.png";
import KaufunBanner1 from "../../../assets/images/mobile-banner1.png";
import PageArrow from "../../../assets/icons/full-page-arrow.svg";
import { NavLink } from "react-router-dom";

export default function VerkaufenBanner() {
  return (
    <>
      <div className="verkaufen-hero-section-content-alignment">
        <div className="grid">
          <div className="grid-items">
          <div className="center-button-text-alignment-global-hero">
              {/* <div>
                <a href="#verkaufen">
                  <p>Jetzt mehr erfahren</p>
                  <div className="page-arrow-alignment">
                    <img src={PageArrow} alt="PageArrow" />
                  </div>
                </a>
              </div> */}
            </div>
          </div>
          <div className="grid-items mobile-view-show">
            <img src={KaufunBanner} alt="KaufunBanner" />
            <img src={KaufunBanner1} alt="KaufunBanner1"/>
          </div>
        </div>
        <div className="content-top-alignment">
          <div className="container-md">
            <div className="white-box">
              <h1>Immobilien </h1>
              <h2>Verkauf</h2>
              <p>Der Verkauf einer Immobilie ist eine </p>
              <p>eine persönliche Angelegenheit.</p>
              <p>Deshalb arbeiten wir transparent </p>
              <p>und verantwortungsvollsvoll.</p>
              <p>Für Sie, für den erfolgreichen Verkauf.</p>
              <NavLink to="/steper">
                <button>Immobilie bewerten lassen</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="container-md-14">
        <div className="verkauf-all-content-alignment-two">
          <div className="text-grid">
            <div className="text-grid-items">
              <h2>
                Deutscher Immobilien Dienst <br />
                <span>Transparent und Vertantwortungsvoll</span>
              </h2>
            </div>
            <div className="text-grid-items">
             
            </div>
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
    </>
  );
}
