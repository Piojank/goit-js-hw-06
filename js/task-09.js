const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const query = (selector) => document.querySelector(selector);

const colorName= query(".color");
const btnColor = query(".change-color");

const changeColor = () => {
  colorName.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
};

btnColor.addEventListener("click", changeColor);