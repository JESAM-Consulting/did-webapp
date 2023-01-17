import React from "react";
import "./steperFooter.scss";
import TrueIcon from "../../assets/icons/true.svg";
export default function SteperFooter() {
  return (
    <div>
      <div className="steper-footer-all-content-alignment">
        <div className="container-md-13">
          <div className="fotoer-top-bottom-content-alignment">
            <div className="first-rwo-alignment">
              <div className="content-alignment">
                <div>
                  <img src={TrueIcon} alt="TrueIcon" />
                </div>
                <div>
                  <span>100% kostenlos & unverbindlich</span>
                </div>
              </div>
              <div className="content-alignment">
                <div>
                  <img src={TrueIcon} alt="TrueIcon" />
                </div>
                <div>
                  <span>Wenige Schritte</span>
                </div>
              </div>
              <div className="content-alignment">
                <div>
                  <img src={TrueIcon} alt="TrueIcon" />
                </div>
                <div>
                  <span>Erfahrene Bewertung durch DID</span>
                </div>
              </div>
            </div>
            <div className="sec-content-align">
              <span>
                Immobilien sind unser Fachgebiet - und mit unserem Wissen wollen
                wir Sie unterstützen.
              </span>
              <span>
                Für und mit unseren Kunden entwickeln wir individuelle Konzepte,
                die zu Ihnen passen und das halten, was sie versprechen. Als
                Basis dienen uns dafür unsere jahrelange Erfahrung, breit
                gefächertes Wissen im Bereich Immobilien und die aktuellen
                Gegebenheiten des Marktes. Sowohl unser Team als auch wir selbst
                bilden uns außerdem stetig weiter, unter anderem mit fundierten
                Trendeinschätzungen, Daten und Fakten von renommierten
                Kompetenzträgern. So stellen wir sicher, dass wir Ihnen stets
                die bestmögliche Beratung bieten.
              </span>
              <span>
                Wenn Sie Pläne im Immobilienbereich haben, freuen wir uns, auch
                Sie auf Ihrem Weg zum Erfolg begleiten zu dürfen!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
