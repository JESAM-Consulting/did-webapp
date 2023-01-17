import React from "react";
import "./suchauftragFourStepRooms.scss";
export default function SuchauftragFourStepRooms(props) {
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
    if (name === "room") {
      if (value === undefined) {
        setErrors({ ...errors, [name]: "Bitte Zimmer auswählen!" });
      }
      if (value === "0") {
        setErrors({ ...errors, [name]: "Bitte Zimmer auswählen!" });
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
      (searchRequestStep?.room === undefined || searchRequestStep?.room === "0")
    ) {
      formIsValid = false;
      errors["room"] = "Bitte Zimmer auswählen!!";
    }

    if (formIsValid) {
      if (searchRequestStep?.property === "Kaufen") {
        setCount(count + 1);
      } else {
        setCount(count + 2);
      }
      setWidth(width + 11);
    }
    setErrors(errors);
  };
  const handleSubmit = () => {
    if (onSubmit()) {
      if (searchRequestStep?.property === "Kaufen") {
        setCount(count + 1);
      } else {
        setCount(count + 2);
      }
      setWidth(width + 11);
    }
  };
  const handleOnBack = () => {
    setCount(count - 1);
    setWidth(width - 11);
  };
  return (
    <div>
      <div className="suchauftrag-four-step-all-contnet-alignment">
        <div className="section-title">
          <p>Wie viele Zimmer soll das Objekt haben?</p>
        </div>
        <div className="child-text-style">
          <p>
            {searchRequestStep?.room === undefined
              ? 0
              : searchRequestStep?.room}{" "}
          </p>
        </div>
        <input
          type="range"
          name="room"
          className="slider"
          min="0"
          max="15"
          value={
            searchRequestStep?.room === undefined ? 0 : searchRequestStep?.room
          }
          onChange={(e) => handleOnChnage(e)}
        />
        <div className="two-content-alignment-two">
          <span>0</span>
          <span>15</span>
        </div>
        <span className="globally-error-message-style">{errors["room"]}</span>
        <div className="two-spacer"></div>
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
