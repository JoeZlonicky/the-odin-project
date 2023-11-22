const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
passwordInput.addEventListener('change', () => checkPasswordValidity());
confirmPasswordInput.addEventListener('change', () => checkPasswordValidity());

function checkPasswordValidity() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordInput.classList.add('error');
        confirmPasswordInput.classList.add('error');
        confirmPasswordInput.setCustomValidity('Passwords do not match');
    } else {
        passwordInput.classList.remove('error');
        confirmPasswordInput.classList.remove('error');
        confirmPasswordInput.setCustomValidity('');
    }
}