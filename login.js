function validateLoginForm() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    if (!email || !password) {
        alert('Please fill in both fields.');
        return;
    }
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    alert('Login successful!');
    document.getElementById('login-form').submit();
}
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
