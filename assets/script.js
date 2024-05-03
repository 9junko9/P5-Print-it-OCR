const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
console.log(slides);

//*******Variables******/
const dots = document.querySelector(".dots");
let index = 0;
const clickRight = document.querySelector("#banner .arrow_right");
const clickLeft = document.querySelector("#banner .arrow_left");

//*******Dots********//
function displayDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (i == index) dot.classList.add("dot_selected");
  }
}
displayDots();

//******Arrow Righ*****/
clickRight.addEventListener("click", () => {
  console.log("Click Right");
});

//******Arrow Left******/
clickLeft.addEventListener("click", () => {
  console.log("clickLeft");
});
