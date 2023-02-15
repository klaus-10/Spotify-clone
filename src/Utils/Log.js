import queryString from "query-string";

export const LogIn = () => {
  const client_id = "f7e65796b4084a6e92eeeb4b5c415230";
  const redirect_uri = "https://localhost:3000/home";
  const auth_uri = "https://accounts.spotify.com/authorize";
  const scopes =
    "user-read-private user-read-email user-read-recently-played user-top-read";
  const scope = [
    "user-read-private",
    "user-read-email",
    // "user-modify-playback-state",
    // "user-read-playback-state",
    // "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
  ];
  window.location.href = `${auth_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
    " "
  )}&response_type=token&show_dialog=true`;
};

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export default function Login() {
//   const handleLoginClick = async () => {
//     const client_id = "f7e65796b4084a6e92eeeb4b5c415230";
//     const redirect_uri = "https://localhost:3000/home";
//     const api_uri = "https://accounts.spotify.com/authorize";
//     const scope = [
//       "user-read-private",
//       "user-read-email",
//       // "user-modify-playback-state",
//       // "user-read-playback-state",
//       // "user-read-currently-playing",
//       "user-read-recently-played",
//       "user-top-read",
//     ];
//     window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
//       " "
//     )}&response_type=token&show_dialog=true`;

//     // axios.get("https://accounts.spotify.com/authorize?" + stringify)
//   };
//   return (
//     <div>
//       <img
//         src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
//         alt="spotify"
//       />
//       <button onClick={handleClick}>Connect Spotify</button>
//     </div>
//   );
// }
