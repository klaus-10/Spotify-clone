import React from "react";
import { useNavigate } from "react-router-dom";

import "./TopArtistSongs.css";

export default function TopArtistSongs(props) {
  let navigate = useNavigate();

  console.log("top page", props.songs);

  const handleCurrentSongChange = (id) => {
    //navigate to track with songs id
    navigate("/track/" + id);
  };

  return (
    <section className="top-artist-songs contentSpacing">
      <div className="top-artist-songs-header">
        <h2>Brani popolari di</h2>
        <h3>{props.artist}</h3>
      </div>
      {props.songs?.map((el, index) => (
        <div
          key={index + "b"}
          className="top-artist-songs-row"
          onClick={() => handleCurrentSongChange(el.releases?.items[0].id)}
        >
          <div className="music-list-number flex-center">
            <h4>{index + 1}</h4>
          </div>
          <div className="music-list-title flex-left">
            <div className="music-list-title-img">
              <img alt="" src={el.releases?.items[0].coverArt.sources[0].url} />
            </div>
            <div className="music-list-title-desc">
              <h3>{el.releases?.items[0].name}</h3>
            </div>
          </div>
          <div className="music-list-duration flex-center">
            <h4>{el.views}</h4>
          </div>
          <div className="music-list-duration flex-center">
            <h4>{el.duration}</h4>
          </div>
        </div>
      ))}
    </section>
  );
}
