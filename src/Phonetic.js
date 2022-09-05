import React from "react";

import AudioPlayer from "./AudioPlayer";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="PhoneticText">{props.phonetic.text}</div>
      <div className="PhoneticAudio">
        <AudioPlayer audio={props.phonetic.audio} />
      </div>
    </div>
  );
}
