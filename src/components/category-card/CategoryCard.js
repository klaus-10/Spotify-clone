import React, { useState, useEffect, useContext } from "react";

import "./CategoryCard.css";

export default function CategoryCard(props) {
  return (
    <div className="category-card">
      <div className="category-card-img">
        <img url={props.url}></img>
      </div>
      <div className="song-card-desc">
        <h3>{props.title}</h3>
        <a>
          {props.artist} {props.time}
        </a>
      </div>
    </div>
  );
}
