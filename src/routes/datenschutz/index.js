import React, { useEffect } from "react";
import "./datenschutz.scss";
export default function Datenschutz() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="datenschutz-all-content-alignment">
        <div className="container-md-17">
          <h1>Impressum</h1>
          <div className="common-text">
            <p>DEUTSCHER IMMOBILIEN DIENST GmbH</p>
            <p>Teerhof 59</p>
            <p>28199 Bremen</p>
          </div>
          <div className="common-text">
            <p>Gesetzlicher Vertreter und Geschäftsführer:</p>
            <p>Sandra Sorgenfrei</p>
            <p>Jack Daniel Rausch</p>
          </div>
          <div className="common-text">
            <p>Handelsregister Amtsgericht Bremen HRB 15157 HB</p>
            <p>UmsatzsteuerID Nr.: DE 139 778 914</p>
            <p>Steuer Nr.: 60 110 10332</p>
          </div>
          <div className="common-text">
            <p>
              Gewerbeerlaubnis gemäß § 34c GewO, erteilt von der Stadt Bremen,
              Gewerbeamt
            </p>
          </div>
          <div className="common-text">
            <p>
              DEUTSCHER IMMOBILIEN DIENST GmbH ist Eigentümerin, der beim
              Deutschen Patent- und Markenamt registrierten Marken:
            </p>
            <p>
              DE 302012012171 Wiedergabe der Marke: DEUTSCHER IMMOBILIEN DIENST
            </p>
          </div>
          <div className="common-text">
            <a href="tel: 0421 / 1 67 61 80-0">
              <p>Fon 0421 / 1 67 61 80-0</p>
              <p>Fax 0421 / 1 67 61 80-9</p>
            </a>
          </div>
          <div className="common-text">
            <a href="mailto:info@deutscher-immobilien-dienst.de?subject = Feedback&body = Message">
              E-Mail: info@deutscher-immobilien-dienst.de
            </a>
            <p>Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV:</p>
            <p>DEUTSCHER IMMOBILIEN DIENST GmbH (Anschrift wie oben)</p>
            <p>Quellenangaben für die verwendeten Bilder und Grafiken:</p>
            <p>Adobe Stock Images</p>
          </div>
        </div>
      </div>
    </div>
  );
}
