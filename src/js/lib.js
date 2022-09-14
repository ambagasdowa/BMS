const message = "Initializing all libs and  modules for slider";

function greet(name) {
  return `Starting module =>, ${name} by Ambagasdowa`;
}
export { greet, message };

function slide_to_page(page) {
  let cssRules = "#layer1{background: url(" + page + ")!important;";
  /* create the style element */
  let styleElement = document.createElement("style");
  /* add style rules to the style element */
  styleElement.appendChild(document.createTextNode(cssRules));
  /* attach the style element to the document head */
  document.getElementsByTagName("head")[0].appendChild(styleElement);
}

export { slide_to_page };

function formsMaps(css_idx) {
  console.log("Maps => " + css_idx);
  let cssMaps = localizations[css_idx];
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
  // let p_prime = in_puts.cloneNode(true);
  //  1: [
  //    {
  //      type: "text",
  //      name: "a",
  //      id: "a",
  //      autofocus: "on",
  //      placeholder: "a",
  //      class: "someclassa",
  //    },
  //    { type: "text", name: "b", id: "b", placeholder: "b" },
  //    { type: "text", name: "c", id: "c", placeholder: "c" },
  //  ]

  in_puts.innerHTML = "";
  let new_binputs = document.getElementById("book_canvas");
  //  let idx_input = 1;
  console.log(new_binputs);
  console.log(`inputsLength => ${Object.keys(book_inputs[idx_input]).length}`);
  let inputsLength = Object.keys(book_inputs[idx_input]).length;

  //  const superPowers = hero.powers;
  //  for (const power of superPowers) {
  //    const listItem = document.createElement("li");
  //    listItem.textContent = power;
  //    myList.appendChild(listItem);
  //  }
  const inputs = book_inputs[idx_input];
  for (const input of inputs) {
    console.log(input);
    console.log(inputs);
    let inputx = document.createElement("input");
    for (const key in input) {
      if (Object.hasOwnProperty.call(input, key)) {
        console.log(key);
        console.log(input[key]);
        inputx[key] = input[key];
      }
    }
    new_binputs.appendChild(inputx);
  }
  //  input.type = "text";
  //  input.name = "member";
}

//===========================================================================//
// TODO :
// NOTE : the slider , Carousel Mechanism
//===========================================================================//
let currentIndex = 1;

// TODO : Positions section
const localizations = {
  1: "#a{position:absolute;top:80.2%;left:190px;width:3%;}#b{position:absolute;bottom:17.5%;right:66.5%;width:3%;}#c{position:absolute;top:80.2%;left:43%;width:3%;}",
  2: "#a{position:absolute;top:40.2%;left:190px;width:3%;}#b{position:absolute;bottom:17.5%;right:66.5%;width:3%;}#c{position:absolute;top:80.2%;left:43%;width:3%;}",
  3: "#a{position:absolute;top:50.2%;left:190px;width:3%;}#b{position:absolute;bottom:17.5%;right:66.5%;width:3%;}#c{position:absolute;top:80.2%;left:43%;width:3%;}",
  4: "#a{position:absolute;top:20.2%;left:190px;width:3%;}#b{position:absolute;bottom:17.5%;right:66.5%;width:3%;}#c{position:absolute;top:80.2%;left:43%;width:3%;}",
  5: "#a{position:absolute;top:70.2%;left:190px;width:3%;}#b{position:absolute;bottom:17.5%;right:66.5%;width:3%;}#c{position:absolute;top:80.2%;left:43%;width:3%;}",
  6: "#a{position:absolute;top:60.2%;left:190px;width:3%;}#b{position:absolute;bottom:17.5%;right:66.5%;width:3%;}#c{position:absolute;top:80.2%;left:43%;width:3%;}",
  7: "#a{position:absolute;top:90.2%;left:190px;width:3%;}#b{position:absolute;bottom:17.5%;right:66.5%;width:3%;}#c{position:absolute;top:80.2%;left:43%;width:3%;}",
  8: "#a{position:absolute;top:90.2%;left:190px;width:3%;}#b{position:absolute;bottom:17.5%;right:66.5%;width:3%;}#c{position:absolute;top:80.2%;left:43%;width:3%;}",
};

const book_inputs = {
  1: [
    {
      type: "text",
      name: "a-input",
      id: "a-input",
      autofocus: "on",
      placeholder: "a1",
      class: "someclass-a",
    },
    { type: "text", name: "b-input", id: "b-input", placeholder: "b1" },
    { type: "text", name: "cxxx", id: "cxaxa", placeholder: "c1" },
  ],
  2: [
    {
      type: "text",
      name: "a2",
      id: "a2",
      autofocus: "on",
      placeholder: "a2",
      class: "someclassb222",
    },
    { type: "text", name: "b222", id: "b2", placeholder: "b2222" },
    { type: "text", name: "c222", id: "c222", placeholder: "c2222" },
  ],
  3: [
    {
      type: "text",
      name: "a",
      id: "a",
      autofocus: "on",
      placeholder: "a3333",
      class: "someclassc",
    },
    { type: "text", name: "b", id: "b", placeholder: "b3333" },
    { type: "text", name: "c", id: "c", placeholder: "c3333" },
  ],
  4: [
    {
      type: "text",
      name: "a",
      id: "a",
      autofocus: "on",
      placeholder: "a4444",
      class: "someclassd",
    },
    { type: "text", name: "b", id: "b", placeholder: "b4444" },
    { type: "text", name: "c", id: "c", placeholder: "c4444" },
  ],
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

// TODO : response from server book logic
// NOTE : this must be a response query
// Insert a block of rules into a page with javascript
// This method creates a style element, inserts our CSS rules as a string, then attaches the element to the HTML head.
const bookpages = {
  1: "https://ediq.mx/public/guias/guia_demo_uv_040321_2/pages/1.jpg",
  2: "https://ediq.mx/public/guias/guia_demo_uv_040321_2/pages/2.jpg",
  3: "https://ediq.mx/public/guias/guia_demo_uv_040321_2/pages/3.jpg",
  4: "https://ediq.mx/public/guias/guia_demo_uv_040321_2/pages/4.jpg",
  5: "https://ediq.mx/public/guias/guia_demo_uv_040321_2/pages/5.jpg",
  6: "https://ediq.mx/public/guias/guia_demo_uv_040321_2/pages/6.jpg",
  7: "https://ediq.mx/public/guias/guia_demo_uv_040321_2/pages/7.jpg",
  8: "https://ediq.mx/public/guias/guia_demo_uv_040321_2/pages/7.jpg",
};

function setSlides(num) {
  displaySlides((currentIndex += num));
}

function displaySlides(num) {
  var x;
  const slides = { length: Object.keys(bookpages).length }; // emulates the query inside DOM
  console.log("TotalPages => " + slides.length);

  if (num > slides.length) {
    currentIndex = 1;
  }
  if (num < 1) {
    currentIndex = slides.length;
  }
  console.log("currentIndex => " + currentIndex);
  console.log("Index => " + (currentIndex - 1));

  // inputs_inner();
  insert_inputs([currentIndex - 1]);
  slide_to_page(bookpages[currentIndex - 1]);
  formsMaps([currentIndex - 1]);
}
window.setSlides = setSlides;
export { displaySlides, currentIndex };
