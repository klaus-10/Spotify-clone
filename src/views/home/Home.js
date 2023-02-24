import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WindowIcon from "@mui/icons-material/Window";

import ImageSlider from "../../components/carousel/ImageSlider";
import SongCard from "../../components/music-card/SongCard";

//material components

//home data
import classifiche from "../search/genre/Classifiche.json";
import dance from "../search/genre/Dance.json";
import hiphop from "../search/genre/Hip-hop.json";
import latina from "../search/genre/Latina.json";
import pop from "../search/genre/Pop.json";
import home from "./Home.json";

import MusicList from "../../components/music-list/MusicList";
import "./Home.css";

export default function Home(props) {
  const [sections, setSections] = useState(home.sections);
  const [switchedState, setSwitchedState] = useState(false);

  const location = useLocation();

  // expand state
  const [expand, setExpand] = useState(false);
  const [expandSectionNumber, setExpandSectionNumber] = useState(false);
  const [expandDesc, setExpandDesc] = useState([]);

  useEffect(() => {
    clearExpandState();
  }, []);

  useEffect(() => {
    if (location.pathname.includes("home")) {
      setSections(home.sections);
    }
    if (location.pathname.includes("classifiche")) {
      setSections(classifiche.sections);
    }
    if (location.pathname.includes("hip-hop")) {
      setSections(hiphop.sections);
    }
    if (location.pathname.includes("latina")) {
      setSections(latina.sections);
    }
    if (location.pathname.includes("elettronica")) {
      setSections(dance.sections);
    }
    if (location.pathname.includes("pop")) {
      setSections(pop.sections);
    }
    if (location.pathname.includes("search")) {
      setSections(props.sections.sections);
    }
    clearExpandState();
  }, [location.pathname]);

  const handleExpandSection = (ind) => {
    let tmp = [];
    tmp.push(sections[ind]);
    setExpand(true);
    setExpandSectionNumber(ind);
    setExpandDesc(tmp);
  };

  const clearExpandState = () => {
    setExpand(false);
    setExpandSectionNumber(-1);
    setExpandDesc([...sections]);
  };

  const handleHighlight = () => {
    setSwitchedState(!switchedState);
  };

  return (
    <div className="home">
      <div className="home-content">
        {!expand ? (
          <>
            {location.pathname.includes("home") && (
              <section className="home-content-wm contentSpacing-mobile">
                <ImageSlider items={home.imageSlider} />
              </section>
            )}

            {sections?.map((elem, ind) => (
              <section key={ind + "m"} className="contentSpacing-mobile">
                <div className="flex-bw section-title">
                  <h2>{elem.title}</h2>
                  <h3
                    onClick={() => handleExpandSection(ind)}
                    style={{ cursor: "pointer" }}
                  >
                    Read more
                  </h3>
                </div>
                <div className="home-content-item">
                  {elem.desc.map((el, index) => (
                    <SongCard
                      keyId={parseInt(index + ind + "") + "c"}
                      id={el.id}
                      title={el.title}
                      artist={el.desc}
                      img={el.img}
                      type={elem.title}
                    />
                  ))}
                </div>
              </section>
            ))}
          </>
        ) : (
          <>
            {expandDesc?.map((elem, ind) => (
              <section key={ind + "y"} className="contentSpacing-mobile">
                <div className="flex-bw section-title">
                  <div
                    className="section-title-switch flex-center end"
                    style={{ gap: "20px" }}
                  >
                    <h2>{elem.title}</h2>
                    <div>
                      <WindowIcon
                        fontSize="medium"
                        className={
                          !switchedState ? "switch highlight" : "switch"
                        }
                        onClick={handleHighlight}
                        style={{ cursor: "pointer", color: "#b3b3b3" }}
                      />
                      <FormatListBulletedIcon
                        fontSize="medium"
                        className={
                          switchedState ? "switch highlight" : "switch"
                        }
                        onClick={handleHighlight}
                        style={{ cursor: "pointer", color: "#b3b3b3" }}
                      />
                    </div>
                  </div>

                  <h3
                    onClick={() => clearExpandState()}
                    style={{ cursor: "pointer" }}
                  >
                    back
                  </h3>
                </div>
                <div
                  className={
                    switchedState
                      ? "playlist-content music-list-2"
                      : "home-content-item-expanded resize"
                  }
                >
                  {elem.desc.map((el, index) => (
                    <>
                      {switchedState ? (
                        <MusicList
                          keyId={parseInt(index + ind + "") + "e"}
                          number={index + 1}
                          id={el.id}
                          title={el.title}
                          artist={[{ name: el.desc }]}
                          img={el.img}
                          home={true}
                          type={elem.title}
                        />
                      ) : (
                        <SongCard
                          keyId={parseInt(index + ind + "") + "z"}
                          id={el.id}
                          title={el.title}
                          artist={el.desc}
                          img={el.img}
                          type={elem.title}
                        />
                      )}
                    </>
                  ))}
                </div>
              </section>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
