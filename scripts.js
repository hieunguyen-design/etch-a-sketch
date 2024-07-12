//create boxes
const container = document.querySelector(".container");
const body = document.querySelector("body");
let sizeGrid = 0;
let colorRandomMode = false;
let coloredBackground = "rgb(35, 36, 35)";

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function makeGrid(number) {
  container.replaceChildren();
  console.log(colorRandomMode);
  for (let i = 0; i < number * number; i++) {
    const sqr = document.createElement("div");
    sqr.classList.add("square");
    sqr.style.backgroundColor = "lightgrey";
    sqr.style.setProperty("--number", number);
    // console.log(sqr.getAttribute("style", "width"));
    // console.log(sqr.getAttribute("style", "height"));
    container.appendChild(sqr);
    sqr.addEventListener("mouseover", () => {
      if (colorRandomMode) {
        // console.log("click");
        coloredBackground = randomColor();
        sqr.style.backgroundColor = coloredBackground;
      } else {
        sqr.style.backgroundColor = "rgb(35, 36, 35)";
      }
    });
  }
  return (sizeGrid = number);
}
function sizeInput() {
  const size = prompt("Square size? (From 1 to 100)");
  if (size != null && size <= 100) {
    makeGrid(size);
    body.appendChild(container);
  }
}

makeGrid(16);

const randomButton = document.getElementById("randomColor");
randomButton.onclick = function () {
  colorRandomMode = true;
  // makeGrid(sizeGrid);
};

const setButton = document.getElementById("size");
// console.log(button);
setButton.onclick = function () {
  sizeInput();
};
const resetButton = document.getElementById("reset");
resetButton.onclick = function () {
  makeGrid(sizeGrid);
};
