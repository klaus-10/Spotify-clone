import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./SongCard.css";

export default function Music(props) {
  let navigate = useNavigate();

  return (
    <div
      className="song-card"
      onClick={() => {
        navigate("/playlist");
        console.log("ok");
      }}
    >
      <div className="song-card-img">
        <img url={props.url}></img>
      </div>
      <div className="song-card-desc">
        <h3>{props.title}</h3>
        <a>
          {props.artist} {props.time}
        </a>
      </div>
    </div>
  );
}
