const query = (selector) => document.querySelector(selector);

const sizeControl = query('#font-size-control');
const text = query('#text');

const changeSize = () => {
    const sizeValue = sizeControl.value;
    text.style.fontSize = `${sizeValue}px`;
};

sizeControl.addEventListener("input", changeSize);