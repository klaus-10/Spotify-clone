import React, { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const Waveform = () => {
  const waveRef = useRef(null);
  const [wavesurfer, setWavesurfer] = useState(null);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const ws = WaveSurfer.create({
      container: waveRef.current,
      waveColor: "violet",
      progressColor: "purple",
    });

    ws.load(
      "https://p.scdn.co/mp3-preview/a6f0ec5cde3895ef98c6114c128041372d89c63c?cid=d8a5ed958d274c2e8ee717e6a4b0971d"
    );
    ws.setVolume(volume);

    setWavesurfer(ws);

    return () => {
      ws.destroy();
    };
  }, []);

  const handlePlay = () => {
    wavesurfer.play();
  };

  const handlePause = () => {
    wavesurfer.pause();
  };

  const handleVolume = (e) => {
    setVolume(e.target.value / 100);
    wavesurfer.setVolume(e.target.value / 100);
  };

  return (
    <div>
      <div ref={waveRef} style={{ width: "200px" }} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
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

export default Waveform;
