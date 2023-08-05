import React from "react";

export default function Log() {
  const handleClick = async () => {
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
    <div>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="spotify"
      />
      <button onClick={handleClick}>Connect Spotify</button>
    </div>
  );
}
