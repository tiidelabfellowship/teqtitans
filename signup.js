let popup = document.getElementById("popup");
let pop = document.getElementById("pop");

function openPopup(){
    popup.classList.add("open-popup");
    pop.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
    pop.classList.remove("open-popup");
}



const form = document.getElementById("form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");

form.addEventListener("submit", e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const field = element.parentElement;
    const errorDisplay = field.querySelector(".error");

    errorDisplay.innerText = message;
    field.classList.add("error");
    field.classList.remove("success");
}

const setSuccess = element => {
    const field = element.parentElement;
    const errorDisplay = field.querySelector(".error");

    errorDisplay.innerText = '';
    field.classList.add('success');
    field.classList.remove('error');
}

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(firstNameValue === '') {
        setError(firstName, 'First Name is required')
    } else {
        setSuccess(firstName)
    }

    if(lastNameValue === '') {
        setError(lastName, 'Last Name is required')
    } else {
        setSuccess(lastName)
    }

    if(emailValue === '') {
        setError(email, 'Email is required')
    } else {
        setSuccess(email)
    }

    if(passwordValue === '') {
        setError(password, 'Password is required')
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.')
    } else {
        setSuccess(password)
    }

    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password')
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, "Password doesn't match");
    } else{
        setSuccess(confirmPassword)
    }
};