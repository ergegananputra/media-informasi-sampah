# Video Tutorial Management

## Cara Menggunakan Fitur Video Tutorial Dinamis

Website ini mendukung pengambilan data video tutorial secara dinamis dari repository GitHub. Berikut cara penggunaannya:

### 1. Setup File JSON di GitHub

Buat file `video_tutorial_data.json` di repository GitHub Anda dengan struktur sebagai berikut:

```json
{
  "videos": [
    {
      "id": "video-1",
      "title": "Judul Video",
      "description": "Deskripsi video yang akan ditampilkan",
      "videoId": "YouTube_Video_ID",
      "category": "Kategori Video",
      "duration": "5:30",
      "published": "2025-01-01"
    }
  ],
  "lastUpdated": "2025-07-02T10:00:00Z"
}
```

### 2. Struktur Data Video

Setiap objek video memiliki properti:

- **id** (required): ID unik untuk video
- **title** (required): Judul video
- **description** (required): Deskripsi video
- **videoId** (required): ID video YouTube (bagian setelah `v=` di URL YouTube)
- **category** (optional): Kategori video (akan ditampilkan sebagai badge)
- **duration** (optional): Durasi video (format bebas, contoh: "5:30")
- **published** (optional): Tanggal publikasi (ISO string atau format tanggal)

### 3. Konfigurasi di Website

#### Opsi 1: Menggunakan Environment Variables (Recommended)

1. Copy file `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```

2. Edit file `.env.local` sesuai dengan repository Anda:
```env
NEXT_PUBLIC_GITHUB_USERNAME=username-anda
NEXT_PUBLIC_GITHUB_REPOSITORY=nama-repository
NEXT_PUBLIC_GITHUB_BRANCH=main
NEXT_PUBLIC_VIDEO_TUTORIAL_PATH=video_tutorial_data.json
```

#### Opsi 2: Edit Langsung di Kode

Di file `src/app/page.tsx`, ubah properti komponen `VideoTutorialSection`:

```tsx
<VideoTutorialSection
  githubUsername="username-github-anda"
  repositoryName="nama-repository"
  filePath="video_tutorial_data.json"
  branch="main"
/>
```

### 4. Cara Mendapatkan YouTube Video ID

Dari URL YouTube: `https://www.youtube.com/watch?v=nrANKUUHBf0`
Ambil bagian setelah `v=`: `nrANKUUHBf0`

### 5. Contoh URL GitHub Raw

Format URL yang akan diakses:
```
https://raw.githubusercontent.com/[username]/[repository]/[branch]/[filePath]
```

Contoh:
```
https://raw.githubusercontent.com/johndoe/sampah-tutorial/main/video_tutorial_data.json
```

### 6. Fallback System

Jika terjadi error saat mengambil data dari GitHub, website akan menggunakan data cadangan yang sudah ada di kode.

### 7. Cache dan Update

- Data akan selalu diambil fresh dari GitHub (no-cache)
- Tanggal update terakhir akan ditampilkan di bawah judul section
- Perubahan pada file JSON di GitHub akan langsung terlihat di website

### 8. Error Handling

- Jika file tidak ditemukan, akan muncul pesan error dan menggunakan data fallback
- Jika format JSON tidak valid, akan muncul pesan error
- Loading state akan ditampilkan saat mengambil data

### 9. Tips Penggunaan

1. **Pastikan file JSON valid**: Gunakan validator JSON online untuk memastikan syntax benar
2. **Gunakan repository public**: File harus dapat diakses tanpa autentikasi
3. **Update lastUpdated**: Ubah timestamp saat menambah/mengubah video
4. **Test video ID**: Pastikan video YouTube dapat diputar dan tidak private

### 10. Contoh Penggunaan Lengkap

```json
{
  "videos": [
    {
      "id": "organik-anorganik",
      "title": "Cara Memilah Sampah Organik dan Anorganik",
      "description": "Tutorial lengkap memilah sampah organik dan anorganik untuk program pengelolaan sampah Sendari, Mlati, Sleman.",
      "videoId": "nrANKUUHBf0",
      "category": "Pemilahan Dasar",
      "duration": "5:30",
      "published": "2025-01-01"
    },
    {
      "id": "kompos-rumah",
      "title": "Membuat Kompos di Rumah",
      "description": "Langkah mudah mengolah sampah organik menjadi kompos berkualitas.",
      "videoId": "B4fKi53KZAE",
      "category": "Pengolahan",
      "duration": "8:15",
      "published": "2025-01-05"
    }
  ],
  "lastUpdated": "2025-07-02T10:00:00Z"
}
```
