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
              <br></br>
            </div>
            <div className="grid">
              <div className="grid-items">
                <p>
                Erreichen Sie Ihr Ziel mit unserem ABS-System. Unser ABS-System ist ein strukturiertes Vorgehen zur 
                Zielerreichung: <br></br><br></br>
                <span className="colored-word" style={{color: '#2F6EBA'}}>Analyse:</span> 
                Erfassen der Ausgangssituation, Ihrer Ziele und relevanten Faktoren.<br></br><br></br>
                <span className="colored-word" style={{color: '#7EAB55'}}>Beratung:</span> 
                Entwickeln geeigneter Lösungen unter Einbeziehung Ihrer Mitarbeit. <br></br><br></br>
                <span className="colored-word" style={{ color: '#68349A'}}>Strategie:</span> 
                Erarbeiten eines klaren, realistischen und anpassungsfähigen Plans. <br></br><br></br>
                Durch eine enge Zusammenarbeit erzielen wir optimale Ergebnisse. Vereinbaren Sie einen Termin und erleben <br></br>
                Sie die Funktionsweise.
                </p>
              </div>
              {/* <div className="grid-items">
                <div className="location-right-alignment">
                  <img src={LocationIcon} alt="LocationIcon" />
                </div> */}
                {/* <div className="main-button">
                  <NavLink to="/steper">
                    <button>Immobilie bewerten lassen</button>
                  </NavLink>
                </div> */}
                {/* <div className="button-grid">
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
                </div> */}
              {/* </div> */}
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
