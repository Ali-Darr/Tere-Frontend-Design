document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  var form = document.querySelector(".needs-validation");

  // Add submit event listener to the form
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Validate the form fields
    if (validateForm()) {
      // If the form is valid, you can proceed with your desired action, like submitting the form
      console.log("Form is valid. Proceed with submission.");
      // form.submit(); // Uncomment this line to actually submit the form
    }
  });

  // Function to validate the form fields
  function validateForm() {
    var isValid = true;

    // Validate first name
    var firstNameInput = document.getElementById("firstName");
    if (!firstNameInput.value) {
      firstNameInput.classList.add("is-invalid");
      isValid = false;
    } else {
      firstNameInput.classList.remove("is-invalid");
      firstNameInput.classList.add("is-valid");
    }

    // Validate last name
    var lastNameInput = document.getElementById("lastName");
    if (!lastNameInput.value) {
      lastNameInput.classList.add("is-invalid");
      isValid = false;
    } else {
      lastNameInput.classList.remove("is-invalid");
      lastNameInput.classList.add("is-valid");
    }

    // Validate username
    var usernameInput = document.getElementById("username");
    if (!usernameInput.value) {
      usernameInput.classList.add("is-invalid");
      isValid = false;
    } else {
      usernameInput.classList.remove("is-invalid");
      usernameInput.classList.add("is-valid");
    }

    // Validate email (optional)
    var emailInput = document.getElementById("email");
    if (emailInput.value && !isValidEmail(emailInput.value)) {
      emailInput.classList.add("is-invalid");
      isValid = false;
    } else {
      emailInput.classList.remove("is-invalid");
      emailInput.classList.add("is-valid");
    }

    // Validate address
    var addressInput = document.getElementById("address");
    if (!addressInput.value) {
      addressInput.classList.add("is-invalid");
      isValid = false;
    } else {
      addressInput.classList.remove("is-invalid");
      addressInput.classList.add("is-valid");
    }

    // Validate address 2 (optional)
    var address2Input = document.getElementById("address2");
    if (address2Input.value) {
      address2Input.classList.add("is-valid");
    } else {
      address2Input.classList.remove("is-valid");
    }

    // Validate country
    var countrySelect = document.getElementById("country");
    if (!countrySelect.value) {
      countrySelect.classList.add("is-invalid");
      isValid = false;
    } else {
      countrySelect.classList.remove("is-invalid");
      countrySelect.classList.add("is-valid");
    }

    // Validate state
    var stateSelect = document.getElementById("state");
    if (!stateSelect.value) {
      stateSelect.classList.add("is-invalid");
      isValid = false;
    } else {
      stateSelect.classList.remove("is-invalid");
      stateSelect.classList.add("is-valid");
    }

    // Validate zip
    var zipInput = document.getElementById("zip");
    if (!zipInput.value) {
      zipInput.classList.add("is-invalid");
      isValid = false;
    } else {
      zipInput.classList.remove("is-invalid");
      zipInput.classList.add("is-valid");
    }

    // Validate credit card name
    var ccNameInput = document.getElementById("cc-name");
    if (!ccNameInput.value) {
      ccNameInput.classList.add("is-invalid");
      isValid = false;
    } else {
      ccNameInput.classList.remove("is-invalid");
      ccNameInput.classList.add("is-valid");
    }

    // Validate credit card number
    var ccNumberInput = document.getElementById("cc-number");
    if (!ccNumberInput.value) {
      ccNumberInput.classList.add("is-invalid");
      isValid = false;
    } else {
      ccNumberInput.classList.remove("is-invalid");
      ccNumberInput.classList.add("is-valid");
    }

    // Validate credit card expiration
    var ccExpirationInput = document.getElementById("cc-expiration");
    if (!ccExpirationInput.value) {
      ccExpirationInput.classList.add("is-invalid");
      isValid = false;
    } else {
      ccExpirationInput.classList.remove("is-invalid");
      ccExpirationInput.classList.add("is-valid");
    }

    // Validate credit card CVV
    var ccCvvInput = document.getElementById("cc-cvv");
    if (!ccCvvInput.value) {
      ccCvvInput.classList.add("is-invalid");
      isValid = false;
    } else {
      ccCvvInput.classList.remove("is-invalid");
      ccCvvInput.classList.add("is-valid");
    }

    return isValid;
  }

  // Function to validate email format
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

function updateCheckboxesAndRadios() {
  // Get all checkboxes and radio buttons
  var checkboxesAndRadios = document.querySelectorAll(".form-check-input");

  // Loop through each checkbox/radio
  checkboxesAndRadios.forEach(function (input) {
    if (input.checked) {
      input.parentElement.classList.add("success"); // Add success class
    }
  });
}
