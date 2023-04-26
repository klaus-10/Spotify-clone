import axios from "axios";

export const getToken = async () => {
  var client_id = process.env.REACT_APP_CLIENT_ID;
  var client_secret = process.env.REACT_APP_CLIENT_SECRET;

  await axios({
    url: "https://accounts.spotify.com/api/token",
    method: "post",
    params: {
      grant_type: "client_credentials",
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: client_id,
      password: client_secret,
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {});
};
