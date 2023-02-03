import React, { useState, useEffect, useContext } from "react";
import MusicList from "../../components/music-list/MusicList";

import "./Playlist.css";

export default function Playlist(props) {
  return (
    <div className="playlist">
      <div className="playlist-container">
        <section className="playlist-header">
          <div className="playlist-img">
            <img src="https://source.unsplash.com/random" alt="" />
          </div>

          <div className="playlist-header-desc">
            <h2>playlist</h2>
            <h1>Title</h1>
            <p>descritpion</p>
            <p>Avatar, Artist, like, duration</p>
          </div>
        </section>

        <section className="playlist-content">
          <MusicList
            img="url"
            title="Cookies and Cream"
            artist={["Gue", "Sfera", "MArracash"]}
            album="Madreperla"
            data="26 ott 2022"
            duration="3:15"
          />
        </section>
      </div>
    </div>
  );
}
