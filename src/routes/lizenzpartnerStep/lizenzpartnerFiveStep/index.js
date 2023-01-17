import React, { useState } from "react";
import "./lizenzpartnerFiveStep.scss";
import { ApiGet, ApiPost, ApiPut } from "../../../helpers/API/ApiData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function LizenzpartnerFiveStep(props) {
  const {
    inputValue,
    setInputValue,
    step,
    setStep,
    errors,
    setErrors,
    width,
    setWidth,
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [check, setCheck] = useState(false);

  const handleCheckboxChange = (e) => {
    setCheck(e.target.checked);
    setErrors({ ...errors, ["informNews"]: "" });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    setErrors({ ...errors, [name]: "" });
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

  const validation = () => {
    let errors = {};
    let isFormValid = true;
    if (inputValue && !inputValue?.fullName) {
      isFormValid = false;
      errors["fullName"] = "Bitte tragen Sie Ihren vollen Namen ein...";
    }
    if (
      inputValue &&
      (!inputValue?.email || regexEmail.test(inputValue.email) === false)
    ) {
      isFormValid = false;
      errors["email"] = "Bitte geben Sie ihre E-Mail-Adresse ein.";
    }
    if (inputValue && !inputValue?.phone) {
      isFormValid = false;
      errors["phone"] = "Bitte geben Sie Ihre Telefonnummer ein.";
    }
    if (check == false) {
      isFormValid = false;
      errors["informNews"] = "Bitte stimmen Sie den Bedingungen zu.";
    }
    setErrors(errors);
    return isFormValid;
  };

  const addLicencePartner = async () => {
    setIsLoading(true);
    let data = {
      licensePartner: inputValue?.manageProperty,
      areaSize: inputValue?.areaSpace,
      usage: inputValue?.useProperty,
      fullName: inputValue?.fullName,
      email: inputValue?.email,
      postalCode: inputValue?.postCode,
      phone: inputValue?.phone,
      // propertySize: inputValue?.propertySpace,
    };
    console.log("datatatatat", data);
    await ApiPost(`license-partner/add-license-partner`, data)
      .then((res) => {
        console.log("first step", res);
        setIsLoading(false);
        toast.success(res?.data?.messages);
        setStep(7);
      })
      .catch((err) => {
        console.log("first step", err);
        setIsLoading(false);
        toast.error(err?.response?.data?.messages);
      });
  };

  const handleSubmit = () => {
    if (validation()) {
      addLicencePartner();
    }
  };

  const handleOnBack = () => {
    setStep(5);
    setWidth(width - 20);
  };

  return (
    <div>
      <ToastContainer />
      <div className="six-poroperty-step-content-alignment">
        <div className="section-title">
          <p>Wie können wir Sie erreichen?</p>
        </div>
        <div className="all-input-alignment">
          <div className="bottom-input-error-alignment">
            <input
              type="text"
              placeholder="Vor- und Nachname*"
              name="fullName"
              value={inputValue?.fullName}
              onChange={(e) => handleOnChange(e)}
            />
            <span className="globally-error-message-style">
              {errors["fullName"]}
            </span>
          </div>
          <div className="bottom-input-error-alignment">
            <input
              type="text"
              placeholder="E-Mail*"
              name="email"
              value={inputValue?.email}
              onChange={(e) => handleOnChange(e)}
            />
            <span className="globally-error-message-style">
              {errors["email"]}
            </span>
          </div>
          <div className="bottom-input-error-alignment">
            <input
              type="text"
              placeholder="Telefon*"
              name="phone"
              value={inputValue?.phone}
              onChange={(e) => handleOnChange(e)}
              onKeyPress={bindInput}
              // maxLength="10"
            />
            <span className="globally-error-message-style">
              {errors["phone"]}
            </span>
          </div>
        </div>
        <div className="checkbox-content-grid">
          <div>
            <input
              type="checkbox"
              name="informNews"
              id="check"
              onChange={(e) => handleCheckboxChange(e)}
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
            <a className="globally-error-message-style">
              {errors["informNews"]}
            </a>
          </div>
        </div>
        <div className="absenden-button">
          <button onClick={() => handleSubmit()}>Absenden</button>
        </div>
      </div>
      <div className="steper-left-button-alignment">
        <button onClick={() => handleOnBack()}>Zurück</button>
      </div>
      {isLoading && (
        <div class="loader">
          <span></span>
        </div>
      )}
    </div>
  );
}
