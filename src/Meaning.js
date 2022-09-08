import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>
        <strong>{props.meaning.partOfSpeech}</strong>
      </h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="definitions" key={index}>
            <div>
              {index + 1}. {definition.definition}
              <br />
            </div>
            <Example example={definition.example} index={index} />

            <Synonyms synonyms={definition.synonyms} index={index} />
          </div>
        );
      })}
    </div>
  );
}
