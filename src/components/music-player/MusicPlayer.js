import PlayCircle from "@mui/icons-material/PlayCircle";
import React, { useRef, useEffect, useState, forwardRef } from "react";
import WaveSurfer from "wavesurfer.js";
import MusicList from "../music-list/MusicList";

import "./MusicPlayer.css";

const MusicPlayer = ({ src, handlePlayParent, play }, ref) => {
  const waveRef = useRef(null);
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  React.useImperativeHandle(ref, () => ({
    play: () => {
      //do something
      handlePlay();
    },
  }));

  useEffect(() => {
    const ws = WaveSurfer.create({
      // container: waveRef.current,
      container: "#wave",

      waveColor: "white",
      progressColor: "lightgray",
      barWidth: 2,
      height: 50,
      barHeight: 1, // the height of the wave
      barGap: null,
      partialRender: true,
    });

    ws.load(src);
    ws.setVolume(volume);

    // ws.on("ready", () => {
    //   setIsPlaying(play);
    //   ws.play();
    // });

    setWavesurfer(ws);

    return () => {
      ws.destroy();
    };
  }, []);

  // useEffect(() => {
  //   handlePlay();
  // }, [play]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      wavesurfer.play();
    } else {
      wavesurfer.pause();
    }
  };

  const handleVolume = (e) => {
    setVolume(e.target.value / 100);
    wavesurfer.setVolume(e.target.value / 100);
  };

  return (
    <div className="music-player">
      <div className="music-player-track flex-center">
        <div className="music-player-track-img">
          <img
            src="https://source.unsplash.com/9D_rUDe7xvA"
            width={"56px"}
            height={"56px"}
          />
        </div>
        <div className="music-player-track-desc">
          <h3>Titulo</h3>
          <h4>Artist</h4>
        </div>
      </div>
      <div className="wave-container">
        <div id="wave" ref={waveRef} />
        <button
          onClick={() => {
            handlePlay();
            handlePlayParent();
          }}
        >
          {isPlaying ? "pause" : "play"}
        </button>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={volume * 100}
        onChange={handleVolume}
      />
    </div>
  );
};

export default React.forwardRef(MusicPlayer);
