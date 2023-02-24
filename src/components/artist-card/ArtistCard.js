import React from "react";

import "./ArtistCard.css";

export default function ArtistCard(props) {
  return (
    <section className="artist-card contentSpacing flex-left">
      <div className="artist-card-img">
        <img alt="" src="https://source.unsplash.com/YrtFlrLo2DQ" />
      </div>

      <div className="artist-card-desc">
        <a>artista</a>
        <h3>{props.artist}</h3>
      </div>
    </section>
  );
}
