import React from "react";
import "./lizenzpartnerThreeStep.scss";
export default function LizenzpartnerThreeStep(props) {
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
    if (inputValue?.manageProperty != "Property") {
      setStep(2);
    } else {
      setStep(3);
    }
    setWidth(width - 20);
  };
  return (
    <div>
      <div className="lizenzpartner-three-step-all-content-alignment">
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
            onClick={(e) => handleButton(e, "Teilweise vermietet")}
          >
            Teilweise vermietet
          </button>
          <button name="useProperty" onClick={(e) => handleButton(e, "Frei")}>
            Frei
          </button>
          <span className="globally-error-message-style">
            {errors["useProperty"]}
          </span>
        </div>
      </div>

      <div className="steper-globally-button-alignment">
        <button onClick={() => handleOnBack()}>Zurück</button>
        <button onClick={() => handleOnNext()}>Weiter</button>
      </div>
    </div>
  );
}
