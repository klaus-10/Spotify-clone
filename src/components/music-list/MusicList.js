import React from "react";
import { useNavigate } from "react-router-dom";

import "./MusicList.css";

export default function MusicList(props) {
  let navigate = useNavigate();

  const handleNavigate = () => {
    console.log("ok", props.type);
    console.log("ok", props.type.toLowerCase());

    switch (props.type.toLowerCase()) {
      case "tracks":
        navigate("/track/" + props.id);
        break;
      case "playlist":
        navigate("/playlist/" + props.id);
        break;
      default:
        navigate("/playlist/" + props.id);
        break;
      // case "album":
      //   navigate("/album/" + props.id);
    }
  };

  const concact = (arr) => {
    let tmp = [...arr];

    let c = "";
    tmp.length !== 0 &&
      tmp.forEach((el, index) => {
        tmp.length - 1 === index ? (c = c + el.name) : (c = c + el.name + ", ");
      });
    return c;
  };

  return (
    <div
      className={props.loading ? "music-list loading" : "music-list"}
      onClick={handleNavigate}
    >
      <div
        className={
          props.home
            ? "music-list-number flex-center music-list-2"
            : "music-list-number flex-center"
        }
      >
        <h4>{props?.number}</h4>
      </div>
      <div className="music-list-title flex-left">
        <div className="music-list-title-img">
          {props.img && <img alt="" src={props?.img} />}
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
