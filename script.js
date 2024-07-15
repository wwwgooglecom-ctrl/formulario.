document.getElementById('show-password').addEventListener('change', function() {
    var passwordInput = document.getElementById('password');
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    
    if (!emailInput.value || !passwordInput.value) {
        alert('Por favor, rellena todos los campos.');
        event.preventDefault();
    }
});
