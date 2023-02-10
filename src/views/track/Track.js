import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ArtistCard from "../../components/artist-card/ArtistCard";
import PlayMusic from "../../components/play-music-section/PlayMusic";
import MusicPlayer from "../../components/music-player/MusicPlayer";

import SongHeader from "../../components/playlist-header/SongHeader";
import TopArtistSongs from "../../components/top-artist-songs/TopArtistSongs";

import "./Track.css";

export default function Track(props) {
  const [play, setPlay] = useState(false);

  let navigate = useNavigate();

  const lyrics = [
    {
      startTimeMs: "11050",
      words: "You were the shadow to my light, did you feel us?",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "17650",
      words: "Another star, you fade away",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "21830",
      words: "Afraid our aim is out of sight, wanna see us",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "28580",
      words: "Alight",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "31140",
      words: "Where are you now?",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "36390",
      words: "Where are you now?",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "41620",
      words: "Where are you now?",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "44140",
      words: "Was it all in my fantasy?",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "47080",
      words: "Where are you now?",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "49650",
      words: "Were you only imaginary?",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "53730",
      words: "Where are you now?",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "57030",
      words: "Atlantis",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "59180",
      words: "Under the sea, under the sea",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "64450",
      words: "Where are you now?",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "67150",
      words: "Another dream",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "70470",
      words: "The monster's running wild inside of me",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "74420",
      words: "I'm faded",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "79710",
      words: "I'm faded",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "83510",
      words: "So lost, I'm faded",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "90440",
      words: "I'm faded",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "94260",
      words: "So lost, I'm faded",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "97620",
      words: "These shallow waters never met what I needed",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "104420",
      words: "I'm letting go, a deeper dive",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "108330",
      words: "Eternal silence of the sea, I'm breathing",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "115010",
      words: "Alive",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "117670",
      words: "Where are you now?",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "122920",
      words: "Where are you now?",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "128330",
      words: "Under the bright but faded lights",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "130930",
      words: "You set my heart on fire",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "133680",
      words: "Where are you now?",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "136450",
      words: "Where are you now?",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "138920",
      words: "♪",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "151190",
      words: "Where are you now?",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "154340",
      words: "Atlantis",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "156290",
      words: "Under the sea, under the sea",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "161670",
      words: "Where are you now?",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "164480",
      words: "Another dream",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "167680",
      words: "The monster's running wild inside of me",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "171700",
      words: "I'm faded",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "177130",
      words: "I'm faded",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "180970",
      words: "So lost, I'm faded",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "187660",
      words: "I'm faded",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "191560",
      words: "So lost, I'm faded",
      syllables: [],
      endTimeMs: "0",
    },
    {
      startTimeMs: "195310",
      words: "",
      syllables: [],
      endTimeMs: "0",
    },
  ];

  const songs = [
    {
      title: "Cookie's and Cream mashmellow cane",
      artist: "Gue",
      featuring: ["Rose Vallain", "Anna", "Sfera"],
      img: "https://source.unsplash.com/YrtFlrLo2DQ",
      album: "Madreperla",
      audio: "",
      duration: "3:15",
      views: "1000000",
    },
    {
      title: "Cookie's and Cream",
      artist: "Gue",
      featuring: ["Rose Vallain", "Anna", "Sfera"],
      img: "https://source.unsplash.com/OKLqGsCT8qs",
      album: "Madreperla",
      audio: "",
      duration: "3:15",

      views: "1000000",
    },
    {
      title: "Cookie's and Cream",
      artist: "Gue",
      featuring: ["Rose Vallain", "Anna", "Sfera"],
      img: "https://source.unsplash.com/Kl2t5U6Gkm0",
      album: "Madreperla",
      audio: "",
      duration: "3:15",

      views: "1000000",
    },
    {
      title: "Cookie's and Cream",
      artist: "Gue",
      featuring: ["Rose Vallain", "Anna", "Sfera"],
      img: "https://source.unsplash.com/Kl2t5U6Gkm0",
      album: "Madreperla",
      audio: "",
      duration: "3:15",
      views: "1000000",
    },
    {
      title: "Cookie's and Cream",
      artist: "Gue",
      featuring: ["Rose Vallain", "Anna", "Sfera"],
      img: "https://source.unsplash.com/Kl2t5U6Gkm0",
      album: "Madreperla",
      audio: "",
      duration: "3:15",
      views: "1000000",
    },
    {
      title: "Cookie's and Cream",
      artist: "Gue",
      featuring: ["Rose Vallain", "Anna", "Sfera"],
      img: "https://source.unsplash.com/Kl2t5U6Gkm0",
      album: "Madreperla",
      audio: "",
      duration: "3:15",

      views: "1000000",
    },
    {
      title: "Cookie's and Cream",
      artist: "Gue",
      featuring: ["Rose Vallain", "Anna", "Sfera"],
      img: "https://source.unsplash.com/Kl2t5U6Gkm0",
      album: "Madreperla",
      audio: "",
      duration: "3:15",

      views: "1000000",
    },
    {
      title: "Cookie's and Cream",
      artist: "Gue",
      featuring: ["Rose Vallain", "Anna", "Sfera"],
      img: "https://source.unsplash.com/Kl2t5U6Gkm0",
      album: "Madreperla",
      audio: "",
      duration: "3:15",
      views: "1000000",
    },
    {
      title: "Cookie's and Cream",
      artist: "Gue",
      featuring: ["Rose Vallain", "Anna", "Sfera"],
      img: "https://source.unsplash.com/Kl2t5U6Gkm0",
      album: "Madreperla",
      audio: "",
      duration: "3:15",
      views: "1000000",
    },
    {
      title: "Cookie's and Cream",
      artist: "Gue",
      featuring: ["Rose Vallain", "Anna", "Sfera"],
      img: "https://source.unsplash.com/Kl2t5U6Gkm0",
      album: "Madreperla",
      audio: "",
      duration: "3:15",
      views: "1000000",
    },
  ];

  const handlePlayParent = () => {
    setPlay(!play);
  };

  return (
    <div className="track">
      <SongHeader
        music={true}
        artist={"artist"}
        listNumber={50}
        year={2022}
        duration={"3:15"}
        title={"Track Titolo"}
        desc={"Descrizione della track"}
        img={"https://source.unsplash.com/random"}
      />

      <PlayMusic playFunc={handlePlayParent} play={play} />

      <div className="track-lyrics contentSpacing">
        <h2>Lyrics</h2>

        {lyrics.map((el, index) => (
          <p>{el.words}</p>
        ))}
      </div>
      <ArtistCard artist={"Nome artista"} />

      <TopArtistSongs songs={songs} />

      {/* {play && ( */}
      <MusicPlayer
        handlePlayParent={handlePlayParent}
        play={play}
        src={
          "https://p.scdn.co/mp3-preview/a6f0ec5cde3895ef98c6114c128041372d89c63c?cid=d8a5ed958d274c2e8ee717e6a4b0971d"
        }
      />
      {/* )} */}

      {/* <div className="music-player"></div>

      <h1>Music</h1> */}
    </div>
  );
}
