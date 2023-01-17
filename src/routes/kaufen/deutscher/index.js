import React from "react";
import { NavLink } from "react-router-dom";
import "./deutscher.scss";
export default function Deutscher() {
  return (
    <div>
      <div className="deutscher-all-content-alignment">
        <div className="container-md-5">
          <div className="text-grid">
            <div className="text-grid-items">
              <h2>Deutscher Immobilien Dienst </h2>
              <p>
                Immobilien sind unser Fachgebiet - <br />
                mit unserem Wissen unterstützen wir Sie <br /> das Objekt Ihrer
                Zukunft zu finden.
              </p>
            </div>
            <div className="text-grid-items">
              <NavLink to="/kontakt">
                <button>KONTAKT</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
