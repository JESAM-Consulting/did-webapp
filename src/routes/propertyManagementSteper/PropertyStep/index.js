import React from "react";
import "./propertyStep.scss";
export default function PropertyStep(props) {
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

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validation = () => {
    let isFormValid = true;
    let errors = {};

    if (inputValue && !inputValue?.areaSpace) {
      isFormValid = false;
      errors["areaSpace"] = "Bitte Grundstücksgröße eingeben";
    }

    setErrors(errors);
    return isFormValid;
  };

  const handleSubmit = () => {
    if (validation()) {
      setStep(4);
      setWidth(width + 20);
    }
  };

  const handleOnBack = () => {
    setStep(1);
    setWidth(width - 20);
  };

  return (
    <div>
      <div className="property-management-sec-steper-alignment">
        <div className="section-title">
          <p>Wie groß ist das Grundstück?</p>
        </div>
        <div className="range-all-content-alignment">
          <h4>{inputValue?.areaSpace ?? "0"}m²</h4>
          <input
            type="range"
            name="areaSpace"
            min="30"
            max="10000"
            className="slider"
            value={inputValue?.areaSpace ?? 0}
            onChange={(e) => handleOnChange(e)}
          />
          <div className="slider-related-text-alignment">
            <span>30 m²</span>
            <span>10000 m²+</span>
          </div>
          <span
            style={{
              color: "red",
              top: "5px",
              fontSize: "12px",
            }}
          >
            {errors["areaSpace"]}
          </span>
          <div className="weiter-button">
            <button onClick={() => handleSubmit()}>Weiter</button>
          </div>
        </div>
      </div>
      <div className="steper-globally-button-alignment">
        <button onClick={() => handleOnBack()}>Zurück</button>
        <button onClick={() => handleSubmit()}>Weiter</button>
      </div>
    </div>
  );
}
