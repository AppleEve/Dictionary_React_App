import React, { Component } from "react";
import { Howl, Howler } from "howler";

class AudioPlayer extends Component {
  SoundPlay = (src) => {
    const sound = new Howl({ src });
    sound.play();
  };

  RenderButtonAndSound = () => {
    return (
      <button onClick={() => this.SoundPlay(this.props.audio)}>
        {" "}
        <i className="fa-regular fa-circle-play"></i>{" "}
      </button>
    );
  };

  render() {
    Howler.volume(1.0);
    return <div className="Audio">{this.RenderButtonAndSound()}</div>;
  }
}

export default AudioPlayer;
