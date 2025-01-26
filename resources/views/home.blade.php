@extends('layouts.app')

@section('title', 'Pendaftaran STARLABS')
<link rel="icon" type="image/png" href="{{ asset('images/logo.png') }}">

@section('content')
<div class="container-wrapper">
    <!-- Container kiri (form) -->
    <div class="container">
        <div class="form-container">
            <h3>FORMULIR PENDAFTARAN</h3>

            <!-- Pilihan Divisi -->
            <div class="division-selection">
                <button onclick="selectDivision('Pemrograman', this)" class="division-btn">
                    <i class="fas fa-code"></i>
                    <span>Pemrograman</span>
                </button>
                <button onclick="selectDivision('Jaringan', this)" class="division-btn">
                    <i class="fas fa-network-wired"></i>
                    <span>Jaringan</span>
                </button>
                <button onclick="selectDivision('Multimedia', this)" class="division-btn">
                    <i class="fas fa-photo-video"></i>
                    <span>Multimedia</span>
                </button>
                <button onclick="selectDivision('Office', this)" class="division-btn">
                    <i class="fas fa-desktop"></i>
                    <span>Office</span>
                </button>
            </div>

            <!-- Notifikasi Divisi -->
            <div id="division-notification" class="division-notification">
                Anda memilih divisi: Pemrograman
            </div>
            <div id="division-warning" class="warning-notification-2"">
                Harap pilih divisi terlebih dahulu sebelum mengisi Data Diri.
            </div>

            <!-- Form Data Diri -->
            <div id="data-form" class="data-form">
                <h4><i class="fas fa-user-circle"></i> DATA DIRI</h4>

                <!-- Nama Lengkap -->
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-user"></i>
                        <input type="text" id="name" placeholder="Nama Lengkap" required>
                    </div>
                    <div id="name-warning" class="warning-message" style="display: none; color: red; font-size: 12px;"></div>
                </div>

                <!-- NIM -->
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-id-card"></i>
                        <input type="text" id="nim" placeholder="NIM" required>
                    </div>
                    <div id="nim-warning" class="warning-message" style="display: none; color: red; font-size: 12px;"></div>
                </div>

                <!-- Program Studi -->
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-graduation-cap"></i>
                        <input type="text" id="prodi" placeholder="Program Studi" required>
                    </div>
                    <div id="prodi-warning" class="warning-message" style="display: none; color: red; font-size: 12px;"></div>
                </div>

                <!-- Fakultas -->
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-university"></i>
                        <input type="text" id="fakultas" placeholder="Fakultas" required>
                    </div>
                    <div id="fakultas-warning" class="warning-message" style="display: none; color: red; font-size: 12px;"></div>
                </div>

                <!-- Jenis Kelamin -->
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-venus-mars"></i>
                        <select id="gender" required>
                            <option value="">Pilih Jenis Kelamin</option>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                            <option value="Lainnya">Lainnya</option>
                        </select>
                    </div>
                    <div id="gender-warning" class="warning-message" style="display: none; color: red; font-size: 12px;"></div>
                </div>

                <button onclick="nextStep()" class="next-btn">
                    <span>Selanjutnya</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>

            <!-- Form Pengisian Email -->
            <div id="email-form" class="data-form" style="display: none;">
                <h4><i class="fas fa-envelope-circle-check"></i> PENGISIAN EMAIL</h4>

                <!-- Email -->
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-envelope"></i>
                        <input type="email" id="email" placeholder="Email" required>
                    </div>
                    <div id="email-warning" class="warning-message" style="display: none; color: red; font-size: 12px;"></div>
                </div>

                <!-- Username -->
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-user-tag"></i>
                        <input type="text" id="username" placeholder="Username" required>
                    </div>
                    <div id="username-warning" class="warning-message" style="display: none; color: red; font-size: 12px;"></div>
                </div>

                <!-- Password -->
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="password" placeholder="Password" required>
                        <button type="button" class="toggle-password" onclick="togglePassword('password', event)">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    <div id="password-warning" class="warning-message" style="display: none; color: red; font-size: 12px;"></div>
                </div>

                <!-- Konfirmasi Password -->
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-lock-check"></i>
                        <input type="password" id="confirm-password" placeholder="Konfirmasi Password" required>
                        <button type="button" class="toggle-password" onclick="togglePassword('confirm-password', event)">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    <div id="confirm-password-warning" class="warning-message" style="display: none; color: red; font-size: 12px;"></div>
                </div>

                <div class="button-group">
                    <!-- Tombol Kembali -->
                    <button onclick="previousStep()" class="prev-btn">
                        <i class="fas fa-arrow-left"></i>
                        <span>Kembali</span>
                    </button>

                    <!-- Tombol Daftar Sekarang -->
                    <button onclick="submitForm()" class="submit-btn">
                        <span>Daftar Sekarang</span>
                        <i class="fas fa-user-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div id="email-success-notification" class="success-notification">
        PENGISIAN FORMULIR PENDAFTARAN BERHASIL😊😊
    </div>

    <!-- Container kanan (info) -->
    <div class="info-container">
        <div class="logo-section">
            <img src="{{ asset('images/logo.png') }}" alt="STARLABS Logo" class="info-logo">
        </div>
        <div class="header">
            <h1>UNIT KEGIATAN MAHASISWA</h1>
            <h2>SCIENCE TECHNOLOGY AND COMPUTER LABORATORIES</h2>
            <p class="fire-text">Salam Teknologi!</p>
            <p class="quote">"Di Era perkembangan teknologi yang sangat pesat, jangan sampai kamu tertinggal, jangan hanya jadi pengguna tetapi cobalah untuk menjadi bagian dari terciptanya teknologi."</p>
        </div>
    </div>
</div>
@endsection
