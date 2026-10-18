import type { HomeContent } from "@/domain/content";

export const homeContent: HomeContent = {
  seo: {
    title:
      "Barito Bahalap Agency | Perangkat lunak enterprise dan komunikasi strategis",
    description:
      "Barito Bahalap Agency adalah organisasi induk independen di Palangka Raya, Kalimantan Tengah. Barito Bahalap Tech membangun perangkat lunak enterprise. Barito Bahalap Media menjalankan komunikasi strategis.",
  },

  hero: {
    eyebrow: "Organisasi induk independen · Palangka Raya",
    headline: "Sistem yang berjalan. Pesan yang sampai.",
    subhead:
      "Barito Bahalap Agency adalah organisasi induk independen dari Kalimantan Tengah. Barito Bahalap Tech membangun dan memelihara perangkat lunak enterprise. Barito Bahalap Media menjalankan komunikasi strategis. Tim, akun klien, dan data terpisah, dengan satu standar akuntabilitas.",
    primaryCta: { label: "Kenali kedua unit kami", href: "/#divisions" },
    secondaryCta: { label: "Hubungi kami", href: "/#contact" },
  },

  about: {
    eyebrow: "Tentang BBA",
    title: "Satu organisasi induk. Dua disiplin, dipisahkan dengan sengaja.",
    paragraphs: [
      "Barito Bahalap Agency (BBA) didirikan pada 2026 di Palangka Raya. BBA menaungi dua merek operasional: Barito Bahalap Tech untuk rekayasa perangkat lunak, dan Barito Bahalap Media untuk komunikasi strategis.",
      "BBA membatasi diri pada fungsi korporasi: strategi, kontrak, keuangan, kepatuhan hukum, serta risiko dan reputasi. BBA tidak mengambil keputusan teknis untuk BBT maupun keputusan redaksi untuk BBM. Pemisahan ini melindungi klien di kedua sisi dari benturan kepentingan.",
    ],
    stats: [
      {
        value: "3",
        label: "Sistem dibangun dan dikelola",
        note: "Oleh Barito Bahalap Tech.",
      },
      {
        value: "2",
        label: "Merek operasional",
        note: "Tim, akun klien, dan data yang terpisah.",
      },
      {
        value: "2026",
        label: "Didirikan di Palangka Raya",
        note: "Melayani klien di Kalimantan Tengah dan Jawa Timur.",
      },
    ],
  },

  divisions: {
    eyebrow: "Divisi kami",
    title: "Dua merek. Masing-masing bertanggung jawab atas pekerjaannya.",
    intro:
      "Setiap divisi memiliki identitas, tim, akun klien, dan kewenangan keputusan sendiri. Informasi klien tetap berada di divisi yang melayaninya, kecuali klien menyetujui secara tegas.",
    items: [
      {
        id: "bbt",
        brand: "tech",
        name: "Barito Bahalap Tech",
        badge: "BBT",
        descriptor: "Teknologi dan infrastruktur digital",
        summary:
          "Merancang, membangun, dan memelihara sistem digital yang menjadi tulang punggung operasional organisasi. BBT hadir sebagai mitra infrastruktur jangka panjang, bukan pengembang web sekali pakai.",
        capabilities: [
          {
            iconName: "codeSlash",
            title: "Perangkat lunak khusus dan sistem internal",
            description:
              "Aplikasi dan sistem informasi enterprise yang dibangun mengikuti cara kerja organisasi Anda yang sebenarnya.",
          },
          {
            iconName: "pieChartFill",
            title: "Dasbor operasional",
            description:
              "Analitik dan pemantauan yang menyatukan data internal dan pelaporan dalam satu tempat.",
          },
          {
            iconName: "barChart",
            title: "Otomasi dan integrasi",
            description:
              "Otomasi proses dan integrasi platform, dengan dukungan teknis jangka panjang melalui skema retainer.",
          },
        ],
        trackRecordTitle: "Berjalan di produksi, dalam skema retainer",
        trackRecord: [
          {
            project: "RSO2 Telkom Dashboard",
            client: "PT Telkom Indonesia, Regional 3, Surabaya",
            scope:
              "Dasbor analitik dan operasional dengan data internal serta pelaporan otomatis. Retainer berjalan.",
          },
          {
            project: "E-Palugada",
            client: "Kasongan, Kalimantan Tengah",
            scope:
              "Platform layanan antar berbasis web yang dirancang untuk pasar lokal. Retainer berjalan.",
          },
          {
            project: "Situs web AMPI Kalteng",
            client: "DPD AMPI Kalteng",
            scope:
              "Satu platform untuk informasi organisasi, program, berita, dokumen, media, pendaftaran mitra, dan kiriman dari publik. Retainer berjalan.",
          },
        ],
        note: {
          title: "Otoritas teknis",
          body: "Arsitektur sistem, pendekatan pengembangan, dan prioritas pemeliharaan diputuskan oleh Delivery Lead BBT.",
        },
        cta: { label: "Diskusikan proyek BBT", href: "/#contact" },
      },
      {
        id: "bbm",
        brand: "media",
        name: "Barito Bahalap Media",
        badge: "BBM",
        descriptor: "Media dan komunikasi strategis",
        summary:
          "Komunikasi strategis, konten, dan pengelolaan publikasi untuk organisasi dan institusi. Operasi komunikasi profesional, bukan sekadar layanan media sosial.",
        capabilities: [
          {
            iconName: "megaphone",
            title: "Komunikasi strategis",
            description:
              "Perencanaan pesan institusional, komunikasi publik, dan hubungan media.",
          },
          {
            iconName: "newspaper",
            title: "Konten dan operasional redaksi",
            description:
              "Penulisan naskah, layanan editorial, kalender konten, dan pengelolaan publikasi.",
          },
          {
            iconName: "imageAlt",
            title: "Produksi multimedia",
            description:
              "Produksi fotografi, videografi, dan grafis, didukung strategi media sosial.",
          },
        ],
        statusNote:
          "BBM berada pada tahap awal operasional. Portofolionya akan dipublikasikan seiring selesainya proyek dan persetujuan klien.",
        note: {
          title: "Independensi redaksi",
          body: "Konten, narasi, dan jadwal publikasi diputuskan oleh Creative Lead BBM. Founder dan Direktur BBA mengawasi kontrak, keuangan, kepatuhan hukum, dan risiko reputasi, serta tidak terlibat dalam keputusan redaksi sehari-hari. Kegiatan publikasi pers mengikuti Undang-Undang Nomor 40 Tahun 1999 tentang Pers dan kode etik jurnalistik yang berlaku.",
        },
        cta: { label: "Diskusikan kerja sama BBM", href: "/#contact" },
      },
    ],
  },

  approach: {
    eyebrow: "Pendekatan kami",
    title: "Cara kami bekerja",
    intro:
      "Komitmen berikut tertanam dalam cara organisasi beroperasi, sehingga dapat ditinjau oleh tim pengadaan, hukum, dan kepatuhan.",
    items: [
      {
        iconName: "box",
        title: "Pemisahan sejak rancangan",
        description:
          "BBT dan BBM memiliki merek, tim, akun klien, dan data kerja yang terpisah. Akses lintas divisi hanya atas dasar need-to-know.",
      },
      {
        iconName: "filePdf",
        title: "Lingkup dan akuntabilitas yang jelas",
        description:
          "Setiap kerja sama berlandaskan perjanjian tertulis yang mengatur lingkup, tanggung jawab, jadwal, dan penyelesaian sengketa. Setiap fungsi memiliki pemegang keputusan yang jelas.",
      },
      {
        iconName: "lock",
        title: "Kerahasiaan sebagai standar",
        description:
          "Hanya personel yang menangani suatu kerja sama yang dapat mengakses informasi kliennya. Informasi tidak berpindah lintas divisi tanpa persetujuan tegas dari klien.",
      },
      {
        iconName: "shieldFillCheck",
        title: "Kepatuhan dan pengawasan",
        description:
          "Risiko kontraktual, hukum, dan reputasi diawasi di tingkat induk, tanpa mengesampingkan keputusan teknis maupun redaksi di masing-masing divisi.",
      },
    ],
  },

  leadership: {
    eyebrow: "Kepemimpinan",
    title: "Siapa yang bertanggung jawab",
    intro:
      "Tata kelola berada pada Founder dan Direktur. Keputusan teknis dan redaksi berada pada pimpinan divisi.",
    people: [
      {
        id: "basilius-tengang",
        name: "Basilius Tengang",
        role: "SUPER_ADMIN",
        title: "Co-founder & CEO",
        bio: "Mengawasi tata kelola korporasi, strategi, kontrak, keuangan, kepatuhan hukum, dan risiko reputasi BBA.",
        published: true,
      },
    ],
    authorityTitle: "Kewenangan keputusan",
    authority: [
      {
        brand: "tech",
        iconName: "codeSlash",
        title: "Delivery Lead, BBT",
        description:
          "Memutuskan arsitektur sistem, metodologi pengembangan, dan prioritas pemeliharaan.",
      },
      {
        brand: "media",
        iconName: "newspaper",
        title: "Creative Lead, BBM",
        description: "Memutuskan konten, narasi, dan jadwal publikasi.",
      },
    ],
  },

  careers: {
    eyebrow: "Karier",
    title: "Membangun dua tim, satu divisi demi satu divisi.",
    body: "BBT dan BBM merekrut secara mandiri. Saat ini belum ada posisi yang dibuka, tetapi Anda dipersilakan memperkenalkan diri dan pekerjaan yang Anda tekuni.",
    cta: { label: "Karier di BBA", href: "/careers" },
  },

  contact: {
    eyebrow: "Kontak",
    title: "Mulai percakapan.",
    intro:
      "Ceritakan tentang organisasi Anda dan divisi mana yang Anda tuju. Formulir ini menyiapkan pesan di aplikasi email Anda, ditujukan kepada BBA.",
  },
};
