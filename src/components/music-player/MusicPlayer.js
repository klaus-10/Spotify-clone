import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

export default function MusicPlayer() {
  const [waver, setWaver] = useState(null);
  const [playing, setPlaying] = useState(false);

  const el = useRef();
  const audioEl = useRef();

  useEffect(() => {
    let wavesurfer;
    if (el.current) {
      wavesurfer = WaveSurfer.create({
        barWidth: 3,
        barHeight: 1,
        cursorWidth: 1,
        container: el.current,
        backend: "WebAudio",
        height: 60,
        progressColor: "#fff",
        responsive: true,
        waveColor: "rgba(255,255,255,.38",
        cursorColor: "#fff",
      });

      wavesurfer.load(audioEl.current);

      setWaver(wavesurfer);
    }

    return () => wavesurfer.destroy();
  }, []);

  const handlePlay = () => {
    setPlaying(!playing);
    waver?.playPause();
  };

  return (
    <div className="max-w-lg w-full rounded-md bg-blue-600 p-3">
      <div className="flex items-center">
        <PlayButton onClick={handlePlay} />
        <div className="flex-1" ref={el} />
      </div>
      <audio
        ref={audioEl}
        src={
          "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
        }
      />
    </div>
  );
}

function PlayButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-10 w-10 rounded-full bg-white/[0.3] hover:bg-white/[0.4] flex items-center justify-center cursor-pointer"
    >
      <PlayIcon />
    </button>
  );
}

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 35.713 39.635"
    >
      <path
        d="M14.577.874C11-1.176,8.107.5,8.107,4.621V35.01c0,4.122,2.9,5.8,6.47,3.751L41.139,23.529c3.575-2.05,3.575-5.372,0-7.422Z"
        transform="translate(-8.107 0)"
        fill="#f7f7f7"
      />
    </svg>
  );
}
