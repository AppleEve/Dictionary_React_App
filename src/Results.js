import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";
import Photos from "./Photos";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Result">
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
        <Photos photos={props.photos} />
        <br />
        <div className="Results">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
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
