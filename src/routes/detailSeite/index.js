import React from "react";
import HilfreicheForm from "../kaufen/hilfreicheForm";
import "./detailSeite.scss";
import DetailSeiteHeroSection from "./detailSeiteHeroSection";
import DetailsSection from "./detailsSection";
import FaktenSection from "./faktenSection";
import WeitereSection from "./weitereSection";
import ZahlenContent from "./zahlenContent";
export default function DetailSeite(props) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div>
      <DetailSeiteHeroSection props={props} />
      <DetailsSection props={props} />
      <ZahlenContent props={props} />
      <FaktenSection props={props} />
      <WeitereSection props={props} />
      <div className="contact-us">
        <HilfreicheForm />
      </div>
    </div>
  );
}
