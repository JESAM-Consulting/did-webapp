import React from "react";
import HeroBanner from "./heroBanner";
import "./home.scss";
import ImmobilienSection from "./immobilienSection";
import LocationSection from "./locationSection";
import WennSection from "./wennSection";
import Willkommen from "./willkommen";
export default function Home() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div>
      <HeroBanner />
      <Willkommen />
      <ImmobilienSection />
      <WennSection />
      <LocationSection />
    </div>
  );
}
