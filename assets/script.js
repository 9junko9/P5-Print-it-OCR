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

//*******Variables******/

const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const imgSlide = document.querySelector(".banner-img");
const tagLineSlide = document.querySelector("#banner p");
let index = 0;
const lastElement = slides.length - 1;
const dots = document.querySelector(".dots");

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
function clickRight() {
  arrowRight.addEventListener("click", () => {
    const arrayDots = document.querySelectorAll(".dots .dot");
    arrayDots[index].classList.remove("dot_selected");
    index++;
    if (index > slides.length - 1) {
      index = 0;
    }
    imgSlide.src = "./assets/images/slideshow/" + slides[index].image;
    tagLineSlide.innerHTML = slides[index].tagLine;
    arrayDots[index].classList.add("dot_selected");
  });
}
clickRight();

//******Arrow Left******/
function clickLeft() {
  arrowLeft.addEventListener("click", () => {
    const arrayDots = document.querySelectorAll(".dots .dot");
    arrayDots[index].classList.remove("dot_selected");
    index--;
    if (index < 0) {
      index = slides.length - 1;
    }
    imgSlide.src = "./assets/images/slideshow/" + slides[index].image;
    tagLineSlide.innerHTML = slides[index].tagLine;
    arrayDots[index].classList.add("dot_selected");
  });
}
clickLeft();
