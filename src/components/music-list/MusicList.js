import React, { useState, useEffect, useContext } from "react";

import "./MusicList.css";

export default function MusicList(props) {
  const concact = (arr) => {
    let tmp = [...arr];
    console.log(arr + "lengh: " + tmp.length);

    let c = "";
    tmp.length != 0 &&
      tmp.map((el, index) => {
        tmp.length - 1 === index ? (c = c + el) : (c = c + el + ", ");
      });
    return c;
  };
  return (
    <div className="music-list">
      <div className="music-list-number flex-center">
        <h4>{props?.number}</h4>
      </div>
      <div className="music-list-title flex-left">
        <div className="music-list-title-img">
          <img url={props?.url} />
        </div>
        <div className="music-list-title-desc">
          <span className="standalone-ellipsis-one-line one">
            <h3>{props?.title}</h3>
          </span>
          <span className="standalone-ellipsis-one-line two">
            <h4>{concact(props?.artist)}</h4>
          </span>
        </div>
      </div>
      <div className="music-list-album flex-center">
        <h4>{props?.album}</h4>
      </div>
      <div className="music-list-data flex-center">
        <h4>{props?.data}</h4>
      </div>
      <div className="music-list-duration flex-center">
        <h4>{props?.duration}</h4>
      </div>
    </div>
  );
}
