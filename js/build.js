var emailInput = document.getElementById("email_address");
var topSignupForm = document.querySelector(".signup form");
if (topSignupForm != null) {
    emailInput.addEventListener("blur", function () {
        emailInput.classList.add("triggered");
    }, false);
    topSignupForm.addEventListener("submit", function () {
        emailInput.classList.add("triggered");
    }, false);
}
