import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.index);
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
            See synonyms
          </a>
        </div>
        <div className="collapse" id={name}>
          <div className="card card-body">
            <ul>
              {props.synonyms.map(function (synonym, index) {
                return (
                  <em>
                    <li className="synonym" key={index}>
                      {synonym}
                      {"  "}
                    </li>
                  </em>
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
