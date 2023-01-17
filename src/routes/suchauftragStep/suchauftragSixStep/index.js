import React from "react";
import "./suchauftragSixStep.scss";
export default function SuchauftragSixStep(props) {
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
    setSearchRequestStep({
      ...searchRequestStep,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
    validation(name, value);
  };
  const validation = (name, value) => {
    if (name === "searchDate") {
      if (!value) {
        setErrors({ ...errors, [name]: "Bitte Suchdatum eingeben" });
      }
      if (value === "Invalid date") {
        setErrors({ ...errors, [name]: "Bitte Suchdatum eingeben" });
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
      (searchRequestStep?.searchDate === undefined ||
        searchRequestStep?.searchDate === "Invalid date")
    ) {
      formIsValid = false;
      errors["searchDate"] = "Bitte Suchdatum eingeben!";
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
      <div className="suchauftrag-siz-step-alignment">
        <div className="section-title">
          <p>Zu wann suchen Sie?</p>
        </div>
        <div className="input-design">
          <input
            type="date"
            placeholder="XX.XX.XXXX"
            name="searchDate"
            value={searchRequestStep?.searchDate}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => handleOnChnage(e)}
          />
          <span className="globally-error-message-style">
            {errors["searchDate"]}
          </span>
        </div>

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
