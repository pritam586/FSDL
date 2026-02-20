let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");
let passwordInput = document.getElementById("password");
let confirmInput = document.getElementById("confirmPassword");

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
passwordInput.addEventListener("input", validatePassword);
confirmInput.addEventListener("input", validateConfirm);

function validateName() {
    let value = nameInput.value.trim();
    if (value === "" || value.length < 3) {
        showError(nameInput, "nameError", "Full name is required");
    } else {
        showSuccess(nameInput, "nameError");
    }
}

function validateEmail() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(pattern)) {
        showError(emailInput, "emailError", "Enter valid email");
    } else {
        showSuccess(emailInput, "emailError");
    }
}

function validatePhone() {
    let pattern = /^[0-9]{10}$/;
    if (!phoneInput.value.match(pattern)) {
        showError(phoneInput, "phoneError", "Enter 10-digit phone number");
    } else {
        showSuccess(phoneInput, "phoneError");
    }
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        showError(passwordInput, "passwordError", "Minimum 6 characters");
    } else {
        showSuccess(passwordInput, "passwordError");
    }
}

function validateConfirm() {
    if (confirmInput.value !== passwordInput.value || confirmInput.value === "") {
        showError(confirmInput, "confirmError", "Passwords do not match");
    } else {
        showSuccess(confirmInput, "confirmError");
    }
}

function showError(input, errorId, message) {
    input.classList.remove("input-success");
    input.classList.add("input-error");
    document.getElementById(errorId).innerText = message;
}

function showSuccess(input, errorId) {
    input.classList.remove("input-error");
    input.classList.add("input-success");
    document.getElementById(errorId).innerText = "";
}