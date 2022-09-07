import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  console.log(props);
  if (props.results) {
    return (
      <div className="Results">
        <span className="word">
          <strong>{props.results.word}</strong>
        </span>

        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <span key={index}>
              <Phonetic phonetic={phonetic} />
            </span>
          );
        })}
        <br />
        <br />

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
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
