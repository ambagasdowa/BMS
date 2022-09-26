const message = "Initializing all libs and  modules for slider";

function greet(name) {
  return `Starting module =>, ${name} by Ambagasdowa`;
}
export { greet, message };

function lpobj(obj_looper) {
  // console.log(`PropertyNames => ${Object.getOwnPropertyNames(obj_looper)}`);
  console.log(`PropertyKeys => ${Object.keys(obj_looper)}`);
  console.log(`PropertyValues => ${Object.values(obj_looper)}`);

  //  for (const prop in obj_looper) {
  //    console.log(`${prop} : ${obj_looper[prop]}`);
  //  }
}

function slide_to_page(page) {
  let cssRules =
    "#layer1{background: url(" + page + ") no-repeat;background-size:91%;}";
  /* create the style element */
  let styleElement = document.createElement("style");
  /* add style rules to the style element */
  styleElement.appendChild(document.createTextNode(cssRules));
  /* attach the style element to the document head */
  document.getElementsByTagName("head")[0].appendChild(styleElement);
  //  document.querySelector("#layer1").classList.add("fadeIn");
}

export { slide_to_page };

function formsMaps(css_idx) {
  console.log("Maps => " + css_idx);
  let cssMaps = book_pages_maps[css_idx];
  /* create the style element */
  let styleMapsElement = document.createElement("style");
  /* add style rules to the style element */
  styleMapsElement.appendChild(document.createTextNode(cssMaps));
  /* attach the style element to the document head */
  document.getElementsByTagName("head")[0].appendChild(styleMapsElement);
}

function insert_inputs(idx_input) {
  // TODO : Working whit this
  const in_puts = document.querySelector(".controls form");
  // console.log(`query tag before reset .controls>form => ${lpobj(in_puts)}`);
  console.log(in_puts);
  in_puts.innerHTML = "";
  let new_binputs = document.getElementById("book_canvas"); // Form
  //  console.log(`new_binputs : Form tag =>  ${new_binputs}`);
  //  console.log(`inputsLength => ${Object.keys(book_inputs[idx_input]).length}`);

  const inputs = book_inputs[idx_input];
  for (const input of inputs) {
    let inputx = document.createElement("input");
    for (const key in input) {
      if (Object.hasOwnProperty.call(input, key)) {
        inputx[key] = input[key];
      }
    }
    new_binputs.appendChild(inputx);
    //paper3.classList.add("flipped");
    //book.style.transform = "translateX(100%)";
  }
}

//===========================================================================//
// TODO :
// NOTE : the slider , Carousel Mechanism
//===========================================================================//
let currentIndex = 1;
// TODO : response from server book logic
// NOTE : this must be a response query
// Insert a block of rules into a page with javascript
// This method creates a style element, inserts our CSS rules as a string, then attaches the element to the HTML head.
// And this come from external json source response
//	json_response = {
//										book_id:
//														[
//															{book_pages},
//															{book_inputs},
//															{book_pages_maps}
//														]
//									}

// NOTE book_pages
const book_pages = {
  1: "https://ediq.mx/public/guias/guia_demo_uv_040321_2/pages/1.jpg",
  2: "./book-source/guia/unam/001/pages/14.jpg",
  3: "./book-source/guia/unam/001/pages/15.jpg",
  4: "./book-source/guia/unam/001/pages/147.jpg",
  5: "./book-source/guia/unam/001/pages/35.jpg",
  6: "./book-source/guia/unam/001/pages/36.jpg",
  7: "https://ediq.mx/public/guias/guia_demo_uv_040321_2/pages/7.jpg",
  8: "./book-source/guia/unam/001/pages/180.jpg",
};

// TODO : Positions section
// NOTE book_pages_maps
const book_pages_maps = {
  1: "",
  2: "#a2{top:53.2%;left:12.8%;width:67%;} \
      #b2{top:54.7%;left:18.5%;width:61.3%;} \
      #cx{top:56.2%;left:18.6%;width:61.2%;} \
      #d2{top:68.3%;left:12.8%;width:67%;} \
      #e2{top:69.8%;left:18.5%;width:61.3%;} \
      #f2{top:71.2%;left:18.6%;width:61.2%;} \
      #g2{top:87.5%;left:12.8%;width:67%;} \
      #h2{top:89%;left:18.5%;width:61.3%;} \
      #i2{top:90.6%;left:18.6%;width:61.2%;} \
     ",
  3: " \
      #a{top:36%;left:45.3%;width:3%;} \
      #b{top:37.5%;left:45.3%;width:3%;} \
      #c{top:38.9%;left:45.3%;width:3%;} \
      #d{top:40.4%;left:45.3%;width:3%;} \
      #a2{top:44.9%;left:45.3%;width:3%;} \
      #b2{top:46.3%;left:45.3%;width:3%;} \
      #c2{top:47.8%;left:45.3%;width:3%;} \
      #d2{top:49.2%;left:45.3%;width:3%;} \
     ",
  4: "",
  5: "#a{top:70.2%;left:190px;width:3%;}#b{bottom:17.5%;right:66.5%;width:3%;}#c{top:80.2%;left:43%;width:3%;}",
  6: "#a{top:60.2%;left:190px;width:3%;}#b{bottom:17.5%;right:66.5%;width:3%;}#c{top:80.2%;left:43%;width:3%;}",
  7: "#a{top:90.2%;left:190px;width:3%;}#b{bottom:17.5%;right:66.5%;width:3%;}#c{top:80.2%;left:43%;width:3%;}",
  8: "#a{top:90.2%;left:190px;width:3%;}#b{bottom:17.5%;right:66.5%;width:3%;}#c{top:80.2%;left:43%;width:3%;}",
};

// NOTE book_inputs
const book_inputs = {
  1: [],
  2: [
    {
      type: "text",
      name: "a2",
      id: "a2",
      autofocus: "on",
      placeholder: "Responder Actividad 3 Pregunta 1",
      class: "saved",
      value: "Some Correct Previous Answer not editable",
      disabled: "disabled",
      style: "color:magenta!important;",
    },
    {
      type: "text",
      name: "b222",
      id: "b2",
      placeholder: "Responder Actividad 3  Pregunta 2",
      class: "edition",
      value: "Previous Answer and editable",
    },
    {
      type: "text",
      name: "c222",
      id: "cx",
      placeholder: "Responder Actividad 3 Pregunta 3",
      class: "blank",
    },
    {
      type: "text",
      name: "a2",
      id: "d2",
      autofocus: "on",
      placeholder: "Responder Actividad 3 Pregunta 4",
      class: "saved",
      value: "Some Correct Previous Answer not editable",
      disabled: "disabled",
      style: "color:magenta!important;",
    },
    {
      type: "text",
      name: "b222",
      id: "e2",
      placeholder: "Responder Actividad 3 Pregunta 5",
      class: "edition",
      value: "Previous Answer and editable",
    },
    {
      type: "text",
      name: "c222",
      id: "f2",
      placeholder: "Responder Actividad 3 Pregunta 6",
      class: "blank",
    },
    {
      type: "text",
      name: "c222",
      id: "g2",
      placeholder: "Responder Actividad 3 Pregunta 7",
      class: "blank",
    },
    {
      type: "text",
      name: "c222",
      id: "h2",
      placeholder: "Responder Actividad 3 Pregunta 8",
      class: "blank",
    },
    {
      type: "text",
      name: "c222",
      id: "i2",
      placeholder: "Responder Actividad 3 Pregunta 9",
      class: "blank",
    },
  ],
  3: [
    {
      type: "radio",
      name: "actividad-one",
      id: "a",
      autofocus: "on",
      placeholder: "a3333",
      class: "option-input radio",
      value: "a",
      onclick: "onlyOne(this,'actividad-one')",
    },
    {
      type: "radio",
      name: "actividad-one",
      id: "b",
      value: "b",
      class: "option-input radio",
      onclick: "onlyOne(this,'actividad-one')",
    },
    {
      type: "radio",
      name: "actividad-one",
      id: "c",
      value: "c",
      class: "option-input radio",
      onclick: "onlyOne(this,'actividad-one')",
    },
    {
      type: "radio",
      name: "actividad-one",
      id: "d",
      value: "d",
      class: "option-input radio",
      onclick: "onlyOne(this,'actividad-one')",
    },

    {
      type: "radio",
      name: "actividad-two",
      id: "a2",
      autofocus: "on",
      placeholder: "a3333",
      class: "option-input radio",
      value: "a",
      onclick: "onlyOne(this,'actividad-two')",
    },
    {
      type: "radio",
      name: "actividad-two",
      id: "b2",
      value: "b",
      class: "option-input radio",
      onclick: "onlyOne(this,'actividad-two')",
    },
    {
      type: "radio",
      name: "actividad-two",
      id: "c2",
      value: "c",
      class: "option-input radio",
      onclick: "onlyOne(this,'actividad-two')",
    },
    {
      type: "radio",
      name: "actividad-two",
      id: "d2",
      value: "d",
      class: "option-input radio",
      onclick: "onlyOne(this,'actividad-two')",
    },
  ],
  4: [],
  5: [
    {
      type: "text",
      name: "a",
      id: "a",
      autofocus: "on",
      placeholder: "a5555",
      class: "someclasse",
    },
    { type: "text", name: "b", id: "b", placeholder: "b55555" },
    { type: "text", name: "c", id: "c", placeholder: "c55555" },
  ],
  6: [
    {
      type: "text",
      name: "a",
      id: "a",
      autofocus: "on",
      placeholder: "a6",
      class: "someclassf",
    },
    { type: "text", name: "b", id: "b", placeholder: "b6" },
    { type: "text", name: "c", id: "c", placeholder: "c6" },
  ],
  7: [
    {
      type: "text",
      name: "a",
      id: "a",
      autofocus: "on",
      placeholder: "a7",
      class: "someclassg",
    },
    { type: "text", name: "b", id: "b", placeholder: "b7" },
    { type: "text", name: "c", id: "c", placeholder: "c7" },
  ],
  8: [
    {
      type: "text",
      name: "a",
      id: "a",
      autofocus: "on",
      placeholder: "a8",
      class: "someclassh",
    },
    { type: "text", name: "b", id: "b", placeholder: "b8" },
    { type: "text", name: "c", id: "c", placeholder: "c888" },
  ],
};

function setSlides(num) {
  displaySlides((currentIndex += num));
}

function displaySlides(num) {
  var x;
  const slides = { length: Object.keys(book_pages).length }; // emulates the query inside DOM
  console.log("TotalPages => " + slides.length);

  if (num > slides.length) {
    currentIndex = 1;
  }
  if (num < 1) {
    currentIndex = slides.length;
  }
  console.log("currentIndex => " + currentIndex);
  console.log("Index => " + (currentIndex - 1));

  // NOTE 3d Effect
  let books = document.querySelector(".card");
  books.classList.add("is-flipped");
  console.log(document.querySelector(".books"));

  // NOTE set background image and initialize the slider
  slide_to_page(book_pages[currentIndex - 1]);
  // NOTE load inputs inside canvas
  insert_inputs([currentIndex - 1]);
  // NOTE set the positions of the inputs inside the canvas
  formsMaps([currentIndex - 1]);
}
window.setSlides = setSlides;
export { displaySlides, currentIndex };

// NOTE pure js
// based on using name tags (as with radio buttons) and a few lines of javascript.
// <input type="checkbox" name="check" onclick="onlyOne(this)">
// <input type="checkbox" name="check" onclick="onlyOne(this,tagname)">

function onlyOne(checkbox, tag) {
  let checkboxes = document.getElementsByName(tag);
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}
window.onlyOne = onlyOne;
