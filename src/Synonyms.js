import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  let name = `collapseSynonym${props.index}`;
  let href = `#${name}`;
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <div>
          <a
            className="synonyms-button"
            data-bs-toggle="collapse"
            href={href}
            role="button"
            aria-expanded="false"
            aria-controls={name}
          >
            <strong>See synonyms</strong>
          </a>
        </div>
        <div className="collapse" id={name}>
          <div className="card card-body">
            <ul>
              {props.synonyms.map(function (synonym, index) {
                return (
                  <li className="synonym" key={index}>
                    <em>{synonym}</em>
                    {"  "}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
