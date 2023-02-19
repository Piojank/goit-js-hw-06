const query = (selector) => document.querySelector(selector);

const decrementBtn = query('[data-action="decrement"]');
const incrementBtn = query('[data-action="increment"]');
const initialValue = query('#value');

let counterValue = 0;

const decrease = () => {
    counterValue -= 1;
    initialValue.textContent = counterValue;
};

const increase = () => {
    counterValue += 1;
    initialValue.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrease);
incrementBtn.addEventListener("click", increase);