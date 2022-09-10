import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos row">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active row">
              <img
                src={props.photos[0].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
              <img
                src={props.photos[1].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
              <img
                src={props.photos[2].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
              <img
                src={props.photos[3].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
            </div>
            <div className="carousel-item row">
              <img
                src={props.photos[4].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
              <img
                src={props.photos[5].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
              <img
                src={props.photos[6].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
              <img
                src={props.photos[7].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
            </div>
            <div className="carousel-item row">
              <img
                src={props.photos[8].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
              <img
                src={props.photos[9].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
              <img
                src={props.photos[10].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
              <img
                src={props.photos[11].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
            </div>
            <div className="carousel-item row">
              <img
                src={props.photos[12].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
              <img
                src={props.photos[13].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
              <img
                src={props.photos[14].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
              <img
                src={props.photos[15].src.tiny}
                className="photo w-20 col-3"
                alt="rendered-pic"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
