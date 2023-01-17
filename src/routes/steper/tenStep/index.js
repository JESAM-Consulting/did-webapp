import React from "react";
import { NavLink } from "react-router-dom";
import "./tenStep.scss";
export default function TenStep() {
  return (
    <div>
      <div className="ten-step-all-content-alignment">
        <h5>Vielen Dank!</h5>
        <h6>Ihre Anfrage wird in Kürze bearbeitet.</h6>
        {/* <p>Sie erhalten einen Link mit Zugangsdaten zu Ihrem</p>
        <p>persönlichen Property Bereich des </p>
        <p>Deutschen Immobilien Dienstes.</p>
        <p>Dort können Sie jederzeit den </p>
        <p>Bearbeitungsstand überprüfen.</p> */}
        <p>Sie erhalten einen Link mit Zugangsdaten zu Ihrem persönlichen </p> 
         <p> Property Bereich des Deutschen Immobilien Dienstes.</p> 
          <p> Dort können Sie jederzeit den Bearbeitungsstand überprüfen.</p>  
        <NavLink to="/">
          <button>Weitere Informationen</button>
        </NavLink>
      </div>
    </div>
  );
}
