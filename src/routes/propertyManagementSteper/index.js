import React, { useEffect, useState } from "react";
import ProgressSteper from "../../components/progressSteper";
import TenStep from "../steper/tenStep";
import FirstStep from "./firstStep";
import FiveStep from "./fiveStep";
import ForthStep from "./forthStep";
import "./propertyManagementSteper.scss";
import PropertyStep from "./PropertyStep";
import SecStep from "./secStep";
import ThreeStep from "./threeStep";
export default function PropertyManagementSteper() {
  const [inputValue, setInputValue] = useState([]);
  const [errors, setErrors] = useState([]);
  const [step, setStep] = useState(1);
  const [width, setWidth] = useState(20);

  console.log("first step", inputValue);
  console.log("firststep", step);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <div className="property-management-steper-background-color">
        <div className="container-md-13">
          <div className="box-center-alignment">
            <div>
              <div>
                {step === 1 && (
                  <FirstStep
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    step={step}
                    setStep={setStep}
                    setErrors={setErrors}
                    errors={errors}
                    width={width}
                    setWidth={setWidth}
                  />
                )}
                {inputValue?.manageProperty != "Business" && step === 2 && (
                  <SecStep
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    step={step}
                    setStep={setStep}
                    setErrors={setErrors}
                    errors={errors}
                    width={width}
                    setWidth={setWidth}
                  />
                )}
                {inputValue?.manageProperty === "Business" && step === 3 && (
                  <PropertyStep
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    step={step}
                    setStep={setStep}
                    setErrors={setErrors}
                    errors={errors}
                    width={width}
                    setWidth={setWidth}
                  />
                )}

                {step === 4 && (
                  <ThreeStep
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    step={step}
                    setStep={setStep}
                    setErrors={setErrors}
                    errors={errors}
                    width={width}
                    setWidth={setWidth}
                  />
                )}
                {step === 5 && (
                  <ForthStep
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    step={step}
                    setStep={setStep}
                    setErrors={setErrors}
                    errors={errors}
                    width={width}
                    setWidth={setWidth}
                  />
                )}
                {step === 6 && (
                  <FiveStep
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    step={step}
                    setStep={setStep}
                    setErrors={setErrors}
                    errors={errors}
                    width={width}
                    setWidth={setWidth}
                  />
                )}
              </div>
              {step === 7 && <TenStep />}
              <div>
                <ProgressSteper width={width} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
