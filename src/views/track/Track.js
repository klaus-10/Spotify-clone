import axios from "axios";
import prettyMilliseconds from "pretty-ms";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import ArtistCard from "../../components/artist-card/ArtistCard";
import MusicPlayer from "../../components/music-player/MusicPlayer";
import PlayMusic from "../../components/play-music-section/PlayMusic";
import SongHeader from "../../components/playlist-header/SongHeader";
import TopArtistSongs from "../../components/top-artist-songs/TopArtistSongs";

import "./Track.css";

export default function Track(props) {
  const location = useLocation();

  const childRef = useRef();
  const [play, setPlay] = useState(false);
  const [lyrics, setLyrics] = useState([]);
  const [track, setTrack] = useState({});
  console.log("track", track);
  const [topArtistSongs, setTopArtistSongs] = useState([]);

  // Id params from url
  const { id } = useParams();

  const handlePlayParent = () => {
    setPlay(!play);
    childRef.current.play();
  };

  // set current track
  useEffect(() => {
    if (localStorage.getItem("currentPlaylistTracks")) {
      let tmp = JSON.parse(localStorage.getItem("currentPlaylistTracks"));

      for (let i = 0; i < tmp.length; i++) {
        if (tmp[i].track.id === id) {
          setTrack({ ...tmp[i].track });
          break;
        } else {
          getTrack();
          getLyrics();
          getTop10ArtistsSongs();
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
  }, [location.pathname]);

  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/track_lyrics/",
    params: { id: id },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_HOST,
    },
  };

  const getLyrics = async () => {
    await axios
      .request(options)
      .then(function (response) {
        console.log("Lyrics", response);
        setLyrics(response.data.lyrics.lines);
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
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_HOST,
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
    params: { id: id, offset: "0", limit: "10" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_HOST,
    },
  };

  const getTop10ArtistsSongs = async () => {
    await axios
      .request(optionsSongs)
      .then(function (response) {
        console.log("top", response.data);
        setTopArtistSongs(
          response.data.data?.artist?.discography?.singles?.items
        );
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

      {topArtistSongs && (
        <TopArtistSongs
          artist={track && track.artists && track?.artists[0].name}
          songs={topArtistSongs && topArtistSongs}
        />
      )}

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
    </div>
  );
}
