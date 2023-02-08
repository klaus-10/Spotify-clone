import React, { useRef, useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import axios from "axios";

import testMp3 from "../../assets/audio/Arai.mp3";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef(null);
  let wavesurfer = null;

  const ctx = new AudioContext();

  useEffect(() => {
    wavesurfer = WaveSurfer.create({
      container: containerRef.current,
      backend: "MediaElement",
      mediaControls: true,
      waveColor: "violet",
      progressColor: "purple",
      barWidth: 2,
      barHeight: 1,
      barGap: null,
      xhr: {
        cache: "default",
        mode: "no-cors",
        method: "GET",
        credentials: "same-origin",
        redirect: "follow",
        referrer: "client",
        headers: [{ key: "Authorization" }],
      },
    });

    // fetch(
    //   "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/319/insides-feat-jessy-kvge-1675818045-O8B8m9trDG.mp3",
    //   {
    //     mode: "no-cors",
    //   }
    // )
    //   .then((response) => response.arrayBuffer())
    //   .then((arrayBuffer) => {
    //     // ctx.decodeAudioData(arrayBuffer))
    //     // .then((decodeAudio) => {
    //     // audio = decodeAudio;
    //     wavesurfer.load(
    //       arrayBuffer
    //       // "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/319/insides-feat-jessy-kvge-1675818045-O8B8m9trDG.mp3"
    //     );
    //   })
    //   .catch((e) => console.error(e));

    wavesurfer.load(
      // mp3
      "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/319/insides-feat-jessy-kvge-1675818045-O8B8m9trDG.mp3"
    );
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      wavesurfer.pause();
    } else {
      wavesurfer.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div ref={containerRef} />
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default MusicPlayer;
