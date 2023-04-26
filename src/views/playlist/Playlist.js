import AccessTimeIcon from "@mui/icons-material/AccessTime";
import axios from "axios";
import prettyMilliseconds from "pretty-ms";
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import MusicList from "../../components/music-list/MusicList";

import SongHeader from "../../components/playlist-header/SongHeader";
import "./Playlist.css";

export default function Playlist(props) {
  // data info
  const [playlistInfo, setPlaylistInfo] = useState({
    collaborative: false,
    description:
      "<a>NKVT</a> sunar: yılın favori Türkçe rap parçaları. Kapak: UZI",
    followers: { total: 10000 },
    images: [{ url: "" }],
    name: "NKVT 2021",
    owner: {},
    public: false,
    tracks: {},
    uri: "spotify:playlist:37i9dQZF1DX4Wsb4d7NKfP",
  });
  const [playlistInfoDuration, setPlaylistInfoDuration] = useState(0);

  const [playlistTracks, setPlaylistTracks] = useState([]);

  // previus playlist track state
  const [playlistTracksTmp, setPlaylistTracksTmp] = useState([]);

  const [loading, setloading] = useState(false);

  const outletContextFilter = useOutletContext();

  let navigate = useNavigate();

  // Id params from url
  const { id } = useParams();

  //go to top
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/playlist_tracks/",
    params: { id: id, offset: "0" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_HOST,
    },
  };

  const optionsInfo = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/playlist/",
    params: { id: id },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_HOST,
    },
  };

  useEffect(() => {
    if (outletContextFilter.filter === "") {
      setPlaylistTracks(playlistTracksTmp);
    } else {
      setPlaylistTracks(
        playlistTracksTmp.filter(
          (el) =>
            el.track.name
              .toLowerCase()
              .includes(outletContextFilter.filter.toLowerCase()) ||
            el.track.album.name
              .toLowerCase()
              .includes(outletContextFilter.filter.toLowerCase())
        )
      );
    }
  }, [outletContextFilter.filter]);

  useEffect(() => {
    if (
      localStorage.getItem("currentPlaylistId") !== id ||
      !localStorage.getItem("currentPlaylistId")
    ) {
      setloading(true);
      localStorage.setItem("currentPlaylistId", id);
      getPlaylistInfo();
      getPlaylistTracks();
    } else {
      setPlaylistInfo(JSON.parse(localStorage.getItem("currentPlaylistInfo")));
      setPlaylistTracks(
        JSON.parse(localStorage.getItem("currentPlaylistTracks"))
      );
      setPlaylistTracksTmp(
        JSON.parse(localStorage.getItem("currentPlaylistTracks"))
      );
    }
  }, []);

  useEffect(() => {
    if (playlistInfo) {
      calcDurationPlaylist(playlistInfo);
    }
  }, []);

  const getPlaylistTracks = async () => {
    await axios
      .request(options)
      .then((response) => {
        localStorage.setItem(
          "currentPlaylistTracks",
          JSON.stringify(response.data.items)
        );
        setPlaylistTracks(response.data.items);
        setloading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getPlaylistInfo = async () => {
    await axios
      .request(optionsInfo)
      .then((response) => {
        localStorage.setItem(
          "currentPlaylistInfo",
          JSON.stringify(response.data)
        );
        setPlaylistInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const calcDurationPlaylist = (arr) => {
    let c = 0;
    arr.tracks?.items?.map((el) => (c += el.track.duration_ms));
    setPlaylistInfoDuration(c);
  };

  return (
    <>
      {loading ? (
        <div className="playlist">
          <div className="playlist-container">
            <SongHeader
              playlist={true}
              music={false}
              artist={""}
              listNumber={""}
              year={""}
              duration={""}
              title={""}
              desc={""}
              follower={""}
              img={""}
            />

            <section className="playlist-content">
              <div className="playlist-content-table">
                <div className="music-list-number flex-center">
                  <h2></h2>
                </div>
                <div className="music-list-title flex-left">
                  <div className="music-list-title-desc">
                    <h2></h2>
                  </div>
                </div>
                <div className="music-list-album flex-center">
                  <h2></h2>
                </div>
                <div className="music-list-data flex-center">
                  <h2></h2>
                </div>
                <div className="music-list-duration flex-center">
                  {/* <AccessTimeIcon /> */}
                </div>
              </div>
              {/* <MusicListHeader /> */}
              {["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"].map(
                (el, index) => (
                  <div
                    onClick={() => navigate("/track/" + el.track?.id)}
                    key={index}
                  >
                    <MusicList
                      number={index + 1}
                      img={""}
                      title={""}
                      artist={""}
                      album={""}
                      data={""}
                      duration={""}
                      loading={true}
                      type={"tracks"}
                    />
                  </div>
                )
              )}
            </section>
          </div>
        </div>
      ) : (
        <div className="playlist">
          <div className="playlist-container">
            <SongHeader
              playlist={true}
              music={false}
              artist={"artist"}
              listNumber={playlistInfo?.tracks?.total}
              year={""}
              duration={prettyMilliseconds(playlistInfoDuration)}
              title={playlistInfo?.name}
              desc={playlistInfo?.description}
              follower={playlistInfo?.followers?.total.toLocaleString("de-DE", {
                minimumFractionDigits: 0,
              })}
              img={
                playlistInfo &&
                playlistInfo.images &&
                playlistInfo.images?.length !== 0 &&
                playlistInfo?.images[0]?.url
              }
            />

            <section className="playlist-content">
              <div className="playlist-content-table">
                <div className="music-list-number flex-center">
                  <h2>#</h2>
                </div>
                <div className="music-list-title flex-left">
                  <div className="music-list-title-desc">
                    <h2>title</h2>
                  </div>
                </div>
                <div className="music-list-album flex-center">
                  <h2>album</h2>
                </div>
                <div className="music-list-data flex-center">
                  <h2>data</h2>
                </div>
                <div className="music-list-duration flex-center">
                  <AccessTimeIcon />
                </div>
              </div>
              {/* <MusicListHeader /> */}
              {playlistTracks?.map((el, index) => (
                <div
                  onClick={() => navigate("/track/" + el.track?.id)}
                  key={index}
                >
                  <MusicList
                    number={index + 1}
                    img={el.track?.album?.images[0]?.url}
                    title={el.track?.name}
                    artist={el.track?.artists}
                    album={el.track?.album?.name}
                    data={el.track?.album?.release_date}
                    duration={prettyMilliseconds(el.track?.duration_ms, {
                      secondsDecimalDigits: 0,
                    })}
                    type={"tracks"}
                  />
                </div>
              ))}
            </section>
          </div>
        </div>
      )}
    </>
  );
}
