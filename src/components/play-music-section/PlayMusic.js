import React, { useState, useEffect, useContext } from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./PlayMusic.css";

export default function PlayMusic(props) {
  const [play, setPlay] = useState(false);

  const [favorite, setFavorite] = useState(false);

  const handlePlay = () => {
    setPlay(!play);
  };
  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <section className="play-music contentSpacing flex-left">
      <div className="play-btn" onClick={handlePlay}>
        <span>{play ? <PauseCircleIcon /> : <PlayCircleIcon />}</span>
      </div>
      <span
        onClick={handleFavorite}
        className={favorite ? "favorite-btn-2" : "favorite-btn"}
      >
        <FavoriteIcon />
      </span>
      <span className="option-btn">
        <MoreHorizIcon />
      </span>
    </section>
  );
}
