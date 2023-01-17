import React, { useState } from "react";
import "./blackHeader.scss";
import Logo from "../../assets/logo/black-logo.svg";
import UserIcon from "../../assets/icons/user-line.svg";
import SearchIcon from "../../assets/icons/black-search.svg";
import { NavLink } from "react-router-dom";
import HumberIcon from "../../assets/icons/black-humber.svg";
import MobileLogo from "../../assets/logo/mobile-logo.svg";
export default function BlackHeader() {
  const [headerOpen, setHeaderOpen] = useState(false);

  return (
    <>
      <div className="header-sticky">
        <div className="container-md">
          <div className="black-header-alignment">
            <div className="logo">
              <NavLink to="/">
                <img src={Logo} alt="Logo" />
              </NavLink>
            </div>
            <div className="sec-content-alignment">
              <div className="menu">
                <NavLink to="/verkaufen">VERKAUFEN</NavLink>
                <NavLink to="/kaufen">KAUFEN</NavLink>
                <NavLink to="/property-page">PROPERTY MANAGEMENT</NavLink>
                <NavLink to="/kontakt">KONTAKT</NavLink>
                <NavLink to="/unternehmen">UNTERNEHMEN</NavLink>
              </div>
              <div className="icon-alignment">
                <a
                  href="https://did-admin.buildx.live/auth/login"
                  target="_blank"
                >
                  <img
                    src={UserIcon}
                    alt="UserIcon"
                    // onClick={() =>
                    //   window.location.replace(
                    //     `https://did-admin.buildx.live/auth/login`,"_blank"
                    //   )
                    // }
                  />
                </a>
                <a href="/suchauftrag-step">
                  <img src={SearchIcon} alt="SearchIcon" />
                </a>
                <img
                  onClick={() => setHeaderOpen(!headerOpen)}
                  className="mobile-view-show-icon"
                  src={HumberIcon}
                  alt="HumberIcon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          headerOpen
            ? "mobile-header-design header-show"
            : "mobile-header-design header-hidden"
        }
      >
        <div className="mobile-head">
          <div className="logo">
            <NavLink to="/">
              <img src={MobileLogo} alt="MobileLogo" />
            </NavLink>
          </div>
          <div onClick={() => setHeaderOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="mobile-body">
          <NavLink onClick={() => setHeaderOpen(false)} to="/verkaufen">
            VERKAUFEN
          </NavLink>
          <NavLink onClick={() => setHeaderOpen(false)} to="/kaufen">
            KAUFEN
          </NavLink>
          <NavLink onClick={() => setHeaderOpen(false)} to="/property-page">
            PROPERTY MANAGEMENT
          </NavLink>
          <NavLink onClick={() => setHeaderOpen(false)} to="/kontakt">
            KONTAKT
          </NavLink>
          <NavLink onClick={() => setHeaderOpen(false)} to="/unternehmen">
            UNTERNEHMEN
          </NavLink>
        </div>
      </div>
    </>
  );
}
