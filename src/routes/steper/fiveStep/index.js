import React from "react";
import "./fiveStep.scss";
export default function FiveStep(props) {
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

  const handleClick = (e) => {
    const { name, textContent } = e.target;
    setInputPowerCon({ ...inputPowerCon, [name]: textContent });
    setOpenTab(8);
    setErrors("");
    setWidth(width + 9);
  };

  const validateForm = () => {
    let formIsValid = true;
    let err = {};
    if (!inputPowerCon || !inputPowerCon.usage) {
      err.usage = "* Bitte wählen Sie zuerst eine Schaltfläche aus.";
      formIsValid = false;
    }
    setErrors(err);
    return formIsValid;
  };

  const handleClickPrevious = (e) => {
    setOpenTab(6);
    setWidth(width - 9);
  };

  const handleClickNext = (e) => {
    if (validateForm()) {
      setOpenTab(8);
      setErrors("");
      setWidth(width + 9);
    }
  };

  return (
    <div>
      <div className="five-step-all-content-alignment">
        <div className="section-title">
          <p>Wie wird die Immobilien zur Zeit genutzt?</p>
        </div>
        <div className="all-button-alignment">
          <button name="usage" onClick={(e) => handleClick(e)}>
            Selbst bewohnt
          </button>
          <button name="usage" onClick={(e) => handleClick(e)}>
            Vermietet
          </button>
          <button name="usage" onClick={(e) => handleClick(e)}>
            Teilweise vermietet
          </button>
          <button name="usage" onClick={(e) => handleClick(e)}>
            Frei
          </button>
        <span className="globally-error-message-style">{errors?.usage}</span>
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
