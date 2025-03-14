// Membership validation
// Select the necessary Elements
// form, fullNameInput, emailInput, numberInput

const membershipForm = document.querySelector("#membership-form");
const fullNameField = document.querySelector("#full-name");
const emailField = document.querySelector("#email");
const phoneNum = document.querySelector("#phone");
const membershipType = document.querySelector("#membership-type");
const termsInput = document.querySelector("#termsCheckbox");

const emailPatternMembership = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

membershipForm?.addEventListener('submit', (e) => {
e.preventDefault();
clearErrors();

const errorsMessages = [];
const fullName = fullNameField.value.trim();
const namePattern = /^[a-zA-Z]{3,}$/;

if (!namePattern.test(fullName)) {
    errorsMessages.push("Full Name must be at least 3 letters and without spaces");
}

const email = emailField.value.trim();
if (email === "") {
errorsMessages.push("Please enter an email.");
} else if (!emailPatternMembership.test(email)) {
    errorsMessages.push("Invalid email format. Example: name@example.com");
    return;
}

const phoneNumber = phoneNum.value.trim();
const phonePattern = /^\+?[0-9]{10,15}$/;
if (!phonePattern.test(phoneNumber)) {
    errorsMessages.push("Phone number must be 10 to 15 digits.");
}

if (!membershipType.value) {
    errorsMessages.push("Selecting a membership-type is required");
}

if (!termsInput.checked) {
    errorsMessages.push("You must agree to the Terms and Conditions");
}


if (errorsMessages.length > 0) {
    showErrors(errorsMessages);
} else {
    alert("Form submitted successfully!")
}

});


function clearErrors() {
console.log("clearing errors...");
}


function showErrors(messages) {
console.log("Error", messages.join("\n"));
}

