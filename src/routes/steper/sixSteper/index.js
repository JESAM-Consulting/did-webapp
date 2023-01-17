import React from "react";
import "./sixSteper.scss";
export default function SixSteper(props) {
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

    if (inputPowerCon && !inputPowerCon.builtDate) {
      isFormValid = false;
      errors["builtDate"] = "Bitte Baujahr des Hauses eingeben";
    }

    setErrors(errors);
    return isFormValid;
  };

  const handleSubmit = () => {
    if (validation()) {
      setOpenTab(9);
      setWidth(width + 9);
    }
  };

  const handleClickPrevious = (e) => {
    setOpenTab(7);
    setWidth(width - 9);
  };

  const handleClickNext = (e) => {
    if (validation()) {
      setOpenTab(9);
      setErrors("");
      setWidth(width + 9);
    }
  };

  return (
    <div>
      <div className="six-all-text-contnet-alignment">
        <div className="section-title">
          <p>Wann wurde das Haus erbaut?</p>
        </div>
        <div className="range-all-content-alignment">
          <h4>{inputPowerCon?.builtDate ?? "1900"}</h4>
          <input
            type="range"
            className="slider"
            name="builtDate"
            value={inputPowerCon?.builtDate ?? 0}
            onChange={(e) => handleChange(e)}
            min="1900"
            max="2020"
          />
          <div className="slider-related-text-alignment">
            <span>vor 1900</span>
            <span>Neubau 2020</span>
          </div>
          <span
            style={{
              color: "red",
              top: "5px",
              fontSize: "12px",
            }}
          >
            {errors["builtDate"]}
          </span>
          <div className="weiter-button">
            <button onClick={() => handleSubmit()}>Weiter</button>
          </div>
        </div>
        <div className="steper-globally-button-alignment">
        <button
          style={{ color: "white", border: "none", background: "#144337" }}
          onClick={() => handleClickPrevious()}
        >
          Zurück
        </button>
        &nbsp;
        <button
          style={{ color: "white", border: "none", background: "#144337" }}
          onClick={() => handleClickNext()}
        >
          Weiter
        </button>
        </div>
      </div>
    </div>
  );
}
