import type { UiContent } from "@/i18n/types";

export const uiContent: UiContent = {
  skipToContent: "Lompat ke konten utama",
  brandHome: "beranda",
  loading: "Memuat",
  language: { label: "Bahasa" },
  menu: {
    open: "Buka menu",
    close: "Tutup menu",
    primaryNav: "Utama",
    mobileDialog: "Navigasi seluler",
    mobileNav: "Seluler",
  },
  footer: {
    firewall:
      "BBT dan BBM beroperasi sebagai merek terpisah dengan tim, akun klien, dan data yang terpisah.",
    divisions: "Divisi",
    follow: "Ikuti",
    social: "Media sosial",
    rights: "Seluruh hak dilindungi.",
  },
  form: {
    generalOption: "Pertanyaan umum untuk BBA",
    submit: "Siapkan email",
    consent:
      "Saya setuju data di atas digunakan untuk menanggapi pertanyaan saya.",
    status:
      "Aplikasi email Anda akan terbuka dengan pesan yang siap dikirim. Jika tidak terbuka, salin alamat email yang tertera di samping formulir ini.",
    labels: {
      name: "Nama lengkap",
      organization: "Organisasi",
      email: "Alamat email",
      division: "Pertanyaan ini mengenai",
      message: "Pesan",
    },
    errors: {
      name: "Mohon isi nama Anda.",
      email: "Mohon isi alamat email Anda.",
      emailInvalid: "Mohon isi alamat email yang valid.",
      message: "Mohon isi pesan Anda.",
      consent: "Mohon centang persetujuan untuk melanjutkan.",
    },
    mail: {
      subjectPrefix: "Pertanyaan",
      name: "Nama",
      organization: "Organisasi",
      email: "Email",
      concerns: "Ditujukan ke",
    },
  },
  notFound: {
    seoTitle: "Halaman tidak ditemukan",
    code: "404",
    title: "Halaman tidak ditemukan.",
    sub: "Halaman yang Anda cari tidak ada atau telah dipindahkan.",
    homeCta: "Kembali ke beranda",
    suggestionsTitle: "Mungkin Anda mencari",
    suggestions: [
      {
        label: "Divisi",
        description: "Barito Bahalap Tech dan Barito Bahalap Media.",
        href: "/divisions",
      },
      {
        label: "Pendekatan",
        description: "Cara kami bekerja dan memisahkan divisi.",
        href: "/approach",
      },
      {
        label: "Karier",
        description: "Perkenalkan diri Anda kepada BBT atau BBM.",
        href: "/careers",
      },
      {
        label: "Kontak",
        description: "Mulai percakapan dengan BBA.",
        href: "/#contact",
      },
    ],
  },
};
