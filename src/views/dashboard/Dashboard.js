import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
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

  return (
    <div className="dashboard">
      {/* <div className="sidebar-handle"> */}
      <Sidebar open={side} close={handleChangeSide} mediaQy={matches} />
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
        <Navbar side={side} openSide={handleChangeSide} mediaQy={matches} />
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
