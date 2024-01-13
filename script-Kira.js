// Code for GetElementByID.html File
// function ChangeProperties(new_color) {
//   text = document.getElementById("para");
//   text.style.color = new_color;
//   text.style.fontFamily = "Helvetica";
//   text.style.fontSize = 10;
//   text.style.fontWeight = "bold";
// }

// Code for index.html file
const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

// addEventListener will set trigger a function that will listen for clicks and then its going to execute on target element in this case button
btn.addEventListener("click", () => {
  boxesContainer.classList.toggle("big");
});

function CreateBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < array.length; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125} px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}

CreateBoxes();
