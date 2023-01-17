import React, { useState } from "react";
import "./hilfreicheForm.scss";
import DownloadIcon from "../../../assets/icons/download.svg";
import { ApiGet, ApiPost, ApiPut } from "../../../helpers/API/ApiData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HilfreicheForm() {
  const [inputValue, setInputValue] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [check, setCheck] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCheckboxChange = (e) => {
    setCheck(e.target.checked);
    setErrors({ ...errors, ["agreed"]: "" });
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

  console.log("inputValue", inputValue);

  const validationForContact = () => {
    let isFormValid = true;
    let errors = {};

    if (inputValue && !inputValue?.firstName) {
      isFormValid = false;
      errors["firstName"] = "Bitte geben Sie Ihren firstName ein.";
    }

    if (inputValue && !inputValue?.lastName) {
      isFormValid = false;
      errors["lastName"] = "Bitte geben Sie Ihren lastName ein.";
    }

    if (
      inputValue &&
      (!inputValue?.email || regexEmail.test(inputValue.email) === false)
    ) {
      isFormValid = false;
      errors["email"] = "Bitte geben Sie Ihre E-Mail ein.";
    }

    if (inputValue && !inputValue?.phone) {
      isFormValid = false;
      errors["phone"] = "Bitte geben Sie Ihre Telefonnummer ein.";
    }

    if (
      inputValue &&
      (!inputValue?.occupationRole ||
        inputValue?.occupationRole == "Select the role")
    ) {
      isFormValid = false;
      errors["occupationRole"] = "Bitte wählen Sie die Rolle aus.";
    }

    if (inputValue && (!inputValue?.knowUs || inputValue?.knowUs == "Select")) {
      isFormValid = false;
      errors["knowUs"] = "Bitte geben Sie Ihre Nachricht ein.";
    }

    if (inputValue && !inputValue?.informNews) {
      isFormValid = false;
      errors["informNews"] = "Bitte wählen Sie Woher kennen wir Sie?.";
    }
    if (inputValue && !inputValue?.description) {
      isFormValid = false;
      errors["description"] = "Bitte Beschreibung eingeben.";
    }
    if (check == false) {
      isFormValid = false;
      errors["agreed"] = "Bitte stimmen Sie den Bedingungen zu.";
    }

    setErrors(errors);
    return isFormValid;
  };

  const addContactData = async () => {
    if (validationForContact()) {
      setIsLoading(true);
      let data = {
        firstName: inputValue?.firstName,
        lastName: inputValue?.lastName,
        email: inputValue?.email,
        phone: inputValue?.phone,
        occupationRole: inputValue?.occupationRole,
        knowUs: inputValue?.knowUs,
        news: inputValue?.informNews,
        description: inputValue?.description,
      };
      console.log("dataaaa", data);
      await ApiPost(`contact/add-contact`, data)
        .then((res) => {
          console.log("res", res);
          setInputValue({});
          setIsLoading(false);
          toast.success(res?.data?.messages);
          // toast.success("Thank you for your interest in our products.");
        })
        .catch((err) => {
          console.log("err", err);
          setIsLoading(false);
          toast.error(err?.response?.data?.messages);
        });
    }
  };

  console.log("inputValue", inputValue);

  return (
    <div>
      <ToastContainer />
      <div className="container-md-7">
        <div className="hil-freoiche-form-alignment">
          <h2>Hilfreiche Downloads</h2>
          <div className="portfolio-content">
            <div>
              <img src={DownloadIcon} alt="DownloadIcon" />
            </div>
            <div>
              <span>Immobilien Portfolio</span>
            </div>
          </div>
          <div className="faq-content-alignment">
            <div>
              <img src={DownloadIcon} alt="DownloadIcon" />
            </div>
            <div>
              <span>FAQs</span>
            </div>
          </div>
          <h3>Anfrage</h3>
          <div className="two-col-grid">
            <div className="two-col-grid-items">
              <input
                type="text"
                placeholder="Vorname*"
                name="firstName"
                value={inputValue?.firstName ?? ""}
                onChange={(e) => handleOnChange(e)}
              />
              <span
                style={{
                  color: "red",
                  top: "5px",
                  fontSize: "12px",
                }}
              >
                {errors["firstName"]}
              </span>
            </div>

            <div className="two-col-grid-items">
              <input
                type="text"
                placeholder="Nachname*"
                name="lastName"
                value={inputValue?.lastName ?? ""}
                onChange={(e) => handleOnChange(e)}
              />
              <span
                style={{
                  color: "red",
                  top: "5px",
                  fontSize: "12px",
                }}
              >
                {errors["lastName"]}
              </span>
            </div>
          </div>
          <div className="two-col-grid">
          <div className="email-address-content">
            <input
              type="text"
              placeholder="E-Mail Adresse*"
              name="email"
              value={inputValue?.email ?? ""}
              onChange={(e) => handleOnChange(e)}
            />
            <span className="globally-error-message-style">
              {errors["email"]}
            </span>
          </div>
          <div className="tel-input-bottom-align ">
            <div className="tele-input">
              {/* <span>Telefonnummer*</span> */}
              <input
                type="text"
                placeholder="Telefonnummer*"
                name="phone"
                value={inputValue?.phone ?? ""}
                onChange={(e) => handleOnChange(e)}
                onKeyPress={bindInput}
                maxLength="10"
              />
            </div>
            <a className="globally-error-message-style">{errors["phone"]}</a>
          </div>
          </div>
          <div className="ich-bin-text-b-align">
            <div className="ich-bin-text">
              <span>Ich bin:</span>
              <select
                name="occupationRole"
                id="occupationRole"
                value={inputValue?.occupationRole ?? ""}
                onChange={(e) => handleOnChange(e)}
              >
                <option value="Select the role" selected>
                  Klicken zur Auswahl
                </option>
                <option value="Sellerl">Verkäufer</option>
                <option value="Buyer">Käufer</option>
                <option value="Search Reuest">Suchanfrage</option>
                <option value="license partner">Lizenzpartner</option>
                <option value="property">Immobilienverwalter</option>
              </select>
            </div>
            <a className="globally-error-message-style">
              {errors["occupationRole"]}
            </a>
          </div>

          <div className="message-box">
            <textarea
              placeholder="Ihr Anliegen..."
              type="text"
              name="description"
              value={inputValue?.description ?? ""}
              onChange={(e) => handleOnChange(e)}
            ></textarea>
            <a className="globally-error-message-style">
              {errors["description"]}
            </a>
          </div>
          <div className="ich-bin-text-b-align">
            <div className="ich-bin-text ich-bin-text-sec-grid">
              <span>Woher kennen Sie uns?</span>
              <select
                name="knowUs"
                id="knowUs"
                value={inputValue?.knowUs ?? ""}
                onChange={(e) => handleOnChange(e)}
              >
                <option value="Select" selected>
                  Auswählen
                </option>
                <option value="By Seller">Durch Verkäufer</option>
                <option value="By Buyer">Durch Käufer</option>
                <option value="By Search Reuest">Durch Suchanfrage</option>
                <option value="By license partner">Durch Lizenzpartner</option>
                <option value="By property">
                  Durch Immobilienverwalter
                </option>
              </select>
            </div>
            <a
              style={{
                color: "red",
                top: "5px",
                fontSize: "12px",
              }}
            >
              {errors["knowUs"]}
            </a>
          </div>

          <div className="all-checkbox-all-content-alignment">
            <div>
              <p>Wollen Sie zu exklusiven Neuigkeiten informiert werden??</p>
            </div>
            <div className="checkbox-align">
              <div className="new-checkbox">
                <input
                  type="radio"
                  name="informNews"
                  value="true"
                  id="ja"
                  onChange={(e) => handleOnChange(e)}
                  checked={inputValue?.informNews === "true" ?? ""}
                />
                <label htmlFor="ja"></label>
                <span>Ja</span>
              </div>
              <div className="new-checkbox">
                <input
                  type="radio"
                  name="informNews"
                  value="false"
                  id="Nein"
                  onChange={(e) => handleOnChange(e)}
                  checked={inputValue?.informNews === "false" ?? ""}
                />
                <label htmlFor="Nein"></label>
                <span>Nein</span>
              </div>
            </div>
          </div>
          <span
            style={{
              color: "red",
              top: "5px",
              fontSize: "12px",
            }}
          >
            {errors["informNews"]}
          </span>
          <div className="all-checkbox-text-align-top-bottom">
            <div className="all-checkbox-text-align">
              <div>
                <input
                  type="checkbox"
                  id="Donuts41"
                  name="agreed"
                  onChange={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor="Donuts41"></label>
              </div>
              <div>
                <span>
                  Hiermit stimme ich den AGBs und der Datenschutzerklärung und
                  der Kontaktaufnahme durch den DID zu.{" "}
                </span>
              </div>
            </div>
            <a className="globally-error-message-style">{errors["agreed"]}</a>
          </div>

          <div className="accept-button">
            <button onClick={() => addContactData()}>Absenden</button>
          </div>
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
