import React, { useState } from "react";
import "./firstSteper.scss";
export default function FirstSteper(props) {
  const {
    openTab,
    setOpenTab,
    inputPowerCon,
    setInputPowerCon,
    width,
    setWidth,
  } = props;

  const handleClick = (e) => {
    const { name, textContent } = e.target;
    setInputPowerCon({ ...inputPowerCon, [name]: textContent });
    setOpenTab(2);
    setWidth(width + 9);
  };

  // FORM VALIDATION FUNCTION...
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let formIsValid = true;
    let err = {};
    if (!inputPowerCon || !inputPowerCon.appraisal) {
      err.appraisal = "* Bitte wählen Sie zuerst eine Schaltfläche aus.";
      formIsValid = false;
    }
    setErrors(err);
    return formIsValid;
  };

  const handleClickNext = (e) => {
    if (validateForm()) {
      setOpenTab(2);
      setErrors("");
      setWidth(width + 9);
    }
  };

  return (
    <div>
      <div className="first-steper-content-alignment">
        <div className="section-title">
          <h3>Ihre Immobilienbewertung</h3>
          <p>Welche Immobilie möchten Sie bewerten lassen?</p>
        </div>
        <div className="left-right-alignment">
          <button name="appraisal" onClick={(e) => handleClick(e)}>
            Selbst bewohnt
          </button>
          <button name="appraisal" onClick={(e) => handleClick(e)}>
            Vermietet
          </button>
          <button name="appraisal" onClick={(e) => handleClick(e)}>
            Teilweise vermietet
          </button>
          <button name="appraisal" onClick={(e) => handleClick(e)}>
            Frei
          </button>
        </div>
        <span className="globally-error-message-style">
          {errors?.appraisal}
        </span>
        <div className="steper-right-button-alignment">
          <button
            onClick={() => handleClickNext()}
          >
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}
