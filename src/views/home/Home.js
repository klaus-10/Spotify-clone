import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

import ImageSlider from "../../components/carousel/ImageSlider";
import SongCard from "../../components/music-card/SongCard";

//material components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

//home data
import home from "./Home.json";
import pop from "../search/genre/Pop.json";
import classifiche from "../search/genre/Classifiche.json";
import dance from "../search/genre/Dance.json";
import latina from "../search/genre/Latina.json";
import hiphop from "../search/genre/Hip-hop.json";

import "./Home.css";
import { getToken } from "../../utils/getToken";
import axios from "axios";
import { GoBack } from "../../utils/Navigation";

export default function Home() {
  const [sections, setSections] = useState(home.sections);
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

  // useEffect()

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

            {sections?.map((el, ind) => (
              <section key={ind + "a"} className="contentSpacing-mobile">
                <div className="flex-bw section-title">
                  <h2>{el.title}</h2>
                  <h3
                    onClick={() => handleExpandSection(ind)}
                    style={{ cursor: "pointer" }}
                  >
                    Read more
                  </h3>
                </div>
                <div className="home-content-item">
                  {el.desc.map((el, index) => (
                    <SongCard
                      keyId={parseInt(index + ind + "") + "c"}
                      id={el.id}
                      title={el.title}
                      artist={el.desc}
                      img={el.img}
                    />
                  ))}
                </div>
              </section>
            ))}
          </>
        ) : (
          <>
            {expandDesc?.map((el, ind) => (
              <section key={ind + "y"} className="contentSpacing-mobile">
                <div className="flex-bw section-title">
                  <h2>{el.title}</h2>
                  <h3
                    onClick={() => clearExpandState()}
                    style={{ cursor: "pointer" }}
                  >
                    back
                  </h3>
                </div>
                <div className="home-content-item-expanded">
                  {el.desc.map((el, index) => (
                    <SongCard
                      keyId={parseInt(index + ind + "") + "e"}
                      id={el.id}
                      title={el.title}
                      artist={el.desc}
                      img={el.img}
                    />
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
