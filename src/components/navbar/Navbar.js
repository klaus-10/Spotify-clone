import React, { useState, useEffect, useContext } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// icnos
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import { Divider, TextField } from "@mui/material";
// import { LogIn } from "../../utils/Log";
// import { UserContex } from "../../../UserContext";

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // context
  // const user = useContext(UserContex);

  const [user, setUser] = useState(true);
  const [none, setNone] = useState(false);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    if (
      location.pathname.includes("playlist") ||
      location.pathname.includes("/track")
    ) {
      setNone(true);
      if (location.pathname.includes("/track")) setFilter(false);
      else setFilter(true);
    } else {
      setNone(false);
      setFilter(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [localStorage.getItem("access_token")]);

  const handleLoginClick = async () => {
    const client_id = "f7e65796b4084a6e92eeeb4b5c415230";
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

  const handleLogIn = () => {
    // LogIn();
    handleLoginClick();
  };

  const handleLogOut = () => {
    localStorage.removeItem("playlist");
    localStorage.removeItem("access_token");
    handleClose();
    window.location = window.location.href.replace(/#.*$/, "");
    window.location.reload();
  };

  var prevScrollpos = window.pageYOffset;
  useEffect(() => {
    window.onscroll = function () {
      // var currentScrollPos = window.pageYOffset;
      // if (prevScrollpos > currentScrollPos) {
      //   document.getElementById("navbar").style.top = "0";
      //   if (window.scrollY > 0) {
      //     document.getElementById("navbar").style.background = "#000";
      //   } else {
      //     // document.getElementById("navbar").style.background = "transparent";
      //     document.getElementById("navbar").style.background = "#000";
      //   }
      //   if (window.scrollY === 0) {
      //     document.getElementById("navbar").style.background = "transparent";
      //   }
      // } else {
      //   // document.getElementById("navbar").style.top = "-70px";
      //   // document.getElementById("navbar").style.background = "#000";
      // }
      // prevScrollpos = currentScrollPos;

      if (window.scrollY > 0 && document.getElementById("navbar")) {
        document.getElementById("navbar").style.background = "#000";
      } else {
        document.getElementById("navbar").style.background = "transparent";
      }
    };
  }, []);

  const handleFilteringChange = (event) => {
    props.onFiltering(event.target.value);
    // const timeOutId = setTimeout(
    //   () => props.onFiltering(event.target.value),
    //   200
    // );
    // return () => clearTimeout(timeOutId);
  };

  return (
    <div
      onScroll={() => {
        console.log("ok");
      }}
      id="navbar"
      className={
        props.matches
          ? none
            ? "navbar extended none"
            : "navbar extended"
          : none
          ? "navbar none"
          : "navbar"
      }
    >
      {props.mediaQy ? (
        <>
          {filter ? (
            <div
              className="search-box-2 flex-left"
              style={{ cursor: "pointer" }}
            >
              <SearchIcon />
              <form role="search">
                <input
                  maxLength="800"
                  autoCorrect="off"
                  autoCapitalize="none"
                  spellCheck="false"
                  placeholder="Filtro per nome o album"
                  data-testid="search-input"
                  data-encore-id="type"
                  onChange={handleFilteringChange}
                />
              </form>
            </div>
          ) : (
            <div> </div>
          )}
        </>
      ) : (
        <div className="flex-left" style={{ gap: "15px" }}>
          <MenuIcon
            onClick={props.openSide}
            style={{ cursor: "pointer", padding: "5px" }}
          />

          {filter && (
            <div
              className="search-box-2 flex-left"
              style={{ cursor: "pointer" }}
            >
              <form role="search">
                <input
                  maxLength="800"
                  autoCorrect="off"
                  autoCapitalize="none"
                  spellCheck="false"
                  placeholder="Filtro per nome o album"
                  data-testid="search-input"
                  data-encore-id="type"
                  onChange={handleFilteringChange}
                />
              </form>
            </div>
          )}
        </div>
      )}

      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: "transparent", cursor: "pointer" }}>
          {/* <NotificationsIcon /> */}
        </Avatar>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ cursor: "pointer" }}
          onClick={handleClick}
        />
      </Stack>

      {user ? (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          style={{ top: "5px" }}
        >
          <Typography
            style={{
              fontSize: "13px",
              cursor: "pointer",
              padding: "0px 20px",
              paddingTop: "10px",
              paddingBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Admin
          </Typography>
          <Typography
            style={{
              fontSize: "13px",
              cursor: "pointer",
              paddingLeft: "20px",
              paddingRight: "50px",
              paddingTop: "5px",
              paddingBottom: "10px",
            }}
          >
            admin@gmail.com
          </Typography>

          <div style={{ padding: "0px 0px 10px" }}>
            <Typography
              style={{
                fontSize: "13px",
                cursor: "pointer",
                paddingLeft: "20px",
                paddingRight: "50px",
                paddingTop: "6px",
                paddingBottom: "6px",
                borderRadius: "5px",
                // transform: `translate(${-5}px, ${0}px)`,
              }}
              className="textHover logout"
              onClick={handleLogOut}
            >
              Logout
            </Typography>
          </div>
        </Popover>
      ) : (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          style={{ top: "5px" }}
        >
          <Typography
            style={{
              fontSize: "13px",
              cursor: "pointer",
              padding: "0px 20px",
              paddingTop: "10px",
              paddingBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Profile
          </Typography>

          <Divider />
          <div style={{ padding: "10px 5px" }}>
            <Typography
              style={{
                fontSize: "13px",
                cursor: "pointer",
                paddingLeft: "20px",
                paddingRight: "50px",
                paddingTop: "6px",
                paddingBottom: "6px",
                borderRadius: "5px",
              }}
              className="textHover"
              onClick={handleLogIn}
            >
              Login
            </Typography>
          </div>
        </Popover>
      )}
    </div>
  );
}
