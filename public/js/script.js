let selectedDivision = null; // Variabel global untuk menyimpan tombol yang dipilih

function selectDivision(division, button) {
    // Simpan divisi yang dipilih
    selectedDivision = division;

    // Tampilkan notifikasi divisi yang dipilih
    const notification = document.getElementById('division-notification');
    notification.textContent = "Anda memilih divisi: " + division;
    notification.style.display = 'block';

    // Hapus kelas 'selected' dari semua tombol
    const buttons = document.querySelectorAll('.division-btn');
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });

    // Tambahkan kelas 'selected' ke tombol yang diklik
    button.classList.add('selected');

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

function validateEmailForm() {
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const notification = document.getElementById('email-warning-notification');

    // Reset styles dan sembunyikan notifikasi kesalahan
    notification.style.display = 'none';

   // Periksa apakah semua input sudah terisi
if (!email || !username || !password || !confirmPassword) {
    const notification = document.getElementById('email-warning-notification');

    // Tampilkan notifikasi dengan animasi
    notification.textContent = "Harap isi semua data di bagian PENGISIAN EMAIL sebelum melanjutkan.";
    notification.style.display = 'block'; // Pastikan elemen ditampilkan
    notification.classList.add('show'); // Tambahkan animasi turun

    // Highlight input yang kosong
    document.querySelectorAll('#email-form input').forEach(input => {
        if (!input.value.trim()) {
            input.style.border = '2px solid red'; // Beri tanda merah pada input kosong
        } else {
            input.style.border = ''; // Reset jika terisi
        }
    });

    // Sembunyikan notifikasi setelah 4 detik
    setTimeout(() => {
        notification.classList.remove('show'); // Hapus animasi
        setTimeout(() => {
            notification.style.display = 'none'; // Hilangkan dari DOM setelah animasi
        }, 500); // Tunggu 500ms untuk menyelesaikan animasi
    }, 4000);

    return; // Jangan lanjutkan proses jika ada input kosong
}

    // Validasi email
    if (!isValidEmail(email)) {
        notification.textContent = "Harap masukkan alamat email yang valid.";
        notification.style.display = 'block';
        document.getElementById('email').style.border = '2px solid red';
        return;
    } else {
        document.getElementById('email').style.border = '';
    }

    // Periksa kecocokan password
    if (password !== confirmPassword) {
        notification.textContent = "Konfirmasi password tidak cocok. Silakan periksa kembali.";
        notification.style.display = 'block';
        document.getElementById('confirm-password').style.border = '2px solid red';
        return;
    } else {
        document.getElementById('confirm-password').style.border = '';
    }

    // Jika semua validasi berhasil, tampilkan notifikasi sukses
    showEmailSuccessNotification();

    // Lanjutkan proses atau logika lainnya
    console.log('Form Pendaftaran berhasil diisi!');
}

function submitForm() {
    validateEmailForm();
}

// Sembunyikan notifikasi saat input diubah
document.querySelectorAll('#email-form input').forEach((input) => {
    input.addEventListener('input', () => {
        const emailWarning = document.getElementById('email-warning-notification');
        emailWarning.style.display = 'none';
        input.style.border = ''; // Reset border saat pengguna mulai mengisi
    });
});

function showEmailSuccessNotification() {
    const notification = document.getElementById('email-success-notification');
    notification.classList.add('show'); // Tampilkan notifikasi dengan animasi

    // Sembunyikan notifikasi setelah beberapa detik
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000); // Tampil selama 4 detik
}
