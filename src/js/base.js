// TODO send this in his own file or in a init file
// NOTE This is constant for all books
/* create the link element */
// const linkElement = document.createElement("link");
/* add attributes */
// linkElement.setAttribute("rel", "stylesheet");
// linkElement.setAttribute("href", "./css/layouts.css");
/* attach to the document head */
// console.log(`loading stylesheet layuot ,layers ...`);
// document.getElementsByTagName("head")[0].appendChild(linkElement);

// const layers = document.createElement("link");
// layers.setAttribute("rel", "stylesheet");
// layers.setAttribute("href", "./css/layers.css");
// document.getElementsByTagName("head")[0].appendChild(layers);

// const sprite = document.createElement("script");
// sprite.type = "text/javascript";
// sprite.src = "./js/jquery-1.7.1.min.js";
// document.getElementsByTagName("head")[0].appendChild(sprite);
//$("head").append(s);

// import $ from "./jquery.js";
// $(function () {
//   console.log(`loading jquery as module ES6`);
// });
//
// const turn = document.createElement("script");
// turn.type = "text/javascript";
// turn.src = "./js/turn.min.js";
// document.getElementsByTagName("head")[0].appendChild(turn);

// TODO build the provisional slider mechanism
import * as slideModule from "./lib.js";
//import message from "./lib.js";
let greet_scaler = slideModule.greet("Slider.js");
console.log(greet_scaler); // Initialize module -> Slider.js
console.log(slideModule.message); // Init all libs and modules ...

const bookinit = {
  1: "https://ediq.mx/public/guias/guia_demo_uv_040321_2/pages/1.jpg",
  2: "json/source.json",
};

//initializing the first page
//slideModule.slide_to_page(bookinit[1], "legacy");
slideModule.book_request(bookinit[2]);
//
