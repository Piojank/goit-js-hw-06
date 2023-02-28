const query = (selector) => document.querySelector(selector);

const form = query(".login-form");

const handleLogin = (event) => {
    event.preventDefault();
    const { 
        elements: { email = "", password = "" }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }

    console.log(`Email: ${email.value}, Password: ${password.value}`);
    alert("Successful login. Welcome!");
    event.currentTarget.reset();
};

form.addEventListener("submit", handleLogin);