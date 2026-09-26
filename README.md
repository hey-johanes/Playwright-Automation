# 🎭 OrangeHRM Playwright Test Automation Suite

Proyek ini berisi suite pengujian otomatis berbasis web (*Web UI Automated Testing*) untuk platform **[OrangeHRM Open Source Demo](https://opensource-demo.orangehrmlive.com/)**. Framework pengujian dibangun menggunakan **Playwright** berbasis **JavaScript / Node.js** untuk memastikan kualitas fungsionalitas antarmuka aplikasi.

---

## 🛠️ Teknologi & Peralatan

* **[Playwright](https://playwright.dev/)** - Framework Automation Testing modern & cepat
* **[Node.js](https://nodejs.org/)** - JavaScript Execution Environment
* **JavaScript (ES6+)** - Bahasa Pemrograman
* **VS Code** - Integrated Development Environment (IDE)

---

## 📂 Struktur Proyek

```text
├── .github/              # Configuration untuk CI/CD (Optional)
├── tests/                # Direktori utama script testing
│   ├── login.spec.js     # Test suite untuk fitur Login & Otentikasi
│   └── sample.spec.js    # Test suite sampel / pengujian awal
├── test-results/         # Output otomatis saat test gagal (screenshot, video, trace)
├── playwright-report/    # Laporan HTML hasil pengujian
├── playwright.config.js  # File konfigurasi global Playwright
├── package.json          # Dependency Node.js & script jalannya tes
└── README.md             # Dokumentasi utama proyek