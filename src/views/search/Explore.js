import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//transition

import axios from "axios";
import CategoryCard from "../../components/category-card/CategoryCard";
import Home from "../home/Home";
import categories from "./CategoryList.json";
import "./Explore.css";

export default function Explore() {
  //search parameter
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState({});

  //Gestisce la ricerca
  function handleSearch(e) {
    setSearch(e.target.value);
    if (e.target.value === "") return;

    // console.log("Search", search);
    // api call to track url and redirect to the track pagee
    // nuovaRichiesta = true;
    const timeOutId = setTimeout(() => handleApiSearching(), 300);
    return () => clearTimeout(timeOutId);
  }
  //clear ricerca
  function clearSearch() {
    setSearch("");
  }

  //navigate
  let navigate = useNavigate();

  //category list
  const [searching, setSearching] = useState(false);

  //go to top
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  useEffect(() => {
    if (search === "") {
      setSearching(false);
      setSearchResult({});
    }
  }, [search]);

  //go to category
  const handleNavigateGenre = (type) => {
    navigate("/genre/" + type.toLowerCase());
  };

  const handleApiSearching = async () => {
    await axios
      .request(options)
      .then(function (response) {
        console.log("data", response.data);

        let tmpPlaylist = [];
        let tmpTrack = [];

        response.data.playlists.items.forEach((el) => {
          let id = el.data.uri.split(":");
          let tmp = {
            id: id[2],
            img: el.data.images.items[0].sources[0].url,
            title: el.data.name,
            desc: el.data.descripion,
            artist: "Spotify",
            like: "",
            number: "",
            duration: "",
          };

          tmpPlaylist.push(tmp);
        });

        response.data.tracks.items.forEach((el) => {
          let tmp = {
            id: el.data.id,
            img: el.data.albumOfTrack.coverArt.sources[0].url,
            title: el.data.name,
            desc: "",
            artist: "el.data.artists.items[0].profile.name",
            like: "",
            number: "",
            duration: "",
          };

          tmpTrack.push(tmp);
        });

        let tmp = {
          sections: [
            {
              title: "Playlist",
              desc: [...tmpPlaylist],
            },
            {
              title: "Tracks",
              desc: [...tmpTrack],
            },
          ],
        };

        // console.log("result", tmp);
        setSearchResult(tmp);
        const timeOutId = setTimeout(() => setSearching(true), 2000);
        return () => clearTimeout(timeOutId);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/search/",
    params: {
      q: search,
      type: "multi",
      offset: "0",
      limit: "10",
      numberOfTopResults: "5",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_KEY,
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  return (
    <div className="explore">
      <div className="explore-title">
        <h2>Sfoglia tutto</h2>

        <div className="search-box" style={{ maxWidth: "250px" }}>
          <form role="search">
            <input
              maxLength="800"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck="false"
              placeholder="Cosa vuoi ascoltare?"
              data-testid="search-input"
              data-encore-id="type"
              onChange={handleSearch}
            />
          </form>
        </div>
      </div>
      {searching && Object.keys(searchResult).length ? (
        <div className="">
          <Home sections={searchResult} />
        </div>
      ) : (
        <>
          <div className="explore-container">
            <div className="explore-content">
              {categories.map((el, ind) => (
                <CategoryCard
                  keyId={ind + "x"}
                  name={el.name}
                  color={el.color}
                  url={el.url}
                  handleNavigateGenre={() => handleNavigateGenre(el.name)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
