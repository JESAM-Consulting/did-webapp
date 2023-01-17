import React, { useEffect } from "react";
import HilfreicheForm from "../kaufen/hilfreicheForm";
import "./verkaufen.scss";
import VerkaufenBanner from "./verkaufenBanner/index";
import VorteileDetails from "./vorteileDetails";
export default function Verkaufen() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <VerkaufenBanner />
      <VorteileDetails />
      <div className="contact-us-verkaufen">
        <HilfreicheForm />
      </div>
    </div>
  );
}
