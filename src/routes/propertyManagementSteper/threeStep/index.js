import React from "react";
import "./threeStep.scss";
export default function ThreeStep(props) {
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

  const handleButton = (e, data) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, ["useProperty"]: data });
    setErrors({ ...errors, ["useProperty"]: "" });
    setStep(5);
    setWidth(width + 20);
  };

  const validation = () => {
    let isFormValid = true;
    let errors = {};

    if (inputValue && !inputValue.useProperty) {
      isFormValid = false;
      errors["useProperty"] = "Bitte Objekt auswählen";
    }

    setErrors(errors);
    return isFormValid;
  };
  const handleOnNext = () => {
    if (validation()) {
      setStep(5);
      setWidth(width + 20);
    }
  };

  const handleOnBack = () => {
    if (inputValue?.manageProperty == "Business") {
      setStep(3);
    } else {
      setStep(2);
    }
    setWidth(width - 20);
  };

  return (
    <div>
      <div className="property-management-three-step-content-alignment">
        <div className="section-title">
          <p>Wie wird die Immobilien zur Zeit genutzt?</p>
        </div>
        <div className="button-alignment">
          <button
            name="useProperty"
            onClick={(e) => handleButton(e, "Eigennutzung")}
          >
            Selbst bewohnt
          </button>
          <button name="useProperty" onClick={(e) => handleButton(e, "Vermietet")}>
            Vermietet
          </button>
          <button
            name="useProperty"
            onClick={(e) => handleButton(e, "Partly rented")}
          >
            Teilweise vermietet
          </button>
          <button name="useProperty" onClick={(e) => handleButton(e, "Frei")}>
            Frei
          </button>
          <a className="globally-error-message-style" style={{ color: "red" }}>
            {errors["useProperty"]}
          </a>
        </div>
      </div>
      <div className="steper-globally-button-alignment">
        <button onClick={() => handleOnBack()}>Zurück</button>
        <button onClick={() => handleOnNext()}>Weiter</button>
      </div>
    </div>
  );
}
