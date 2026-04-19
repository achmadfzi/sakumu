<p align="center">
  <img src="public/images/logo-putih.svg" alt="Sakumu Logo" width="80" />
</p>

<h1 align="center">sakumu</h1>

<p align="center">
  <strong>AI Financial Tracking via WhatsApp</strong><br/>
  Catat keuangan semudah chatting dengan teman 💬
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-FF0050?logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

## 📖 Tentang

**Sakumu** adalah asisten keuangan pribadi berbasis AI yang berjalan langsung di WhatsApp. Tidak perlu install aplikasi tambahan — cukup kirim pesan chat, voice note, foto struk, atau file PDF invoice, dan AI akan mencatat, mengkategorikan, serta mengatur budget secara otomatis.

Repository ini berisi **landing page** dari Sakumu yang dibangun menggunakan React + Vite.

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 💬 **Natural Language Input** | Catat pengeluaran dengan bahasa sehari-hari, contoh: *"Makan siang 35rb"* |
| 🎙️ **Voice Note Support** | Kirim voice note untuk mencatat transaksi saat sibuk |
| 📸 **Scan Struk** | Foto struk belanja, AI otomatis mengekstrak data transaksi |
| 📄 **Upload Invoice PDF** | Kirim PDF invoice, AI baca dan catat detail transaksi |
| 📊 **Smart Analytics** | Visualisasi pengeluaran bulanan dengan dashboard Google Sheet |
| 📥 **Export Excel** | Download rekap keuangan ke format Excel kapan saja |
| 🔒 **Privacy First** | Data terenkripsi dan tidak dijual ke pihak ketiga |

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Animasi:** [Framer Motion 12](https://www.framer.com/motion/)
- **Routing:** [React Router DOM 7](https://reactrouter.com/)
- **Chat Widget:** [n8n Chat](https://www.npmjs.com/package/@n8n/chat)
- **Font:** [Manrope](https://fonts.google.com/specimen/Manrope) + [Material Symbols](https://fonts.google.com/icons)
- **Deployment:** [Vercel](https://vercel.com/)

## 📁 Struktur Proyek

```
sakumu/
├── public/
│   ├── images/          # Logo & gambar statis
│   └── video/           # Video assets
├── src/
│   ├── assets/          # Asset internal (SVG, dll)
│   ├── components/      # Komponen UI
│   │   ├── Navbar.jsx       # Navigasi utama
│   │   ├── Hero.jsx         # Hero section dengan mockup WhatsApp
│   │   ├── HowItWorks.jsx   # Section cara kerja
│   │   ├── FeaturesGrid.jsx # Grid fitur unggulan
│   │   ├── UseCases.jsx     # Contoh penggunaan
│   │   ├── Pricing.jsx      # Paket harga
│   │   ├── FAQ.jsx          # Frequently Asked Questions
│   │   ├── Footer.jsx       # Footer
│   │   ├── N8nChat.jsx      # Widget chat n8n
│   │   ├── ScrollReveal.jsx # Animasi scroll reveal
│   │   └── ScrollToTop.jsx  # Scroll to top on navigate
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/Light mode context
│   ├── pages/
│   │   ├── TermsOfService.jsx
│   │   └── PrivacyPolicy.jsx
│   ├── App.jsx          # Root component & routing
│   ├── App.css          # App-level styles
│   ├── index.css        # Global styles & Tailwind directives
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── tailwind.config.js   # Konfigurasi Tailwind CSS
├── vite.config.js       # Konfigurasi Vite
├── vercel.json          # Konfigurasi deployment Vercel
├── postcss.config.js    # Konfigurasi PostCSS
└── package.json
```

## 🚀 Getting Started

### Prasyarat

- [Node.js](https://nodejs.org/) versi 18 atau lebih baru
- [npm](https://www.npmjs.com/) atau package manager lainnya

### Instalasi

```bash
# Clone repository
git clone https://github.com/achmadfzi/sakumu.git
cd sakumu

# Install dependencies
npm install
```

### Development

```bash
# Jalankan development server
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

### Build Production

```bash
# Build untuk production
npm run build

# Preview hasil build
npm run preview
```

### Linting

```bash
# Jalankan ESLint
npm run lint
```

## 🌐 Deployment

Project ini di-deploy menggunakan **Vercel**. Konfigurasi SPA rewrite sudah tersedia di `vercel.json` untuk mendukung client-side routing.

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| **Primary Color** | `#25d466` (Green) |
| **Font Family** | Manrope |
| **Border Radius** | `1rem` (default), `2rem` (lg), `3rem` (xl) |
| **Dark Mode** | Default, menggunakan CSS variables |

## 📄 Halaman

| Route | Deskripsi |
|-------|-----------|
| `/` | Landing page utama |
| `/terms-of-service` | Syarat dan Ketentuan |
| `/privacy-policy` | Kebijakan Privasi |

## 🤝 Contributing

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b feature/fitur-baru`)
3. Commit perubahan (`git commit -m 'feat: tambah fitur baru'`)
4. Push ke branch (`git push origin feature/fitur-baru`)
5. Buat Pull Request

## 📝 License

© 2026 sakumu AI. All rights reserved.

---

<p align="center">
  Made with ❤️ in Malang
</p>
