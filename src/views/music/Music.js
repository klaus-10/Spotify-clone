import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./Music.css";

export default function Music(props) {
  let navigate = useNavigate();

  return (
    <div className="music">
      <div className="music-img"></div>
      <div className="music-desc"></div>
      <div className="music-player"></div>

      <h1>Music</h1>
    </div>
  );
}
