import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos row">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.tiny}
                  alt="word-pic"
                  className="img-fluid"
                />{" "}
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
