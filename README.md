# Pindah ke direktori repo-be (proyek Laravel)
cd repo-be/

# Install dependencies menggunakan Composer
composer install

# Buat file .env berdasarkan file .env.example
cp .env.example .env

# Generate key aplikasi
php artisan key:generate

# Lakukan migrasi database
php artisan migrate

# Jalankan perintah seeding untuk mengisi data awal ke dalam database (jika ada)
php artisan db:seed

# Jalankan server
php artisan serve

------------------

# Pindah ke direktori repo-fe
cd repo-fe/

# Copy template .env.example menjadi .env
cp .env.example .env

# Buka file .env dan atur URL_BACKEND sesuai dengan URL backend repo-be (Laravel)

# Kembali ke direktori utama repo-fe jika Anda belum berada di sana
cd repo-fe/

# Install dependencies
npm install

# Jalankan aplikasi frontend
npm start
