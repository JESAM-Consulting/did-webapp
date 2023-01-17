import React from "react";
import "./suchauftragfirstStep.scss";
export default function SuchauftragfirstStep(props) {
  const {
    setSearchRequestStep,
    searchRequestStep,
    count,
    setCount,
    width,
    setWidth,
    setErrors,
    errors,
  } = props;
  const handleButton = (data) => {
    setSearchRequestStep({ ...searchRequestStep, ["property"]: data });
    setCount(count + 1);
    setWidth(width + 11);
  };
  const validation = () => {
    let isFormValid = true;
    let errors = {};

    if (searchRequestStep && !searchRequestStep.property) {
      isFormValid = false;
      errors["property"] = "Bitte Objekt auswählen";
    }

    setErrors(errors);
    return isFormValid;
  };

  const handleOnNext = () => {
    if (validation()) {
      setCount(count + 1);
      setWidth(width + 11);
    }
  };
  return (
    <div>
      <div className="suchauftragfirst-step-all-content-alignment">
        <div className="section-title">
          <h3>Suchauftrag</h3>
          <p>Suchen Sie die Immobilie zum Kauf oder zur Miete?</p>
        </div>
        <div className="button-alignment">
          <button
            onClick={() => {
              handleButton("Kaufen");
            }}
          >
            Kaufen
          </button>
          <button
            onClick={() => {
              handleButton("Mieten");
            }}
          >
            Mieten
          </button>
          {/* <button
            onClick={() => {
              handleButton("Kaufen oder Mieten");
            }}
          >
            Kaufen oder Mieten
          </button> */}
        </div>
      </div>
      <span className="globally-error-message-style">{errors["property"]}</span>
      <div className="steper-right-button-alignment">
        <button onClick={() => handleOnNext()}>Weiter</button>
      </div>
    </div>
  );
}
