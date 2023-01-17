import React, { useEffect, useState } from "react";
import ProgressSteper from "../../components/progressSteper";
import EightStep from "./eightStep";
import FirstSteper from "./firstSteper";
import FiveStep from "./fiveStep";
import ForthStep from "./forthStep";
import NineStep from "./nineStep";
import RangeSliderThree from "./rangeSliderThree";
import RangeSliderTwo from "./rangeSliderTwo";
import SecSteper from "./SecSteper";
import SevenStep from "./sevenStep";
import SixSteper from "./sixSteper";
import "./steper.scss";
import TenStep from "./tenStep";
import ThirdStep from "./thirdStep";

export default function Steper() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [openTab, setOpenTab] = useState(1);
  const [inputPowerCon, setInputPowerCon] = useState({});
  const [width, setWidth] = useState(9);
  const [errors, setErrors] = useState([]);

  console.log("inputPowerCon", inputPowerCon);

  return (
    <div>
      <div className="main-steper-background-color">
        <div className="container-md-13">
          <div className="box-center-alignment">
            <div>
              <div>
                {openTab === 1 && (
                  <FirstSteper
                    openTab={openTab}
                    setOpenTab={setOpenTab}
                    setInputPowerCon={setInputPowerCon}
                    inputPowerCon={inputPowerCon}
                    setErrors={setErrors}
                    errors={errors}
                    width={width}
                    setWidth={setWidth}
                  />
                )}
              </div>
              <div>
                {openTab === 2 && (
                  <SecSteper
                    openTab={openTab}
                    setOpenTab={setOpenTab}
                    setInputPowerCon={setInputPowerCon}
                    inputPowerCon={inputPowerCon}
                    setErrors={setErrors}
                    errors={errors}
                    width={width}
                    setWidth={setWidth}
                  />
                )}
              </div>
              {openTab === 3 && (
                <ThirdStep
                  openTab={openTab}
                  setOpenTab={setOpenTab}
                  setInputPowerCon={setInputPowerCon}
                  inputPowerCon={inputPowerCon}
                  setErrors={setErrors}
                  errors={errors}
                  width={width}
                  setWidth={setWidth}
                />
              )}
              {openTab === 4 && (
                <RangeSliderTwo
                  openTab={openTab}
                  setOpenTab={setOpenTab}
                  setInputPowerCon={setInputPowerCon}
                  inputPowerCon={inputPowerCon}
                  setErrors={setErrors}
                  errors={errors}
                  width={width}
                  setWidth={setWidth}
                />
              )}
              {openTab === 5 && (
                <RangeSliderThree
                  openTab={openTab}
                  setOpenTab={setOpenTab}
                  setInputPowerCon={setInputPowerCon}
                  inputPowerCon={inputPowerCon}
                  setErrors={setErrors}
                  errors={errors}
                  width={width}
                  setWidth={setWidth}
                />
              )}
              {openTab === 6 && (
                <ForthStep
                  openTab={openTab}
                  setOpenTab={setOpenTab}
                  setInputPowerCon={setInputPowerCon}
                  inputPowerCon={inputPowerCon}
                  setErrors={setErrors}
                  errors={errors}
                  width={width}
                  setWidth={setWidth}
                />
              )}
              {openTab === 7 && (
                <FiveStep
                  openTab={openTab}
                  setOpenTab={setOpenTab}
                  setInputPowerCon={setInputPowerCon}
                  inputPowerCon={inputPowerCon}
                  setErrors={setErrors}
                  errors={errors}
                  width={width}
                  setWidth={setWidth}
                />
              )}
              {openTab === 8 && (
                <SixSteper
                  openTab={openTab}
                  setOpenTab={setOpenTab}
                  setInputPowerCon={setInputPowerCon}
                  inputPowerCon={inputPowerCon}
                  setErrors={setErrors}
                  errors={errors}
                  width={width}
                  setWidth={setWidth}
                />
              )}
              {openTab === 9 && (
                <SevenStep
                  openTab={openTab}
                  setOpenTab={setOpenTab}
                  setInputPowerCon={setInputPowerCon}
                  inputPowerCon={inputPowerCon}
                  setErrors={setErrors}
                  errors={errors}
                  width={width}
                  setWidth={setWidth}
                />
              )}
              {openTab === 10 && (
                <EightStep
                  openTab={openTab}
                  setOpenTab={setOpenTab}
                  setInputPowerCon={setInputPowerCon}
                  inputPowerCon={inputPowerCon}
                  setErrors={setErrors}
                  errors={errors}
                  width={width}
                  setWidth={setWidth}
                />
              )}
              {openTab === 11 && (
                <NineStep
                  openTab={openTab}
                  setOpenTab={setOpenTab}
                  setInputPowerCon={setInputPowerCon}
                  inputPowerCon={inputPowerCon}
                  setErrors={setErrors}
                  errors={errors}
                  width={width}
                  setWidth={setWidth}
                />
              )}
              {openTab === 12 && <TenStep />}

              {/* common components */}
              <ProgressSteper width={width} />
              {/* common components */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
