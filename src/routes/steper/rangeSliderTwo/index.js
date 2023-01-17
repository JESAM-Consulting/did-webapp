import React from "react";
import "./rangeSliderTwo.scss";
export default function RangeSliderTwo(props) {
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

    if (inputPowerCon && !inputPowerCon.areaSize) {
      isFormValid = false;
      errors["areaSize"] = "Bitte Grundstücksgröße eingeben";
    }

    setErrors(errors);
    return isFormValid;
  };

  const handleSubmit = () => {
    if (validation()) {
      setOpenTab(5);
      setWidth(width + 9);
    }
  };

  const handleClickPrevious = (e) => {
    setOpenTab(3);
    setWidth(width - 9);
  };

  const handleClickNext = (e) => {
    if (validation()) {
      setOpenTab(5);
      setErrors("");
      setWidth(width + 9);
    }
  };

  return (
    <div>
      <div className="third-all-text-contnet-alignment">
        <div className="section-title">
          <p>Wie groß ist das Grundstück?</p>
        </div>
        <div className="range-all-content-alignment">
          <h4>{inputPowerCon?.areaSize ?? "0"} m²</h4>
          <input
            type="range"
            className="slider"
            name="areaSize"
            value={inputPowerCon?.areaSize ?? 0}
            onChange={(e) => handleChange(e)}
            min="0"
            max="10000"
          />
          <div className="slider-related-text-alignment">
            <span>0 m²</span>
            <span>10000 m²+</span>
          </div>
          <span
            style={{
              color: "red",
              top: "5px",
              fontSize: "12px",
            }}
          >
            {errors["areaSize"]}
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
