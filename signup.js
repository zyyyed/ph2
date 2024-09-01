function validateSignupForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    if (!username || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    alert('Sign-up successful!');
    document.getElementById('signup-form').submit();
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
