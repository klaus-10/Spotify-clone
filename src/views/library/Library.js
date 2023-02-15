import React, { useState, useEffect, useContext } from "react";
import SongCard from "../../components/music-card/SongCard";

import "./Library.css";

export default function Library(props) {
  const [library, setLibrary] = useState(
    localStorage.getItem("playlist")
      ? JSON.parse(localStorage.getItem("playlist"))
      : []
  );

  useEffect(() => {
    if (localStorage.getItem("playlist")) {
      setLibrary(JSON.parse(localStorage.getItem("playlist")));
    } else {
      setLibrary([]);
    }
  }, []);

  console.log("library", library);

  return (
    <div className="library">
      <section className="contentSpacing-mobile">
        <div className="flex-bw section-title">
          <h2>Your Playlist</h2>
          {/* <h3 onClick={() => clearExpandState()} style={{ cursor: "pointer" }}>
            back
          </h3> */}
        </div>
        <div className="home-content-item-expanded">
          {library?.map((el, index) => (
            <SongCard
              keyId={index}
              id={el.id}
              title={el.name}
              artist={el.owner.display_name}
              img={el.images[0]?.url}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
