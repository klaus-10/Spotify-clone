// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";

// import "./ImageSlider.css";
// import { List } from "@mui/material";

// function ImageSlider() {
//   return (
//     <Carousel>
//       {items.map((el, index) => (
//         <Carousel.Item>
//           <img className="d-block w-100" src={el.img} alt="First slide" />
//           <Carousel.Caption>
//             <h3>Indexl</h3>
//             <p>{el.description}</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

// export default ImageSlider;

// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";

// function ImageSlider() {
//   return (
//     <AwesomeSlider>
//       <div>1</div>
//       <div>2</div>
//       <div>3</div>
//       <div>4</div>
//     </AwesomeSlider>
//   );
// }

// export default ImageSlider;

// import Carousel from "nuka-carousel";

// import "./ImageSlider.css";

// const items = [
//   {
//     name: "Random Name #1",
//     description: "Probably the most random thing you have ever seen!",
//     img: "https://source.unsplash.com/9D_rUDe7xvA",
//   },
//   {
//     name: "Random Name #2",
//     description: "Hello World!",
//     img: "https://source.unsplash.com/Y1drF0Y3Oe0",
//   },
//   {
//     name: "Random Name #2",
//     description: "Hello World!",
//     img: "https://source.unsplash.com/__QqvTI5Edc",
//   },
//   {
//     name: "Random Name #2",
//     description: "Hello World!",
//     img: "https://source.unsplash.com/usfIE5Yc7PY",
//   },
//   {
//     name: "Random Name #2",
//     description: "Hello World!",
//     img: "https://source.unsplash.com/9LgM7NqXnCI",
//   },
// ];

// export default function ImageSlider() {
//   return (
//     <Carousel
//       autoplay
//       wrapAround={true}
//       slidesToShow={1}
//       className="image-slider-content"
//     >
//       {items.map((el, index) => (
//         <img src={el.img} />
//       ))}
//     </Carousel>
//   );
// }

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
          <img src={item.img} />
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
