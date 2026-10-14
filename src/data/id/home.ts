import type { HomeContent } from "@/domain/content";

export const homeContent: HomeContent = {
  seo: {
    title: "Barito Bahalap Agency | Teknologi dan komunikasi strategis",
    description:
      "Barito Bahalap Agency adalah organisasi induk independen di Palangka Raya, Kalimantan Tengah, yang menaungi Barito Bahalap Tech dan Barito Bahalap Media sebagai dua merek operasional yang terpisah.",
  },

  hero: {
    eyebrow: null,
    headline: "Teknologi dan komunikasi strategis untuk mitra institusional.",
    subhead:
      "Barito Bahalap Agency adalah organisasi induk independen. Organisasi ini menaungi dua merek operasional, Barito Bahalap Tech dan Barito Bahalap Media, masing-masing dengan tim, akun klien, dan data tersendiri.",
    primaryCta: { label: "Jelajahi divisi kami", href: "/#divisions" },
    secondaryCta: { label: "Hubungi kami", href: "/#contact" },
  },

  about: {
    eyebrow: "Tentang BBA",
    title: "Organisasi induk, bukan agensi gabungan.",
    paragraphs: [
      "Barito Bahalap Agency (BBA) didirikan pada 2026 di Palangka Raya. BBA menaungi dua merek operasional dengan spesialisasi berbeda: teknologi dan komunikasi strategis.",
      "Peran BBA terbatas pada fungsi korporasi: strategi, kontrak dan hubungan bisnis, keuangan, kepatuhan hukum, serta pengawasan risiko dan reputasi. BBA tidak mengambil keputusan teknis untuk BBT maupun keputusan redaksi untuk BBM.",
    ],
    stats: [
      {
        value: "2",
        label: "Merek operasional",
        note: "Tim, akun klien, dan data yang terpisah.",
      },
      {
        value: "3",
        label: "Sistem dibangun dan dikelola",
        note: "Oleh Barito Bahalap Tech.",
      },
      {
        value: "7",
        label: "Dimensi pemisahan operasional",
        note: "Dari identitas merek hingga independensi redaksi.",
      },
    ],
  },

  divisions: {
    eyebrow: "Divisi kami",
    title:
      "Dua merek operasional, masing-masing bertanggung jawab atas pekerjaannya.",
    intro:
      "Setiap divisi memiliki identitas, tim, akun klien, dan kewenangan keputusan sendiri. Informasi tentang klien satu divisi tidak dibagikan kepada divisi lain tanpa persetujuan tertulis dari klien tersebut.",
    items: [
      {
        id: "bbt",
        brand: "tech",
        name: "Barito Bahalap Tech",
        badge: "BBT",
        descriptor: "Teknologi dan infrastruktur digital",
        summary:
          "Merancang, membangun, dan memelihara sistem digital untuk operasional organisasi. BBT berperan sebagai mitra infrastruktur jangka panjang, bukan pengembang web sekali pakai.",
        capabilities: [
          {
            iconName: "codeSlash",
            title: "Perangkat lunak khusus dan sistem internal",
            description:
              "Aplikasi dan sistem informasi perusahaan yang dibangun sesuai alur kerja Anda.",
          },
          {
            iconName: "pieChartFill",
            title: "Dasbor operasional",
            description:
              "Dasbor analitik dan pemantauan yang menyatukan data internal dan pelaporan dalam satu tempat.",
          },
          {
            iconName: "barChart",
            title: "Otomasi dan integrasi",
            description:
              "Otomasi proses bisnis dan integrasi platform, dengan dukungan teknis jangka panjang melalui skema retainer.",
          },
        ],
        trackRecordTitle: "Telah dibangun dan dikelola",
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
            client: "AMPI Kalimantan Tengah",
            scope:
              "Platform terpadu untuk informasi organisasi, program, berita, dokumen, media, pendaftaran mitra, dan kiriman dari publik. Retainer berjalan.",
          },
        ],
        note: {
          title: "Otoritas teknis",
          body: "Keputusan teknis, mulai dari arsitektur sistem hingga prioritas pemeliharaan, berada pada Delivery Lead BBT.",
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
          "Komunikasi strategis, konten, dan pengelolaan publikasi untuk organisasi dan institusi. BBM adalah operasi komunikasi profesional, bukan sekadar layanan media sosial.",
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
              "Operasional konten, penulisan naskah, layanan editorial, dan pengelolaan publikasi.",
          },
          {
            iconName: "imageAlt",
            title: "Produksi multimedia",
            description:
              "Produksi fotografi, videografi, dan grafis, didukung strategi media sosial.",
          },
        ],
        statusNote:
          "BBM berada pada tahap awal operasional. Portofolionya akan dipublikasikan seiring selesainya proyek.",
        note: {
          title: "Independensi redaksi",
          body: "Keputusan redaksi mengenai konten, narasi, dan jadwal publikasi berada pada Creative Lead BBM. Founder dan Direktur BBA mengawasi kontrak, keuangan, kepatuhan hukum, dan risiko reputasi, serta tidak mengambil keputusan redaksi sehari-hari. Kegiatan publikasi pers mengikuti Undang-Undang Nomor 40 Tahun 1999 tentang Pers dan kode etik jurnalistik yang berlaku.",
        },
        cta: { label: "Diskusikan kerja sama BBM", href: "/#contact" },
      },
    ],
  },

  approach: {
    eyebrow: "Pendekatan kami",
    title: "Cara kami bekerja.",
    intro:
      "Komitmen berikut tertanam dalam cara organisasi beroperasi, sehingga dapat ditinjau oleh tim pengadaan, hukum, dan kepatuhan.",
    items: [
      {
        iconName: "box",
        title: "Pemisahan sejak perancangan",
        description:
          "BBT dan BBM memiliki merek, tim, akun klien, dan data kerja yang terpisah. Akses lintas divisi hanya diberikan berdasarkan kebutuhan.",
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
          "Informasi klien hanya diakses oleh personel yang menangani kerja sama tersebut, dan tidak dibagikan lintas divisi tanpa persetujuan tegas dari klien.",
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
    title: "Pihak yang bertanggung jawab atas organisasi.",
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
          "Memegang kewenangan atas arsitektur sistem, metodologi pengembangan, dan prioritas pemeliharaan.",
      },
      {
        brand: "media",
        iconName: "newspaper",
        title: "Creative Lead, BBM",
        description:
          "Memegang kewenangan atas konten, narasi, dan jadwal publikasi.",
      },
    ],
  },

  careers: {
    eyebrow: "Karier",
    title: "Kami sedang membangun tim teknis dan redaksi yang terpisah.",
    body: "BBT dan BBM merekrut dan mengelola timnya masing-masing. Saat ini belum ada posisi yang dibuka, tetapi Anda dapat memperkenalkan diri dan pekerjaan yang Anda tekuni.",
    cta: { label: "Karier di BBA", href: "/careers" },
  },

  contact: {
    eyebrow: "Kontak",
    title: "Mulai percakapan.",
    intro:
      "Ceritakan tentang organisasi Anda dan divisi mana yang Anda tuju. Formulir ini menyiapkan pesan di aplikasi email Anda, ditujukan kepada BBA.",
  },
};
