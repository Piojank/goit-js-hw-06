const query = (selector) => document.querySelector(selector);

const textInput = query('#name-input');
const output = query('#name-output');

const setOutput = (event) => {
    if (textInput.value === "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = event.currentTarget.value;
    }  
};

textInput.addEventListener("input", setOutput);

