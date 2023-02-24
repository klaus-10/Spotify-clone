import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./SongCard.css";

export default function SongCard(props) {
  let navigate = useNavigate();
  const matches = useMediaQuery("(max-width:600px)");

  const handleNavigate = () => {
    switch (props.type.toLowerCase()) {
      case "tracks":
        navigate("/track/" + props.id);
        break;
      case "playlist":
        navigate("/playlist/" + props.id);
        break;
      default:
        navigate("/playlist/" + props.id);
        break;
      // case "album":
      //   navigate("/album/" + props.id);
    }
  };

  return (
    <div key={props.keyId} className={"song-card"} onClick={handleNavigate}>
      <div className={props.img ? "song-card-img" : "song-card-img bg"}>
        <img alt="" src={props.img}></img>
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
          <p>
            {props.artist} {props.time}
          </p>
        </span>
      </div>
    </div>
  );
}
