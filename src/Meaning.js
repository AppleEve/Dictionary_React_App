import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>
        <strong>{props.meaning.partOfSpeech}</strong>
      </h4>
      {props.meaning.definitions.map(function (definition, index) {
        let name = `collapseMeaning${index}`;
        let href = `#${name}`;
        return (
          <div key={index}>
            <div>
              {definition.definition}
              <br />

              <div>
                <a
                  className="btn btn-primary"
                  data-bs-toggle="collapse"
                  href={href}
                  role="button"
                  aria-expanded="false"
                  aria-controls={name}
                >
                  Example
                </a>
              </div>

              <div className="collapse" id={name}>
                <div className="card card-body">
                  <em>{definition.example}</em>
                </div>
              </div>
            </div>

            <Synonyms synonyms={definition.synonyms} index={index} />
          </div>
        );
      })}
    </div>
  );
}
