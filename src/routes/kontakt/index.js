import React, { useEffect, useState } from "react";
import "./kontakt.scss";
import WhatsapIcon from "../../assets/icons/whatsap-new.svg";
import FacebookIcon from "../../assets/icons/min-facebook.svg";
import InstaIcon from "../../assets/icons/insta-min.svg";
import { ApiPost } from "../../helpers/API/ApiData";
import { toast, ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";

export default function Kontakt() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
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
    var key = String.fromCharCode(!value.charCode ? value.which : value.charCode);
    if (regex.test(key)) {
      value.preventDefault();
      return false;
    }
  };

  const regexEmail = /^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i;

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

    if (inputValue && (!inputValue?.email || regexEmail.test(inputValue.email) === false)) {
      isFormValid = false;
      errors["email"] = "Bitte geben Sie Ihre E-Mail ein.";
    }

    if (inputValue && !inputValue?.phone) {
      isFormValid = false;
      errors["phone"] = "Bitte geben Sie Ihre Telefonnummer ein.";
    }

    if (inputValue && (!inputValue?.occupationRole || inputValue?.occupationRole == "Select the role")) {
      isFormValid = false;
      errors["occupationRole"] = "Bitte wählen Sie die Rolle aus.";
    }

    if (inputValue && (!inputValue?.knowUs || inputValue?.knowUs == "Select")) {
      isFormValid = false;
      errors["knowUs"] = "Bitte geben Sie Ihre Nachricht ein.";
    }

    if (inputValue && !inputValue?.informNews) {
      isFormValid = false;
      errors["informNews"] = "Bitte wählen Sie Woher kennen wir Sie?";
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
        })
        .catch((err) => {
          console.log("err", err);
          setIsLoading(false);
          toast.error(err?.response?.data?.messages);
        });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="container-md-5">
        <div className="kontact-first-information-content-alignment">
          <div className="page-title">
            <h1>Kontakt Deutscher Immobilien Dienst</h1>
          </div>
          <div className="two-col-grid">
            <div className="two-col-grid-items">
              <div className="left-side-content">
                <span>ADRESSE</span>
                <p>201 S. Biscayne Boulevard 28th Floor, Miami, FL 33131</p>
                <NavLink to="/steper">
                  <button>ROUTE PLANEN</button>
                </NavLink>
              </div>
            </div>
            <div className="two-col-grid-items">
              <div className="right-side-content">
                <span>TELEFON</span>
                <a href="tel: 0421 / 1 67 61 80-0">
                  <p>0421 / 1 67 61 80-0</p>
                </a>
              </div>
              <div className="whatsap-content-alignment">
                <div>
                  <img src={WhatsapIcon} alt="WhatsapIcon" />
                </div>
                <div>
                  <a href="tel:0171 8906952">0171 8906952</a>
                </div>
              </div>
              <div className="email-alignment">
                <span>E-MAIL</span>
                <a href="mailto: inquire@platinumluxuryauctions.com?subject = Feedback&body = Message">inquire@platinumluxuryauctions.com</a>
              </div>
              <div className="follow-icon">
                <span>FOLGEN SIE UNS</span>
                <div className="icon-alignment">
                  <img src={FacebookIcon} alt="FacebookIcon" />
                  {/* <a href="https://www.instagram.com/" target="_blank"> */}
                  <img src={InstaIcon} alt="InstaIcon" />
                  {/* </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kontact-backgrond-remove">
        <div className="container-md-5">
          <div className="kontact-main-form-content-alignment">
            <div className="kontact-form-design">
              <div className="box-title">
                <h1>Anfrage</h1>
                <h2>Formular</h2>
              </div>
              <div className="two-col-grid">
                <div className="input">
                  <input
                    type="text"
                    placeholder="Vorname*"
                    name="firstName"
                    value={inputValue?.firstName ?? ""}
                    onChange={(e) => handleOnChange(e)}
                  />
                  <span className="globally-error-message-style">{errors["firstName"]}</span>
                </div>
                <div className="input">
                  <input type="text" placeholder="Nachname*" name="lastName" value={inputValue?.lastName ?? ""} onChange={(e) => handleOnChange(e)} />
                  <span className="globally-error-message-style">{errors["lastName"]}</span>
                </div>
              </div>
              <div className="two-col-grid">
              <div className="input email-bottom-alignment">
                <input type="text" placeholder="E-Mail Adresse*" name="email" value={inputValue?.email ?? ""} onChange={(e) => handleOnChange(e)} />
                <span className="globally-error-message-style">{errors["email"]}</span>
                
              </div>
                <div className="input">
                  <input
                    type="text"
                    placeholder="Telefonnummer*"
                    name="phone"
                    value={inputValue?.phone ?? ""}
                    onChange={(e) => handleOnChange(e)}
                    onKeyPress={bindInput}
                    maxLength="10"
                  />
              <span className="globally-error-message-style">{errors["phone"]}</span>
                </div>
              </div>
              <div className="select-text select-text-first-step-content-alignment">
                <span>Ich bin:</span>
                <div className="input">
                  <select name="occupationRole" id="occupationRole" value={inputValue?.occupationRole ?? ""} onChange={(e) => handleOnChange(e)}>
                    <option value="Select the role" selected>
                      Klicken zur Auswahl
                    </option>
                    <option value="Verkäufer">Verkäufer</option>
                    <option value="Käufer">Käufer</option>
                    <option value="Suchanfrage">Suchanfrage</option>
                    <option value="Lizenzpartner">Lizenzpartner</option>
                    <option value="Immobilienverwalter">Immobilienverwalter</option>
                  </select>
                </div>
              </div>
              <span className="globally-error-message-style">{errors["occupationRole"]}</span>
              <div className="spacer-for-first-alignment"></div>
              <div className="input">
                <textarea
                  placeholder="Ihr Anliegen..."
                  type="text"
                  name="description"
                  value={inputValue?.description ?? ""}
                  onChange={(e) => handleOnChange(e)}
                ></textarea>
                <a className="globally-error-message-style">{errors["description"]}</a>
              </div>
              <div className="select-text select-text-new-grid select-text-new-grid-top-alignment">
                <span>Woher kennen Sie uns?</span>
                <div className="input">
                  <select name="knowUs" id="knowUs" value={inputValue?.knowUs ?? ""} onChange={(e) => handleOnChange(e)}>
                    <option value="Select" selected>
                      Auswählen
                    </option>
                    <option value="Durch Verkäufer">Durch Verkäufer</option>
                    <option value="Durch Käufer">Durch Käufer</option>
                    <option value="Durch Suchanfrage">Durch Suchanfrage</option>
                    <option value="Durch Lizenzpartner">Durch Lizenzpartner</option>
                    <option value="Durch Immobilienverwalter">Durch Immobilienverwalter</option>
                  </select>
                </div>
              </div>
              <span className="globally-error-message-style">{errors["knowUs"]}</span>
              <div className="spacer-for-first-alignment"></div>
              <div className="first-checkbox-text-alignment">
                <div className="left-content">
                  <span>Wollen Sie zu exklusiven Neuigkeiten informiert werden?</span>
                </div>
                <div className="right-content">
                  <div className="checkobx">
                    <div>
                      <input
                        type="radio"
                        name="informNews"
                        value="true"
                        id="check-one"
                        onChange={(e) => handleOnChange(e)}
                        checked={inputValue?.informNews === "true" ?? ""}
                      />
                      <label htmlFor="check-one"></label>
                    </div>
                    <div>
                      <span>Ja</span>
                    </div>
                  </div>
                  <div className="checkobx">
                    <div>
                      <input
                        type="radio"
                        name="informNews"
                        value="false"
                        id="check"
                        onChange={(e) => handleOnChange(e)}
                        checked={inputValue?.informNews === "false" ?? ""}
                      />
                      <label htmlFor="check"></label>
                    </div>
                    <div>
                      <span>Nein</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="globally-error-message-style">{errors["informNews"]}</span>
              <div className="last-text-alignment">
                <div>
                  <input type="checkbox" name="agreed" id="checkon" onChange={(e) => handleCheckboxChange(e)} />
                  <label htmlFor="checkon"></label>
                </div>
                <div>
                  <span>Hiermit stimme ich den AGBs und der Datenschutzerklärung zu. </span>
                </div>
              </div>
              <p className="globally-error-message-style">{errors["agreed"]}</p>
              <div className="spacer-for-first-alignment"></div>
              <div className="black-button">
                <button onClick={() => addContactData()}>Absenden</button>
              </div>
            </div>
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
