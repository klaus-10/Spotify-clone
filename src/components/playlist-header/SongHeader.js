import React, { useState, useEffect, useContext } from "react";

import "./SongHeader.css";

export default function SongHeader(props) {
  return (
    <section className="playlist-header">
      <div className="playlist-header-content contentSpacing-nowidth">
        <div className="playlist-img">
          <img src={props.img} alt="" />
        </div>
        <div className="playlist-header-desc">
          <h2>{props.playlist && "playlist"}</h2>
          <h2>{props.music && "brano"}</h2>
          <h1>{props.title}</h1>
          <p>{props.desc ? props.desc : ""}</p>
          <p>
            Avatar, {props.artist}, {props.listNumber && props.listNumber}{" "}
            Brani,
            {props.year && props.year}, {props.duration}
          </p>
        </div>
      </div>
    </section>
  );
}
