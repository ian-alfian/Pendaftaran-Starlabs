function selectDivision(division) {
    alert("Anda memilih divisi: " + division);
}

function nextStep() {
    document.getElementById('data-form').style.display = 'none';
    document.getElementById('email-form').style.display = 'block';
}

function submitForm() {
    alert("Formulir pendaftaran berhasil dikirim!");
}

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const icon = event.currentTarget.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Optional: Password strength checker
function checkPasswordStrength(password) {
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;
    
    return strength;
}

document.getElementById('password').addEventListener('input', function() {
    const strength = checkPasswordStrength(this.value);
    const bars = document.querySelectorAll('.strength-bar');
    
    bars.forEach((bar, index) => {
        if (index < strength) {
            bar.classList.add('active');
            if (strength <= 2) bar.classList.add('weak');
            else if (strength <= 3) bar.classList.add('medium');
            else bar.classList.add('strong');
        } else {
            bar.classList.remove('active', 'weak', 'medium', 'strong');
        }
    });
});