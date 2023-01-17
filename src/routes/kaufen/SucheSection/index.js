import React, { useEffect, useState } from "react";
import "./SucheSection.scss";
import ShareIcon from "../../../assets/icons/share-icon.svg";
import HeartIcon from "../../../assets/icons/heart.svg";
import { ApiGet } from "../../../helpers/API/ApiData";
import useDebounce from "../../hooks/useDebounce";
import { NavLink, useHistory } from "react-router-dom";
import moment from "moment/moment";
export default function Index() {
  const [propertyData, setPropertyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState();
  const debouncedSearchTerm = useDebounce(searchTerm, 800);

  const history = useHistory();
  const getPropertyData = async () => {
    // setIsLoading(true);
    await ApiGet(`property/get-property?letter=${searchTerm ?? ""}`)
      .then((res) => {
        console.log("getpropertydata", res);
        setPropertyData(
          res?.data?.payload?.getProperty?.filter(
            (item) => item?.isActive === true
          )
        );
        // setIsLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        // setIsLoading(false);
      });
  };

  useEffect(() => {
    getPropertyData();
  }, [debouncedSearchTerm, searchTerm]);

  const handleDetails = (item) => {
    history.push({
      pathname: "/detail-seite",
      state: item,
    });
  };

  const handleSearch = (e) => {
    console.log("firsteeeeeeeee", e.target.value);
    setSearchTerm(e.target.value);
  };

  console.log("propertyData", propertyData);
  return (
    <div>
      <div id="seek" className="suche-section-all-content-alignment">
        <div className="suche-section-right-button-alignment">
          <NavLink to="/steper">
            <button>Anfrage zum Immobilien Protfolio</button>
          </NavLink>
        </div>
        <div className="container-md-6">
          <div className="section-alignment-for-page">
            <div className="section-title">
              <input
                type="text"
                style={{ borderRadius: "9999px" }}
                className={`form-control form-control-lg form-control-solid `}
                name="search"
                onChange={(e) => handleSearch(e)}
                placeholder="Suchen…"
              />
            </div>
            <div className="all-card-content-alignment">
              <div className="card-grid">
                {propertyData?.slice(0, 9)?.map((item, index) => {
                  return (
                    <div
                      className="card-grid-items"
                      onClick={() => handleDetails(item)}
                    >
                      <div className="first-header-alignment">
                        <div className="all-icon-right-alignment">
                          <img src={ShareIcon} alt="ShareIcon" />
                          <img src={HeartIcon} alt="HeartIcon" />
                        </div>
                        <span>
                          {moment(item?.createdAt).format("MMMM YYYY")}
                        </span>
                        <h2>{item?.propertyName}</h2>
                        <p>
                          {item?.city}, {item?.state}
                        </p>
                      </div>
                      <div className="sec-grid">
                        <div className="sec-grid-items">
                          <p>KAUFPREIS</p>
                          <span>€{item?.price}m</span>
                        </div>
                        <div className="sec-grid-items">
                          <p>WEITERE INFORMATIONEN</p>
                          <h2>
                            {item?.areaSize}m2 - {item?.roomCount} Zimmer
                          </h2>
                        </div>
                      </div>
                      <div className="dummy-card-image">
                        <img src={item?.propertyImage[0]} alt="DummyImage" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {isLoading && (
          <div className="loader">
            <span></span>
          </div>
        )}
      </div>
    </div>
  );
}
