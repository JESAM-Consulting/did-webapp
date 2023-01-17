import React, { useEffect, useState } from "react";
import "./Unternehmen.scss";
import KaufunBanner from "../../assets/images/unternehmen-banner.png";
import KaufunBanner2 from "../../assets/images/KaufunBanner2.png";
import PageArrow from "../../assets/icons/full-page-arrow.svg";
import HilfreicheForm from "../kaufen/hilfreicheForm";
import { ApiGet } from "../../helpers/API/ApiData";
import { NavLink } from "react-router-dom";

export default function Unternehmen() {
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const getCompanyData = async () => {
    await ApiGet(`company/get-company`)
      .then((res) => {
        console.log("first", res);
        setCompanyData(
          res?.data?.payload?.getCompany?.filter((item) => {
            return item?.isActive === true;
          })
        );
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getCompanyData();
  }, []);

  return (
    <div>
      <div className="unternehmen-new-hero-section-content-alignment">
        <div className="grid">
          <div className="grid-items">
            <div className="center-button-text-alignment-global-hero">
              {/* <div>
                <a href="#transparent">
                  <p>Jetzt mehr erfahren</p>
                  <div className="page-arrow-alignment">
                    <img src={PageArrow} alt="PageArrow" />
                  </div>
                </a>
              </div> */}
            </div>
          </div>
          <div className="grid-items mobile-view-show ">
            <img src={KaufunBanner} alt="KaufunBanner" />
            <img src={KaufunBanner2} alt="KaufunBanner2" />
          </div>
        </div>
        <div className="content-top-alignment">
          <div className="container-md">
            <div className="white-box">
              <h1>Deutscher Immobilen Dienst </h1>
              <h2>Unternehmen</h2>
              <p>
                Kompetenz und Zuverlässigkeit – das sind Werte, auf denen der{" "}
              </p>
              <p>Deutsche Immobilien Dienst aufbaut.</p>
              <p>
                Als Makler und Property Manager haben wir es uns zur Aufgabe{" "}
              </p>
              <p>gemacht, die Vorstellungen unserer Kunden umzusetzen.</p>
              <p>Seit über 25 Jahren begleiten wir als inhabergeführtes </p>
              <p>Unterenehmen vielzahlige Immobilienprojekte. </p>
              <p>Jedes einzelne Projekt so, als wäre es das Eigene. </p>
              <h4>
                Kompetenz und Zuverlässigkeit – das sind Werte, auf denen der
                Deutsche Immobilien Dienst aufbaut. Als Makler und Property
                Manager haben wir es uns zur Aufgabe gemacht, die Vorstellungen
                unserer Kunden umzusetzen.Seit über 25 Jahren begleiten wir als
                inhabergeführtes Unterenehmen vielzahlige Immobilienprojekte.
                Jedes einzelne Projekt so, als wäre es das Eigene.
              </h4>
              <NavLink to="/suchauftrag-step">
                <button>Anfrage starten</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div id="transparent" className="container-md-14">
        <div className="verkauf-all-content-alignment">
          <div className="text-grid">
            <div className="text-grid-items">
              <h2>
                Deutscher Immobilien Dienst <br />
                <span>Transparent und Vertantwortungsvoll</span>
              </h2>
            </div>
            <div className="text-grid-items"></div>
          </div>
        </div>
      </div>
      <div className="container-md-14">
        <div className="unternehmen-all-content-alignment-for-page">
          <div className="left-content">
            <NavLink to="/verkaufen">
              <span>VERKAUFEN</span>
            </NavLink>
            <NavLink to="/kaufen">
              <span>KAUFEN</span>
            </NavLink>
            <NavLink to="/property-page">
              <span>PROPERTY MANAGEMENT</span>
            </NavLink>
          </div>
          <div className="right-content">
            <a href="tel:0421 / 1 67 61 80-0">
              <button>0421 / 1 67 61 80-0</button>
            </a>
          </div>
        </div>
      </div>
      <div className="team-section-all-content-alignment">
        <div className="container-md-17">
          <div className="all-grid-content-alignment">
            {companyData?.slice(0, 4).map((item, index) => {
              return (
                <div className="grid">
                  <div className="grid-items">
                    <div className="image-style">
                      <img src={item?.userImage[0]} alt="TeamImage" />
                    </div>
                  </div>
                  <div className="grid-items">
                    <h6>{item?.name}</h6>
                    <h5>{item?.occupationRole}</h5>
                    <p>{item?.description}</p>
                    <span>Telefon: {item?.phone}</span>
                    <span>E-Mail: {item?.email}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="contact-us">
        <HilfreicheForm />
      </div>
    </div>
  );
}
