import React, { useState } from "react";
import "./SuchauftragNineStep.scss";
import validator from "validator";
import { ApiPost } from "../../../helpers/API/ApiData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

export default function SuchauftragNineStep(props) {
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
  const [isLoading, setIsLoading] = useState(false);
  const [check, setCheck] = useState(false);

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

  const handleCheckboxChange = (e) => {
    setCheck(e.target.checked);
    setErrors({ ...errors, ["informNews"]: "" });
  };

  const handleOnChnage = (e) => {
    const { name, value } = e.target;
    setSearchRequestStep({ ...searchRequestStep, [name]: value });
    setErrors({ ...errors, [name]: "" });
    validation(name, value);
  };
  const validation = (name, value) => {
    if (name === "name") {
      if (!value) {
        setErrors({ ...errors, [name]: "Bitte Vor- und Nachname eingeben" });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }
    if (name === "email") {
      if (!value) {
        setErrors({ ...errors, [name]: "Bitte E-Mail eingeben" });
      } else if (!validator.isEmail(value)) {
        setErrors({ ...errors, [name]: "Bitte gültiges E-Mail eingeben" });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }
    // if (name === "postcode") {
    //   if (!value) {
    //     setErrors({ ...errors, [name]: "Bitte Postleitzahl eingeben!" });
    //   } else if (!value.match(/^\d{5}$/)) {
    //     setErrors({ ...errors, [name]: "Bitte gültiges Telefon eingeben" });
    //   } else {
    //     setErrors({ ...errors, [name]: "" });
    //   }
    // }
    if (name === "phone") {
      if (!value) {
        setErrors({ ...errors, [name]: "Bitte Telefon eingeben" });
      } 
      // else if (!value.match(/^\d{10}$/)) {
      //   setErrors({ ...errors, [name]: "Bitte gültiges Telefon eingeben" });
      // } 
      else {
        setErrors({ ...errors, [name]: "" });
      }
    }
    if (name === "informNews") {
      if (check == false) {
        setErrors({
          ...errors,
          [name]: "Bitte stimmen Sie den Bedingungen zu.",
        });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }
  };
  const onSubmit = async () => {
    let formIsValid = true;
    let errors = {};
    if (
      (searchRequestStep &&
        !searchRequestStep?.name &&
        !searchRequestStep?.email &&
        // !searchRequestStep?.postcode &&
        !searchRequestStep?.phone &&
        !searchRequestStep?.informNews) ||
      !searchRequestStep?.informNews === "yes"
    ) {
      formIsValid = false;
      errors["name"] = "Bitte Vor- und Nachname eingeben!";
      errors["email"] = "Bitte E-Mail eingeben!";
      // errors["postcode"] = "Bitte Postleitzahl eingeben!!";
      errors["phone"] = "Bitte Telefon eingeben!";
      errors["informNews"] = "Bitte stimmen Sie den Bedingungen zu!";
    }
    if (searchRequestStep && !searchRequestStep?.name?.trim()) {
      formIsValid = false;
      errors["name"] = "Bitte Vor- und Nachname eingeben!";
    }
    if (searchRequestStep && !searchRequestStep?.email) {
      formIsValid = false;
      errors["email"] = "Bitte E-Mail eingeben!";
    }
    // if (
    //   searchRequestStep &&
    //   (!searchRequestStep?.postcode || searchRequestStep?.postcode?.length != 5)
    // ) {
    //   formIsValid = false;
    //   errors["postcode"] = "Bitte Postleitzahl eingeben!!";
    // }
    if (
      searchRequestStep &&
      (!searchRequestStep?.phone)
    ) {
      formIsValid = false;
      errors["phone"] = "Bitte Telefon eingeben!";
    }
    if (check == false) {
      formIsValid = false;
      errors["informNews"] = "Bitte stimmen Sie den Bedingungen zu!";
    }
    if (formIsValid) {
      setIsLoading(true);
      let data = {
        searchRequest: searchRequestStep?.property,
        city: searchRequestStep?.location,
        state: searchRequestStep?.district,
        // propertyRent: searchRequestStep?.propertyRent,
        propertyBuy: searchRequestStep?.propertyBuy,
        areaSize: Number(searchRequestStep?.areaSize),
        roomCount: Number(searchRequestStep?.room),
        maxBuyPrice: Number(searchRequestStep?.maxBuyPrice),
        // maxRentalPrice: searchRequestStep?.maxRentalPrice,
        searchDate: moment(searchRequestStep?.searchDate).utc().format(),
        other: searchRequestStep?.describe,
        fullName: searchRequestStep?.name,
        email: searchRequestStep?.email,
        // postalCode: Number(searchRequestStep?.postcode),
        phone: Number(searchRequestStep?.phone),
      };

      await ApiPost(`search/add-search-query`, data)
        .then((res) => {
          console.log("res", res);
          setSearchRequestStep({});
          setIsLoading(false);
          toast.success(res?.data?.messages);
          setCount(count + 1);
          setWidth(width + 4);
        })
        .catch((err) => {
          console.log("err", err);
          setIsLoading(false);
          toast.error(err?.response?.data?.messages);
        });
    }
    setErrors(errors);
  };

  const handleOnBack = () => {
    setCount(count - 1);
    setWidth(width - 11);
  };
  return (
    <div>
      <ToastContainer />
      <div className="nine-step-content-alignment">
        <div className="section-title">
          <p>Wie können wir Sie erreichen?</p>
        </div>
        <div className="all-input-alignment">
          <div className="bottom-input-error-alignment">
            <input
              type="text"
              placeholder="Vor- und Nachname*"
              name="name"
              value={searchRequestStep?.name}
              onChange={(e) => handleOnChnage(e)}
            />
            <span className="globally-error-message-style">
              {errors["name"]}
            </span>
          </div>
          <div className="bottom-input-error-alignment">
            <input
              type="email"
              placeholder="E-Mail*"
              name="email"
              value={searchRequestStep?.email}
              onChange={(e) => handleOnChnage(e)}
            />
            <span className="globally-error-message-style">
              {errors["email"]}
            </span>
          </div>
          {/* <div className="bottom-input-error-alignment">
            <input
              type="text"
              placeholder="Postleitzahl*"
              name="postcode"
              value={searchRequestStep?.postcode}
              onChange={(e) => handleOnChnage(e)}
              onKeyPress={bindInput}
              maxLength="5"
            />
            <span className="globally-error-message-style">
              {errors["postcode"]}
            </span>
          </div> */}
          <div className="bottom-input-error-alignment">
            <input
              type="text"
              placeholder="Telefon*"
              name="phone"
              value={searchRequestStep?.phone}
              onChange={(e) => handleOnChnage(e)}
              onKeyPress={bindInput}
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
            <span
              style={{
                color: "red",
                top: "5px",
                fontSize: "12px",
              }}
            >
              {errors["informNews"]}
            </span>
          </div>
        </div>
        <div className="absenden-button">
          <button onClick={() => onSubmit()}>Absenden</button>
        </div>
      </div>
      {isLoading && (
        <div class="loader">
          <span></span>
        </div>
      )}
      <div className="steper-left-button-alignment">
        <button onClick={() => handleOnBack()}>Zurück</button>
      </div>
    </div>
  );
}
