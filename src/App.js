import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MusicPlayer from "./components/music-player/MusicPlayer";
import SpotifyPlayer from "./SpotifyPlayer";
import Dashboard from "./views/dashboard/Dashboard";
import Home from "./views/home/Home";
import Library from "./views/library/Library";
import Log from "./views/login/Log";
import Playlist from "./views/playlist/Playlist";
import Explore from "./views/search/Explore";
import Track from "./views/track/Track";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Explore />} />
            <Route path="player" element={<MusicPlayer />} />
            <Route path="playlist/:id" element={<Playlist />} />
            <Route path="track/:id" element={<Track />} />
            <Route path="library" element={<Library />} />
            <Route path="genre/:id" element={<Home />} />
            <Route path="album/:id" element={<Home />} />
            <Route path="spotify" element={<SpotifyPlayer />} />
          </Route>

          <Route path="/log" element={<Log />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
