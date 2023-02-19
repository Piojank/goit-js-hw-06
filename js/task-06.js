const query = (selector) => document.querySelector(selector);
const textInput = query('#validation-input');

const checkInput = () => {
    if (textInput.value.length !== 6) {
        textInput.classList.add('invalid')
        textInput.classList.remove('valid')
    } else {
        textInput.classList.remove('invalid')
        textInput.classList.add('valid')
    }
};

textInput.addEventListener("blur", checkInput);