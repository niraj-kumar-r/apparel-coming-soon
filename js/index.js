const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const emailErrorIcon = document.querySelector("form > svg.error-icon");

email.addEventListener("input", function (event) {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailErrorIcon.style.display = "none";
        email.style.outlineColor = "var(--primary-two)";
    } else {
        showError();
    }
});
form.addEventListener("submit", function (event) {
    if (!email.validity.valid) {
        showError();

        event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Please enter an email address";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Please provide a valid email";
    }

    emailErrorIcon.style.display = "block";
    email.style.outlineColor = "var(--primary-one)";
}
