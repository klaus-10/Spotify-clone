import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Dashboard.css";

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
      window.history.replaceState(
        {},
        document.title,
        window.location.pathname + window.location.search
      );
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/") navigate("/home");
  }, [location.pathname]);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
    } else {
      setPlaylist([]);
    }
  }, [localStorage.getItem("access_token")]);

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
      .catch((err) => {
        console.log("Playlist err", err);
        handleLogOut();
      });
  };

  const reloadPage = () => {
    window.location.reload();
  };

  // filter status
  const [filter, setFilter] = useState("");

  const handleFilter = (value) => {
    setFilter(value);
  };

  const handleLogOut = () => {
    window.history.replaceState(
      {},
      document.title,
      window.location.pathname + window.location.search
    );

    localStorage.removeItem("playlist");
    localStorage.removeItem("access_token");
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
          onFiltering={handleFilter}
        />
        <div className="outlet-container">
          <Outlet context={{ filter }} />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
