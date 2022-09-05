import React, { Component } from "react";
import { Howl, Howler } from "howler";
import "./AudioPlayer.css";

class AudioPlayer extends Component {
  SoundPlay = (src) => {
    const sound = new Howl({ src });
    sound.play();
  };

  RenderButtonAndSound = () => {
    return (
      <button
        className="playButton"
        onClick={() => this.SoundPlay(this.props.audio)}
      >
        {" "}
        <i className="fa-regular fa-circle-play"></i>{" "}
      </button>
    );
  };

  render() {
    Howler.volume(1.0);
    return <span className="Audio">{this.RenderButtonAndSound()}</span>;
  }
}

export default AudioPlayer;
