import React from "react";
import "./suchauftragSecStep.scss";
import LocationIcon from "../../../assets/icons/input-location.svg";

export default function SuchauftragSecStep(props) {
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
    if (name === "location") {
      if (!value) {
        setErrors({ ...errors, [name]: "Bitte Ort eingeben" });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }
    if (name === "district") {
      if (!value) {
        setErrors({ ...errors, [name]: "Bitte Stadtteil eingeben" });
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
      !searchRequestStep?.location &&
      !searchRequestStep?.district
    ) {
      formIsValid = false;
      errors["location"] = "Bitte Ort eingeben!";
      errors["district"] = "Bitte Stadtteil eingeben!";
    }
    if (searchRequestStep && !searchRequestStep?.location?.trim()) {
      formIsValid = false;
      errors["location"] = "Bitte Ort eingeben!";
    }
    if (searchRequestStep && !searchRequestStep?.district?.trim()) {
      formIsValid = false;
      errors["district"] = "Bitte Stadtteil eingeben!";
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
    <>
    <div>
      <div className="suchauftrag-sec-step-content-alignment">
        <div className="section-title">
          <h1>Bitte nennen Sie uns den Ort und Stadtteil</h1>
        </div>
        <div className="left-right-contet-alignment">
          <div className="p-location-align">
            <div className="location-alignment">
              <input
                type="text"
                name="location"
                placeholder="ORT"
                value={searchRequestStep?.location}
                onChange={(e) => handleOnChnage(e)}
              />
              <div className="location-icon">
                <img src={LocationIcon} alt="LocationIcon" />
              </div>
            </div>
            <span className="globally-error-message-style">
              {errors["location"]}
            </span>
          </div>
          <div className="p-location-align">
            <div className="location-alignment">
              <input
                type="text"
                name="district"
                placeholder="STADTTEIL*"
                value={searchRequestStep?.district}
                onChange={(e) => handleOnChnage(e)}
              />
              <div className="location-icon">
                <img src={LocationIcon} alt="LocationIcon" />
              </div>
            </div>
            <span className="globally-error-message-style">
              {errors["district"]}
            </span>
          </div>
          <div className="button-design">
            <button onClick={() => onSubmit()}>Weiter</button>
          </div>
        </div>
<br/>
         <span style={{fontSize: "13px" , justifyContent: "center" ,alignItems: "center", display: "flex"}}>*Bei einer Angabe von mehreren Stadtteilen, bitte mit einem Komma trennen</span>
          
      </div>
      <div className="steper-globally-button-alignment">
        <button onClick={() => handleOnBack()}>Zurück</button>
        <button onClick={() => handleSubmit()}>Weiter</button>
      </div>
    </div>
     
    </>
  );
}
