import React, { useState, useEffect, useContext } from "react";
import MusicList from "../../components/music-list/MusicList";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import "./Playlist.css";

export default function Playlist(props) {
  const musicList = [
    {
      img: "url",
      title: "Cookies and Cream",
      artist: ["Gue", "Sfera", "MArracash", "Elodie", "Ernia"],
      album: "Madreperla",
      data: "26 ott 2022",
      duration: "3:15",
    },
    {
      img: "url",
      title: "Cookies and Cream",
      artist: ["Gue", "Sfera", "MArracash"],
      album: "Madreperla",
      data: "26 ott 2022",
      duration: "3:15",
    },
    {
      img: "url",
      title: "Cookies and Cream",
      artist: ["Gue", "Sfera", "MArracash"],
      album: "Madreperla",
      data: "26 ott 2022",
      duration: "3:15",
    },
    {
      img: "url",
      title: "Cookies and Cream",
      artist: ["Gue", "Sfera", "MArracash"],
      album: "Madreperla",
      data: "26 ott 2022",
      duration: "3:15",
    },
    {
      img: "url",
      title: "Cookies and Cream",
      artist: ["Gue", "Sfera", "MArracash"],
      album: "Madreperla",
      data: "26 ott 2022",
      duration: "3:15",
    },
    {
      img: "url",
      title: "Cookies and Cream",
      artist: ["Gue", "Sfera", "MArracash"],
      album: "Madreperla",
      data: "26 ott 2022",
      duration: "3:15",
    },
    {
      img: "url",
      title: "Cookies and Cream",
      artist: ["Gue", "Sfera", "MArracash"],
      album: "Madreperla",
      data: "26 ott 2022",
      duration: "3:15",
    },
    {
      img: "url",
      title: "Cookies and Cream",
      artist: ["Gue", "Sfera", "MArracash"],
      album: "Madreperla",
      data: "26 ott 2022",
      duration: "3:15",
    },
    {
      img: "url",
      title: "Cookies and Cream",
      artist: ["Gue", "Sfera", "MArracash"],
      album: "Madreperla",
      data: "26 ott 2022",
      duration: "3:15",
    },
    {
      img: "url",
      title: "Cookies and Cream",
      artist: ["Gue", "Sfera", "MArracash"],
      album: "Madreperla",
      data: "26 ott 2022",
      duration: "3:15",
    },
    {
      img: "url",
      title: "Cookies and Cream",
      artist: ["Gue", "Sfera", "MArracash"],
      album: "Madreperla",
      data: "26 ott 2022",
      duration: "3:15",
    },
    {
      img: "url",
      title: "Cookies and Cream",
      artist: ["Gue", "Sfera", "MArracash"],
      album: "Madreperla",
      data: "26 ott 2022",
      duration: "3:15",
    },
  ];
  return (
    <div className="playlist">
      <div className="playlist-container">
        <section className="playlist-header">
          <div className="playlist-header-content contentSpacing-nowidth">
            <div className="playlist-img">
              <img src="https://source.unsplash.com/random" alt="" />
            </div>

            <div className="playlist-header-desc">
              <h2>playlist</h2>
              <h1>Title</h1>
              <p>descritpion</p>
              <p>Avatar, Artist, like, duration</p>
            </div>
          </div>
        </section>

        <section className="playlist-content">
          <div className="playlist-content-table">
            <div className="music-list-number flex-center">
              <h2>#</h2>
            </div>
            <div className="music-list-title flex-left">
              <div className="music-list-title-desc">
                <h2>title</h2>
              </div>
            </div>
            <div className="music-list-album flex-center">
              <h2>album</h2>
            </div>
            <div className="music-list-data flex-center">
              <h2>data</h2>
            </div>
            <div className="music-list-duration flex-center">
              <AccessTimeIcon />
            </div>
          </div>
          {/* <MusicListHeader /> */}
          {musicList.map((el, index) => (
            <MusicList
              number={index}
              img={el.img}
              title={el.title}
              artist={el.artist}
              album={el.album}
              data={el.data}
              duration={el.duration}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
