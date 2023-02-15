import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import Axios from "axios";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

//transition
import Fade from "@mui/material/Fade";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import categories from "./CategoryList.json";
import "./Explore.css";
import CategoryCard from "../../components/category-card/CategoryCard";

const cat = [
  {
    name: "Palestra",
    img: "https://source.unsplash.com/Kl2t5U6Gkm0",
  },
  {
    name: "Calcio",
    img: "https://source.unsplash.com/iKJULbPcilA",
  },
  {
    name: "Nuoto",
    img: "https://source.unsplash.com/F20aPGvyhrQ",
  },
  {
    name: "Basket",
    img: "https://source.unsplash.com/QAX5Ylx-lKo",
  },
  {
    name: "Tennis",
    img: "https://source.unsplash.com/6D2Lmtv_X8A",
  },
  {
    name: "Box",
    img: "https://source.unsplash.com/XmvuWRDimrg",
  },
  {
    name: "Palestra",
    img: "https://source.unsplash.com/Kl2t5U6Gkm0",
  },
  {
    name: "Calcio",
    img: "https://source.unsplash.com/iKJULbPcilA",
  },
  {
    name: "Nuoto",
    img: "https://source.unsplash.com/F20aPGvyhrQ",
  },
  {
    name: "Basket",
    img: "https://source.unsplash.com/QAX5Ylx-lKo",
  },
  {
    name: "Tennis",
    img: "https://source.unsplash.com/6D2Lmtv_X8A",
  },
  {
    name: "Box",
    img: "https://source.unsplash.com/XmvuWRDimrg",
  },
  {
    name: "Palestra",
    img: "https://source.unsplash.com/Kl2t5U6Gkm0",
  },
  {
    name: "Calcio",
    img: "https://source.unsplash.com/iKJULbPcilA",
  },
  {
    name: "Nuoto",
    img: "https://source.unsplash.com/F20aPGvyhrQ",
  },
  {
    name: "Basket",
    img: "https://source.unsplash.com/QAX5Ylx-lKo",
  },
  {
    name: "Tennis",
    img: "https://source.unsplash.com/6D2Lmtv_X8A",
  },
  {
    name: "Box",
    img: "https://source.unsplash.com/XmvuWRDimrg",
  },
];

export default function Explore() {
  //search parameter
  const [search, setSearch] = useState("");
  //Gestisce la ricerca
  function handleSearch(e) {
    setSearch(e.target.value);
    // api call to track url and redirect to the track pagee
    // nuovaRichiesta = true;
    // const timeOutId = setTimeout(() => getData(sortBy, e.target.value), 500);
    // return () => clearTimeout(timeOutId);
  }
  //clear ricerca
  function clearSearch() {
    setSearch("");
  }

  //navigate
  let navigate = useNavigate();

  //userUid
  const userLocalUid = localStorage.getItem("user");

  //category list
  const [category, setCategory] = useState(cat);

  //category list
  const [music, setMusic] = useState(false);

  //go to top
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  //go to category
  const handleNavigateGenre = (type) => {
    navigate("/genre/" + type.toLowerCase());
  };
  return (
    <div className="explore">
      {music ? (
        <div className="">
          <Outlet />
        </div>
      ) : (
        <>
          <div className="explore-title">
            <h2>Sfoglia tutto</h2>
            {/* <TextField
              sx={{
                marginTop: 1,
                minWidth: "350px",
                color: "white",
                borderColor: "white",
              }}
              value={search}
              onChange={handleSearch}
              label={""}
              autoComplete="off"
              InputLabelProps={{ shrink: false }}
              placeholder={"Search for any exercise in the database"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    {search !== "" && (
                      <CloseIcon
                        style={{ cursor: "pointer" }}
                        onClick={clearSearch}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              variant="standard"
            /> */}
          </div>

          <div className="explore-container">
            <div className="explore-content">
              {categories.map((el, ind) => (
                <CategoryCard
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
