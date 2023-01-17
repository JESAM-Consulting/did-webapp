import React from "react";
import "./rangeSliderThree.scss";
export default function RangeSliderThree(props) {
  const {
    openTab,
    setOpenTab,
    inputPowerCon,
    setInputPowerCon,
    errors,
    setErrors,
    width,
    setWidth,
  } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputPowerCon({ ...inputPowerCon, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const validation = () => {
    let isFormValid = true;
    let errors = {};

    if (inputPowerCon && !inputPowerCon.roomCount) {
      isFormValid = false;
      errors["roomCount"] = "Bitte geben Sie die Anzahl der Zimmer ein";
    }

    setErrors(errors);
    return isFormValid;
  };

  const handleSubmit = () => {
    if (validation()) {
      setOpenTab(6);
      setWidth(width + 9);
    }
  };

  const handleClickPrevious = (e) => {
    setOpenTab(4);
    setWidth(width - 9);
  };

  const handleClickNext = (e) => {
    if (validation()) {
      setOpenTab(6);
      setErrors("");
      setWidth(width + 9);
    }
  };

  return (
    <div>
      <div className="third-all-text-contnet-alignment">
        <div className="section-title">
          <p>Wie viele Zimmer hat das Objekt?</p>
        </div>
        <div className="range-all-content-alignment">
          <h4>{inputPowerCon?.roomCount ?? "0"}</h4>
          <input
            type="range"
            className="slider"
            name="roomCount"
            value={inputPowerCon?.roomCount ?? 0}
            onChange={(e) => handleChange(e)}
            min="0"
            max="15"
          />
          <div className="slider-related-text-alignment">
            <span>0 </span>
            <span>15 </span>
          </div>
          <span
            style={{
              color: "red",
              top: "5px",
              fontSize: "12px",
            }}
          >
            {errors["roomCount"]}
          </span>
          <div className="weiter-button">
            <button onClick={() => handleSubmit()}>Weiter</button>
          </div>
        </div>
        <div className="steper-globally-button-alignment">
        <button
          onClick={() => handleClickPrevious()}
        >
          Zurück
        </button>
        &nbsp;
        <button
          onClick={() => handleClickNext()}
        >
          Weiter
        </button>
        </div>
      </div>
    </div>
  );
}
