import React from "react";
import "./suchauftragFiveStepRentalPrice.scss";
export default function SuchauftragFiveStepRentalPrice(props) {
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

  const validation = (name, value) => {
    if (name === "maxBuyPrice") {
      if (!value) {
        setErrors({ ...errors, [name]: "Bitte maximalen Mietpreis eingeben!" });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }
  };
  const onSubmit = () => {
    let formIsValid = true;
    let errors = {};

    if (searchRequestStep && !searchRequestStep?.maxBuyPrice) {
      formIsValid = false;
      errors["maxBuyPrice"] = "Bitte maximalen Mietpreis eingeben!";
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
    setCount(count - 2);
    setWidth(width - 11);
  };
  return (
    <div>
      <div className="suchauftrag-five-step-content-alignment">
        <div className="section-title">
          <p>Bitte nennen Sie uns den maximalen Mietpreis:</p>
        </div>
        <div className="input-box">
          <input
            type="number"
            name="maxBuyPrice"
            placeholder="€300"
            value={searchRequestStep?.maxBuyPrice}
            onChange={(e) => handleOnChnage(e)}
            onKeyPress={bindInput}
          />
          <span className="globally-error-message-style">
            {errors["maxBuyPrice"]}
          </span>
          <div className="input-button-design">
            <button onClick={() => onSubmit()}>Weiter</button>
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
