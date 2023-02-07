import React, { useState, useEffect, useContext } from "react";
import MusicList from "../../components/music-list/MusicList";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";

import "./Playlist.css";
import SongHeader from "../../components/playlist-header/SongHeader";

export default function Playlist(props) {
  let navigate = useNavigate();

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
        <SongHeader
          playlist={true}
          music={false}
          artist={"artist"}
          listNumber={50}
          year={2022}
          duration={"3:15"}
          title={"Playlist Titolo"}
          desc={
            "Descrizione della playlist Descrizione della playlist Descrizione della playlist"
          }
          img={"https://source.unsplash.com/random"}
        />

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
            <div onClick={() => navigate("/track")}>
              <MusicList
                number={index + 1}
                img={el.img}
                title={el.title}
                artist={el.artist}
                album={el.album}
                data={el.data}
                duration={el.duration}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
