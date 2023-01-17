import React, { useEffect, useState } from "react";
import ProgressSteper from "../../components/progressSteper";
import TenStep from "../steper/tenStep";
import SuchauftragfirstStep from "./suchauftragfirstStep";
import SuchauftragFiveStep from "./suchauftragFiveStep";
import SuchauftragFiveStepRentalPrice from "./suchauftragFiveStepRentalPrice";
import SuchauftragFourStep from "./suchauftragFourStep";
import SuchauftragFourStepRooms from "./suchauftragFourStepRooms";
import SuchauftragNineStep from "./SuchauftragNineStep";
import SuchauftragSecStep from "./suchauftragSecStep";
import SuchauftragSevenStep from "./suchauftragSevenStep";
import SuchauftragSixStep from "./suchauftragSixStep";
import "./suchauftragStep.scss";
import SuchauftragThreeStep from "./suchauftragThreeStep";
import SuchauftragThreeStepRent from "./suchauftragThreeStepRent/index";
export default function SuchauftragStep() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [searchRequestStep, setSearchRequestStep] = useState({});
  const [count, setCount] = useState(1);
  const [width, setWidth] = useState(12);
  const [errors, setErrors] = useState({});
  console.log("errors", errors);
  console.log("searchRequestStep", searchRequestStep);
  console.log("searchRequestStepcount", count);
  return (
    <div>
      <div className="suchauftrag-steper-background-color">
        <div className="container-md-13">
          <div className="box-center-alignment">
            <div>
              <div>
                {count === 1 && (
                  <SuchauftragfirstStep
                    setSearchRequestStep={setSearchRequestStep}
                    searchRequestStep={searchRequestStep}
                    setCount={setCount}
                    count={count}
                    setWidth={setWidth}
                    width={width}
                    setErrors={setErrors}
                    errors={errors}
                  />
                )}
                {count === 2 && (
                  <SuchauftragSecStep
                    setSearchRequestStep={setSearchRequestStep}
                    searchRequestStep={searchRequestStep}
                    setCount={setCount}
                    count={count}
                    setWidth={setWidth}
                    width={width}
                    setErrors={setErrors}
                    errors={errors}
                  />
                )}

                {searchRequestStep?.property === "Kaufen" && count === 3 && (
                  <SuchauftragThreeStep
                    setSearchRequestStep={setSearchRequestStep}
                    searchRequestStep={searchRequestStep}
                    setCount={setCount}
                    count={count}
                    setWidth={setWidth}
                    width={width}
                    setErrors={setErrors}
                    errors={errors}
                  />
                )}
                {searchRequestStep?.property === "Mieten" && count === 4 && (
                  <SuchauftragThreeStepRent
                    setSearchRequestStep={setSearchRequestStep}
                    searchRequestStep={searchRequestStep}
                    setCount={setCount}
                    count={count}
                    setWidth={setWidth}
                    width={width}
                    setErrors={setErrors}
                    errors={errors}
                  />
                )}
                {count === 5 && (
                  <SuchauftragFourStep
                    setSearchRequestStep={setSearchRequestStep}
                    searchRequestStep={searchRequestStep}
                    setCount={setCount}
                    count={count}
                    setWidth={setWidth}
                    width={width}
                    setErrors={setErrors}
                    errors={errors}
                  />
                )}
                {count === 6 && (
                  <SuchauftragFourStepRooms
                    setSearchRequestStep={setSearchRequestStep}
                    searchRequestStep={searchRequestStep}
                    setCount={setCount}
                    count={count}
                    setWidth={setWidth}
                    width={width}
                    setErrors={setErrors}
                    errors={errors}
                  />
                )}
                {searchRequestStep?.property === "Kaufen" && count === 7 && (
                  <SuchauftragFiveStep
                    setSearchRequestStep={setSearchRequestStep}
                    searchRequestStep={searchRequestStep}
                    setCount={setCount}
                    count={count}
                    setWidth={setWidth}
                    width={width}
                    setErrors={setErrors}
                    errors={errors}
                  />
                )}
                {searchRequestStep?.property === "Mieten" && count === 8 && (
                  <SuchauftragFiveStepRentalPrice
                    setSearchRequestStep={setSearchRequestStep}
                    searchRequestStep={searchRequestStep}
                    setCount={setCount}
                    count={count}
                    setWidth={setWidth}
                    width={width}
                    setErrors={setErrors}
                    errors={errors}
                  />
                )}
                {count === 9 && (
                  <SuchauftragSixStep
                    setSearchRequestStep={setSearchRequestStep}
                    searchRequestStep={searchRequestStep}
                    setCount={setCount}
                    count={count}
                    setWidth={setWidth}
                    width={width}
                    setErrors={setErrors}
                    errors={errors}
                  />
                )}
                {count === 10 && (
                  <SuchauftragSevenStep
                    setSearchRequestStep={setSearchRequestStep}
                    searchRequestStep={searchRequestStep}
                    setCount={setCount}
                    count={count}
                    setWidth={setWidth}
                    width={width}
                    setErrors={setErrors}
                    errors={errors}
                  />
                )}
                {count === 11 && (
                  <SuchauftragNineStep
                    setSearchRequestStep={setSearchRequestStep}
                    searchRequestStep={searchRequestStep}
                    setCount={setCount}
                    count={count}
                    setWidth={setWidth}
                    width={width}
                    setErrors={setErrors}
                    errors={errors}
                  />
                )}
                {count === 12 && <TenStep />}
              </div>
              <ProgressSteper width={width} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
