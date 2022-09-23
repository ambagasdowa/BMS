var card = document.querySelector(".card");
var next = document.querySelector(".next");
console.log(next);

next.addEventListener("click", function () {
  card.classList.toggle("is-flipped");
});
