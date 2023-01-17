import React, { useState } from "react";
import "./footer.scss";
import SendIcon from "../../assets/icons/send-button.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import WhatsapIcon from "../../assets/icons/whatsap.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import FooterLogo from "../../assets/logo/did.svg";
import FooterLogoSmall from "../../assets/logo/small-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { ApiPost } from "../../helpers/API/ApiData";
import { toast, ToastContainer } from "react-toastify";
export default function Footer() {
  const [mail, setMail] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMail({ ...mail, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const regexEmail =
    /^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i;

  // FORM VALIDATION FUNCTION...
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let formIsValid = true;
    let err = {};
    if (!mail || !mail.email) {
      err.mail = "* Bitte geben Sie ihre E-Mail-Adresse ein.";
      formIsValid = false;
    } else if (!regexEmail.test(mail.email)) {
      console.log("*****", !regexEmail.test(mail.email));
      err.mail = "* Geben Sie eine gültige E-Mail-Adresse ein";
      formIsValid = false;
    }
    console.log("err", err, formIsValid);
    setErrors(err);
    return formIsValid;
  };

  const hancleClick = async () => {
    if (validateForm()) {
      const data = {
        email: mail?.email,
      };

      await ApiPost(`drop-mail/add-mail`, data)
        .then((res) => {
          console.log("res", res);
          toast.success(res?.data?.messages);
          setMail({});
        })
        .catch((err) => {
          console.log("err.message", err);
          toast.error(err);
        });
    }
  };
  console.log("mail", mail);

  return (
    <>
      <ToastContainer />
      <div>
        <div className="footer-design">
          <div className="container-md-4">
            <div className="grid">
              <div className="grid-items">
                <div className="footer-first-section-style">
                  <span>TRAGEN SIE SICH IN UNSEREN NEWSLETTER EIN</span>
                </div>
                <div className="email-alignment">
                  <input
                    type="text"
                    name="email"
                    placeholder="E-Mail Adresse"
                    value={mail?.email ?? ""}
                    onChange={(e) => handleChange(e)}
                  />
                  <span className="globally-error-message-style">
                    {errors?.mail}
                  </span>
                  <div className="send-icon-alignment">
                    <img
                      src={SendIcon}
                      alt="SendIcon"
                      onClick={() => hancleClick()}
                    />
                  </div>
                </div>
                <div className="email-border-alignment">
                  <div className="line"></div>
                </div>
                <div className="hier-text-alignment">
                  <span>HIER FINDEN SIE UNS</span>
                  <p>DEUTSCHER IMMOBILIEN DIENST GmbH</p>
                  <p>Teerhof 59</p>
                  <p>28199 Bremen</p>
                </div>
                <div className="text-grid">
                  <div className="text-grid-items">
                    <a>Telefon:</a>
                  </div>
                  <div className="text-grid-items">
                    <a href="tel:+91 91455 91411">0421 / 1 67 61 80-0</a>
                  </div>
                </div>
                <div className="text-grid">
                  <div className="text-grid-items">
                    <a>E-Mail:</a>
                  </div>
                  <div className="text-grid-items">
                    <a>info@did-24.de</a>
                  </div>
                </div>
                <div className="social-media-icon-alignment">
                  <div>
                    <a href="https://www.facebook.com/" target="_blank">
                      <img src={FacebookIcon} alt="FacebookIcon" />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.whatsapp.com/" target="_blank">
                      <img src={WhatsapIcon} alt="WhatsapIcon" />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/" target="_blank">
                      <img src={InstagramIcon} alt="InstagramIcon" />
                    </a>
                  </div>
                </div>
                <div className="footer-logo">
                  <NavLink to="/">
                    <img src={FooterLogo} alt="FooterLogo" />
                  </NavLink>
                </div>
              </div>
              <div className="grid-items">
                <div className="footer-grid">
                  <div className="footer-grid-items">
                    <div className="verf-text">
                      <p>VERKAUF</p>
                      <Link to="/verkaufen">
                        <span>
                          Immobilienvermittlung 
                          Erfolgsabhängig
                          Immobilienvermittlung provisionsfrei Ihre Immobilie
                          bewerten lassen
                        </span>
                      </Link>
                    </div>
                    <div className="kaufen-text">
                      <p>KAUFEN</p>
                      <NavLink to="/suchauftrag-step">Suchauftrag</NavLink>
                      <NavLink to="/steper">Immobilien Bestand</NavLink>
                    </div>
                    <div className="kaufen-text">
                      <p>SERVICES</p>
                      <NavLink to="/property-management-steper">
                        Property Management
                      </NavLink>
                      {/* <a>Property Management</a> */}
                      <NavLink to="/lizenzpartner-step">
                        Service Lizenzpartner
                      </NavLink>
                    </div>
                  </div>
                  <div className="footer-grid-items">
                    <div className="information">
                      <p>INFORMATIONEN</p>
                      <a href="/unternehmen">Über uns</a>
                      <a href="/unternehmen">Team</a>
                      <a href="/unternehmen">Soziales Engagement</a>
                      <a href="/unternehmen">News</a>
                      <div className="sapcer"></div>
                      <NavLink to="/impressum">Impressum</NavLink>
                      <NavLink to="/datenschutz">Datenschutzerklärung</NavLink>
                      <a></a>
                    </div>
                  </div>
                </div>
                <div className="copy-right-text">
                  <span>
                    © 2022 JESAM Consulting GmbH. All Rechte vorbehalten.
                  </span>
                  <NavLink to="/">
                    <img src={FooterLogoSmall} alt="FooterLogoSmall" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
