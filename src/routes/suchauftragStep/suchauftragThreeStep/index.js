import React from "react";
import "./suchauftragThreeStep.scss";
export default function SuchauftragThreeStep(props) {
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
    setSearchRequestStep({ ...searchRequestStep, ["propertyBuy"]: data });
    setCount(count + 2);
    setWidth(width + 11);
  };
  const validation = () => {
    let isFormValid = true;
    let errors = {};

    if (searchRequestStep && !searchRequestStep.propertyBuy) {
      isFormValid = false;
      errors["propertyBuy"] = "Bitte Objekt auswählen";
    }

    setErrors(errors);
    return isFormValid;
  };

  const handleSubmit = () => {
    if (validation()) {
      setCount(count + 2);
      setWidth(width + 11);
    }
  };
  const handleOnBack = () => {
    setCount(count - 1);
    setWidth(width - 11);
  };
  return (
    <div>
      <div className="Suchauftrag-three-step-all-content-alignment">
        <div className="section-title">
          <h4>Welche Ojektart wollen Sie kaufen?</h4>
        </div>
        <div className="left-right-content-alignment">
          <button
            name="propertyBuy"
            onClick={() => {
              handleButton("Zimmer");
            }}
          >
            Zimmer
          </button>
          <button
            name="propertyBuy"
            onClick={() => {
              handleButton("Wohnung");
            }}
          >
            Wohnung
          </button>
          <button
            name="propertyBuy"
            onClick={() => {
              handleButton("Haus");
            }}
          >
            Haus
          </button>
          <button
            name="propertyBuy"
            onClick={() => {
              handleButton("Mehrfamilienhaus");
            }}
          >
            Mehrfamilienhaus
          </button>
          <button
            name="propertyBuy"
            onClick={() => {
              handleButton("Büro-/Geschäftshaus");
            }}
          >
            Büro-/Geschäftshaus
          </button>
          <span className="globally-error-message-style">
            {errors["propertyBuy"]}
          </span>
        </div>
      </div>
      <div className="steper-globally-button-alignment">
        <button onClick={() => handleOnBack()}>Zurück</button>
        <button onClick={() => handleSubmit()}>Weiter</button>
      </div>
    </div>
  );
}
