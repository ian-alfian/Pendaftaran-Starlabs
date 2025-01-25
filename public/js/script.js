let selectedDivision = null; // Variabel untuk menyimpan divisi yang dipilih

function selectDivision(division) {
    // Simpan divisi yang dipilih
    selectedDivision = division;

    // Tampilkan notifikasi divisi yang dipilih
    const notification = document.getElementById('division-notification');
    notification.textContent = "Anda memilih divisi: " + division;
    notification.style.display = 'block';

    // Sembunyikan notifikasi otomatis setelah 3 detik
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

function nextStep() {
    const inputs = document.querySelectorAll('#data-form input');
    let allFilled = true;

    // Cek apakah semua input diisi
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.border = '2px solid red'; // Highlight input kosong
            allFilled = false;
        } else {
            input.style.border = ''; // Reset border jika terisi
        }
    });

    // Jika ada yang kosong, tampilkan notifikasi
    if (!allFilled) {
        const warningNotification = document.getElementById('warning-notification');
        warningNotification.style.display = 'block'; // Tampilkan notifikasi
        setTimeout(() => {
            warningNotification.style.display = 'none'; // Sembunyikan setelah 4 detik
        }, 4000);
        return; // Jangan lanjutkan ke step berikutnya
    }

    // Jika semua sudah terisi, lanjut ke step berikutnya
    document.getElementById('data-form').style.display = 'none';
    document.getElementById('email-form').style.display = 'block';
}

function previousStep() {
    // Kembali ke step sebelumnya
    document.getElementById('email-form').style.display = 'none';
    document.getElementById('data-form').style.display = 'block';
}

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

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm() {
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (!email || !username || !password || !confirmPassword) {
        alert('Harap isi semua data di bagian PENGISIAN EMAIL sebelum mendaftar.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Harap masukkan alamat email yang valid.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Konfirmasi password tidak cocok. Silakan periksa kembali.');
        return;
    }

    alert('Formulir pendaftaran berhasil dikirim!');
}

function checkEmailForm() {
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validasi form
    if (!email || !username || !password || !confirmPassword) {
        // Tampilkan notifikasi
        const notification = document.getElementById("notification");
        notification.classList.add("active");
    } else {
        // Lanjutkan proses submit jika valid
        submitForm();
    }
}
