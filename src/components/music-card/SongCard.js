import React, { useState, useEffect, useContext } from "react";

import "./SongCard.css";

export default function SongCard(props) {
  return (
    <div className={"song-card"}>
      <div className="song-card-img">
        <img url={props.url}></img>
      </div>
      <div className="song-card-desc">
        <h3>{props.title}</h3>
        <h4>{props.desc}</h4>
      </div>
    </div>
  );
}
