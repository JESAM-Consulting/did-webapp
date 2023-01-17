import React from "react";
import "./thirdStep.scss";
export default function ThirdStep(props) {
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

    if (inputPowerCon && !inputPowerCon.livingSize) {
      isFormValid = false;
      errors["livingSize"] = "Bitte Bereich Leerzeichen eingeben";
    }

    setErrors(errors);
    return isFormValid;
  };
  const handleSubmit = () => {
    if (validation()) {
      setOpenTab(4);
      setWidth(width + 9);
    }
  };

  const handleClickPrevious = (e) => {
    setOpenTab(2);
    setWidth(width - 9);
  };

  const handleClickNext = (e) => {
    if (validation()) {
      setOpenTab(4);
      setErrors("");
      setWidth(width + 9);
    }
  };

  console.log("inputPowerCon", inputPowerCon)

  return (
    <div>
      <div className="third-all-text-contnet-alignment">
        <div className="section-title">
          <p>Wie groß ist die Wohnfläche?</p>
        </div>
        <div className="range-all-content-alignment">
          <h4>{inputPowerCon?.livingSize ?? "0"} m²</h4>
          <input
            type="range"
            className="slider"
            name="livingSize"
            value={inputPowerCon?.livingSize ?? 0}
            onChange={(e) => handleChange(e)}
            min="30"
            max={inputPowerCon?.houseType == "Büro-/Geschäftshaus" ? 10000 : 700}
          />
          <div className="slider-related-text-alignment">
            <span>30 m²</span>
            <span>{inputPowerCon?.houseType == "Büro-/Geschäftshaus" ? 10000 : 700} m²+</span>
          </div>
          <span
            style={{
              color: "red",
              top: "5px",
              fontSize: "12px",
            }}
          >
            {errors["livingSize"]}
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
