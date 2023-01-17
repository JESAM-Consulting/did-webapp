import React from "react";
import "./firstStep.scss";
export default function FirstStep(props) {
  const {
    inputValue,
    setInputValue,
    step,
    setStep,
    width,
    setWidth,
    errors,
    setErrors,
  } = props;

  const handleButton = (e, data) => {
    console.log('data',data)
    setInputValue({ ...inputValue, ["manageProperty"]: data });
    setErrors({ ...errors, ["manageProperty"]: "" });
    if (data === "Business") {
      setStep(3);
    } else {
      setStep(2); 
    }
    setWidth(width + 20);
  };
  
  const validation = () => {
    let isFormValid = true;
    let errors = {};

    if (inputValue && !inputValue.manageProperty) {
      isFormValid = false;
      errors["manageProperty"] = "Bitte Objekt auswählen";
    }

    setErrors(errors);
    return isFormValid;
  };

  const handleOnNext = () => {
    if (validation()) {
      if (inputValue?.manageProperty === "Business") {
        setStep(3);
      } else {
        setStep(2);
      }
      setWidth(width + 20);
    }
  };

  return (
    <div>
      <div className="property-management-first-steper-alignment">
        <div className="section-title">
          <h6>Property Management</h6>
          <p>Welche Immobilie wollen Sie betreuen lassen?</p>
        </div>
        <div className="button-alignment">
          <button
            name="manageProperty"
            onClick={(e) => handleButton(e, "house")}
          >
            Haus
          </button>
          <button
            name="manageProperty"
            onClick={(e) => handleButton(e, "Property")}
          >
            Wohnung
          </button>
          <button
            name="manageProperty"
            onClick={(e) => handleButton(e, "Business")}
          >
            Grundstück
          </button>
          <button
            name="manageProperty"
            onClick={(e) => handleButton(e, "Business")}
          >
            Gewerbe
          </button>
        </div>
      </div>
      <span
        style={{
          color: "red",
          top: "5px",
          fontSize: "12px",
        }}
      >
        {errors["manageProperty"]}
      </span>
      <div className="steper-right-button-alignment">
        <button onClick={() => handleOnNext()}>Weiter</button>
      </div>
    </div>
  );
}
