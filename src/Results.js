import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  console.log(props);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>

        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        <br />
        <p>
          <a
            className="definition-button"
            data-bs-toggle="collapse"
            href="#collapseMeanings"
            role="button"
            aria-expanded="false"
            aria-controls="collapseMeanings"
          >
            Definitions
          </a>
        </p>

        <div className="collapse" id="collapseMeanings">
          <div className="card card-body">
            {props.results.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="emptyDiv">
        <br />
      </div>
    );
  }
}
