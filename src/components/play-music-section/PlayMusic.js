import React, { useState } from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import FavoriteIcon from "@mui/icons-material/Favorite";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import "./PlayMusic.css";

export default function PlayMusic(props) {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <section className="play-music contentSpacing flex-left">
      <div className="play-btn" onClick={() => props.playFunc()}>
        <span>{props.play ? <PauseCircleIcon /> : <PlayCircleIcon />}</span>
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
