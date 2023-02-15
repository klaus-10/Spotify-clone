import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./Dashboard.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Dashboard() {
  let navigate = useNavigate();
  let location = useLocation();

  // media query screen
  const matches = useMediaQuery("(min-width:600px)");

  // sidebar status
  const [side, setSide] = useState(false);
  const [firstTimeSlideMobile, setFirstTimeSlideMobile] = useState(0);

  const handleChangeSide = () => {
    setSide(!side);
  };

  // hadnle open sidebar
  useEffect(() => {
    if (matches) {
      setSide(true);
      setFirstTimeSlideMobile(1);
    }
    if (firstTimeSlideMobile !== 0 && !matches && side) {
      setSide(false);
      setFirstTimeSlideMobile(0);
    }
  });

  // useEffect get playlist
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    const hash = window.location.hash;
    if (window.location.hash) {
      // const token = queryString.parse(location.hash);

      const token = hash.substring(1).split("&")[0].split("=")[1];
      localStorage.setItem("access_token", token);
      getUserPlaylist();
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
    } else {
      setPlaylist([]);
    }
  }, [localStorage.getItem("access_token")]);

  // playlist
  // useEffect(() => {
  //   // const hash = window.location.hash;
  //   if (JSON.parse(localStorage.getItem("playlist"))?.length !== 0) {
  //     let tmp = JSON.parse(localStorage.getItem("playlist"));
  //     setPlaylist(JSON.parse(localStorage.getItem("playlist")));
  //   } else {
  //     setPlaylist([]);
  //   }
  // }, [localStorage.getItem("playlist")]);

  const getUserPlaylist = async () => {
    await axios
      .get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application-json",
        },
      })
      .then((res) => {
        let tmp = [...res.data.items];
        localStorage.setItem("playlist", JSON.stringify(tmp));
        setPlaylist(tmp);
      })
      .catch((err) => console.log("Playlist err", err));
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="dashboard">
      {/* <div className="sidebar-handle"> */}
      <Sidebar
        open={side}
        close={handleChangeSide}
        mediaQy={matches}
        playlist={playlist}
      />
      {!matches && (
        <div
          className={side ? "black-touch op" : "black-touch"}
          onClick={handleChangeSide}
        ></div>
      )}
      <div
        className={
          matches ? "dashboard-content open-dash" : "dashboard-content"
        }
      >
        <Navbar
          side={side}
          openSide={handleChangeSide}
          mediaQy={matches}
          reload={reloadPage}
        />
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
