import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import "./MusicPlayer.css";

const MusicPlayer = (
  { src, handlePlayParent, play, title, artist, img },
  ref
) => {
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

    ws.load(src ? src : "");
    ws.setVolume(volume);

    setWavesurfer(ws);

    return () => {
      ws.destroy();
    };
  }, []);

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
          <img alt="" src={img} width={"56px"} height={"56px"} />
        </div>
        <div className="music-player-track-desc">
          <h3>{title}</h3>
          <h4>{artist}</h4>
        </div>
      </div>
      <div className="wave-container">
        <div id="wave" ref={waveRef} />
        <div
          onClick={() => {
            handlePlay();
            handlePlayParent();
          }}
        >
          {isPlaying ? (
            <PauseIcon fontSize="large" />
          ) : (
            <PlayArrowIcon fontSize="large" />
          )}
        </div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={volume * 100}
        onChange={handleVolume}
        className="volume"
      />
    </div>
  );
};

export default React.forwardRef(MusicPlayer);
