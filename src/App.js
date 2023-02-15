import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// context
// import { UserContex } from "./UserContext";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./views/dashboard/Dashboard";
import Log from "./views/login/Log";
import Home from "./views/home/Home";
import Explore from "./views/search/Explore";
import MusicList from "./components/music-list/MusicList";
import MusicPlayer from "./components/music-player/MusicPlayer";
import Playlist from "./views/playlist/Playlist";
import Track from "./views/track/Track";
import Library from "./views/library/Library";
// import GoToTop from "./utils/goToTop";

function App() {
  // stato generale app login user
  // const [value, setValue] = useState(true);

  return (
    // <UserContex.Provider value={{ value, setValue }}>
    <Router>
      <div className="App">
        {/* <GoToTop /> */}
        <Routes>
          <Route path="/" exact element={<Dashboard />}>
            <Route path="home" exact element={<Home />} />
            <Route path="search" exact element={<Explore />} />
            <Route path="player" exact element={<MusicPlayer />} />
            <Route path="playlist/:id" exact element={<Playlist />} />
            <Route path="track" exact element={<Track />} />
            <Route path="library" exact element={<Library />} />
            <Route path="genre/:id" exact element={<Home />} />
          </Route>

          <Route path="/log" exact element={<Log />} />
        </Routes>
      </div>
    </Router>
    // </UserContex.Provider>
  );
}

export default App;
