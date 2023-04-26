export const LogIn = () => {
  var client_id = process.env.REACT_APP_CLIENT_ID;
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
