import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="PhoneticText">{props.phonetic.text}</div>
    </div>
  );
}
