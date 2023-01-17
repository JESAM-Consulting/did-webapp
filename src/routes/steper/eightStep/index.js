import React, { useState } from "react";
import "./eightStep.scss";
import LocationIcon from "../../../assets/icons/input-location.svg";
import { Value } from "sass";
export default function EightStep(props) {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputPowerCon({ ...inputPowerCon, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // FORM VALIDATION FUNCTION...
  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    if (
      !inputPowerCon ||
      !inputPowerCon.location ||
      inputPowerCon.location.length != 5
    ) {
      errors.location = "* Bitte Postleitzahl eingeben.";
      formIsValid = false;
    }
    setErrors(errors);
    return formIsValid;
  };

  const handleNext = () => {
    if (validateForm()) {
      setOpenTab(11);
      setErrors("");
      setWidth(width + 10);
    }
  };

  const bindInput = (value) => {
    var regex = new RegExp("^[^0-9]*$");
    var key = String.fromCharCode(
      !value.charCode ? value.which : value.charCode
    );
    if (regex.test(key)) {
      value.preventDefault();
      return false;
    }
  };

  const handleClickPrevious = (e) => {
    setOpenTab(9);
    setWidth(width - 9);
  };

  const handleClickNext = (e) => {
    if (validateForm()) {
      setOpenTab(11);
      setWidth(width + 9);
    }
  };

  return (
    <div>
      <div className="eight-step-all-content-alignment">
        <div className="section-title">
          <p>Wo befindet sich die Immobilie?</p>
        </div>
        <div className="bottom-loc-align">
          <div className="location-alignment" style={{ margin: "0" }}>
            <input
              type="text"
              placeholder="PLZ"
              name="location"
              value={inputPowerCon?.location}
              onChange={(e) => handleChange(e)}
              onKeyPress={bindInput}
              maxLength="5"
            />

            <div className="location-icon">
              <img src={LocationIcon} alt="LocationIcon" />
            </div>
          </div>
          <span className="globally-error-message-style">
            {errors?.location}
          </span>
        </div>
        <div className="weiter-button">
          <button onClick={() => handleNext()}>Weiter</button>
        </div>
        <div className="steper-globally-button-alignment">
          <button onClick={() => handleClickPrevious()}>Zurück</button>
          &nbsp;
          <button onClick={() => handleClickNext()}>Weiter</button>
        </div>
      </div>
    </div>
  );
}
