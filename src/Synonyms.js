import React from "react";

export default function Synonyms(props) {
  console.log(props.index);
  let name = `collapseSynonym${props.index}`;
  let href = `#${name}`;
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <div>
          <a
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href={href}
            role="button"
            aria-expanded="false"
            aria-controls={name}
          >
            Synonyms
          </a>
        </div>
        <div className="collapse" id={name}>
          <div className="card card-body">
            <ul>
              {props.synonyms.map(function (synonym, index) {
                return <li key={index}>{synonym}</li>;
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
