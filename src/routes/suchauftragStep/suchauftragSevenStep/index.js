import React from "react";
import "./suchauftragSevenStep.scss";
export default function SuchauftragSevenStep(props) {
  const {
    setSearchRequestStep,
    searchRequestStep,
    count,
    setCount,
    width,
    setWidth,
    errors,
    setErrors,
  } = props;

  const handleOnChnage = (e) => {
    const { name, value } = e.target;
    setSearchRequestStep({ ...searchRequestStep, [name]: value });
    setErrors({ ...errors, [name]: "" });
    validation(name, value);
  };
  const validation = (name, value) => {
    if (name === "describe") {
      if (!value) {
        setErrors({ ...errors, [name]: "Bitte Beschreibung eingeben" });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }
  };
  const onSubmit = () => {
    let formIsValid = true;
    let errors = {};

    if (searchRequestStep && !searchRequestStep?.describe) {
      formIsValid = false;
      errors["describe"] = "Bitte Beschreibung eingeben!";
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
    setCount(count - 1);
    setWidth(width - 11);
  };
  return (
    <div>
      <div className="suchauftrag-sevent-step-contnet-alignment">
        <div className="section-title">
          <p>Weitere Wünsche</p>
        </div>
        <div className="text-area-design">
          <textarea
            placeholder="Beschreiben Sie..."
            name="describe"
            value={searchRequestStep?.describe}
            onChange={(e) => handleOnChnage(e)}
          ></textarea>
        </div>
        <span className="globally-error-message-style">
          {errors["describe"]}
        </span>
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
