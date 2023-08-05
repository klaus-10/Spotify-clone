import React, { useEffect, useState } from "react";
import SongCard from "../../components/music-card/SongCard";

import "./Library.css";

export default function Library(props) {
  const [library, setLibrary] = useState([]);
  const [log, setLog] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("playlist")) {
      setLibrary(JSON.parse(localStorage.getItem("playlist")));
    } else {
      setLibrary([]);
    }
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("playlist")
    ) {
      setLog(true);
    } else {
      setLibrary(false);
    }
  }, [localStorage.getItem("access_token")]);

  const handleLoginClick = async () => {
    var client_id = process.env.REACT_APP_CLIENT_ID;
    const redirect_uri = "https://localhost:3000/home";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      // "user-modify-playback-state",
      // "user-read-playback-state",
      // "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;

    // axios.get("https://accounts.spotify.com/authorize?" + stringify)
  };

  return (
    <>
      {log ? (
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
                  type={"playlist"}
                />
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="login flex-center">
          <div className="login-button flex-center" onClick={handleLoginClick}>
            Login
          </div>
        </div>
      )}
    </>
  );
}
