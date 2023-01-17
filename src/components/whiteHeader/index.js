import React, { useState } from "react";
import "./whiteHeader.scss";
import Logo from "../../assets/logo/logo.svg";
import UserIcon from "../../assets/icons/user.svg";
import SearchIcon from "../../assets/icons/search.svg";
import HumberIcon from "../../assets/icons/humber.svg";
import MobileLogo from "../../assets/logo/mobile-logo.svg";
import { NavLink, useHistory } from "react-router-dom";

export default function WhiteHeader() {
  const navigate = useHistory();
  const [headerOpen, setHeaderOpen] = useState(false);
  return (
    <div>
      <div className="container-md">
        <div className="white-header-alignment">
          <NavLink to="/">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </NavLink>
          <div className="sec-content-alignment">
            <div className="menu">
              <NavLink to="/verkaufen">VERKAUFEN</NavLink>
              <NavLink to="/kaufen">KAUFEN</NavLink>
              <NavLink to="/property-page">PROPERTY MANAGEMENT</NavLink>
              <NavLink to="/kontakt">KONTAKT</NavLink>
              <NavLink to="/unternehmen">UNTERNEHMEN</NavLink>
            </div>
            <div className="icon-alignment">
              <a href="https://did-admin.buildx.live/auth/login" target="_blank">
                <img
                  src={UserIcon}
                  alt="UserIcon"
                  // onClick={() =>
                  //   window.location.replace(
                  //     `https://did-admin.buildx.live/auth/login`
                  //   )
                  // }
                />
              </a>
              <NavLink to="/suchauftrag-step">
                <img src={SearchIcon} alt="SearchIcon" />
              </NavLink>
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
    </div>
  );
}
