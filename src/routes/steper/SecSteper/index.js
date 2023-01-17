import React, { useState } from "react";
import "./SecSteper.scss";

export default function SecSteper(props) {
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
    setOpenTab(3);
    setWidth(width + 9);
  };

  // FORM VALIDATION FUNCTION...
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let formIsValid = true;
    let err = {};
    if (!inputPowerCon || !inputPowerCon.houseType) {
      err.houseType = "* Bitte wählen Sie zuerst eine Schaltfläche aus.";
      formIsValid = false;
    }
    setErrors(err);
    return formIsValid;
  };

  const handleClickPrevious = (e) => {
    setOpenTab(1);
    setWidth(width - 9);
  };

  const handleClickNext = (e) => {
    if (validateForm()) {
      setOpenTab(3);
      setErrors("");
      setWidth(width + 9);
    }
  };

  return (
    <div>
      <div className="sec-steper-all-content-alignment">
        <div className="section-title">
          <h4>Um was für ein Haus handelt es sich?</h4>
        </div>
        <div className="left-right-content-alignment">
          <button name="houseType" onClick={(e) => handleClick(e)}>
            Einfamilienhaus
          </button>
          <button name="houseType" onClick={(e) => handleClick(e)}>
            Doppelhaushälfte
          </button>
          <button name="houseType" onClick={(e) => handleClick(e)}>
            Reihenhaus
          </button>
          <button name="houseType" onClick={(e) => handleClick(e)}>
            Mehrfamilienhaus
          </button>
          <button name="houseType" onClick={(e) => handleClick(e)}>
            Büro-/Geschäftshaus
          </button>
          <span className="globally-error-message-style">
            {errors?.houseType}
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
