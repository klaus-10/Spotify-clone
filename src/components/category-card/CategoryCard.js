import React from "react";

import "./CategoryCard.css";

export default function CategoryCard(props) {
  return (
    <div
      key={props.keyId}
      className="category-card"
      style={{ background: `${props.color}` }}
      onClick={props.handleNavigateGenre}
    >
      {/* <div className="category-card-img">
        <img alt="" url={props.url}></img>
      </div> */}
      <div className="category-card-desc">
        <h3>{props.name}</h3>

        {/* <a>
          {props.artist} {props.time}
        </a> */}
      </div>
      <div className="category-card-img">
        <img alt="" src={props.url} />
      </div>
    </div>
  );
}
