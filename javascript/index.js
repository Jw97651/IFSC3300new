// Selects elements based on the provided selector
const $ = selector => document.querySelector(selector);

const joinList = evt => {
    // Get user entries from text boxes
    const email1 = $("#email_1").value;
    const email2 = $("#email_2").value;
    const firstName = $("#first_name").value;
    const userEntry = prompt("This is a test of the prompt method", 100);

    let entryA = prompt("Enter any Value", 12345.6789);
    alert(entryA);
    entryA = parseInt(entryA);
    alert(entryA);

    // Check user entries
    let isValid = true;
    if (email1 == "") {
        $("#email_1_error").textContent = "Email is required.";
        isValid = false;
    } else {
        $("#email_1_error").textContent = "";
    }
    if (email1 != email2) {
        $("#email_2_error").textContent = "Emails must match.";
        isValid = false;
    } else {
        $("#email_2_error").textContent = "";
    }
    if (firstName == "") {
        $("#first_name_error").textContent = "First name is required.";
        isValid = false;
    } else {
        $("#first_name_error").textContent = "";
    }

    // Cancel form submit if any user entries are invalid
    if (!isValid) {
        evt.preventDefault();
    }
};

// Clear the form
const clearForm = () => {
    // Clear text boxes
    $("#email_1").value = "";
    $("#email_2").value = "";
    $("#first_name").value = "";

    // Clear span elements
    $("#email_1_error").textContent = "*";
    $("#email_2_error").textContent = "*";
    $("#first_name_error").textContent = "*";

    // Set focus on the first text box after resetting the form
    $("#email_1").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    // Hook up click events for both buttons
    $("#join_list").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);

    // Set focus on the first text box after the form loads
    $("#email_1").focus();

    // Dropdown functionality (this is now separated from the form logic)
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Ensure the dropdown functionality is initialized once the DOM is loaded
    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener('click', function () {
            dropdownContent.classList.toggle('show');
        });
    }
});
