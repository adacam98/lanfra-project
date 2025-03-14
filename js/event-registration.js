{
    const eventForm = document.querySelector('.event-registration-form');
    const fullName = document.querySelector('#full-name');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const eventSelect = document.querySelector('#event');
    const message = document.querySelector('#message');
    
// Regex Patterns
const namePattern = /^[a-zA-Z ]{3,50}$/; // Letters only, 3-50 chars
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?[0-9]{10,15}$/; // Digits only, 10-15 chars

// Show Errors Function
function showError(input, message) {
    const errorElement = document.createElement('p');
    errorElement.className = 'error';
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '14px';
    errorElement.textContent = message;
    input.insertAdjacentElement('afterend', errorElement);
}

// Clear Errors Function
function clearErrors() {
    document.querySelectorAll('.error').forEach(el => el.remove());
}

// Form Submission Event Listener
eventForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual submission
    clearErrors(); // Clear old errors
    let isValid = true;
    
    // Full Name Validation
    if (!namePattern.test(fullName.value.trim())) {
        showError(fullName, 'Full name must be 3-50 letters long.');
        isValid = false;
    }
    
    // Email Validation
    if (!emailPattern.test(email.value.trim())) {
        showError(email, 'Invalid email format. Example: user@example.com');
        isValid = false;
    }
    
    // Phone Validation
    if (!phonePattern.test(phone.value.trim())) {
        showError(phone, 'Phone number must be 10-15 digits, numbers only.');
        isValid = false;
    }
    
    // Event Selection Validation
    if (!eventSelect.value) {
        showError(eventSelect, 'Please select an event.');
        isValid = false;
    }
    
    // If all fields are valid, simulate success
    if (isValid) {
        alert('Registration successful!');
        eventForm.reset(); // Clear form
    }
});

}

// Explanation:
// 1. Query selectors retrieve form elements.
// 2. Regular expressions validate input formats.
// 3. The 'showError' function dynamically displays error messages.
// 4. The 'clearErrors' function removes existing errors before each validation.
// 5. 'addEventListener' listens for form submission.
// 6. Validation conditions check inputs against patterns.
// 7. If all conditions pass, a success alert is shown, and the form resets.