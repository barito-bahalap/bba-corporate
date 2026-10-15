import type { SectionsContent } from "@/domain/sections";

export const sectionsId: SectionsContent = {
  proof: {
    label: "Rekam jejak terverifikasi",
    items: [
      { value: "3", label: "Keterlibatan klien telah dikerjakan oleh BBT" },
      {
        value: "Retainer",
        label: "Hubungan kerja berkelanjutan dengan PT Telkom Indonesia Regional 3",
      },
      { value: "2", label: "Unit usaha operasional yang terpisah" },
      { value: "Kalteng", label: "Berbasis di Palangka Raya, Kalimantan Tengah" },
    ],
  },

  doors: {
    eyebrow: "Dua Unit Usaha",
    title: "Dua unit usaha, dua disiplin yang berdiri sendiri",
    intro:
      "BBA adalah organisasi induk. Layanan dijalankan oleh dua unit yang terpisah, masing-masing dengan identitas, tim, dan kanal tersendiri. Pilih unit yang sesuai dengan kebutuhan Anda.",
    doors: [
      {
        key: "tech",
        name: "Barito Bahalap Tech",
        discipline: "Teknologi & Infrastruktur Digital",
        statement:
          "Mitra infrastruktur digital jangka panjang untuk sistem internal, dasbor operasional, dan otomasi proses bisnis.",
        points: [
          "Perangkat lunak khusus dan sistem informasi",
          "Dasbor operasional dan otomasi pelaporan",
          "Dukungan teknis dan retainer berkelanjutan",
        ],
        cta: "Kunjungi Barito Bahalap Tech",
        url: "https://tech.baritobahalap.com",
      },
      {
        key: "media",
        name: "Barito Bahalap Media",
        discipline: "Media & Komunikasi Strategis",
        statement:
          "Operasi komunikasi profesional untuk lembaga dan figur publik: strategi pesan, relasi media, dan produksi konten.",
        points: [
          "Komunikasi strategis dan relasi media",
          "Layanan editorial dan pengelolaan publikasi",
          "Produksi multimedia dan strategi media sosial",
        ],
        cta: "Kunjungi Barito Bahalap Media",
        url: "https://media.baritobahalap.com",
      },
    ],
  },

  work: {
    eyebrow: "Karya Terpilih",
    title: "Pekerjaan yang telah dan sedang dijalankan",
    intro:
      "Rekam jejak disajikan per unit usaha. Setiap entri merujuk pada keterlibatan yang telah dikonfirmasi.",
    imagePlaceholder: "Dokumentasi menyusul",
    tech: {
      label: "Barito Bahalap Tech",
      cases: [
        {
          client: "PT Telkom Indonesia (Regional 3)",
          title: "RSO2 Telkom Dashboard",
          location: "Surabaya, Jawa Timur",
          summary:
            "Dasbor analitik dan operasional yang disesuaikan dengan alur kerja dan kebutuhan data internal, dilengkapi pelaporan otomatis.",
          tags: ["Dasbor Operasional", "Otomasi Pelaporan", "Retainer"],
          status: "Berjalan aktif",
          image: { alt: "Tampilan RSO2 Telkom Dashboard" },
        },
        {
          client: "E-Palugada",
          title: "Platform pengiriman berbasis web",
          location: "Kasongan, Kalimantan Tengah",
          summary:
            "Platform pengiriman yang dirancang untuk karakteristik dan kebutuhan pasar lokal Kasongan.",
          tags: ["Perangkat Lunak Khusus", "Platform Web"],
          image: { alt: "Tampilan platform E-Palugada" },
        },
        {
          client: "AMPI Kalimantan Tengah",
          title: "Situs resmi dan platform manajemen organisasi",
          location: "Kalimantan Tengah",
          summary:
            "Platform terpadu untuk informasi organisasi, program kerja, berita, dokumen, media, pendaftaran kemitraan, dan penyampaian aspirasi.",
          tags: ["Platform Web", "Sistem Informasi"],
          image: { alt: "Tampilan situs resmi AMPI Kalteng" },
        },
      ],
    },
    media: {
      label: "Barito Bahalap Media",
      emptyTitle: "Portofolio sedang disusun",
      emptyText:
        "BBM berada pada tahap awal pengembangan operasional. Rekam jejak akan dipublikasikan secara bertahap setelah proyek awal selesai dan klien memberikan persetujuan.",
      practiceTitle: "Bidang praktik",
      practiceAreas: [
        {
          title: "Komunikasi strategis",
          description: "Perencanaan pesan kelembagaan dan komunikasi publik.",
        },
        {
          title: "Relasi media",
          description: "Pengelolaan hubungan dan korespondensi dengan media.",
        },
        {
          title: "Operasi konten",
          description: "Penulisan, penyuntingan, dan kalender konten institusional.",
        },
        {
          title: "Editorial dan publikasi",
          description: "Pengelolaan publikasi sesuai kaidah jurnalistik.",
        },
        {
          title: "Produksi multimedia",
          description: "Fotografi, videografi, dan desain grafis.",
        },
        {
          title: "Strategi media sosial",
          description: "Perencanaan dan pengelolaan kanal media sosial.",
        },
      ],
      principlesTitle: "Prinsip editorial",
      principles: [
        {
          title: "Akurasi dan verifikasi",
          description: "Informasi diverifikasi sebelum dipublikasikan.",
        },
        {
          title: "Keberimbangan",
          description: "Penyajian informasi yang berimbang dan dapat dipertanggungjawabkan.",
        },
        {
          title: "Keputusan editorial independen",
          description:
            "Narasi, konten, dan jadwal publikasi diputuskan oleh Creative Lead BBM, bukan oleh holding maupun klien teknologi BBT.",
        },
      ],
      principlesNote:
        "Untuk aktivitas yang termasuk penerbitan pers, BBM memperhatikan Undang-Undang Nomor 40 Tahun 1999 tentang Pers.",
    },
  },

  engage: {
    eyebrow: "Cara Kerja Sama",
    title: "Alur keterlibatan yang jelas dan dapat diaudit",
    intro:
      "Setiap keterlibatan diikat kontrak dengan lingkup, jangka waktu, dan keluaran yang terukur.",
    deliverableLabel: "Keluaran",
    steps: [
      {
        title: "Penjajakan",
        description:
          "Identifikasi kebutuhan, pemangku kepentingan, dan batasan. Tujuan dan indikator keberhasilan disepakati sejak awal.",
        deliverable: "Ringkasan kebutuhan",
      },
      {
        title: "Proposal",
        description:
          "Lingkup kerja, jadwal, struktur biaya, dan ketentuan kontrak disusun sesuai kebutuhan pengadaan klien.",
        deliverable: "Proposal dan draf kontrak",
      },
      {
        title: "Pelaksanaan",
        description:
          "Pekerjaan dijalankan per tahap. Setiap tahap ditutup dengan Berita Acara Serah Terima (BAST) sebagai dasar penerimaan.",
        deliverable: "Keluaran per tahap dan BAST",
      },
      {
        title: "Dukungan dan Retainer",
        description:
          "Pemeliharaan, perbaikan, dan pengembangan lanjutan melalui skema retainer dengan tingkat layanan yang disepakati.",
        deliverable: "Laporan layanan berkala",
      },
    ],
  },

  structure: {
    eyebrow: "Struktur dan Tata Kelola",
    title: "Kepemilikan yang sama, operasional yang terpisah",
    intro:
      "BBT dan BBM berada dalam satu kelompok usaha namun berjalan sebagai dua unit yang terpisah secara fungsional. Pemisahan ini adalah kerangka tata kelola, bukan strategi pemasaran.",
    diagramLabel: "Diagram struktur BBA, BBT, dan BBM",
    holding: {
      name: "Barito Bahalap Agency",
      role: "Organisasi induk dan lapisan tata kelola",
      items: ["Strategi", "Kontrak", "Keuangan", "Kepatuhan hukum", "Risiko dan reputasi"],
    },
    units: [
      {
        key: "tech",
        name: "Barito Bahalap Tech",
        role: "Teknologi & Infrastruktur Digital",
        items: ["Keputusan teknis: Delivery Lead", "Jalur akun BBT"],
      },
      {
        key: "media",
        name: "Barito Bahalap Media",
        role: "Media & Komunikasi Strategis",
        items: ["Keputusan editorial: Creative Lead", "Jalur akun BBM"],
      },
    ],
    governanceTitle: "Pemisahan operasional pada tujuh dimensi",
    governanceIntro:
      "Operational Firewall mengatur batas antara BBT dan BBM agar klien dari kedua sisi terlindungi dari benturan kepentingan.",
    dimensions: [
      {
        title: "Identitas merek",
        description: "Nama, logo, kanal publik, dan positioning berbeda. Tidak ada materi pemasaran gabungan.",
      },
      {
        title: "Tim",
        description: "Jalur kerja teknis dan editorial terpisah. Penugasan lintas unit dibatasi need-to-know.",
      },
      {
        title: "Pengelolaan akun klien",
        description: "Informasi klien satu unit tidak dibagikan ke unit lain tanpa persetujuan klien.",
      },
      {
        title: "Data dan informasi",
        description: "Dokumen dan data proyek disimpan dan diakses terpisah.",
      },
      {
        title: "Pengambilan keputusan",
        description: "Keputusan teknis dan editorial berjalan pada jalur yang independen.",
      },
      {
        title: "Independensi editorial",
        description: "Founder/Direktur bukan pengambil keputusan editorial harian BBM.",
      },
      {
        title: "Pengawasan hukum dan reputasi",
        description: "Kontrak, kepatuhan, dan risiko dikelola di tingkat holding tanpa mengintervensi keputusan unit.",
      },
    ],
    pressTitle: "Kepatuhan pers",
    pressText:
      "Untuk aktivitas yang termasuk penerbitan pers, fungsi editorial BBM dijalankan dengan memperhatikan Undang-Undang Nomor 40 Tahun 1999 tentang Pers beserta peraturan pelaksanaannya.",
  },

  profile: {
    title: "Profil Perusahaan",
    text: "Unduh ringkasan profil BBA: struktur, unit usaha, tata kelola, dan rekam jejak terkonfirmasi.",
    cta: "Unduh Profil (PDF)",
    url: "/files/BBA-Company-Profile-ID.pdf",
    meta: "PDF, Bahasa Indonesia",
  },
};
