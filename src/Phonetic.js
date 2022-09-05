import React from "react";
import "./Phonetic.css";

import AudioPlayer from "./AudioPlayer";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="PhoneticAudio">
        <AudioPlayer audio={props.phonetic.audio} />
      </span>
      <span className="PhoneticText">{props.phonetic.text}</span>
    </div>
  );
}
