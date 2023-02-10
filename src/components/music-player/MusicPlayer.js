import PlayCircle from "@mui/icons-material/PlayCircle";
import React, { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import MusicList from "../music-list/MusicList";

import "./MusicPlayer.css";

const MusicPlayer = ({ src, handlePlayParent, play }) => {
  const waveRef = useRef(null);
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);

  console.log(wavesurfer, isPlaying);

  useEffect(() => {
    const ws = WaveSurfer.create({
      container: waveRef.current,
      waveColor: "white",
      progressColor: "lightgray",
    });

    ws.load(src);
    ws.setVolume(volume);

    ws.on("ready", () => {
      setIsPlaying(play);
      ws.play();
    });

    setWavesurfer(ws);

    return () => {
      ws.destroy();
    };
  }, [src]);

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
      {/* <div className="music-player-track">
        <div className="music-player-track-img">
          <img src="" />
        </div>
        <div className="music-player-track-desc"></div>
      </div> */}
      <MusicList />
      <div ref={waveRef} style={{ width: "200px" }} />
      <button
        onClick={() => {
          handlePlay();
          handlePlayParent();
        }}
      >
        {isPlaying ? "pause" : "play"}
      </button>
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

export default MusicPlayer;
