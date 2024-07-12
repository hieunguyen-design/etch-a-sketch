//create boxes
const container = document.querySelector(".container");
const body = document.querySelector("body");

function makeGrid(number) {
  container.replaceChildren();
  for (let col = 0; col < number; col++) {
    const column = document.createElement("div");
    let size = 960 / number;
    column.style.width = size + "px";
    container.appendChild(column);
    for (let row = 0; row < number; row++) {
      const sqr = document.createElement("div");
      sqr.addEventListener("mouseover", () => {
        sqr.style.backgroundColor = "#232423";
      });
      sqr.className = "square";
      sqr.style.height = size + "px";
      sqr.style.width = size + "px";
      // sqr.textContent = col + "." + row;
      console.log(sqr.style.width + " " + sqr.style.height);
      column.appendChild(sqr);
    }
  }
}
function sizeInput() {
  const size = prompt("Square size? (Less than 100)");
  if (size != null && size <= 100) {
    makeGrid(size);
    body.appendChild(container);
  }
}

makeGrid(16);
const setButton = document.getElementById("size");
// console.log(button);
setButton.onclick = function () {
  sizeInput();
};
