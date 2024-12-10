// Function to scroll to the event details section when the "Learn More" button is clicked
function scrollToDetails() {
    document.getElementById('details').scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const team = document.getElementById('team').value;

    // Display confirmation message
    alert(`Thank you for registering, ${name}! We will contact you at ${email} for more details.`);
    
    // Reset the form
    event.target.reset();
});
