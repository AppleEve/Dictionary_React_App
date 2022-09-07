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
          <div className="definitions" key={index}>
            <div>
              {index + 1}. {definition.definition}
              <br />
              <br />
              <div>
                <a
                  className="example-button"
                  data-bs-toggle="collapse"
                  href={href}
                  role="button"
                  aria-expanded="false"
                  aria-controls={name}
                >
                  See example
                </a>
              </div>
              <div className="collapse" id={name}>
                <div className="examples card card-body">
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
