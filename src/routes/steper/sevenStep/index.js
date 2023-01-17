import React from "react";
import "./sevenStep.scss";
export default function SevenStep(props) {
  const {
    openTab,
    setOpenTab,
    inputPowerCon,
    setInputPowerCon,
    errors,
    setErrors,
    width,
    setWidth,
  } = props;

  const handleClick = (e) => {
    const { name, textContent } = e.target;
    setInputPowerCon({ ...inputPowerCon, [name]: textContent });
    setOpenTab(10);
    setErrors("");
    setWidth(width + 9);
  };

  const validateForm = () => {
    let formIsValid = true;
    let err = {};
    if (!inputPowerCon || !inputPowerCon.sellingDue) {
      err.sellingDue = "* Bitte wählen Sie zuerst eine Schaltfläche aus.";
      formIsValid = false;
    }
    setErrors(err);
    return formIsValid;
  };

  const handleClickPrevious = (e) => {
    setOpenTab(8);
    setWidth(width - 9);
  };

  const handleClickNext = (e) => {
    if (validateForm()) {
      setOpenTab(10);
      setErrors("");
      setWidth(width + 9);
    }
  };

  return (
    <div>
      <div className="seven-step-all-content-alignment">
        <div className="section-title">
          <p>Wann wollen Sie Ihre Immobilie verkaufen?</p>
        </div>
        <div className="left-right-alignment">
          <button name="sellingDue" onClick={(e) => handleClick(e)}>
            Schnellstmöglich
          </button>
          <button name="sellingDue" onClick={(e) => handleClick(e)}>
          In einigen Monaten
          </button>
          <button name="sellingDue" onClick={(e) => handleClick(e)}>
          In einigen Jahren
          </button>
          <button name="sellingDue" onClick={(e) => handleClick(e)}>
            Momentan nicht
          </button>
          <span className="globally-error-message-style">
          {errors?.sellingDue}
        </span>
        </div>
     
        <div className="steper-globally-button-alignment">
        <button
          onClick={() => handleClickPrevious()}
        >
          Zurück
        </button>
        &nbsp;
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
