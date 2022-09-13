import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos row">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
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
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
