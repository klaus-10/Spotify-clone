import React, { useState, useEffect, useContext } from "react";

export default function MusicList(props) {
  return (
    <div className={"music-list"}>
      <div className="music-list-img">
        <img url={props.url}></img>
      </div>
      <div className="music-list-desc">
        <h3>{props.title}</h3>
        <h4>{props.artists}</h4>
        <h4>{props.album}</h4>
        <h4>{props.duration}</h4>
      </div>
    </div>
  );
}
