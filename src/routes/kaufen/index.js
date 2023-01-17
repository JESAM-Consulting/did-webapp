import React from "react";
import Deutscher from "./deutscher";
import HilfreicheForm from "./hilfreicheForm";
import "./kaufen.scss";
import KaufenHeroSection from "./kaufenHeroSection";
import SucheSection from "./SucheSection";
export default function Kaufen() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div>
      <KaufenHeroSection />
      <Deutscher />
      <SucheSection />
      <HilfreicheForm />
    </div>
  );
}
