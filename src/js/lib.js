const message = "Initializing all libs and  modules for slider";

function greet(name) {
  return `Starting module =>, ${name} by Ambagasdowa`;
}
export { greet, message };

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
//		book_id:
//	[
//		{book_pages},
//		{book_inputs},
//      	{book_pages_maps}
//	]
//}
// NOTE book_pages
//const book_pages = "{book_pages}";
//// TODO : Positions section
//// NOTE book_pages_maps
//const book_pages_maps = "{book_pages_maps}";
//// NOTE book_inputs
//const book_inputs = "{book_inputs}";

//fetch("./json/source.json")
//  .then((response) => response.json())
//  .then((data) => (book = data));

//const myRequest = "json/source.json";

function book_request(myRequest) {
  console.log(`Inside book_request ?`);

  fetch(myRequest)
    .then((response) => {
      // NOTE uncomment when go trought ws api
      //    const contentType = response.headers.get("content-type");
      //    if (!contentType || !contentType.includes("application/json")) {
      //      throw new TypeError("Oops, we haven't got JSON!");
      //    }
      return response.json();
    })
    .then((data) => {
      /* process your data further */
      console.log(data.book_pages[1]);
      buildDivBook(data.book_pages);
    })
    .catch((error) => console.error(error));
}

export { book_request };

// NOTE first set global vars
//=== === === === === === === === === === === === === === === === === === === === === === //
// NOTE request json data
//=== === === === === === === === === === === === === === === === === === === === === === //

//async function populate() {
//  /**
//   * Url --> data
//   */
//  let url = "./json/source.json";
//
//  //  const requestURL = url;
//  //  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
//  const request = new Request(url);
//
//  const response = await fetch(request);
//  const bookResponseText = await response.text();
//  const book = JSON.parse(bookResponseText);
//
//  console.log(book);
//
//  //  populateHeader(book);
//  //  populateHeroes(book);
//}

function buildDivBook(obj) {
  const book_section = document.querySelector(".book");

  const num_pages = Object.keys(obj).length; // emulates the query inside DOM

  // num_pages = 2;
  console.log(`Num of pages -> ${num_pages}`);

  for (let index = 1; index <= num_pages; index++) {
    const element = obj[index];
    console.log(`element => ${element}`);

    const page_book = document.createElement("div");
    //  page_book.className = `pages_${index}`;

    const book_attr = document.createAttribute("style");
    book_attr.value = "background-image: url(" + element + ") ";
    page_book.setAttributeNode(book_attr);

    book_section.appendChild(page_book);
  }

  // DEBUG :

  //  book_section.appendChild(page_book);
  // const page_book = document.createElement("div");
  // const layer1 = document.createElement("div");
  // const layer2 = document.createElement("div");

  // // Main container of the page
  // page_book.className = "pages_1";

  // // add transparentLayer
  // const cover_style = document.createAttribute("style");
  // cover_style.value =
  //   "background:transparent!important;opacity:0.3;position:absolute;";
  // page_book.setAttributeNode(cover_style);
  // console.log(cover_style);
  // // Page constructor
  // layer1.id = "layer1";
  // let url_page = JSON.stringify(obj["1"]);
  // const style_page = document.createAttribute("style");
  // style_page.value =
  //   "background: url(" + url_page + ") no-repeat;background-size:91%";
  // layer1.setAttributeNode(style_page);
  // console.log(layer1);

  // layer2.id = "layer2 ";
  // layer2.className = "transparentLayer";
  // //  page_book.textContent = JSON.stringify(obj.book_pages["1"]);
  // page_book.appendChild(layer1);
  // page_book.appendChild(layer2);

  // book_section.appendChild(page_book);

  //  console.log(book_section);
}

// NOTE create inner page logic
function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

// populate();
//=== === === === === === === === === === === === === === === === === === === === === === //

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

  // NOTE usage for turning pages
  // Build a div per backgorund page
  //
}

export { slide_to_page };

function formsMaps(css_idx) {
  console.log("Maps => " + css_idx);
  let cssMaps = book_pages_maps[css_idx];
  console.log(book_pages_maps);
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
  console.log(in_puts);
  in_puts.innerHTML = "";
  let new_binputs = document.getElementById("book_canvas"); // Form
  console.log(book_inputs);
  const inputs = book_inputs[idx_input];
  for (const input of inputs) {
    let inputx = document.createElement("input");
    for (const key in input) {
      if (Object.hasOwnProperty.call(input, key)) {
        inputx[key] = input[key];
      }
    }
    new_binputs.appendChild(inputx);
  }
}

function setSlides(num) {
  displaySlides((currentIndex += num));
}

function displaySlides(num) {
  console.log(book_pages);
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
  // NOTE testing fetch json data
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
