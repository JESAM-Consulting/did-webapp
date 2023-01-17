import React from "react";
import "./weitereSection.scss";
export default function WeitereSection(props) {
  console.log("firstprops", props);
  return (
    <div>
      <div className="weiter-section-all-content-alignment">
        <div className="container-md-12">
          <div className="section-title">
            <h1>
              Weitere Impressionen <span>& Bilder</span>
            </h1>
          </div>
          <div className="first-image">
            <img src={props?.props?.location?.state?.propertyImage[0]} alt="MainImage" />
          </div>
          <div className="image-grid">
            {props?.props?.location?.state?.propertyImage?.map(
              (item, index) => {
                return (
                  <div className="image-grid-items">
                    <img src={item} alt="childImage" />
                  </div>
                );
              }
            )}
          </div>
          <div className="button-right-content-alignment">
            <button>weitere Bilder</button>
          </div>
        </div>
      </div>
    </div>
  );
}
