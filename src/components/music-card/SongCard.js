import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./SongCard.css";

export default function SongCard(props) {
  let navigate = useNavigate();

  return (
    <div
      key={props.keyId}
      className={"song-card"}
      onClick={() => {
        navigate("/playlist/" + props.id);
      }}
    >
      <div className={props.img ? "song-card-img" : "song-card-img bg"}>
        <img src={props.img}></img>
      </div>
      <div className="song-card-desc">
        <h3>{props.title}</h3>

        <span className="standalone-ellipsis-three-line">
          <a>
            {props.artist} {props.time}
          </a>
        </span>
      </div>
    </div>
  );
}
