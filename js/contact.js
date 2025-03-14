// 1️⃣ Select form and fields
{

  const contactForm = document.querySelector(".contact-form");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");
  
  // 2️⃣ Email pattern for validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // 3️⃣ Handle form submission
  contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form submission
  
  clearErrors(); // Remove previous error messages
  const errors = [];
  
  // 4️⃣ Validate Name: Required and minimum length 3
  const nameValue = nameInput.value.trim();
  if (nameValue.length < 3) {
    errors.push({ field: nameInput, message: "Name must be at least 3 characters." });
  }
  
  // 5️⃣ Validate Email: Required and correct pattern
  const emailValue = emailInput.value.trim();
  if (!emailPattern.test(emailValue)) {
    errors.push({ field: emailInput, message: "Please enter a valid email address." });
  }
  
  // 6️⃣ Validate Message: Required and minimum length
  const messageValue = messageInput.value.trim();
  if (messageValue.length < 10) {
    errors.push({ field: messageInput, message: "Message must be at least 250 characters long." });
  }
  
  // 7️⃣ Show errors if any
  if (errors.length > 0) {
    showErrors(errors);
    return; // Stop form submission if there are errors
  }
  
  // ✅ Show success or submit
  alert("Form submitted successfully!");
  contactForm.reset(); // Clear form after successful submission
});

// 8️⃣ Function to display errors
function showErrors(errors) {
  errors.forEach(({ field, message }) => {
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-message");
    errorElement.style.color = "red";
    errorElement.style.fontSize = "0.875rem";
    errorElement.textContent = message;
    field.insertAdjacentElement("afterend", errorElement);
  });
}

// 9️⃣ Function to clear previous errors
function clearErrors() {
  document.querySelectorAll(".error-message").forEach((el) => el.remove());
}


console.log('go');
}