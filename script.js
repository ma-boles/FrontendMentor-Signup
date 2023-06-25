const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success")
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === "") {
        setError(firstName, "First name required.");
    } else {
        setSuccess(firstName)
    }

    if(lastNameValue === "") {
        setError(lastName, "Last name required.");
    } else {
        setSuccess(lastName)
    }

    if(emailValue === "") {
        setError(email, "Provide a valid email address.")
    } else {
        setSuccess(email);
    }

    if (passwordValue === "") {
        setError(password, "Password is required.");
    } else if (passwordValue.length < 8) {
        setError(password, "Password must be at least 8 characters."
            )
    } else {
        setSuccess(password)
    }
}
