import React from "react";
import "./suchauftragFourStep.scss";
export default function SuchauftragFourStep(props) {
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
  const handleOnChnage = (e) => {
    const { name, value } = e.target;
    setSearchRequestStep({ ...searchRequestStep, [name]: value });
    setErrors({ ...errors, [name]: "" });
    validation(name, value);
  };
  const validation = (name, value) => {
    if (name === "areaSize") {
      if (value === undefined) {
        setErrors({ ...errors, [name]: "Bitte Flächengröße auswählen!" });
      }
      if (value === "0") {
        setErrors({ ...errors, [name]: "Bitte Flächengröße auswählen!" });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }
  };
  const onSubmit = () => {
    let formIsValid = true;
    let errors = {};

    if (
      searchRequestStep &&
      (searchRequestStep?.areaSize === undefined ||
        searchRequestStep?.areaSize === "0")
    ) {
      formIsValid = false;
      errors["areaSize"] = "Bitte Flächengröße auswählen!!";
    }

    if (formIsValid) {
      setCount(count + 1);
      setWidth(width + 11);
    }
    setErrors(errors);
  };
  const handleSubmit = () => {
    if (onSubmit()) {
      setCount(count + 1);
      setWidth(width + 11);
    }
  };
  const handleOnBack = () => {
    if (searchRequestStep?.property === "Kaufen") {
      setCount(count - 2);
    } else {
      setCount(count - 1);
    }
    setWidth(width - 11);
  };
  return (
    <div>
      <div className="suchauftrag-four-step-all-contnet-alignment">
        <div className="section-title">
          <p>Wie groß soll das Objekt sein?</p>
        </div>
        <div className="child-text-style">
          <p>
            {searchRequestStep?.areaSize === undefined
              ? 0
              : searchRequestStep?.areaSize}{" "}
            m²
          </p>
        </div>
        <input
          type="range"
          name="areaSize"
          className="slider"
          min="0"
          max={searchRequestStep?.propertyBuy == "Büro-/Geschäftshaus"? 10000 : 700}
          value={
            searchRequestStep?.areaSize === undefined
              ? 0
              : searchRequestStep?.areaSize
          }
          onChange={(e) => handleOnChnage(e)}
        />
        <div className="two-content-alignment-new">
          <span>0 m²</span>
          <span>{searchRequestStep?.propertyBuy == "Büro-/Geschäftshaus"? 10000 : 700} m²+</span>
        </div>
        <span className="globally-error-message-style">
          {errors["areaSize"]}
        </span>
        <div className="sapcer"></div>
        <div className="button-design">
          <button onClick={() => onSubmit()}>Weiter</button>
        </div>
      </div>
      <div className="steper-globally-button-alignment">
        <button onClick={() => handleOnBack()}>Zurück</button>
        <button onClick={() => handleSubmit()}>Weiter</button>
      </div>
    </div>
  );
}
