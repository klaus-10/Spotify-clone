// import React, { useRef, useState, useEffect } from "react";
// import WaveSurfer from "wavesurfer.js";
// import axios from "axios";

// import testMp3 from "../../assets/audio/Arai.mp3";

// const MusicPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const containerRef = useRef(null);
//   let wavesurfer = null;

//   const ctx = new AudioContext();

//   useEffect(() => {
//     wavesurfer = WaveSurfer.create({
//       container: containerRef.current,
//       backend: "MediaElement",
//       mediaControls: true,
//       waveColor: "violet",
//       progressColor: "purple",
//       barWidth: 2,
//       barHeight: 1,
//       barGap: null,
//       xhr: {
//         cache: "default",
//         mode: "no-cors",
//         method: "GET",
//         credentials: "same-origin",
//         redirect: "follow",
//         referrer: "client",
//         headers: [{ key: "Authorization" }],
//       },
//     });

//     wavesurfer.load(
//       // mp3
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/319/insides-feat-jessy-kvge-1675818045-O8B8m9trDG.mp3"
//     );
//   }, []);

//   const togglePlay = () => {
//     if (isPlaying) {
//       wavesurfer.pause();
//     } else {
//       wavesurfer.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div>
//       <div ref={containerRef} />
//       <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
//     </div>
//   );
// };

// export default MusicPlayer;

import React, { useState, useEffect } from "react";

const MusicPlayer = () => {
  const [audioData, setAudioData] = useState(null);

  useEffect(() => {
    fetch(
      "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/319/insides-feat-jessy-kvge-1675818045-O8B8m9trDG.mp3"
    )
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => setAudioData(arrayBuffer));
  }, []);

  return (
    <div>
      {audioData ? (
        <p>Audio data successfully fetched and saved in the variable.</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MusicPlayer;
