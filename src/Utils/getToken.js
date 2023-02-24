import axios from "axios";

export const getToken = async () => {
  var client_id = "f7e65796b4084a6e92eeeb4b5c415230";
  var client_secret = "d706a481f7e24a1d84f21d9a78db6170";

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
