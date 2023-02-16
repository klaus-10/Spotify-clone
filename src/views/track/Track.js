import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import prettyMilliseconds from "pretty-ms";

import ArtistCard from "../../components/artist-card/ArtistCard";
import PlayMusic from "../../components/play-music-section/PlayMusic";
import MusicPlayer from "../../components/music-player/MusicPlayer";
import SongHeader from "../../components/playlist-header/SongHeader";
import TopArtistSongs from "../../components/top-artist-songs/TopArtistSongs";

import "./Track.css";

export default function Track(props) {
  const childRef = useRef();
  const [play, setPlay] = useState(false);
  const [lyrics, setLyrics] = useState([]);
  const [track, setTrack] = useState({});
  const [topArtistSongs, setTopArtistSongs] = useState([]);

  // Id params from url
  const { id } = useParams();

  let navigate = useNavigate();

  // const lyrics = [
  //   {
  //     startTimeMs: "11050",
  //     words: "You were the shadow to my light, did you feel us?",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "17650",
  //     words: "Another star, you fade away",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "21830",
  //     words: "Afraid our aim is out of sight, wanna see us",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "28580",
  //     words: "Alight",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "31140",
  //     words: "Where are you now?",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "36390",
  //     words: "Where are you now?",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "41620",
  //     words: "Where are you now?",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "44140",
  //     words: "Was it all in my fantasy?",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "47080",
  //     words: "Where are you now?",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "49650",
  //     words: "Were you only imaginary?",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "53730",
  //     words: "Where are you now?",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "57030",
  //     words: "Atlantis",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "59180",
  //     words: "Under the sea, under the sea",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "64450",
  //     words: "Where are you now?",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "67150",
  //     words: "Another dream",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "70470",
  //     words: "The monster's running wild inside of me",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "74420",
  //     words: "I'm faded",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "79710",
  //     words: "I'm faded",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "83510",
  //     words: "So lost, I'm faded",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "90440",
  //     words: "I'm faded",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "94260",
  //     words: "So lost, I'm faded",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "97620",
  //     words: "These shallow waters never met what I needed",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "104420",
  //     words: "I'm letting go, a deeper dive",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "108330",
  //     words: "Eternal silence of the sea, I'm breathing",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "115010",
  //     words: "Alive",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "117670",
  //     words: "Where are you now?",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "122920",
  //     words: "Where are you now?",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "128330",
  //     words: "Under the bright but faded lights",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "130930",
  //     words: "You set my heart on fire",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "133680",
  //     words: "Where are you now?",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "136450",
  //     words: "Where are you now?",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "138920",
  //     words: "♪",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "151190",
  //     words: "Where are you now?",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "154340",
  //     words: "Atlantis",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "156290",
  //     words: "Under the sea, under the sea",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "161670",
  //     words: "Where are you now?",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "164480",
  //     words: "Another dream",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "167680",
  //     words: "The monster's running wild inside of me",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "171700",
  //     words: "I'm faded",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "177130",
  //     words: "I'm faded",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "180970",
  //     words: "So lost, I'm faded",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "187660",
  //     words: "I'm faded",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "191560",
  //     words: "So lost, I'm faded",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  //   {
  //     startTimeMs: "195310",
  //     words: "",
  //     syllables: [],
  //     endTimeMs: "0",
  //   },
  // ];

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
    childRef.current.play();
  };

  console.log(track);

  const optionsSingels = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/artist_singles/",
    params: { id: "2w9zwq3AktTeYYMuhMjju8", offset: "0", limit: "10" },
    headers: {
      "X-RapidAPI-Key": "fbda0b7f98mshfc3b56db77a522ap1fb738jsn10cc01abb78e",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };

  const getSingles = async () => {
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // set current track
  useEffect(() => {
    if (localStorage.getItem("currentPlaylistTracks")) {
      let tmp = JSON.parse(localStorage.getItem("currentPlaylistTracks"));

      for (let i = 0; i < tmp.length; i++) {
        if (tmp[i].track.id === id) {
          setTrack({ ...tmp[i].track });
          break;
        }
      }

      // todo api call to lyrics
      getLyrics();
      getTop10ArtistsSongs();
    } else {
      getTrack();
      getLyrics();
      getTop10ArtistsSongs();
    }
  }, []);

  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/track_lyrics/",
    params: { id: id },
    headers: {
      "X-RapidAPI-Key": "fbda0b7f98mshfc3b56db77a522ap1fb738jsn10cc01abb78e",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };

  const getLyrics = async () => {
    await axios
      .request(options)
      .then(function (response) {
        setLyrics(response.data?.lines);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const optionsTrack = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/tracks/",
    params: { ids: id },
    headers: {
      "X-RapidAPI-Key": "fbda0b7f98mshfc3b56db77a522ap1fb738jsn10cc01abb78e",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };
  const getTrack = async () => {
    await axios
      .request(optionsTrack)
      .then(function (response) {
        setTrack(response.data.tracks[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const optionsSongs = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/artist_singles/",
    params: { id: "2w9zwq3AktTeYYMuhMjju8", offset: "0", limit: "10" },
    headers: {
      "X-RapidAPI-Key": "fbda0b7f98mshfc3b56db77a522ap1fb738jsn10cc01abb78e",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };

  const getTop10ArtistsSongs = async () => {
    await axios
      .request(optionsSongs)
      .then(function (response) {
        console.log("top", response.data);
        setTopArtistSongs(response.data.data.artist.discography.singles.items);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="track">
      <SongHeader
        music={true}
        artist={track && track.artists && track?.artists[0].name}
        listNumber={track?.popularity}
        year={track?.album?.release_date}
        duration={prettyMilliseconds(
          track?.duration_ms ? track?.duration_ms : 0,
          {
            secondsDecimalDigits: 0,
          }
        )}
        title={track?.name}
        desc={"Descrizione della track"}
        img={
          track &&
          track.album &&
          track.album.images &&
          track?.album.images[0].url
        }
      />

      <PlayMusic playFunc={handlePlayParent} play={play} />

      <div className="track-lyrics contentSpacing">
        <h2>Lyrics</h2>

        {lyrics?.map((el, index) => (
          <p key={index}>{el.words}</p>
        ))}
      </div>
      <ArtistCard artist={track && track.artists && track?.artists[0].name} />

      <TopArtistSongs
        artist={track && track.artists && track?.artists[0].name}
        songs={topArtistSongs}
      />

      {/* {play && ( */}
      {track && track.preview_url && (
        <MusicPlayer
          handlePlayParent={handlePlayParent}
          play={play}
          ref={childRef}
          src={track.preview_url}
          artist={track && track.artists && track?.artists[0].name}
          img={
            track &&
            track.album &&
            track.album.images &&
            track?.album.images[0].url
          }
        />
      )}
      {/* )} */}

      {/* <div className="music-player"></div>

      <h1>Music</h1> */}
    </div>
  );
}
