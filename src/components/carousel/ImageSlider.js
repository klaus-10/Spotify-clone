import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import "./ImageSlider.css";

export default function ImageSlider(props) {
  return (
    <Carousel>
      {props.items.map((item, i) => (
        // <Item key={i} item={item} />
        <div key={i + "f"}>
          <img
            alt=""
            src={item.img}
            style={{ objectFit: "cover" }}
            height="300px"
            width="100%"
          />
        </div>
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
