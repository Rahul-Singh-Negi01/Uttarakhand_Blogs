document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || email === '' || password === '') {
        document.getElementById('message').textContent = 'All fields are required!';
        return;
    }

    // Simulate form submission
    document.getElementById('message').textContent = `Welcome, ${username}! Your account has been created.`;

    // Optionally, you can clear the form
    document.getElementById('signup-form').reset();
});
