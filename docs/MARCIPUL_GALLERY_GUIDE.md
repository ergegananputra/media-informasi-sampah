# Panduan Menambahkan Foto Gallery Marcipul

## 📸 Cara Menambahkan Foto ke Gallery

### 1. Persiapan Foto
- Format yang didukung: JPG, JPEG, PNG
- Ukuran maksimal: 2MB per foto
- Rasio yang disarankan: 16:9 (landscape) atau 4:3
- Resolusi minimum: 800x600 px

### 2. Lokasi File
Letakkan foto di folder:
```
/public/images/marcipul/
```

### 3. Penamaan File
Gunakan penamaan yang deskriptif:
- `kegiatan-pemilahan.jpg` - Kegiatan pemilahan sampah
- `kerajinan-sampah.jpg` - Produk kerajinan
- `bank-sampah.jpg` - Fasilitas bank sampah
- `kompos-organik.jpg` - Proses pembuatan kompos
- `sosialisasi.jpg` - Kegiatan sosialisasi
- `tabungan-sampah.jpg` - Sistem tabungan

### 4. Mengaktifkan Gambar di Kode

Setelah foto ditambahkan, buka file:
```
/src/components/marcipul-gallery.tsx
```

Uncomment bagian Image component dan sesuaikan path:

```tsx
// Ganti bagian placeholder dengan:
<Image
  src={`/images/marcipul/nama-file.jpg`}
  alt={item.placeholder}
  fill
  className="object-cover"
/>
```

### 5. Struktur Gallery Saat Ini

Gallery memiliki 6 slot foto dengan kategori:

1. **Kegiatan Pemilahan Sampah** (Kegiatan)
2. **Produk Kerajinan Sampah Anorganik** (Produk)  
3. **Bank Sampah** (Fasilitas)
4. **Kompos Organik** (Produk)
5. **Sosialisasi Masyarakat** (Kegiatan)
6. **Tabungan Sampah** (Layanan)

### 6. Menambah Foto Baru

Untuk menambah slot foto baru, edit array `galleryItems` di file `marcipul-gallery.tsx`:

```tsx
{
  id: 7,
  title: "Judul Foto Baru",
  description: "Deskripsi foto",
  category: "Kategori", // Kegiatan/Produk/Fasilitas/Layanan
  placeholder: "Alt text untuk foto"
}
```

### 7. Tips Foto yang Baik

- **Pencahayaan**: Foto terang dan jelas
- **Komposisi**: Fokus pada aktivitas utama
- **Kualitas**: Hindari foto buram atau pixelated
- **Relevansi**: Sesuai dengan kegiatan Marcipul
- **Izin**: Pastikan ada izin dari orang yang difoto

### 8. Contoh Foto yang Dibutuhkan

**Kegiatan:**
- Warga memilah sampah
- Proses sosialisasi
- Pelatihan pembuatan kompos

**Produk:**
- Hasil kerajinan dari botol plastik
- Tas dari sampah anorganik
- Kompos jadi

**Fasilitas:**
- Tempat penimbangan sampah
- Area penyimpanan
- Peralatan kerja

**Layanan:**
- Buku tabungan sampah
- Proses transaksi
- Pencatatan data

### 9. Format Optimal

```
Resolusi: 1200x800px (rasio 3:2)
Format: JPG dengan kualitas 80-90%
Ukuran file: 200KB - 500KB
```

### 10. Testing

Setelah menambahkan foto:
1. Jalankan `npm run dev`
2. Buka halaman website
3. Scroll ke section "Gallery Marcipul"
4. Pastikan foto tampil dengan baik
5. Test responsivitas di berbagai ukuran layar

---

*Untuk bantuan teknis, hubungi tim developer website.*
