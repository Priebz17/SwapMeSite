const emailInput:HTMLInputElement = document.getElementById("email_address") as HTMLInputElement;
const topSignupForm:HTMLFormElement = document.querySelector(".signup form") as HTMLFormElement;

// this handles the thankyou page
if (topSignupForm != null) {

	emailInput.addEventListener("blur", () => {

		emailInput.classList.add("triggered");

	}, false);

	topSignupForm.addEventListener("submit", () => {

		emailInput.classList.add("triggered");

	}, false);

}
