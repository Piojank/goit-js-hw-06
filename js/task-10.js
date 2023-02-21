const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const query = (selector) => document.querySelector(selector);
const input = document.querySelector('input[type="number"]');
const createBtn = query('[data-create]');
const destroyBtn = query('[data-destroy]');
const divBoxes = query('#boxes');

const createBoxes = (amount) => {
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(div);
    size += 10;
  }
};

const destroyBoxes = () => {
  divBoxes.innerHTML = '';
};

createBtn.addEventListener('click', () => {
  const amount = input.value;
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  }
});

destroyBtn.addEventListener("click", destroyBoxes);