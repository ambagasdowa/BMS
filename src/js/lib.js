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

  // NOTE usage for turning pages
  // Build a div per backgorund page
  //
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
  console.log(in_puts);
  in_puts.innerHTML = "";
  let new_binputs = document.getElementById("book_canvas"); // Form

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
//const book_pages = "{a}";
// TODO : Positions section
// NOTE book_pages_maps
//const book_pages_maps = "{b}";
// NOTE book_inputs
//const book_inputs = "{c}";

//=== === === === === === === === === === === === === === === === === === === === === === //
// NOTE request json data
//=== === === === === === === === === === === === === === === === === === === === === === //

async function populate(url) {
  /**
   * Url --> data
   */
  let url = "./json/source.json";

  const requestURL = url;
  //  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const bookResponseText = await response.text();
  console.log(bookResponseText);
  const book = JSON.parse(bookResponseText);

  populateHeader(bookResponseText);
  //  populate(superHeroes);
  populateHeroes(bookResponseText);
  //return book;
}

function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}

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

//=== === === === === === === === === === === === === === === === === === === === === === //

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

  // NOTE testing fetch json data
  // NOTE set background image and initialize the slider
  slide_to_page(request_book.book_pages[currentIndex - 1]);
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
