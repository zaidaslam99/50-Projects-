const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  boxesContainer.classList.toggle("big");
});

function CreateBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < array.length; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
    }
  }
}
