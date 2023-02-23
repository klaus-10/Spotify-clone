import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./SongCard.css";

export default function SongCard(props) {
  let navigate = useNavigate();
  const matches = useMediaQuery("(max-width:600px)");

  const handleNavigate = () => {
    console.log("ok", props.type);
    console.log("ok", props.type.toLowerCase());

    switch (props.type.toLowerCase()) {
      case "tracks":
        navigate("/track/" + props.id);
      case "playlist":
        navigate("/playlist/" + props.id);
      default:
        navigate("/playlist/" + props.id);
      // case "album":
      //   navigate("/album/" + props.id);
    }
  };

  return (
    <div key={props.keyId} className={"song-card"} onClick={handleNavigate}>
      <div className={props.img ? "song-card-img" : "song-card-img bg"}>
        <img src={props.img}></img>
      </div>
      <div className="song-card-desc">
        <h3>{props.title}</h3>

        <span
          className={
            matches
              ? "standalone-ellipsis-one-line"
              : "standalone-ellipsis-three-line"
          }
        >
          <a>
            {props.artist} {props.time}
          </a>
        </span>
      </div>
    </div>
  );
}
