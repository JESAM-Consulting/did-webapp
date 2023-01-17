import React from "react";
import "./lizenzpartnerFourStep.scss";
import LocationIcon from "../../../assets/icons/input-location.svg";

export default function LizenzpartnerFourStep(props) {
  const {
    inputValue,
    setInputValue,
    step,
    setStep,
    errors,
    setErrors,
    width,
    setWidth,
  } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "postCode") {
      let val = value.replace(/[^0-9]/g, "");
      setInputValue({ ...inputValue, [name]: val });
      setErrors({ ...errors, [name]: "" });
    } else {
      setInputValue({ ...inputValue, [name]: value });
    }
  };

  const validation = () => {
    let isFormValid = true;
    let errors = {};

    if (
      inputValue &&
      (!inputValue?.postCode || inputValue?.postCode?.length != 5)
    ) {
      isFormValid = false;
      errors["postCode"] = "Postleitzahl ist erforderlich";
    }

    setErrors(errors);
    return isFormValid;
  };

  const handleSubmit = () => {
    if (validation()) {
      setStep(6);
      setWidth(width + 20);
    }
  };

  const handleOnBack = () => {
    setStep(4);
    setWidth(width - 20);
  };

  return (
    <div>
      <div className="eight-step-all-content-alignment">
        <div className="section-title">
          <p>Wo befindet sich das Objekt?</p>
        </div>
        <div className="bottom-loc-align">
          <div className="location-alignment" style={{ margin: "0" }}>
            <input
              type="text"
              placeholder="PLZ"
              name="postCode"
              value={inputValue.postCode}
              onChange={(e) => handleChange(e)}
              maxLength="5"
            />
            <div className="location-icon">
              <img src={LocationIcon} alt="LocationIcon" />
            </div>
          </div>
          <span className="globally-error-message-style">
            {errors["postCode"]}
          </span>
        </div>

        <div className="weiter-button">
          <button onClick={() => handleSubmit()}>Weiter</button>
        </div>
      </div>
      <div className="steper-globally-button-alignment">
        <button onClick={() => handleOnBack()}>Zurück</button>
        <button onClick={() => handleSubmit()}>Weiter</button>
      </div>
    </div>
  );
}
