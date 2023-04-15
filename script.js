
const form = document.createElement("form");

// Create label and input elements for first name
var firstNameLabel = document.createElement("label");
firstNameLabel.textContent = "First Name:";
var firstNameInput = document.createElement("input");
firstNameInput.type = "text";
firstNameInput.name = "firstname";

// Create label and input elements for middle name
var middleNameLabel = document.createElement("label");
middleNameLabel.textContent = "Middle Name:";
var middleNameInput = document.createElement("input");
middleNameInput.type = "text";
middleNameInput.name = "middlename";

// Create label and input elements for last name
var lastNameLabel = document.createElement("label");
lastNameLabel.textContent = "Last Name:";
var lastNameInput = document.createElement("input");
lastNameInput.type = "text";
lastNameInput.name = "lastname";

var emailLabel = document.createElement("label");
emailLabel.textContent = "Email:";
var emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.name = "email";

// Create label and input elements for password
var passwordLabel = document.createElement("label");
passwordLabel.textContent = "Password:";
var passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.name = "password";

// Append the label and input elements to the form element
form.appendChild(firstNameLabel);
form.appendChild(firstNameInput);
form.appendChild(middleNameLabel);
form.appendChild(middleNameInput);
form.appendChild(lastNameLabel);
form.appendChild(lastNameInput);
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(passwordLabel);
form.appendChild(passwordInput);

// Append the form element to the document body
document.body.appendChild(form);
