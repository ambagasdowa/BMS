// TODO send this in his own file or in a init file
// NOTE This is constant for all books
/* create the link element */
const linkElement = document.createElement("link");
/* add attributes */
linkElement.setAttribute("rel", "stylesheet");
linkElement.setAttribute("href", "./css/layouts.css");
/* attach to the document head */
console.log(`loading stylesheet layuot ,layers ...`);
document.getElementsByTagName("head")[0].appendChild(linkElement);

const layers = document.createElement("link");
layers.setAttribute("rel", "stylesheet");
layers.setAttribute("href", "./css/layers.css");
/* attach to the document head */
document.getElementsByTagName("head")[0].appendChild(layers);

// TODO build the provisional slider mechanism
import * as slideModule from "./lib.js";
//import message from "./lib.js";
let greet_scaler = slideModule.greet("Slider.js");
console.log(greet_scaler); // Initialize module -> Slider.js
console.log(slideModule.message); // Init all libs and modules ...

const bookinit = {
  1: "https://ediq.mx/public/guias/guia_demo_uv_040321_2/pages/1.jpg",
};

//initializing the first page
slideModule.slide_to_page(bookinit[1], "legacy");
//
