import type { SectionsContent } from "@/domain/sections";

export const sectionsId: SectionsContent = {
  proof: {
    label: "Rekam jejak terverifikasi",
    items: [
      { value: "3", label: "Sistem klien dibangun dan dikelola oleh BBT" },
      {
        value: "Retainer",
        label: "Hubungan kerja berkelanjutan dengan PT Telkom Indonesia",
      },
      { value: "2", label: "Divisi operasional yang terpisah" },
      {
        value: "Kalteng",
        label: "Berbasis di Palangka Raya, Kalimantan Tengah",
      },
    ],
  },

  doors: {
    eyebrow: "Dua unit",
    title: "Dua unit dengan keahlian masing-masing",
    intro:
      "BBA adalah organisasi induk. Pekerjaan dijalankan oleh dua unit yang terpisah, dengan identitas, tim, dan kanal sendiri. Pilih yang sesuai dengan kebutuhan Anda.",
    doors: [
      {
        key: "tech",
        name: "Barito Bahalap Tech",
        discipline: "Pengembangan Perangkat Lunak",
        statement:
          "Mitra jangka panjang untuk sistem internal, dasbor operasional, dan otomasi proses bisnis.",
        points: [
          "Perangkat lunak khusus dan sistem informasi",
          "Dasbor operasional dan otomasi pelaporan",
          "Dukungan teknis lewat skema retainer",
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
          "Operasi komunikasi profesional untuk lembaga dan figur publik. Mencakup strategi pesan, relasi media, dan produksi konten.",
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
    title: "Yang sudah dan sedang kami kerjakan",
    intro:
      "Karya dikelompokkan per divisi. Setiap entri adalah kerja sama yang sudah dikonfirmasi.",
    imagePlaceholder: "Dokumentasi menyusul",
    tech: {
      label: "Barito Bahalap Tech",
      cases: [
        {
          client: "PT Telkom Indonesia",
          title: "RSO2 Telkom Dashboard",
          location: "Surabaya, Jawa Timur",
          summary:
            "Dasbor analitik dan operasional yang dibangun sesuai alur kerja dan kebutuhan data internal. Dilengkapi pelaporan otomatis.",
          tags: ["Dasbor Operasional", "Otomasi Pelaporan"],
          status: "Berjalan aktif",
          image: { alt: "Tampilan RSO2 Telkom Dashboard" },
        },
        {
          client: "E-Palugada",
          title: "Platform layanan antar berbasis web",
          location: "Kasongan, Kalimantan Tengah",
          summary:
            "Platform layanan antar yang dirancang untuk kebutuhan pasar lokal di Kasongan.",
          tags: ["Perangkat Lunak Khusus", "Platform Web"],
          status: "Berjalan aktif",
          image: { alt: "Tampilan platform E-Palugada" },
        },
        {
          client: "DPD AMPI Kalteng",
          title: "Situs resmi dan platform organisasi",
          location: "Palangka Raya, Kalimantan Tengah",
          summary:
            "Satu platform untuk informasi organisasi, program kerja, berita, dokumen, media, pendaftaran mitra, dan aspirasi dari publik.",
          tags: ["Platform Web", "Sistem Informasi"],
          status: "Berjalan aktif",
          image: { alt: "Tampilan situs resmi AMPI Kalteng" },
        },
      ],
    },
    media: {
      label: "Barito Bahalap Media",
      emptyTitle: "Portofolio sedang disusun",
      emptyText:
        "BBM masih di tahap awal. Karyanya akan kami tampilkan bertahap setelah proyek pertama selesai dan klien menyetujui.",
      practiceTitle: "Bidang kerja",
      practiceAreas: [
        {
          title: "Komunikasi strategis",
          description: "Perencanaan pesan lembaga dan komunikasi publik.",
        },
        {
          title: "Relasi media",
          description: "Pengelolaan hubungan dan korespondensi dengan media.",
        },
        {
          title: "Operasi konten",
          description: "Penulisan, penyuntingan, dan kalender konten.",
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
          description: "Informasi diperiksa sebelum dipublikasikan.",
        },
        {
          title: "Keberimbangan",
          description:
            "Informasi disajikan berimbang dan dapat dipertanggungjawabkan.",
        },
        {
          title: "Keputusan editorial yang independen",
          description:
            "Narasi, konten, dan jadwal publikasi diputuskan oleh Creative Lead BBM. BBA dan klien BBT tidak ikut menentukan.",
        },
      ],
      principlesNote:
        "Untuk kegiatan yang termasuk penerbitan pers, BBM mengikuti Undang-Undang Nomor 40 Tahun 1999 tentang Pers.",
    },
  },

  engage: {
    eyebrow: "Cara kerja sama",
    title: "Alur kerja sama yang jelas dan bisa diaudit",
    intro:
      "Setiap kerja sama diikat kontrak yang memuat lingkup, jangka waktu, dan keluaran yang terukur.",
    deliverableLabel: "Keluaran",
    steps: [
      {
        title: "Penjajakan",
        description:
          "Kami memetakan kebutuhan, pemangku kepentingan, dan batasan proyek.",
        deliverable: "Ringkasan kebutuhan",
      },
      {
        title: "Proposal",
        description:
          "Lingkup kerja, struktur biaya, dan kontrak disusun mengikuti kebutuhan pengadaan klien.",
        deliverable: "Proposal dan draf kontrak",
      },
      {
        title: "Pelaksanaan",
        description:
          "Setiap tahap ditutup dengan laporan sebagai dasar penerimaan.",
        deliverable: "Laporan per tahap",
      },
      {
        title: "Retainer",
        description:
          "Pemeliharaan berjalan lewat skema retainer dengan tingkat layanan yang disepakati.",
        deliverable: "Laporan layanan berkala",
      },
    ],
  },

  structure: {
    eyebrow: "Struktur dan tata kelola",
    title: "Satu pemilik, dua unit yang berjalan terpisah",
    intro:
      "BBT dan BBM berada dalam satu kelompok usaha tetapi bekerja sebagai dua unit yang terpisah. Pemisahan ini adalah aturan tata kelola yang kami jalankan, bukan bahan promosi.",
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
        items: ["Keputusan teknis: Tech Delivery Lead", "Jalur akun BBT"],
      },
      {
        key: "media",
        name: "Barito Bahalap Media",
        role: "Media & Komunikasi Strategis",
        items: ["Keputusan editorial: Media Creative Lead", "Jalur akun BBM"],
      },
    ],
    governanceTitle: "Pemisahan di enam area",
    governanceIntro:
      "Batas antara BBT dan BBM kami tetapkan secara tertulis. Tujuannya melindungi klien di kedua sisi dari benturan kepentingan.",
    dimensions: [
      {
        title: "Tim",
        description:
          "Jalur kerja teknis dan editorial terpisah. Penugasan lintas divisi dibatasi atas dasar need-to-know.",
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
          "Keputusan teknis dan editorial berjalan di jalur yang independen.",
      },
      {
        title: "Independensi editorial",
        description:
          "Managerial tidak mengambil keputusan editorial harian BBM.",
      },
      {
        title: "Pengawasan hukum dan reputasi",
        description:
          "Kontrak, kepatuhan, dan risiko dikelola di tingkat induk tanpa mencampuri keputusan divisi.",
      },
    ],
    pressTitle: "Kepatuhan pers",
    pressText:
      "Untuk kegiatan yang termasuk penerbitan pers, fungsi editorial BBM mengikuti Undang-Undang Nomor 40 Tahun 1999 tentang Pers beserta peraturan pelaksanaannya.",
  },

  // TODO: Make the actual presentable PDF, currently its a placeholder
  profile: {
    title: "Profil perusahaan",
    text: "Unduh ringkasan profil BBA: struktur, divisi, tata kelola, dan rekam jejak yang sudah dikonfirmasi.",
    cta: "Unduh Profil (PDF)",
    url: "/files/BBA-Company-Profile-ID.pdf",
    meta: "PDF, Bahasa Indonesia",
  },
};
