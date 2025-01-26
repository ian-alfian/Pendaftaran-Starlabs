let selectedDivision = null; // Variabel global untuk menyimpan tombol yang dipilih

// Fungsi untuk memilih divisi
function selectDivision(division, button) {
    selectedDivision = division;

    const notification = document.getElementById('division-notification');
    notification.textContent = "Anda memilih divisi: " + division;
    notification.style.display = 'block';

    const buttons = document.querySelectorAll('.division-btn');
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });

    button.classList.add('selected');

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

/// Fungsi untuk menampilkan warning
function showWarning(elementId, message) {
    const warningElement = document.getElementById(`${elementId}-warning`); // Elemen warning terkait
    warningElement.textContent = message; // Tambahkan pesan
    warningElement.style.display = 'block'; // Tampilkan warning
    // Menghilangkan perubahan border
    // inputElement.style.border = '2px solid red'; // Hapus baris ini jika tidak ingin border berubah

    // Hilangkan warning setelah 3 detik
    setTimeout(() => {
        warningElement.style.display = 'none';
    }, 3000);
}


// Fungsi untuk validasi form data diri
function validateForm() {
    const inputs = document.querySelectorAll('#data-form input');
    let allValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            allValid = false;
            showWarning(input.id, `Harap isi ${input.placeholder.toLowerCase()} sebelum melanjutkan.`);
        }
    });

    return allValid; // Kembalikan true jika semua input valid
}

// Fungsi untuk validasi gender
function validateGender() {
    const gender = document.getElementById("gender").value;

    if (!gender) {
        showWarning("gender", "Harap pilih jenis kelamin sebelum melanjutkan.");
        return false;
    }

    return true;
}

// Fungsi untuk melanjutkan ke langkah berikutnya
function nextStep() {
    // Validasi data diri
    const isFormValid = validateForm();

    // Validasi gender
    const isGenderValid = validateGender();

    if (!isFormValid || !isGenderValid) {
        return; // Hentikan jika ada validasi gagal
    }

    // Jika semua validasi berhasil, lanjut ke langkah berikutnya
    document.getElementById('data-form').style.display = 'none';
    document.getElementById('email-form').style.display = 'block';
}

// Fungsi untuk kembali ke langkah sebelumnya
function previousStep() {
    document.getElementById('email-form').style.display = 'none';
    document.getElementById('data-form').style.display = 'block';
}

// Fungsi untuk toggle password visibility
function togglePassword(inputId, event) {
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

// Fungsi untuk validasi email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fungsi untuk validasi form email
function validateEmailForm() {
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    let isValid = true;

    // Validasi email
    if (!email) {
        showWarning("email", "Harap masukkan alamat email.");
        isValid = false;
    } else if (!isValidEmail(email)) {
        showWarning("email", "Harap masukkan alamat email yang valid.");
        isValid = false;
    }

    // Validasi username
    if (!username) {
        showWarning("username", "Harap masukkan username.");
        isValid = false;
    }

    // Validasi password
    if (!password) {
        showWarning("password", "Harap masukkan password.");
        isValid = false;
    }

    // Validasi konfirmasi password
    if (!confirmPassword) {
        showWarning("confirm-password", "Harap masukkan konfirmasi password.");
        isValid = false;
    } else if (password !== confirmPassword) {
        showWarning("confirm-password", "Konfirmasi password tidak cocok.");
        isValid = false;
    }

    return isValid;
}

// Fungsi untuk submit form email
function submitForm() {
    if (validateEmailForm()) {
        showEmailSuccessNotification();
        console.log('Form Pendaftaran berhasil diisi!');
    }
}

// Fungsi untuk menampilkan notifikasi sukses
function showEmailSuccessNotification() {
    const notification = document.getElementById('email-success-notification');
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// Sembunyikan notifikasi saat input diubah
document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', () => {
        const warningElement = document.getElementById(`${input.id}-warning`);
        if (warningElement) {
            warningElement.style.display = 'none';
            input.style.border = ''; // Reset border
        }
    });
});
