import React from "react";
import "./forthStep.scss";
export default function ForthStep(props) {
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
    setOpenTab(7);
    setErrors("");
    setWidth(width + 9);
  };

  // FORM VALIDATION FUNCTION...
  const validateForm = () => {
    let formIsValid = true;
    let err = {};
    if (!inputPowerCon || !inputPowerCon.isOwner) {
      err.isOwner = "* Bitte wählen Sie zuerst eine Schaltfläche aus.";
      formIsValid = false;
    }
    setErrors(err);
    return formIsValid;
  };

  const handleClickPrevious = (e) => {
    setOpenTab(5);
    setWidth(width - 9);
  };

  const handleClickNext = (e) => {
    if (validateForm()) {
      setOpenTab(7);
      setErrors("");
      setWidth(width + 9);
    }
  };

  return (
    <div>
      <div className="forth-step-all-content-alignment">
        <div className="section-title">
          <p>Sind Sie der Eigentümer?</p>
        </div>
        <div className="all-button-alignment">
          <button name="isOwner" onClick={(e) => handleClick(e)}>
            Ja
          </button>
          <button name="isOwner" onClick={(e) => handleClick(e)}>
            Nein
          </button>
          <button name="isOwner" onClick={(e) => handleClick(e)}>
            Teileigentümer
          </button>
        </div>
        <span className="globally-error-message-style">{errors?.isOwner}</span>
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
