import React from "react";
import "./immobilienSlider.scss";
import Slider from "react-slick";
import CardImage from "../../../../assets/images/card-image.png";
import LeftIcon from "../../../../assets/icons/white-left.svg";
import RightIcon from "../../../../assets/icons/white-right.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className="right-icon-alignment">
      <img src={RightIcon} alt="RightIcon" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className="left-icon-alignment">
      <img src={LeftIcon} alt="LeftIcon" />
    </div>
  );
}

export default function ImmobilienSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.9,
    centermode: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 250,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 210,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div>
      <div className="immobilien-slider-section-alignment">
        <Slider {...settings}>
          <div>
            <div className="main-card">
              <div className="card-header">
                <span>NOVEMBER 2022</span>
                <p>La Residencia</p>
                <h6>Bremen, Überseestadt</h6>
              </div>
              <div className="card-grid">
                <div className="card-grid-items">
                  <span>KAUFPREIS</span>
                  <p>€1,8m</p>
                </div>
                <div className="card-grid-items">
                  <span>WEITERE INFROMATIONEN</span>
                  <p>180m2 - 5 Zimmer</p>
                </div>
              </div>
              <div className="card-image">
                <img src={CardImage} alt="CardImage" />
              </div>
            </div>
          </div>
          <div>
            <div className="main-card">
              <div className="card-header">
                <span>NOVEMBER 2022</span>
                <p>La Residencia</p>
                <h6>Bremen, Überseestadt</h6>
              </div>
              <div className="card-grid">
                <div className="card-grid-items">
                  <span>KAUFPREIS</span>
                  <p>€1,8m</p>
                </div>
                <div className="card-grid-items">
                  <span>WEITERE INFROMATIONEN</span>
                  <p>180m2 - 5 Zimmer</p>
                </div>
              </div>
              <div className="card-image">
                <img src={CardImage} alt="CardImage" />
              </div>
            </div>
          </div>
          <div>
            <div className="main-card">
              <div className="card-header">
                <span>NOVEMBER 2022</span>
                <p>La Residencia</p>
                <h6>Bremen, Überseestadt</h6>
              </div>
              <div className="card-grid">
                <div className="card-grid-items">
                  <span>KAUFPREIS</span>
                  <p>€1,8m</p>
                </div>
                <div className="card-grid-items">
                  <span>WEITERE INFROMATIONEN</span>
                  <p>180m2 - 5 Zimmer</p>
                </div>
              </div>
              <div className="card-image">
                <img src={CardImage} alt="CardImage" />
              </div>
            </div>
          </div>
          <div>
            <div className="main-card">
              <div className="card-header">
                <span>NOVEMBER 2022</span>
                <p>La Residencia</p>
                <h6>Bremen, Überseestadt</h6>
              </div>
              <div className="card-grid">
                <div className="card-grid-items">
                  <span>KAUFPREIS</span>
                  <p>€1,8m</p>
                </div>
                <div className="card-grid-items">
                  <span>WEITERE INFROMATIONEN</span>
                  <p>180m2 - 5 Zimmer</p>
                </div>
              </div>
              <div className="card-image">
                <img src={CardImage} alt="CardImage" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
