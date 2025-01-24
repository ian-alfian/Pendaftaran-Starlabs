<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Default Title')</title> <!-- Judul halaman akan diisi melalui @section('title') -->

    <!-- Path ke CSS -->
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}?v={{ time() }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Header Global -->
    <header>
        <div class="login-button">
            <a href="#" class="login-btn">
                <i class="fas fa-sign-in-alt"></i>
                <span>Login</span>
            </a>
        </div>
    </header>

    <!-- Konten Utama -->
    <main>
        @yield('content') <!-- Placeholder untuk konten spesifik halaman -->
    </main>

    <!-- Footer Global -->
    <footer>
        <p>&copy; {{ date('Y') }} STAR LABS. All rights reserved.</p>
    </footer>

    <!-- Path ke JS -->
    <script src="{{ asset('js/script.js') }}"></script>
</body>
</html>
