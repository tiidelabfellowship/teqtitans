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

const email = document.getElementById("email");
const password = document.getElementById("password");

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
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
    

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


};