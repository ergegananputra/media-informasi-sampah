# Media Informasi Persampahan - Sendari, Mlati, Sleman

Website informasi persampahan yang dirancang khusus u├── components/
│   ├── ui/                 # Komponen shadcn/ui
│   ├── header.tsx          # Header dengan info lokasi
│   ├── waste-card.tsx      # Kartu jenis sampah
│   ├── waste-stats.tsx     # Statistik sampah
│   ├── waste-schedule.tsx  # Jadwal pengambilan (kontak Marcipul)
│   ├── qr-code-info.tsx    # Info akses via QR
│   ├── marcipul-info.tsx   # Informasi lengkap Marcipul
│   ├── marcipul-gallery.tsx # Gallery foto Marcipul
│   ├── marcipul-location.tsx # Lokasi dengan Google Maps
│   ├── video-tutorial-section.tsx # Video tutorial dinamis
│   ├── youtube-embed.tsx   # Embed video YouTube
│   └── github-status.tsx   # Status koneksi GitHubyarakat Sendari, Mlati, Sleman. Website ini berfungsi sebagai media edukasi pemilahan sampah yang dapat diakses melalui QR Code yang ditempatkan di tempat-tempat sampah di area tersebut.

## 🎯 Tujuan

- Memberikan informasi lengkap tentang jenis-jenis sampah
- Mengajarkan cara memilah sampah dengan benar
- Menyediakan tutorial video pemilahan sampah
- Memberikan informasi jadwal pengambilan sampah
- Mendukung program kebersihan lingkungan di Sendari, Mlati, Sleman

## 🔧 Teknologi

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS + shadcn/ui
- **Language**: TypeScript
- **Linting**: ESLint
- **Icons**: Lucide React

## 📱 Fitur

### 1. Jenis-jenis Sampah
- **Sampah Organik**: Dapat terurai secara alami
- **Sampah Anorganik**: Tidak dapat terurai secara alami
- **Sampah B3**: Bahan Berbahaya dan Beracun
- **Sampah Residu**: Tidak dapat didaur ulang

### 2. Tips Pemilahan
- Panduan praktis sebelum membuang sampah
- Prinsip 3R (Reduce, Reuse, Recycle)

### 3. Video Tutorial
- Embed YouTube untuk tutorial pemilahan sampah
- **Data dinamis dari GitHub**: Video dapat dikelola melalui file JSON di repository
- Video pengolahan sampah di rumah
- Loading state dan error handling

### 4. Jadwal Pengambilan
- Jadwal pengambilan sampah per jenis
- Informasi kontak perangkat desa

### 5. Informasi Marcipul
- **SS BS Marcipul**: Sedekah Sampah dan Bank Sampah Mari Kita Kumpul
- Keuntungan bergabung dengan program Marcipul
- Kontak langsung dengan WhatsApp dan telepon
- Gallery foto kegiatan dan produk (dapat dikelola secara statis)
- **Lokasi dengan Google Maps**: Preview peta dan navigasi langsung

### 6. Fakta Sampah
- Statistik menarik tentang sampah
- Dampak lingkungan

## � Video Tutorial Management

Website mendukung pengambilan data video tutorial secara dinamis dari repository GitHub. 

### Setup Video Tutorial:

1. Buat file `video_tutorial_data.json` di repository GitHub Anda
2. Konfigurasi username dan repository di komponen `VideoTutorialSection`
3. Video akan otomatis terupdate tanpa perlu redeploy website

Lihat [Video Tutorial Setup Guide](./docs/VIDEO_TUTORIAL_SETUP.md) untuk panduan lengkap.

### Format File JSON:
```json
{
  "videos": [
    {
      "id": "video-1",
      "title": "Judul Video",
      "description": "Deskripsi video",
      "videoId": "YouTube_Video_ID",
      "category": "Kategori",
      "duration": "5:30",
      "published": "2025-01-01"
    }
  ],
  "lastUpdated": "2025-07-02T10:00:00Z"
}
```

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka [http://localhost:3000](http://localhost:3000) di browser

## 📋 Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm run start` - Menjalankan production server
- `npm run lint` - Menjalankan ESLint

## 🎨 Struktur Komponen

```
src/
├── app/
│   ├── layout.tsx          # Layout utama
│   ├── page.tsx            # Halaman utama
│   └── globals.css         # Styling global
└── components/
    ├── ui/                 # Komponen shadcn/ui
    ├── header.tsx          # Header dengan info lokasi
    ├── waste-card.tsx      # Kartu jenis sampah
    ├── waste-stats.tsx     # Statistik sampah
    ├── waste-schedule.tsx  # Jadwal pengambilan
    ├── qr-code-info.tsx    # Info akses via QR
    └── youtube-embed.tsx   # Embed video YouTube
```

## 🌍 Penggunaan

Website ini dirancang untuk:
1. Dipasang QR Code di tempat sampah
2. Diakses via smartphone masyarakat
3. Memberikan edukasi langsung saat membuang sampah
4. Meningkatkan kesadaran pemilahan sampah

## 🏛️ Program KKN

Ini adalah bagian dari program KKN (Kuliah Kerja Nyata) dengan fokus pada:
- Kelestarian lingkungan
- Edukasi masyarakat
- Teknologi untuk kemudahan akses informasi
- Pemberdayaan masyarakat desa

## 📞 Kontak

Untuk informasi lebih lanjut atau melaporkan masalah persampahan, silakan hubungi perangkat desa Sendari, Mlati, Sleman.

---
*Dibuat dengan ❤️ untuk masyarakat Sendari, Mlati, Sleman*

## 📸 Mengelola Gallery Marcipul

Website mendukung gallery foto statis untuk dokumentasi kegiatan dan produk Marcipul.

### Menambahkan Foto:
1. Letakkan foto di folder `/public/images/marcipul/`
2. Gunakan format JPG/PNG dengan ukuran maksimal 2MB
3. Edit komponen `MarcipulGallery` untuk mengaktifkan foto

Lihat [Marcipul Gallery Guide](./docs/MARCIPUL_GALLERY_GUIDE.md) untuk panduan lengkap.

## 📞 Kontak Marcipul

**SS BS MARCIPUL** - Sedekah Sampah dan Bank Sampah Mari Kita Kumpul Melestarikan Alam

- **WhatsApp**: Herwulan (+62 877 3550 1701) | Yuni Lestari (+62 812 2703 4424)  
- **Chat Langsung**: Tombol WhatsApp tersedia di website
- **Kegiatan**: Pemilahan sampah, kerajinan anorganik, pembuatan kompos
