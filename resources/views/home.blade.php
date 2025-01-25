@extends('layouts.app')

@section('title', 'Pendaftaran STAR LABS') <!-- Mengisi judul halaman -->

@section('content')
<div class="container-wrapper">
    <!-- Container kiri (form) -->
    <div class="container">
        <div class="form-container">
            <h3>FORMULIR PENDAFTARAN</h3>
            <div class="division-selection">
                <button onclick="selectDivision('Pemrograman')" class="division-btn">
                    <i class="fas fa-code"></i>
                    <span>Pemrograman</span>
                </button>
                <button onclick="selectDivision('Jaringan')" class="division-btn">
                    <i class="fas fa-network-wired"></i>
                    <span>Jaringan</span>
                </button>
                <button onclick="selectDivision('Multimedia')" class="division-btn">
                    <i class="fas fa-photo-video"></i>
                    <span>Multimedia</span>
                </button>
                <button onclick="selectDivision('Office')" class="division-btn">
                    <i class="fas fa-desktop"></i>
                    <span>Office</span>
                </button>
            </div>
            <div id="data-form" class="data-form">
                <h4><i class="fas fa-user-circle"></i> DATA DIRI</h4>
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-user"></i>
                        <input type="text" id="name" placeholder="Nama Lengkap" required>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-id-card"></i>
                        <input type="text" id="nim" placeholder="NIM" required>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-graduation-cap"></i>
                        <input type="text" id="prodi" placeholder="Program Studi" required>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-university"></i>
                        <input type="text" id="fakultas" placeholder="Fakultas" required>
                    </div>
                </div>
                <button onclick="nextStep()" class="next-btn">
                    <span>Selanjutnya</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
            <div id="email-form" class="data-form" style="display: none;">
                <h4><i class="fas fa-envelope-circle-check"></i> PENGISIAN EMAIL</h4>
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-envelope"></i>
                        <input type="email" id="email" placeholder="Email" required>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-user-tag"></i>
                        <input type="text" id="username" placeholder="Username" required>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="password" placeholder="Password" required>
                        <button type="button" class="toggle-password" onclick="togglePassword('password')">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-lock-check"></i>
                        <input type="password" id="confirm-password" placeholder="Konfirmasi Password" required>
                        <button type="button" class="toggle-password" onclick="togglePassword('confirm-password')">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <button onclick="submitForm()" class="submit-btn">
                    <span>Daftar Sekarang</span>
                    <i class="fas fa-user-plus"></i>
                </button>
            </div>
        </div>
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
            <p class="quote">"Di Era perkembangan teknologi yang sangat pesat, jangan sampai kamu tertinggal, jangan hanya jadi pengguna tetapi cobalah untuk menjadi bagian dari terciptanya teknologi."</p>
        </div>
    </div>
</div>
@endsection
