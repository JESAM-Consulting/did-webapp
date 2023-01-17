import React, { useEffect, useState } from "react";
import ProgressSteper from "../../components/progressSteper";
import TenStep from "../steper/tenStep";
import LizenzpartnerFirstStep from "./lizenzpartnerFirstStep";
import LizenzpartnerFiveStep from "./lizenzpartnerFiveStep";
import LizenzpartnerFourStep from "./lizenzpartnerFourStep";
import LizenzpartnerpropertyStep from "./lizenzpartnerpropertyStep";
import LizenzpartnerSecStep from "./lizenzpartnerSecStep";
import "./lizenzpartnerStep.scss";
import LizenzpartnerThreeStep from "./lizenzpartnerThreeStep";
export default function LizenzpartnerStep() {
  const [inputValue, setInputValue] = useState([]);
  const [errors, setErrors] = useState([]);
  const [step, setStep] = useState(1);
  const [width, setWidth] = useState(20);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  console.log("first step", inputValue);
  console.log("first width", width);
  return (
    <div>
      <div className="property-management-steper-background-color">
        <div className="container-md-13">
          <div className="box-center-alignment">
            <div>
              <div>
                {step === 1 && (
                  <LizenzpartnerFirstStep
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
                {inputValue?.manageProperty != "Property" && step === 2 && (
                  <LizenzpartnerSecStep
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
                {inputValue?.manageProperty === "Property" && step === 3 && (
                  <LizenzpartnerpropertyStep
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
                  <LizenzpartnerThreeStep
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
                  <LizenzpartnerFourStep
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
                  <LizenzpartnerFiveStep
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
                {step === 7 && <TenStep />}
              </div>
              <ProgressSteper width={width} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
