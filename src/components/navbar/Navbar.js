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
import { Divider } from "@mui/material";
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

  useEffect(() => {
    if (location.pathname === "/playlist") {
      setNone(true);
    } else setNone(false);
  });

  return (
    <div
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
        <div className="search-box" style={{ cursor: "pointer" }}>
          <SearchIcon />
        </div>
      ) : (
        <div style={{ cursor: "pointer" }} onClick={props.openSide}>
          {props.side ? "" : <MenuIcon />}
        </div>
      )}

      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: "transparent", cursor: "pointer" }}>
          <NotificationsIcon />
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
          <Divider />
          <div style={{ padding: "10px 5px" }}>
            <div style={{ padding: "0px 0px" }}>
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
              >
                Home
              </Typography>
            </div>
            <div style={{ padding: "0px 0px" }}>
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
              >
                Profile
              </Typography>
            </div>
            <div style={{ padding: "0px 0px" }}>
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
              >
                Settings
              </Typography>
            </div>
          </div>

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
            >
              Login
            </Typography>
          </div>
        </Popover>
      )}
    </div>
  );
}
