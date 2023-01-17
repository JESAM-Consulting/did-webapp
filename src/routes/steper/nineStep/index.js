import axios from "axios";
import React, { useState } from "react";
import { ApiPost } from "../../../helpers/API/ApiData";
import "./nineStep.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function NineStep(props) {
  const {
    openTab,
    setOpenTab,
    inputPowerCon,
    setInputPowerCon,
    width,
    setWidth,
  } = props;
  const [check, setCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputPowerCon({ ...inputPowerCon, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCheckboxChange = (e) => {
    setCheck(e.target.checked);
    setErrors({ ...errors, check: "" });
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

  const regexEmail =
    /^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i;

  // FORM VALIDATION FUNCTION...
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let formIsValid = true;
    let err = {};
    if (!inputPowerCon || !inputPowerCon.fullName) {
      err.fullName = "* Bitte geben Sie Ihren Vor- und Nachnamen ein.";
      formIsValid = false;
    }
    if (!inputPowerCon || !inputPowerCon.email) {
      err.email = "* Bitte geben Sie ihre E-Mail-Adresse ein.";
      formIsValid = false;
    } else if (regexEmail.test(inputPowerCon.email) === false) {
      err.email = "* Geben Sie eine gültige E-Mail-Adresse ein";
      formIsValid = false;
    }
    if (!inputPowerCon || !inputPowerCon.phone) {
      err.phone = "* Bitte geben Sie Ihre Telefonnummer ein.";
      formIsValid = false;
    }
    if (check == false) {
      err.check = "* Bitte geben Sie Ihre Telefonnummer ein.";
      formIsValid = false;
    }
    setErrors(err);
    return formIsValid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsLoading(true);
      const data = {
        appraisal: inputPowerCon.appraisal,
        houseType: inputPowerCon.houseType,
        livingSize: inputPowerCon.livingSize,
        areaSize: inputPowerCon.areaSize,
        roomCount: inputPowerCon.roomCount,
        isOwner: inputPowerCon.isOwner,
        usage: inputPowerCon.usage,
        builtDate: inputPowerCon.builtDate,
        sellingDue: inputPowerCon.sellingDue,
        location: inputPowerCon.location,
        fullName: inputPowerCon.fullName,
        email: inputPowerCon.email,
        phone: inputPowerCon.phone,
      };

      await ApiPost(`appraisal/add-appraisal`, data)
        .then((res) => {
          console.log("res", res);
          setIsLoading(false);
          toast.success(res?.data?.messages);
          setOpenTab(12);
        })
        .catch((err) => {
          console.log("err.message", err.response.data.message);
          setIsLoading(false);
          toast.error(err?.response?.data?.messages);
        });
    }
  };

  const handleClickPrevious = (e) => {
    setOpenTab(10);
    setWidth(width - 9);
  };

  return (
    <div>
      <ToastContainer />
      <div className="nine-step-content-alignment">
        <div className="section-title">
          <p>Wie können wir Sie erreichen?</p>
        </div>
        <div className="all-input-alignment">
          <div className="b-align-input">
            <input
              type="text"
              placeholder="Vor- und Nachname*"
              name="fullName"
              value={inputPowerCon?.fullName}
              onChange={(e) => handleChange(e)}
            />
            <span className="globally-error-message-style">
              {errors?.fullName}
            </span>
          </div>
          <div className="b-align-input">
            <input
              type="text"
              placeholder="E-Mail*"
              name="email"
              value={inputPowerCon?.email}
              onChange={(e) => handleChange(e)}
            />
            <span className="globally-error-message-style">
              {errors?.email}
            </span>
          </div>
          <div className="b-align-input">
            <input
              type="text"
              placeholder="Telefon*"
              name="phone"
              value={inputPowerCon?.phone}
              onChange={(e) => handleChange(e)}
              onKeyPress={bindInput}
              // maxLength="10"
            />

            <span className="globally-error-message-style">
              {errors?.phone}
            </span>
          </div>
        </div>
        <div className="checkbox-content-grid">
          <div>
            <input
              type="checkbox"
              name="informNews"
              id="check"
              onChange={(e) => {
                handleCheckboxChange(e);
              }}
            />
            <label htmlFor="check"></label>
          </div>
          <div>
            <span>
              Ich bin mit der Verarbeitung meiner Daten zum Zweck der
              Marktwertermittlung und der Kontaktaufnahme durch die Deutscher
              Immobilien Dienst GmbH einverstanden. Meine obigen Daten können
              zum Zweck der Kontaktaufnahme gemäß der Adresslage meiner
              Immobilie genutzt werden.
            </span>
            <span>
              Es gelten die aktuellen AGBs und Datenschutzbestimmungen.
            </span>
            <span>
              Sie können Ihre Einwilligungen jederzeit für die Zukunft
              widerrufen.
            </span>
            <a className="globally-error-message-style">{errors?.check}</a>
          </div>
        </div>
        <div className="absenden-button">
          <button onClick={() => handleSubmit()}>Absenden</button>
        </div>
        <div className="steper-left-button-alignment">
          <button onClick={() => handleClickPrevious()}>Zurück</button>
        </div>
      </div>
      {isLoading && (
        <div class="loader">
          <span></span>
        </div>
      )}
    </div>
  );
}
