import type { SectionsContent } from "@/domain/sections";

export const sectionsId: SectionsContent = {
  proof: {
    label: "Rekam jejak terverifikasi",
    items: [
      { value: "3", label: "Sistem klien dibangun dan dikelola oleh BBT" },
      {
        value: "Retainer",
        label:
          "Hubungan kerja berkelanjutan dengan PT Telkom Indonesia Regional 3",
      },
      { value: "2", label: "Divisi operasional yang terpisah" },
      {
        value: "Kalteng",
        label: "Berbasis di Palangka Raya, Kalimantan Tengah",
      },
    ],
  },

  doors: {
    eyebrow: "Dua divisi",
    title: "Dua divisi, dua disiplin yang berdiri sendiri",
    intro:
      "BBA adalah organisasi induk. Pekerjaan dijalankan oleh dua divisi yang terpisah, masing-masing dengan identitas, tim, dan kanal tersendiri. Pilih yang sesuai dengan kebutuhan Anda.",
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
        badgeVariant: "accent",
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
        badgeVariant: "accent",
        url: "https://media.baritobahalap.com",
      },
    ],
  },

  work: {
    eyebrow: "Karya terpilih",
    title: "Yang telah dan sedang dikerjakan",
    intro:
      "Rekam jejak disajikan per divisi. Setiap entri adalah kerja sama yang telah dikonfirmasi.",
    imagePlaceholder: "Dokumentasi menyusul",
    tech: {
      label: "Barito Bahalap Tech",
      cases: [
        {
          client: "PT Telkom Indonesia (Regional 3)",
          title: "RSO2 Telkom Dashboard",
          location: "Surabaya, Jawa Timur",
          summary:
            "Dasbor analitik dan operasional yang dibangun mengikuti alur kerja dan kebutuhan data internal, dilengkapi pelaporan otomatis.",
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
            "Satu platform untuk informasi organisasi, program kerja, berita, dokumen, media, pendaftaran kemitraan, dan penyampaian aspirasi.",
          tags: ["Platform Web", "Sistem Informasi"],
          image: { alt: "Tampilan situs resmi AMPI Kalteng" },
        },
      ],
    },
    media: {
      label: "Barito Bahalap Media",
      emptyTitle: "Portofolio sedang disusun",
      emptyText:
        "BBM berada pada tahap awal operasional. Rekam jejaknya akan dipublikasikan secara bertahap setelah proyek awal selesai dan klien memberikan persetujuan.",
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
          description:
            "Penulisan, penyuntingan, dan kalender konten institusional.",
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
          description:
            "Informasi disajikan secara berimbang dan dapat dipertanggungjawabkan.",
        },
        {
          title: "Keputusan editorial independen",
          description:
            "Narasi, konten, dan jadwal publikasi diputuskan oleh Creative Lead BBM, bukan oleh induk usaha maupun klien teknologi BBT.",
        },
      ],
      principlesNote:
        "Untuk aktivitas yang termasuk penerbitan pers, BBM memperhatikan Undang-Undang Nomor 40 Tahun 1999 tentang Pers.",
    },
  },

  engage: {
    eyebrow: "Cara kerja sama",
    title: "Alur kerja sama yang jelas dan dapat diaudit",
    intro:
      "Setiap kerja sama diikat kontrak dengan lingkup, jangka waktu, dan keluaran yang terukur.",
    deliverableLabel: "Keluaran",
    steps: [
      {
        title: "Penjajakan",
        description:
          "Kami mengidentifikasi kebutuhan, pemangku kepentingan, dan batasan. Tujuan dan indikator keberhasilan disepakati sejak awal.",
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
        title: "Dukungan dan retainer",
        description:
          "Pemeliharaan, perbaikan, dan pengembangan lanjutan melalui skema retainer dengan tingkat layanan yang disepakati.",
        deliverable: "Laporan layanan berkala",
      },
    ],
  },

  structure: {
    eyebrow: "Struktur dan tata kelola",
    title: "Kepemilikan bersama, operasional terpisah",
    intro:
      "BBT dan BBM berada dalam satu kelompok usaha, tetapi berjalan sebagai dua divisi yang terpisah secara fungsional. Pemisahan ini adalah kerangka tata kelola, bukan strategi pemasaran.",
    diagramLabel: "Diagram struktur BBA, BBT, dan BBM",
    holding: {
      name: "Barito Bahalap Agency",
      role: "Organisasi induk dan lapisan tata kelola",
      items: [
        "Strategi",
        "Kontrak",
        "Keuangan",
        "Kepatuhan hukum",
        "Risiko dan reputasi",
      ],
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
      "Operational Firewall menetapkan batas antara BBT dan BBM, sehingga klien di kedua sisi terlindungi dari benturan kepentingan.",
    dimensions: [
      {
        title: "Identitas merek",
        description:
          "Nama, logo, kanal publik, dan positioning berbeda. Tidak ada materi pemasaran gabungan.",
      },
      {
        title: "Tim",
        description:
          "Jalur kerja teknis dan editorial terpisah. Penugasan lintas divisi dibatasi need-to-know.",
      },
      {
        title: "Pengelolaan akun klien",
        description:
          "Informasi klien satu divisi tidak dibagikan ke divisi lain tanpa persetujuan klien.",
      },
      {
        title: "Data dan informasi",
        description: "Dokumen dan data proyek disimpan dan diakses terpisah.",
      },
      {
        title: "Pengambilan keputusan",
        description:
          "Keputusan teknis dan editorial berjalan pada jalur yang independen.",
      },
      {
        title: "Independensi editorial",
        description:
          "Founder/Direktur bukan pengambil keputusan editorial harian BBM.",
      },
      {
        title: "Pengawasan hukum dan reputasi",
        description:
          "Kontrak, kepatuhan, dan risiko dikelola di tingkat induk tanpa mengintervensi keputusan divisi.",
      },
    ],
    pressTitle: "Kepatuhan pers",
    pressText:
      "Untuk aktivitas yang termasuk penerbitan pers, fungsi editorial BBM dijalankan dengan memperhatikan Undang-Undang Nomor 40 Tahun 1999 tentang Pers beserta peraturan pelaksanaannya.",
  },

  // TODO: Make the actual presentable PDF, currently its a placeholder
  profile: {
    title: "Profil perusahaan",
    text: "Unduh ringkasan profil BBA: struktur, divisi, tata kelola, dan rekam jejak terkonfirmasi.",
    cta: "Unduh Profil (PDF)",
    url: "/files/BBA-Company-Profile-ID.pdf",
    meta: "PDF, Bahasa Indonesia",
  },
};
