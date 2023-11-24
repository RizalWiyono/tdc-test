# Test TDC

Test TDC

## Akun
- Email:
    ```bash
    rizal@tdc.com
    ```

- Password:
    ```bash
    123
    ```

## Instalasi

### Backend (repo-be)

1. Pindah ke Direktori `repo-be`
    ```bash
    cd repo-be/
    ```
    Pindah ke direktori proyek Laravel untuk melakukan langkah-langkah berikutnya.

2. Instalasi Dependencies menggunakan Composer
    ```bash
    composer install
    ```
    Composer akan mengunduh dan menginstal semua dependencies yang diperlukan untuk proyek.

3. Konfigurasi File Lingkungan
    ```bash
    cp .env.example .env
    ```
    Salin file `.env.example` menjadi `.env` untuk konfigurasi aplikasi.

4. Generate Kunci Aplikasi
    ```bash
    php artisan key:generate
    ```
    Menghasilkan kunci aplikasi yang diperlukan.

5. Migrasi Database
    ```bash
    php artisan migrate
    ```
    Melakukan migrasi struktur database yang diperlukan.

6. Seeding Database (Opsional)
    ```bash
    php artisan db:seed
    ```
    Jalankan perintah seeding untuk mengisi data awal ke dalam database jika diperlukan.

7. Jalankan Server
    ```bash
    php artisan serve
    ```
    Memulai server untuk menjalankan aplikasi backend.

### Frontend (repo-fe)

1. Pindah ke Direktori `repo-fe`
    ```bash
    cd repo-fe/
    ```
    Pindah ke direktori proyek frontend untuk langkah-langkah berikutnya.

2. Konfigurasi File Lingkungan
    ```bash
    cp .env.example .env
    ```
    Salin file `.env.example` menjadi `.env` untuk konfigurasi aplikasi frontend.

3. Atur URL Backend
    Buka file `.env` dan atur variabel `URL_BACKEND` sesuai dengan URL backend dari repo-be (Laravel).

4. Installasi Dependencies
    ```bash
    npm install
    ```
    Mengunduh dan menginstal semua dependencies yang diperlukan untuk proyek frontend.

5. Jalankan Aplikasi Frontend
    ```bash
    npm start
    ```
    Menjalankan aplikasi frontend.

## Penggunaan

Cara menggunakan proyek atau beberapa instruksi dasar untuk memulai proyek ini.

## Kontribusi

Jika ada langkah-langkah untuk berkontribusi ke proyek, atau cara berkolaborasi, jelaskan di sini.

## Lisensi

Jika proyekmu menggunakan lisensi tertentu, cantumkan informasi lisensi di sini.

## Penulis

Tambahkan informasi tentang penulis proyek jika relevan.

## Catatan Tambahan

Tambahkan catatan tambahan atau informasi penting lainnya tentang proyek jika diperlukan.
