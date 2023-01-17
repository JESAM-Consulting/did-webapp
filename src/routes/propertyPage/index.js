import React, { useEffect } from "react";
import HilfreicheForm from "../kaufen/hilfreicheForm";
import Lizenzpartner from "./lizenzpartner";
import PropertyBanner from "./propertyBanner";
import PropertyDetails from "./propertyDetails";
import "./propertyPage.scss";
export default function PropertyPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <PropertyBanner />
      <PropertyDetails />
      <Lizenzpartner />
      <div className="contact-us-verkaufen">
        <HilfreicheForm />
      </div>
    </div>
  );
}
