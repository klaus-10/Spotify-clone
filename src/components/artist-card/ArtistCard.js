import React, { useState, useEffect, useContext } from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./ArtistCard.css";

export default function ArtistCard(props) {
  const [play, setPlay] = useState(false);

  const [favorite, setFavorite] = useState(false);

  const handlePlay = () => {
    setPlay(!play);
  };
  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <section className="artist-card contentSpacing flex-left">
      <div className="artist-card-img">
        <img src="https://source.unsplash.com/YrtFlrLo2DQ" />
      </div>

      <div className="artist-card-desc">
        <a>artista</a>
        <h3>{props.artist}</h3>
      </div>
    </section>
  );
}
