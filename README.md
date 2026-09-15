# 🌶️ MASTER PLAN BUDIDAYA CABAI RAWIT ORI 212
### 200 polybag · satu perlakuan seragam · dari semai (H-35) sampai panen pertama (HST 80-96)

`Versi V3` · `200 polybag seragam` · `pupuk = siklus berulang` · `pemicu = ciri fisik tanaman`

> **Cara kerja plan ini:** pupuk diberikan sebagai **SIKLUS BERULANG**, dan perpindahan fase dipicu **CIRI FISIK tanaman** — bukan tanggal. **HST hanya dipakai untuk dua hal:** menandai kocor pertama tiap fase, dan jadi alarm kalau ciri tidak muncul.
>
> Kalau ciri tanaman dan tanggal bertentangan → **selalu ikut ciri tanaman.**

---

## Sumber Tunggal & Sinkronisasi

| File | Peran | Boleh diedit? |
|---|---|---|
| [`README.md`](README.md) | **Sumber tunggal** — versi yang dirender GitHub | ✅ **Ya, di sini saja** |
| [`plan.txt`](plan.txt) | Salinan teks polos untuk dicetak / dibagikan offline | ❌ **Tidak** — dibuat otomatis |
| [`plan_v1_lama.txt`](plan_v1_lama.txt) | Arsip versi lama (masih perlakuan A/B) | ❌ Dibekukan |

Setiap kali mengubah README.md, samakan plan.txt dengan satu perintah:

```bash
node tools/sync-plan.mjs                 # tulis ulang plan.txt
node tools/sync-plan.mjs --check         # cek saja (exit 1 bila beda)
node tools/sync-plan.mjs --install-hook  # pasang sekali: otomatis saat commit
```

Setelah hook terpasang, plan.txt **tidak bisa lagi tertinggal** — hook memperbarui dan meng-*stage*-nya sebelum setiap commit.

---

## 📖 CARA MEMBACA DOKUMEN INI

**Tiga hal yang paling penting untuk diingat:**

1. **Jangan patok kalender.** Kocor pertama tiap fase punya acuan HST, selebihnya ikut ciri fisik.
2. **Kocor = siklus yang diulang.** Satu siklus = 2-3 kocor berurutan (ember ke-1 lalu ke-2, mis. 🟢 lalu 🔵). Habis satu putaran → **ulangi siklus yang sama persis, bukan kembali ke V1.** Yang naik hanya **fase** (V1 → V2 → V3), dan dosis **tidak pernah turun**.
3. **Bilas garam tetap kalender.** Ini satu-satunya jadwal yang sengaja tidak ikut ciri.

### Legenda Ember

| Ikon | Nama Ember | Dipakai di | Isi utama |
|---|---|---|---|
| 🟢 | Ember 1 — NPK Mix | Vegetatif | YaraMila, PH, Vitaflex, MgSO4, KNO3 |
| 🔵 | Ember 2 — Kalsium | Semua fase | CN-G |
| 🟡 | Ember MKP | Transisi & Generatif | MKP (dan MgSO4 di G-2) |
| 🔴 | Ember KNO3 + Karate | Transisi & Generatif | KNO3, Karate Plus Boroni |
| ⚪ | Tanpa ember | Pruning | — |

### Simbol

| Simbol | Arti |
|---|---|
| ⚠️ | Peringatan — bisa merusak tanaman kalau salah |
| ✅ | Aman / sudah sesuai |
| ❌ | Dilarang keras |
| ⭐ | Bagian yang paling sering dibuka |

> **Penanda teks di dalam ember:** kalau tertulis **✅ hanya siklus pertama**, artinya bahan itu dipakai **sekali saja** pada siklus pertama fase tersebut — siklus kedua dan seterusnya tidak memakainya lagi.

### Daftar Isi

> Klik nomor untuk lompat ke bagiannya.

**BAGIAN A — MEMAHAMI PLAN**
1. [Spesifikasi Varietas](#1-spesifikasi-varietas)
2. [Aturan Main](#2-aturan-main)
3. [⭐ Peta Ciri → Aksi](#3--peta-ciri--aksi-inti-dokumen)

**BAGIAN B — PERSIAPAN (H-35 → HST 0)**
4. [Persemaian](#4-persemaian)
5. [Media & Polybag](#5-media--polybag)
6. [Pindah Tanam (HST 0)](#6-pindah-tanam-hst-0)

**BAGIAN C — PEMBERIAN PUPUK (HST 10 → panen)**
7. [Template Siklus Pupuk](#7-template-siklus-pupuk)
8. [SOP Pencampuran Ember](#8-sop-pencampuran-ember)

**BAGIAN D — PERAWATAN**
9. [Air & Bilas Garam](#9-air--bilas-garam)
10. [Pruning & Pengajiran](#10-pruning--pengajiran)

**BAGIAN E — REFERENSI**
11. [Larangan Pencampuran Kimia](#11-larangan-pencampuran-kimia)
12. [Stok Pupuk & Neraca Hara](#12-stok-pupuk--neraca-hara)
13. [Monitoring & Troubleshooting](#13-monitoring--troubleshooting)
14. [Larangan & Kewajiban](#14-larangan--kewajiban)

**LAMPIRAN**
- [L1. Daftar Belanja](#l1-daftar-belanja)
- [L2. Catatan Verifikasi & Sumber](#l2-catatan-verifikasi--sumber)

**Pengelolaan dokumen**
- [Sumber Tunggal & Sinkronisasi](#sumber-tunggal--sinkronisasi)

---

## ⚡ KARTU RINGKAS — TEMPEL DI DINDING

### Alur besar

```
SEMAI (H-35) → TANAM (HST 0) → V1 → V2 → V3 → TRANSISI → G-1 → G-2 → PANEN
                                  └── vegetatif ──┘   └─ generatif ─┘
```

Setiap fase **diulang-ulang** sampai ciri fase berikutnya muncul — bukan naik lalu balik turun:

```
V1 ↺ V1 ↺ V1  →  V2 ↺ V2  →  V3 ↺ V3 ↺ V3  →  TRANSISI ↺ ↺  →  G-1 ↺  →  G-2 ↺ ↺  →  PANEN
```

### Isi satu siklus per fase

| Fase | Isi siklus — **ulangi terus di fase ini** | Volume kocor |
|---|---|---|
| **V1** Adaptasi | 🟡 PH → 🟢 NPK-1 → 🔵 Ca | 200 ml |
| **V2** Vegetatif awal | 🟢 NPK-2 → 🔵 Ca | 250 ml |
| **V3** Vegetatif lanjutan | 🟢 NPK-3 → 🔵 Ca | 300 ml |
| **Transisi** | 🟡 MKP → 🔴 KNO3 + Karate | 300 ml |
| **G-1** Buah set | 🔵 Ca → 🔴 KNO3 + Karate → 🟡 MKP | 300 ml |
| **G-2** Buah mengisi | 🟡 MKP + Mg → 🔴 KNO3 + Karate | 300 ml |

> ⚠️ **Selesai satu putaran → ulangi fase yang sama, bukan kembali ke V1.** Contoh: selesai V3 → **V3 lagi dengan dosis yang sama** → V3 lagi … sampai kuncup bunga muncul, baru naik ke Transisi. Dosis hanya naik antar-fase, tidak pernah turun.

### Aturan cepat

- Kocor **tiap 3 hari** (boleh ±1 hari), hanya bila media **lembap tapi tidak becek**.
- **1 ember per hari** — jangan pernah dua ember bersamaan.
- Waktu kocor: **pagi 06.30-09.00** atau **sore 15.30-17.00**.
- Bilas garam **tiap 14 hari**: HST **21 · 35 · 49 · 63 · 77 · 91**.
- Di hari kocor, **kurangi air biasa** sebesar volume kocor.

---

# BAGIAN A — MEMAHAMI PLAN

## 1. Spesifikasi Varietas

*Terverifikasi dari deskripsi resmi Aura Seed Indonesia.*

| Aspek | Nilai |
|---|---|
| Tinggi dewasa | **150-165 cm** |
| Mulai berbunga | **38-50 HST** |
| Mulai panen (masak penuh) | **91-96 HST** |
| Bentuk buah | Bulat pipih, pangkal meruncing (tipe rawit putih) |
| Panjang buah | **3,2-3,6 cm** · rasa sangat pedas |
| Potensi hasil | ± **750 buah/tanaman** · 23,5-28,8 ton/ha di lahan |
| Daya berkecambah | **94%** |
| Adaptasi | Dataran rendah-menengah (0-700 mdpl) |

**Konsekuensi langsung ke plan:**

- **Ajir ≥ 1,8 m wajib** — tanaman bisa melebihi 1,5 m.
- **Jangan patok panen di HST 75** — varietas ini memang lambat.
- **Fase transisi dinilai dari bunga nyata sejak HST 38**, bukan menunggu HST 50.

---

## 2. Aturan Main

*Tujuh aturan yang berlaku di seluruh dokumen.*

| # | Aturan | Penjelasan |
|---|---|---|
| 1 | **HST hanya 2 fungsi** | Acuan kocor pertama & alarm keterlambatan. Selebihnya ikut ciri tanaman. |
| 2 | **Kocor = siklus** | Satu siklus 2-3 kocor, urutan & dosis tetap, diulang sampai ciri berikutnya muncul. |
| 3 | **Pindah fase hanya karena ciri fisik** | Lihat [Bagian 3](#3--peta-ciri--aksi-inti-dokumen). |
| 4 | **Interval kocor nominal 3 hari** | Boleh ±1 hari. Kocor hanya bila media lembap-tidak-becek (tes lidi 3-5 cm). |
| 5 | **Satu ember per hari** | Urutan ember di dalam siklus sudah mengatur ini. |
| 6 | **Bilas & air tetap kalender** | Akumulasi garam ditentukan input pupuk & air, bukan fisiologi tanaman. |
| 7 | **Cek 3 menit tiap akhir siklus** | Tinggi, warna daun bawah, kuncup, buah. Tulis di log — inilah "sensor" pengganti kalender. |

> ⚠️ **Kocor di media kering = akar terbakar garam.** Kalau media kering, siram air biasa dulu, tunggu 30-60 menit, baru kocor.

---

## 3. ⭐ Peta Ciri → Aksi (INTI DOKUMEN)

*Inilah otak dari seluruh plan. Baca tabel ini dari atas ke bawah.*

| Dari → ke | CIRI FISIK pemicu (yang dilihat mata) | Siklus dijalankan | HST acuan | ALARM bila ciri tak muncul |
|---|---|---|---|---|
| Semai → pindah tanam | 4-5 daun sejati, batang tegak | *(program semai)* | HST 0 | Bibit >35 hari masih kecil → cek media/air semai |
| Tanam → **V1** Adaptasi | **"Menempel":** daun lama tegak lagi + muncul ≥1 daun/tunas baru | SIKLUS V1 | **10** | HST 15 masih stagnan → cek akar & garam |
| V1 → **V2** Vegetatif awal | **Tumbuh aktif:** ujung bertambah tinggi & muncul ruas baru berturut-turut | SIKLUS V2 | **19** | HST 25 belum memanjang → cek N/cahaya |
| V2 → **V3** Vegetatif lanjutan | **Percabangan pertama** di ketiak daun bawah (atau tinggi ±20-25 cm) → **lakukan TOPING di titik ini** | SIKLUS V3 | **34** | HST 40 belum bercabang → cek akar & hara |
| V3 → **TRANSISI** | **Kuncup bunga pertama** — bintik hijau bulat di ketiak/percabangan | SIKLUS TRANSISI | **46** | HST 50 belum ada kuncup → **JANGAN mulai MKP**. Bila sudah toping, toleransi +7 hari |
| Transisi → **G-1** | **≥30-50% bunga jadi buah muda (buah set)** — mahkota rontok, pentil hijau | SIKLUS G-1 | **61** | Bunga rontok semua sampai HST 65 → [Troubleshooting](#13-monitoring--troubleshooting) |
| G-1 → **G-2** | **Buah mulai mengisi:** memanjang, kulit mengkilap, terasa kenyal | SIKLUS G-2 | — | — |
| Generatif → **PANEN putih** | Buah **penuh ukuran (3,2-3,6 cm)**, putih-krem mengkilap, kenyal | *(panen)* | **80-88** | — |
| Generatif → **PANEN merah** | **≥90% permukaan buah merah** | *(panen)* | **91-96** | — |

> **Cara pakai tabel ini:**
> - Ciri muncul **lebih cepat** dari HST acuan → **tetap maju.**
> - Sampai HST acuan ciri **belum muncul** → **jangan maju**, cek penyebabnya dulu.
> - **Bilas garam tetap kalender** — lihat [Bagian 9](#9-air--bilas-garam).

---

# BAGIAN B — PERSIAPAN (H-35 → HST 0)

## 4. Persemaian

*Dijalankan dengan kalender, karena bibit belum bisa "dibaca" seperti tanaman dewasa.*

> Bibit siap tanam butuh ±30-35 hari dari semai. **Persemaian harus sudah dimulai di H-35.**
> **Media semai:** topsoil halus + sekam bakar/humas (1:1) — **tanpa dolomit & SP-36**. Total ±80 L untuk 260 bibit.

| Waktu | Kegiatan |
|---|---|
| **H-35** | Semai **260 benih** ORI 212, kedalaman 0,5-1 cm, naungan 50% |
| **H-28** | Fertigasi 1: YaraMila 0,5 g/L, 30-50 ml/bibit (setelah 1-2 daun sejati) |
| **H-21** | Fertigasi 2: YaraMila 1 g/L, 50 ml/bibit — atau 5-7 hari setelah pindah wadah, mana yang lebih akhir |
| **H-14** | Fertigasi 3 (TERAKHIR): YaraMila 1 g/L, 50 ml/bibit — **setelah ini STOP pupuk** |
| H-35 → H-12 | Jaga lembap (semprot halus 1-2× sehari); **pindah ke wadah lebih besar saat 2 daun sejati** |
| H-12 → H-8 | Hardening: buka naungan bertahap, kurangi air, **tanpa pupuk** |

**Seleksi saat pindah tanam:** 4-5 daun sejati, tinggi ±20-25 cm, batang tegak, tidak kusam/layu.
❌ Bibit yang tidak lolos **dibuang** — jangan dipaksakan tanam.

---

## 5. Media & Polybag

### 5.1 Geometri polybag 40×40 cm

| Kondisi | Diameter dalam | Tinggi |
|---|---|---|
| Duduk (terisi tanah) | **26 cm** | 28 cm |
| Lipat (bim dibuka) | 20 cm | 40 cm |

Target isi **25 cm** dari tinggi 28 cm → kapasitas **13,3 L/polybag**.

### 5.2 Susunan polybag (penting untuk varietas tinggi)

| Hal | Aturan | Alasan |
|---|---|---|
| **Jarak pusat-tanam** | Minimal **40-50 cm** | Kanopi dewasa lebar 50-60 cm; terlalu rapat = daun bertumpuk, cahaya tertutup, flower drop & penyakit |
| **Contoh grid 200** | **10/deret × 20 deret** · dalam deret 45 cm · antar deret 55-60 cm | Butuh lahan **±50-70 m²** + lorong kerja |
| **Arah deretan** | Tegak lurus arah angin kencang | Tanaman 1,5 m + ajir 1,8 m punya wind-lever besar |
| **Dasar tempat** | Permukaan berporos (pasir/kerikil/papan reng) | ❌ Jangan di plastik/tarpaulin rata yang menggenang — akar terendam 1 hari = Phytophthora |
| **Komposisi media** | Tanah + sekam mentah saja | Tidak ada substitusi kompos/peat di tengah musim |

### 5.3 H-10: Pencampuran & pengisian

> **Total media 2.850 L.** 13,3 L/polybag adalah volume *padat*. Campuran topsoil + sekam mentah menyusut ±7% setelah disiram jenuh, jadi butuh ±14,25 L lepas/polybag. Kalau tetap 2.600 L, isi hanya sampai ±24,5 cm — kurang dan tidak bisa ditambah belakangan.

**Urutan kerja:**

- [ ] Siapkan 200 polybag **40×40 cm** (±6 kg bila beli kiloan)
- [ ] **Cek pH topsoil dasar DULU** (sebelum dolomit). Target akhir campuran **6,0-6,8**
- [ ] Campur Topsoil (2.000 L) + Sekam Mentah (850 L)
- [ ] Tambahkan dolomit **sesuai hasil cek pH** (acuan 2 kg = 10 g/polybag), aduk rata
- [ ] Campur **200 g GlioTrico-G** ke seluruh tumpukan (±1 g/polybag)
- [ ] **Cek pH campuran akhir**
- [ ] Bagi 2: Bawah **68%** (1.940 L) · Atas **32%** (910 L)
- [ ] Campur **2 kg SP-36 hanya ke Tumpukan Bawah**
- [ ] Isi polybag: Bawah **17 cm** (padat) → atas sampai total **25 cm** (rata)
- [ ] Siram jenuh hingga air mengalir dari bawah

**Dosis dolomit menurut pH dasar:**

| pH topsoil dasar | Dosis dolomit | Catatan |
|---|---|---|
| < 5,5 | 2,5-3,5 kg, naik bertahap | Cek ulang setelah tercampur |
| 5,5-6,5 | **2 kg** (acuan) | — |
| > 6,5 | Kurangi / lewati | ⚠️ Dolomit yang sudah tercampur **tidak bisa ditarik lagi** |

> **Cek pH itu wajib, bukan opsional.** 10 g/polybag (±0,8 g/L) cukup menaikkan pH ±0,5-1 poin pada tanah asam ringan. Rentang dosis efektif dari jurnal: 2,6 g/polybag (pH sudah 6,5) sampai 40 g/polybag (media sangat asam) — dosis buta bisa meleset dua arah.
>
> **Cara mengisi:** pakai tongkat yang ditandai 17 cm dan 25 cm. Yang dipatuhi adalah **tinggi (17 → 25 cm)**, bukan jumlah liter.

### 5.4 H-9 → H-1: Inkubasi, inokulasi & mulsa

| Waktu | Kegiatan |
|---|---|
| **H-9 → H-4** | Inkubasi: biarkan terbuka, ciprati air hanya jika kering |
| **H-3 pagi** | Booster: larutkan **100 g GlioTrico-G + 60 g gula** dalam 50 L air → kocor 250 ml/polybag |
| **H-3 sore** | Tabur mulsa sekam **1-2 cm** (tengah polybag dibersihkan) |
| **H-2 → H-1** | Cek kelembapan — jangan siram jika masih lembap |

> ⚠️ **Jangan pakai fungisida kimia dari H-10 sampai ±HST 7** — akan membunuh GlioTrico/Trichoderma yang baru diinokulasi. Ini juga berlaku untuk MycoGrow di HST 0.

---

## 6. Pindah Tanam (HST 0)

*Dilakukan sore hari 15.30-17.30 agar bibit punya waktu adaptasi.*

- [ ] Buat lubang **5-6 cm** di tengah polybag
- [ ] Masukkan **5 g MycoGrow** di dasar lubang
- [ ] Tanam bibit, pasang ajir **5-7 cm** dari batang
- [ ] Ikat pola angka 8 (longgar)
- [ ] Siram **250 ml** air di lubang tanam

---

# BAGIAN C — PEMBERIAN PUPUK (HST 10 → panen)

## 7. Template Siklus Pupuk

> **Cara pakai:** satu siklus = urutan **ember** di tabel fase itu (ember 1 → ember 2 → ember 3). Setelah urutan habis → **ulangi siklus yang SAMA dari ember pertama**, sampai ciri fase berikutnya muncul ([Bagian 3](#3--peta-ciri--aksi-inti-dokumen)).
>
> ⚠️ **Yang diulang adalah siklusnya — bukan kembali ke V1.** Selesai V3 → **V3 lagi (dosis sama)** → V3 lagi … sampai kuncup bunga muncul, baru naik ke TRANSISI. Dosis **naik antar-fase dan tidak pernah turun.**
>
> Semua dosis di bawah sudah dihitung untuk **200 polybag**.

**Tangga dosis — naik terus, tidak pernah turun:**

| Fase | Volume/polybag | YaraMila | CN-G | KNO3 | MKP | Karate |
|---|---|---|---|---|---|---|
| **V1** | 200 ml | 40 g | 32 g | — | — | — |
| **V2** | 250 ml | 90 g | 40 g | — | — | — |
| **V3** | 300 ml | 132 g | 48 g | 90 g | — | — |
| **Transisi** | 300 ml | — *(N distop)* | — | 180 g | 240 g | 120 g |
| **G-1** | 300 ml | — | 48 g | 240 g | 240 g | 120 g |
| **G-2** | 300 ml | — | — | 240 g | 240 g | 120 g |

*(angka = gram per 200 polybag, satu siklus penuh)*

**Bahan yang dipakai sekali saja — bukan rutin tiap siklus:**

| Bahan | Kapan dipakai | Dosis per 200 polybag |
|---|---|---|
| **Meroke Vitaflex** | Siklus **V1 pertama** | **5 g** — masuk ke ember 🟢 |
| **Meroke Vitaflex** | Siklus **V2 pertama** | **6,25 g** — masuk ke ember 🟢 |

> Total Vitaflex terpakai seumur tanam = **11,25 g** dari 100 g yang dibeli. Sesudah dua kali itu **Vitaflex tidak dipakai lagi** — bukan karena habis, tapi karena tidak diperlukan.

> **YaraMila berhenti di Transisi bukan berarti pupuk berkurang.** Itu sengaja: N tinggi = bunga rontok. Yang menggantikannya **KNO3, Karate, dan MKP** — jadi total hara justru makin besar, dan kalium makin naik saat buah mengisi.

**Kalau ciri belum muncul, yang diulang apa:**

| Fase yang sedang jalan | Ciri yang ditunggu | Bila ciri belum muncul |
|---|---|---|
| V1 | tumbuh aktif | **Ulangi V1** (dosis tetap) → cek akar & akumulasi garam |
| V2 | percabangan pertama | **Ulangi V2** (dosis tetap) → cek N & cahaya |
| V3 | kuncup bunga | **Ulangi V3** (dosis tetap) → **jangan** tambah YaraMila |
| Transisi | buah set ≥30-50% | **Ulangi Transisi** (dosis tetap) |

> **Kalau V3 sudah 4× berulang (sekitar HST 48) dan kuncup belum muncul:** jangan naikkan YaraMila — kelebihan N justru **menahan** pembungaan. Naikkan **KNO3 jadi 120 g** (tambah kalium saja, +30 g) per 200 polybag, lalu periksa tiga hal: cahaya (minimal 6 jam penuh), media terlalu basah, dan akumulasi garam.

### 7.1 SIKLUS V1 — Adaptasi

*Volume 200 ml/polybag → **40 L**. Ulangi sampai muncul ciri V2.*

| Kocor ke- | Ember | Isi ember — untuk 200 polybag |
|---|---|---|
| 1 | 🟡 Humate | Potassium Humate (PH) **40 g** — larutkan sendirian |
| 2 | 🟢 NPK-1 | YaraMila **40 g** + PH **40 g** + Vitaflex **5 g** ✅ *hanya siklus pertama* |
| 3 | 🔵 Kalsium | CN-G **32 g** — ember bersih khusus Ca |

### 7.2 SIKLUS V2 — Vegetatif awal

*Volume 250 ml/polybag → **50 L**. Ulangi sampai muncul ciri V3.*

| Kocor ke- | Ember | Isi ember — untuk 200 polybag |
|---|---|---|
| 1 | 🟢 NPK-2 | YaraMila **90 g** + PH **50 g** + MgSO4 **50 g** + Vitaflex **6,25 g** ✅ *hanya siklus pertama* |
| 2 | 🔵 Kalsium | CN-G **40 g** |

### 7.3 SIKLUS V3 — Vegetatif lanjutan

*Volume 300 ml/polybag → **60 L**. Ulangi sampai muncul ciri transisi.*

> ⚠️ **STOP N:** begitu **kuncup bunga pertama** terlihat, **langsung pindah ke SIKLUS TRANSISI** — jangan selesaikan siklus V3 dulu.

| Kocor ke- | Ember | Isi ember — untuk 200 polybag |
|---|---|---|
| 1 | 🟢 NPK-3 | YaraMila **132 g** + PH **60 g** + KNO3 **90 g** + MgSO4 **60 g** |
| 2 | 🔵 Kalsium | CN-G **48 g** |

### 7.4 SIKLUS TRANSISI — pemicu pembungaan

*Volume 300 ml/polybag → **60 L**. Ulangi sampai **≥30-50% bunga jadi buah set**.*

| Kocor ke- | Ember | Isi ember — untuk 200 polybag |
|---|---|---|
| 1 | 🟡 MKP | MKP **240 g** |
| 2 | 🔴 KNO3 + Karate | KNO3 **180 g** + Karate Plus Boroni **120 g** |

> **Prinsip:** N tinggi menyebabkan flower drop → **tidak ada YaraMila di sini**. Karate (kalsium nitrat + boron) menutup kebutuhan Ca selama transisi.

### 7.5 SIKLUS G-1 — Generatif awal (buah set → buah membesar)

*Volume 300 ml/polybag → **60 L**. Ulangi sampai ciri G-2 muncul.*

| Kocor ke- | Ember | Isi ember — untuk 200 polybag |
|---|---|---|
| 1 | 🔵 Kalsium | CN-G **48 g** |
| 2 | 🔴 KNO3 + Karate | KNO3 **240 g** + Karate Plus Boroni **120 g** |
| 3 | 🟡 MKP | MKP **240 g** |

> Ca ditegakkan di sini untuk mencegah **busuk ujung buah (BER)** saat buah baru terbentuk.

### 7.6 SIKLUS G-2 — Generatif lanjut (buah mengisi → masak)

*Volume 300 ml/polybag → **60 L**. Ulangi sampai panen pertama.*

**Bedanya dari G-1:** kocor Ca terpisah dihapus (Ca tetap datang dari Karate), dan **MgSO4 masuk ke ember MKP** — fokus bergeser dari Ca ke K + Mg untuk pengisian buah.

| Kocor ke- | Ember | Isi ember — untuk 200 polybag |
|---|---|---|
| 1 | 🟡 MKP + Mg | MKP **240 g** + MgSO4 **60 g** |
| 2 | 🔴 KNO3 + Karate | KNO3 **240 g** + Karate Plus Boroni **120 g** |

> ⚠️ **Jangan masukkan MgSO4 ke ember Karate/CN-G** (magnesium + kalsium → gips/endapan). MgSO4 hanya aman di ember **tanpa Ca** (ember MKP atau ember YaraMila).

### 7.7 Setelah panen pertama

- **N kembali** bila **sudah panen ke-2 dan daun mulai pucat**: tambahkan YaraMila ke Ember 1 (mis. 90 g per 200 polybag, naikkan bertahap). ⚠️ Jangan sebelum buah pertama masak.
- Lanjutkan SIKLUS G-2. Bila bunga susulan & buah baru banyak, selipkan siklus G-1.
- Petik tiap **2-3 hari**.

---

## 8. SOP Pencampuran Ember

*Larutkan satu bahan sampai benar-benar larut sebelum menambah bahan berikutnya.*

| Ember | Urutan pencampuran | Catatan |
|---|---|---|
| 🟢 **Ember 1 (NPK)** | air → YaraMila → Vitaflex (**hanya siklus pertama V1 & V2**) → MgSO4 (**mulai V2**) → KNO3 (**hanya V3**) → **PH** | ⚠️ PH dilarutkan **terpisah** di 1-2 L air, baru dituang sambil diaduk |
| 🔵 **Ember 2 (Ca)** | air bersih → CN-G → aduk | ❌ Ember bersih, **tidak pernah dicampur PH** |
| 🟡 **Ember MKP** | air → MKP (+ MgSO4 khusus G-2) → aduk | ❌ Jangan dicampur Ca |
| 🔴 **Ember KNO3 + Karate** | air → KNO3 → Karate → aduk | ✅ Aman |

**Cuci semua ember setiap selesai pakai.**

---

# BAGIAN D — PERAWATAN

## 9. Air & Bilas Garam

> **Kocor hara BUKAN penyiraman.** Volume kocor (200/250/300 ml) itu larutan pupuk. Air biasa tetap diberikan **terpisah** sesuai tabel ini.

### 9.1 Kebutuhan air per polybag per hari

| Umur | Air biasa | Catatan |
|---|---|---|
| H-10 → HST 0 | 300-500 ml, hanya bila permukaan mulai kering | H-10 sudah disiram jenuh; setelah itu cukup dijaga lembap |
| HST 1-10 | 100-200 ml | Akar belum memenuhi polybag |
| HST 10-20 | 200-300 ml | — |
| HST 20-40 | 300-600 ml | Bagi 2× (pagi + sore) saat terik |
| HST 40-61 | 500-800 ml | Kebutuhan naik menjelang generatif |
| HST 61-94 | 800-1.000 ml | Fase buah — jaga konsisten, jangan bolong |

> **Penentu utama tetap tes lidi, bukan angka.** Angka di atas adalah acuan (rujukan lahan klasik justru hanya ±200 ml vegetatif / 400 ml generatif).

### 9.2 Delapan aturan pelaksanaan

| # | Aturan |
|---|---|
| 1 | **Di hari kocor:** kurangi air biasa sebesar volume kocor hari itu — bukan menambah di atasnya |
| 2 | **Siram melingkar** 5-10 cm dari batang, jangan kena batang utama |
| 3 | **Tes sebelum siram:** tusuk media 3-5 cm pakai lidi. Masih basah → tunda. Kering → siram |
| 4 | **Media wajib lembap sebelum kocor** (kalau kering, siram air biasa dulu 30-60 menit) |
| 5 | **Bilas garam tiap 14 hari** — lihat di bawah |
| 6 | **Waktu:** pagi 06.30-09.00 atau sore 15.30-17.00. ❌ Jangan 11.00-15.00 |
| 7 | **Air PDAM berkaporit:** tampung 24 jam di tandon terbuka (untuk klorin). Kloramin **tidak menguap** → pakai deklorinator tiosulfat / filter karbon |
| 8 | **Musim hujan:** kurangi air biasa, tapi **jangan hentikan kocor hara** |

### 9.3 Bilas garam (satu-satunya yang murni kalender)

- **1-2 L air biasa per polybag**, sampai air mengalir keluar dari lubang bawah.
- **Acuan tanggal: HST 21 · 35 · 49 · 63 · 77 · 91** (ritme 14 hari).
- Bila hari bilas jatuh di hari kocor → **geser ±1 hari**, idealnya tepat 1 hari **sebelum** kocor MKP terdekat.
- ❌ Jangan bilas di hari yang sama dengan kocor fosfat.

### 9.4 Indikator air sudah benar

| ✅ Benar | ❌ Salah |
|---|---|
| Daun tegak di pagi hari, tidak menggulung ke bawah | Daun menggulung/layu di pagi hari |
| Media lembap di kedalaman 3-5 cm | Media kering atau becek |
| Air tidak menggenang >5 menit | Ada genangan di permukaan |
| Tidak ada kerak putih di permukaan media | Ada kerak putih = garam menumpuk → segera bilas |

### 9.5 Cek kualitas air sumber (1× sebelum H-10)

| Parameter | Rentang aman | Tindakan bila di luar |
|---|---|---|
| **pH air** | 5,5-7,5 | Perketat monitoring pH media |
| **TDS/EC** | < 700 ppm | 700-1.500 ppm: bilas lebih disiplin · >1.500 ppm: cari sumber air lain |
| **Boron** | < 0,7 mg/L | 0,7-1,5: **STOP Karate Plus Boroni**, cukup CN-G · >1,5: ganti sumber air |
| **Kerak kapur tebal di tandon** | Tidak ada | Alkalinitas tinggi → bilas lebih sering + cek pH media tiap bulan |

> Uji boron di lab hanya perlu bila air dari sumur dekat pantai/industri. **Air PDAM aman soal boron.**

### 9.6 Catatan volume

Total air ±**56 L/tanaman** untuk 94 hari (±11.000 L untuk 200 polybag). Siapkan cara pemberian (selang/pompa/fertigasi tetes) dan **tandon deklorinasi ±300-500 L** bila memakai PDAM.

---

## 10. Pruning & Pengajiran

> **KEPUTUSAN PRUNING: PAKAI DUA-DUANYA** — *toping pucuk* sebagai penggerak hasil + *rempel tunas air bawah* untuk sanitasi & cahaya. Bukan pilih salah satu. Semua 200 polybag perlakuan sama.

### 10.1 Toping pucuk — penggerak utama hasil

| Aspek | Detail |
|---|---|
| **Ciri pemicu** | **6-8 daun sejati**, tinggi ±20-25 cm, tanaman sehat (≈ HST 25-30; literatur rawit optimal 21-28 HST) |
| **Aksi** | Potong **1-2 cm ujung batang utama**. Potongan dibuat **2-3 cm di atas ruas daun teratas** — jangan terlalu dekat pangkal batang. **Sisakan 6-8 daun sehat** |
| **Pemulihan** | ± 2-3 hari |

**Yang terjadi setelahnya:** dari **ketiak 6-8 daun sisa** itulah muncul tunas baru; dalam **7-14 hari** menjadi **3-6 cabang baru (cabang "Y")**. Jadi cabang baru tumbuh **di bawah titik potong**, bukan dari ujung yang dipotong.

**Alasan:** memutus dominansi apikal → cabang produktif bertambah → titik buah lebih banyak.

**Bukti waktu optimal (literatur rawit konsisten 21-28 HST):**

| Studi | Perlakuan | Hasil |
|---|---|---|
| Nasrudin (UGM, 2021) | Pangkas ±21 HST + GA3 50 ppm | Bobot buah total **+72,85%** vs kontrol |
| Tanari (AGROVITAL, 2023) | Pangkas 28 HST, panjang 1,5 cm | **169,77 g/pohon** (terbaik) |
| Mu'afa (Plumula, 2020) | Pangkas 21 HST | **102 buah, 288,10 g/pohon** (terbanyak) |
| Putri (2024) & Irwansyah (2020) | Pangkas 28 HST | Jumlah cabang produktif & buah total tertinggi |

**Dua peringatan:**

- ⚠️ **Wajib dilakukan SEBELUM kuncup bunga pertama.** Ori 212 berbunga 38-50 HST → jendela 21-28 HST aman.
- ⚠️ Toping **menunda pembungaan**. Karena Ori 212 sudah lambat (91-96 HST): **toping sekali saja**, jangan ulang, jangan lewat HST 30.

> **Catatan kejujuran:** Hatta (Floratek, 2012) pada cabai **merah** tidak menemukan pengaruh nyata. Keuntungan toping paling konsisten pada **rawit**, dan bisa bervariasi antar lokasi.

### 10.2 Rempel tunas air — sanitasi, bukan sumber hasil

| Aspek | Detail |
|---|---|
| **Ciri pemicu** | Tunas baru di ketiak daun **di bawah percabangan pertama (cabang "Y")** |
| **Aksi** | Buang tunas air bawah **bertahap** (tiap 5-7 hari), **jangan habis** — sisakan 3-4 cabang produktif di atas |

**Alasan:** buah tetap produktif dari bawah ke atas, ukuran & kematangan lebih seragam, sirkulasi udara lebih baik → kelembapan turun → jamur/antraknosa terkendali. Krusial di polybag berjarak 40-50 cm.

> **Bukti hasil panen campur:** Hatta (2012) & studi tunas lateral (UST, 2023) tidak menemukan pengaruh nyata pada bobot/jumlah buah; Unismuh (2024) justru menemukan tunas-air terbaik.
> **Kesimpulan: rempel untuk menurunkan RISIKO, bukan menaikkan hasil.**

⚠️ Observasi lapangan (Mitra Bertani, 2024): toping yang **membiarkan semua tunas air** = kesalahan → tanaman rimbun, lembap, pemicu penyakit.

### 10.3 Urutan wajib: TOPING dulu → baru REMPEL

1. **Toping** (sekali, HST 21-28) → memicu banyak tunas baru dari ketiak 6-8 daun di bawah potongan.
2. Tunggu **5-10 hari** sampai tunas berukuran ±5-10 cm.
3. **Seleksi:** pelihara **3-4 tunas terbaik** (tegak, kokoh, mengarah keluar) sebagai cabang utama; buang sisanya.
4. **Ulangi rempel tiap 5-7 hari** untuk tunas baru di bagian bawah.

> ⚠️ **Kalau rempel dilakukan SEBELUM toping, tunas yang diperlukan justru ikut terbuang.** Itulah sebabnya urutan ini tidak boleh dibalik.

**Kriteria praktis — buang vs pelihara:**

| ✅ DIPELIHARA | ❌ DIBUANG (tunas air) |
|---|---|
| 3-4 cabang utama yang kuat & tegak | Tunas di ketiak daun **paling bawah**, dekat permukaan media/mulsa |
| Semua cabang **di atas percabangan pertama ("Y")** — di situlah bunga & buah | Tunas yang arah tumbuhnya **ke dalam / ke bawah / menyilang** |
| Tunas yang mengarah **keluar** (cahaya menyebar rata) | Tunas **kurus/lemah** di bagian bawah batang |
| — | Tunas yang **menyentuh media / mulsa / plastik** (sarang jamur saat hujan) |

> ⚠️ **Jangan botak total.** Yang dibuang hanya **tunas air** zona bawah; **daun** punya aturan sendiri (poin 10.4).

### 10.4 Perempelan bunga pertama & daun bawah

**a. Bunga pertama.**
Praktik umum dataran rendah: rempel bunga pertama (kadang sampai bunga ke-2) agar energi dipakai membangun batang/cabang dulu.

- ⚠️ **Untung-rugi untuk Ori 212:** varietas ini sudah lambat (bunga 38-50 HST, panen 91-96 HST). Merempel bunga pertama **menggeser panen pertama 1-3 minggu**.
- **Rekomendasi plan ini:** karena target adalah **panen pertama**, **bunga pertama JANGAN dirempel**. Kecuali tanaman jelas kurus/lemah, baru rempel 1 bunga pertama saja.

**b. Daun bawah.**
Saat kanopi sudah rapat/menutup (±HST 75 dataran rendah), daun tua **di bawah cabang utama** sudah tidak produktif → rempel agar tidak menahan kelembapan & jadi sarang penyakit.

> ⚠️ **Jangan buang daun sebelum kanopi optimal** — daun adalah pabrik makanan.

### 10.5 Ajir & ikat

| Kapan | Aksi |
|---|---|
| **HST 0** | Pasang ajir + ikat pertama (pola angka 8, longgar) |
| **Tiap +15-20 cm tinggi**, atau ikatan mulai melar/menekuk | Ikat ulang, longgarkan ikatan lama |
| **Sebelum transisi** | Ikat WAJIB diperbarui — tanaman berbunga jauh lebih berat |
| Setelah itu | Cek tiap minggu |

❌ **Jangan pernah simpul kencang yang menekuk batang.**
✅ **Sterilkan gunting dengan alkohol 70%** setiap pindah polybag.

---

# BAGIAN E — REFERENSI

## 11. Larangan Pencampuran Kimia

| Kombinasi | Status | Alasan |
|---|---|---|
| MKP + CN-G | ❌ DILARANG | Fosfat + Kalsium = endapan |
| MKP + Karate Plus Boroni | ❌ DILARANG | Fosfat + Kalsium = endapan |
| CN-G + pupuk mengandung P/S | ❌ DILARANG | Reaksi pengendapan |
| Potassium Humate + CN-G / Karate | ❌ DILARANG | Asam humat + Ca = kalsium humat (endapan) |
| MgSO4 + Karate / CN-G (Ca) | ❌ DILARANG | Magnesium + Kalsium → gips (CaSO4) mengendap |
| KNO3 + Karate Plus Boroni | ✅ AMAN | Tidak ada reaksi |
| MKP + MgSO4 | ✅ AMAN | Tidak ada Ca → tidak mengendap (dipakai di G-2) |
| YaraMila + PH + Vitaflex + MgSO4 | ✅ AMAN | Kompatibel di air |
| MKP saja / CN-G saja / KNO3 saja | ✅ AMAN | Tunggal, tidak bereaksi |

> **Aturan gampangnya:** **Ca tidak pernah bertemu P, dan Ca tidak pernah bertemu Mg/SO4.** Kalau ragu, pisahkan embernya.

---

## 12. Stok Pupuk & Neraca Hara

> Karena jumlah siklus tergantung ciri tanaman, hitungan dibuat **per siklus**. Skenario khas di bawah memakai: **V1 ×1 · V2 ×2 · V3 ×2 · Transisi ×3 · G-1 ×1 · G-2 ×2**.

### 12.1 Pemakaian per siklus (gram, untuk 200 polybag)

| Produk | V1 | V2 | V3 | Transisi | G-1 | G-2 |
|---|---|---|---|---|---|---|
| YaraMila Faster | 40 | 90 | 132 | — | — | — |
| CN-G | 32 | 40 | 48 | — | 48 | — |
| Potassium Humate | 80 | 50 | 60 | — | — | — |
| MgSO4 | — | 50 | 60 | — | — | 60 |
| MKP | — | — | — | 240 | 240 | 240 |
| KNO3 Putih | — | — | 90 | 180 | 240 | 240 |
| Karate Plus Boroni | — | — | — | 120 | 120 | 120 |
| Meroke Vitaflex *(hanya siklus pertama)* | 5 | 6,25 | — | — | — | — |

### 12.2 Sisa stok pada skenario khas

| Bahan | Estimasi terpakai | Beli | Sisa | Status |
|---|---|---|---|---|
| YaraMila Faster | 484 g (+ semai ±33 g = 517 g) | 1.000 g | **483 g** | ✅ |
| CN-G | 256 g | 1.000 g | **744 g** | ✅ |
| Potassium Humate | 300 g | 1.000 g | **700 g** | ✅ |
| MgSO4 | 340 g | 500 g | **160 g** | ⚠️ tipis |
| MKP | 1.440 g | 2.000 g | **560 g** | ✅ |
| KNO3 Putih | 1.440 g | 2.000 g | **560 g** | ✅ |
| Karate Plus Boroni | 720 g | 1.000 g | **280 g** | ✅ |
| Meroke Vitaflex | 11,25 g | 100 g | **88,75 g** | ✅ |

**Kapasitas stok:** MKP 2 kg = ±8 kocor · KNO3 2 kg = ±8 kocor generatif · Karate 1 kg = ±8 kocor (skenario memakai 6). Masih ada ruang **±2 siklus tambahan** bila ciri tanaman lebih lambat — kecuali **MgSO4** yang tipis. Naikkan jadi 1 kg bila memungkinkan.

> **Catatan pengulangan:** tabel di atas mengasumsikan **V1 hanya 1×**. Bila V1 memang harus diulang 2-3× (karena aturannya "ulangi sampai tumbuh aktif"), tambahan tiap siklusnya cuma **40 g YaraMila + 40 g PH + 32 g CN-G** — masih tercakup buffer.

### 12.3 Neraca hara per tanaman (skenario khas, s.d. panen pertama)

*Kandungan terverifikasi:* YaraMila 25-7-7 · CN-G & Karate (N 15,5%, Ca 18-19%, Karate B 0,3%) · KNO3 (N 13%, K2O 46%) · MKP (P2O5 52%, K2O 34%) · SP-36 (P2O5 36%) · Dolomit (CaO ±30%, MgO ±20%) · Humate (asam humat 65-75%, K2O hanya 8-12%).

| Unsur | Masuk ke tiap tanaman | Target pro-rata | Status |
|---|---|---|---|
| N | ±2,34 g (YaraMila 0,65 + CN-G 0,20 + Karate 0,56 + KNO3 0,94) | ±3,7 g | ±63% — buffer sehat; N kembali setelah panen ke-2 |
| P2O5 | ±7,5 g (SP-36 dasar 3,6 + MKP 3,7 + YaraMila 0,2) | ±1,4 g | ✅ Lebih — P tidak tercuci & dosis dasar itu standar |
| K2O | ±6,1 g (KNO3 3,3 + MKP 2,5 + YaraMila 0,2 + humate 0,15) | ±6,4 g | ✅ ±95% — sangat baik |
| Ca | ±0,90 g larutan (CN-G 0,24 + Karate 0,66) + CaO dari dolomit | — | ✅ Cukup cegah busuk punggung (BER) |
| Mg | ±2,0 g MgO dolomit + ±0,17 g Mg kocor | — | ✅ Cukup; pantau daun tua |
| B | ±10,8 mg (Karate 720 g × 0,3%) | — | ✅ Aman asal bilas disiplin |

> **Cara angka "Target pro-rata" didapat:** rekomendasi fertigasi cabai musim penuh **230 N - 90 P2O5 - 400 K2O kg/ha** (±9,2 / 3,6 / 16 g per tanaman pada 25.000 populasi). Plan ini mencakup s.d. panen pertama ≈ **40% musim** → target 3,7 / 1,4 / 6,4 g.

### 12.4 Verifikasi media tanam

| Item | Temuan | Status |
|---|---|---|
| SP-36 dasar 10 g/polybag = 3,6 g P2O5 | Dalam rentang jurnal lahan (5-15 g/tanaman) | ✅ |
| Dolomit 10 g/polybag (±0,8 g/L) | Tengah rentang jurnal pot (2,6-40 g) | ✅ |
| Sekam mentah (bukan bakar) | Dekomposisi lambat → mengikat sedikit N awal; terkompensasi kenaikan dosis YaraMila | ✅ |
| CEC media rendah | Humate 1 g/L tiap kocor menahan kation (K, Ca, Mg) | ✅ |
| Humate 1 g/L drench | Dalam rentang drench soluble 1-2 g/L; jangan dinaikkan tanpa alasan | ✅ |

---

## 13. Monitoring & Troubleshooting

### 13.1 Indikator sukses per fase

| Fase | Indikator |
|---|---|
| V1 / V2 | Tanaman tegak, batang kokoh, daun hijau pekat, bertambah tinggi tiap siklus |
| V3 | Percabangan terbentuk, tinggi 40-50 cm menjelang transisi |
| Transisi | Bunga pertama muncul **HST 38-50**. Bila sampai HST 52 belum ada bunga → cek N berlebih / cahaya kurang, **jangan menunggu** |
| Generatif | Buah set ≥30-50%, buah tumbuh seragam, tidak ada bercak busuk ujung |

### 13.2 Troubleshooting

| Gejala | Penyebab | Solusi |
|---|---|---|
| Daun bawah pucat (V1) | Immobilisasi N | Normal, lanjut siklus |
| Daun pucat + stagnan | Kekurangan N | Naikkan YaraMila +0,2 g/L |
| Ujung daun gosong | Akumulasi garam | Lewati 1 kocor, bilas 1-2 L air |
| Daun muda kuning merata | Defisiensi S | Pastikan MgSO4 masuk tiap kocor hijau (V2+) |
| Tulang hijau, daging kuning | Defisiensi Fe | Pakai sisa Vitaflex darurat |
| Batang lembek | N vs Ca tidak seimbang | Pastikan kocor 🔵 Ca tidak terlewat |
| Bunga rontok parah | N terlalu tinggi | Pastikan tidak ada YaraMila di transisi |
| Bunga sedikit | Defisiensi P (cek dulu: daun tua keunguan di sisi bawah) | Naikkan MKP ke 5 g/L **hanya bila gejala P ada** — bunga sedikit lebih sering karena cahaya kurang |
| Buah muda busuk ujung (BER) | Ca kurang / air tidak konsisten | Pastikan siklus G-1 & Ca dari Karate; jaga air tidak bolong |
| Batang lemah | K kurang | Tambah KNO3 ke 5 g/L; bila tetap, cek cahaya & drainase |

---

## 14. Larangan & Kewajiban

### ❌ Larangan

- Campur MKP dengan CN-G atau Karate Plus Boroni
- Campur MgSO4 dengan CN-G atau Karate (Ca)
- Memberi Ember 1 & Ember 2 di hari yang sama
- Siram pupuk langsung mengenai batang utama
- Kocor siang hari (11.00-15.00)
- Air PDAM berkaporit tanpa perlakuan (tampung 24 jam / deklorinator tiosulfat)
- Gunakan YaraMila Faster di fase transisi (menyebabkan flower drop)
- Mulai SIKLUS TRANSISI (MKP) sebelum kuncup bunga terlihat
- Rempel tunas air SEBELUM toping
- Toping lebih dari sekali, atau setelah HST 30

### ✅ Kewajiban

- Kocor pagi (06.30-09.00) atau sore (15.30-17.00)
- Kocor hanya bila media lembap-tidak-becek (tes lidi)
- Cek ciri tanaman tiap akhir siklus & tulis di log
- Siram melingkar 5-10 cm dari batang
- Cuci bersih ember setelah digunakan
- Sterilkan gunting setiap pindah polybag saat pruning
- Bilas garam tiap 14 hari tanpa menunggu gejala

---

# LAMPIRAN

## L1. Daftar Belanja

### Bahan media & hayati

| Bahan | Jumlah | Harga |
|---|---|---|
| Dolomit | 2 kg | Rp 10.000 |
| SP-36 | 2 kg | Rp 8.000 |
| GlioTrico-G | 300 g (3 × 100 g) | Rp 36.000 |
| MycoGrow | 1 kg (tepat 5 g × 200 — takar hati-hati, tanpa sisa) | Rp 40.000 |
| Ajir bambu (1,8-2 m) | 200 batang | Rp 20.000-40.000 |
| **Subtotal** | | **Rp 114.000-134.000** |

### Pupuk kocor

| Produk | Kemasan | Harga |
|---|---|---|
| YaraMila Faster 25-7-7 | 1 kg | Rp 26.000 |
| CN-G (Calcium Nitrate) | 1 kg | Rp 24.000 |
| Potassium Humate (asam humat 65-75%; K2O hanya 8-12%) | 1 kg | Rp 42.500 |
| MgSO4 Cap Pak Tani | 500 g | Rp 10.000 |
| MKP Pak Tani | 2 kg | Rp 80.000 |
| KNO3 Putih PN Pak Tani | 2 kg | Rp 80.000 |
| Karate Plus Boroni | 1 kg | Rp 20.000 |
| Meroke Vitaflex | 1 × 100 g | Rp 28.500 |
| **Subtotal** | | **Rp 311.000** |

> ### 💰 TOTAL INVESTASI SARANA HARA & MEDIA: **Rp 425.000-445.000**

### Empat item wajib yang belum masuk daftar di atas

| Item | Perkiraan biaya | Catatan |
|---|---|---|
| **Polybag 40×40 cm × 200** | Rp 180.000-240.000 | Dijual kiloan, 1 kg ≈ 32-37 lembar → butuh ±6 kg |
| **Topsoil 2.000 L + sekam mentah 850 L** | Rp 300.000-900.000 | **Beli borongan, jangan karungan.** Karungan 12 L ±Rp 20.000 = >Rp 3 juta |
| **Bibit ORI 212** | — | 200 tanaman, semai 260 butir (daya berkecambah 94%) |
| **Tray/wadi semai + media semai ±80 L** | — | Dari topsoil yang sama (haluskan) + sekam bakar/humas 1:1; tanpa dolomit/SP-36 |

> **Catatan penting:** biaya nyata didominasi **media**, bukan pupuk.

## L2. Catatan Verifikasi & Sumber

Seluruh komposisi produk, spesifikasi varietas, dan angka neraca hara di dokumen ini **sudah diverifikasi ulang** terhadap sumber resmi/publikasi:

| Klaim | Sumber verifikasi |
|---|---|
| Spesifikasi Ori 212 (tinggi, 38-50 HST, 91-96 HST, 3,2-3,6 cm, 94%) | Deskripsi varietas resmi Aura Seed Indonesia |
| YaraMila Faster 25-7-7 | Brosur resmi Yara Indonesia |
| CN-G (N 15,5%, CaO 26%) & Karate Plus Boroni (N 15,5%, CaO 26%, B 0,3%) | Spesifikasi Meroke Tetap Jaya |
| KNO3 Putih PN (N 13%, K2O 45-46%) · MKP (0-52-34) | Spesifikasi produk Pak Tani |
| Vitaflex (Fe 7,5%, Zn, Cu, Mn, B) | Spesifikasi Meroke |
| MKP salt index terendah | ICL Growing Solutions |
| Dosis dolomit 2,6 g/polybag (pH 6,56) | Jurnal UNTAN |
| Penangkalan layu Fusarium oleh Trichoderma/Gliocladium | Beberapa jurnal 2019-2024 |
| Waktu optimal toping 21-28 HST | Nasrudin (UGM 2021), Tanari (AGROVITAL 2023), Mu'afa (Plumula 2020), Putri (2024), Irwansyah (2020) |

> **Catatan konflik sumber:** beberapa penjual benih menyebut buah Ori 212 "silindris memanjang 4,5 cm". Dokumen ini memakai **deskripsi varietas resmi** (bulat pipih, pangkal meruncing, 3,2-3,6 cm) sebagai acuan.

---

**MASTER PLAN V3 — SISTEM SIKLUS BERBASIS CIRI TANAMAN**
**200 polybag seragam · H-35 (semai) → panen pertama HST 80-96 (putih 80-88 / merah 91-96)**
**PEMICU KEPUTUSAN = CIRI FISIK (Bagian 3). HST = acuan kocor pertama + alarm keterlambatan.**
