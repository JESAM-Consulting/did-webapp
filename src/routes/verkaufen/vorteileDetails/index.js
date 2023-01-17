import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ApiGet } from "../../../helpers/API/ApiData";
import "./vorteileDetails.scss";
export default function VorteileDetails() {
  const [informationData, setInformationData] = useState({});

  const getInformationData = async () => {
    await ApiGet(`static/get-all-static`)
      .then((res) => {
        console.log("informationData", res);
        setInformationData(res?.data?.payload?.getStatic);
      })
      .catch((err) => {
        console.log("erre", err);
      });
  };

  useEffect(() => {
    getInformationData();
  }, []);
  console.log("informationDatafirst", informationData);
  return (
    <div>
      <div className="vorteile-details-all-content-alignment">
        <div className="property-details-right-button-alignment">
          <NavLink to="/suchauftrag-step">
            <button>Anfrage für Verkaufsauftrag</button>
          </NavLink>
        </div>
        <div className="container-md-15" id="verkaufen">
          <div className="section-title">
            {informationData?.length > 0 &&
              informationData?.map((item) => {
                return (
                  <>
                    {item?._id === "639c3a859549e9b6b7aacda3" && (
                      <>
                        <h5>{item?.title}</h5>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        ></div>
                      </>
                    )}
                  </>
                );
              })}

            <h6>
              Wenn Sie verkaufen oder vermieten möchten und dabei Unterstützung
              benötigen, sind Sie bei uns richtig. Bringen Sie Ihre Immobilie
              nicht nur auf den Markt. Verschaffen Sie ihr die Aufmerksamkeit,
              die sie verdient.Der Deutsche Immobilien Dienst ist der richtige
              Ansprechpartner für alle, die einen unvergleichlichen Service
              suchen. Wir gehören zu den besten Maklern der Branche, die mit
              unvergleichlicher Aufmerksamkeit für Stil und Details arbeiten.
              Wir kümmern uns um Ihre Immobilie - vom Inserat bis zur
              Durchführung der Besichtigungen.
            </h6>
          </div>
          <div className="service-title-alignment">
            <p>SERVICES - Immobilienvermittlung erfolgsabhängig</p>
            <p>Verkauf mit DID</p>
          </div>
          <div className="all-service-details-alignment-space">
            <div className="service-all-details-alignment">
              <div className="service-grid">
                <div className="service-grid-items">
                  {informationData?.length > 0 &&
                    informationData?.map((item) => {
                      console.log("first", item);
                      return (
                        <>
                          {item?._id === "639c3e359549e9b6b7aacdc5" && (
                            <>
                              <h5>{item?.title}</h5>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item?.description,
                                }}
                              ></div>
                            </>
                          )}
                        </>
                      );
                    })}
                </div>
                <div className="service-grid-items">
                  <div className="icon"></div>
                </div>
              </div>
              <div className="service-grid">
                <div className="service-grid-items">
                  {informationData?.length > 0 &&
                    informationData?.map((item) => {
                      console.log("first", item);
                      return (
                        <>
                          {item?._id === "639c3ef19549e9b6b7aacdd3" && (
                            <>
                              <h5>{item?.title}</h5>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item?.description,
                                }}
                              ></div>
                            </>
                          )}
                        </>
                      );
                    })}
                </div>
                <div className="service-grid-items">
                  <div className="icon"></div>
                </div>
              </div>
              <div className="service-grid">
                <div className="service-grid-items">
                  {informationData?.length > 0 &&
                    informationData?.map((item) => {
                      console.log("first", item);
                      return (
                        <>
                          {item?._id === "639c3f2b9549e9b6b7aacddb" && (
                            <>
                              <h5>{item?.title}</h5>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item?.description,
                                }}
                              ></div>
                            </>
                          )}
                        </>
                      );
                    })}
                </div>
                <div className="service-grid-items">
                  <div className="icon"></div>
                </div>
              </div>
              <div className="service-grid">
                <div className="service-grid-items">
                  {informationData?.length > 0 &&
                    informationData?.map((item) => {
                      console.log("first", item);
                      return (
                        <>
                          {item?._id === "639c3f5f9549e9b6b7aacde3" && (
                            <>
                              <h5>{item?.title}</h5>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item?.description,
                                }}
                              ></div>
                            </>
                          )}
                        </>
                      );
                    })}
                </div>
                <div className="service-grid-items">
                  <div className="icon"></div>
                </div>
              </div>
            </div>
            <div className="service-title-alignment">
              <p>SERVICES - Immobilienvermittlung provisionsfrei</p>
              <p>Verkauf mit DID</p>
            </div>
            <div className="service-all-details-alignment">
              <div className="service-grid">
                <div className="service-grid-items">
                  {informationData?.length > 0 &&
                    informationData?.map((item) => {
                      console.log("first", item);
                      return (
                        <>
                          {item?._id === "639c40a29549e9b6b7aacdef" && (
                            <>
                              <h5>{item?.title}</h5>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item?.description,
                                }}
                              ></div>
                            </>
                          )}
                        </>
                      );
                    })}
                </div>
                <div className="service-grid-items">
                  <div className="icon"></div>
                </div>
              </div>
              <div className="service-grid">
                <div className="service-grid-items">
                  {informationData?.length > 0 &&
                    informationData?.map((item) => {
                      console.log("first", item);
                      return (
                        <>
                          {item?._id === "639c40eb9549e9b6b7aacdf7" && (
                            <>
                              <h5>{item?.title}</h5>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item?.description,
                                }}
                              ></div>
                            </>
                          )}
                        </>
                      );
                    })}
                </div>
                <div className="service-grid-items">
                  <div className="icon"></div>
                </div>
              </div>
              <div className="service-grid">
                <div className="service-grid-items">
                  {informationData?.length > 0 &&
                    informationData?.map((item) => {
                      console.log("first", item);
                      return (
                        <>
                          {item?._id === "639c411f9549e9b6b7aacdff" && (
                            <>
                              <h5>{item?.title}</h5>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item?.description,
                                }}
                              ></div>
                            </>
                          )}
                        </>
                      );
                    })}
                </div>
                <div className="service-grid-items">
                  <div className="icon"></div>
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/suchauftrag-step">
            <div className="voreteile-last-button-details-alignment">
              <button>Anfrage für Verkaufsauftrag</button>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
