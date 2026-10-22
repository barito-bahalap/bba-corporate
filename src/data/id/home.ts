// Types
import type { HomeContent } from "@/domain/content";
// Assets
import { People } from "@/assets";

export const homeContent: HomeContent = {
  seo: {
    title:
      "Barito Bahalap Agency | Perangkat lunak dan komunikasi strategis dari Kalimantan Tengah",
    description:
      "Barito Bahalap Agency berbasis di Palangka Raya. Barito Bahalap Tech membangun dan merawat sistem digital. Barito Bahalap Media menangani komunikasi strategis, konten, dan produksi multimedia.",
  },

  hero: {
    eyebrow: "Palangka Raya, Kalimantan Tengah",
    headline: "Sistem digital & komunikasi strategis.",
    subhead:
      "Dari software dan dashboard hingga publikasi dan multimedia, kami membantu organisasi bekerja dan berkomunikasi lebih baik.",
    primaryCta: { label: "Jelajahi layanan", href: "/#divisions" },
    secondaryCta: { label: "Hubungi kami", href: "/#contact" },
  },

  about: {
    eyebrow: "Tentang BBA",
    title: "Tentang BBA",
    paragraphs: [
      "BBA menaungi dua unit: Barito Bahalap Tech untuk rekayasa perangkat lunak dan Barito Bahalap Media untuk komunikasi strategis.",
      "Di tingkat induk, BBA mengurus strategi, kontrak, keuangan, kepatuhan hukum, dan risiko reputasi. Keputusan teknis dan keputusan redaksi tetap berada di divisi masing-masing.",
    ],
    stats: [
      {
        value: "3",
        label: "Sistem dibangun dan dikelola",
        note: "Oleh Barito Bahalap Tech.",
      },
      {
        value: "2",
        label: "Unit operasional",
        note: "Tim, klien, dan data terpisah.",
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
    title: "Dua unit dengan tanggung jawab masing-masing.",
    intro:
      "Setiap divisi punya identitas, tim, akun klien, dan wewenang keputusan sendiri. Informasi klien tetap berada di divisi yang melayaninya kecuali klien menyetujui lain secara tegas.",
    items: [
      {
        id: "bbt",
        brand: "tech",
        name: "Barito Bahalap Tech",
        badge: "BBT",
        descriptor: "Teknologi dan infrastruktur digital",
        summary:
          "Merancang, membangun, dan merawat sistem yang menopang operasional organisasi. BBT bekerja untuk jangka panjang, jadi dukungannya berlanjut setelah sistem diluncurkan.",
        capabilities: [
          {
            iconName: "codeSlash",
            title: "Perangkat lunak khusus dan sistem internal",
            description:
              "Aplikasi dan sistem informasi yang dibangun mengikuti cara organisasi Anda bekerja.",
          },
          {
            iconName: "pieChartFill",
            title: "Dasbor operasional",
            description:
              "Data internal dan pelaporan dikumpulkan di satu tempat, lengkap dengan pemantauan dan analitik.",
          },
          {
            iconName: "barChart",
            title: "Otomasi dan integrasi",
            description:
              "Proses manual diotomasi dan platform yang berdiri sendiri-sendiri dihubungkan. Dukungan teknis berlanjut lewat skema retainer.",
          },
        ],
        trackRecordTitle: "Sudah berjalan di produksi",
        trackRecord: [
          {
            project: "RSO2 Telkom Dashboard",
            client: "PT Telkom Indonesia, Regional 3, Surabaya",
            scope:
              "Dasbor analitik dan operasional dengan data internal dan pelaporan otomatis. Berjalan dengan skema retainer.",
          },
          {
            project: "E-Palugada",
            client: "Kasongan, Kalimantan Tengah",
            scope: "Platform layanan antar berbasis web untuk pasar lokal.",
          },
          {
            project: "Situs web AMPI Kalteng",
            client: "DPD AMPI Kalteng",
            scope:
              "Satu platform untuk informasi organisasi, program, berita, dokumen, media, pendaftaran mitra, dan kiriman dari publik.",
          },
        ],
        note: {
          title: "Otoritas teknis",
          body: "Delivery Lead BBT memutuskan arsitektur sistem, pendekatan pengembangan, dan prioritas pemeliharaan.",
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
          "Komunikasi strategis, konten, dan pengelolaan publikasi untuk organisasi dan institusi. Cakupannya dari perencanaan pesan dan hubungan media sampai produksi multimedia.",
        capabilities: [
          {
            iconName: "megaphone",
            title: "Komunikasi strategis",
            description:
              "Perencanaan pesan institusional, komunikasi publik, dan hubungan media.",
          },
          {
            iconName: "newspaper",
            title: "Konten dan redaksi",
            description:
              "Penulisan naskah, layanan editorial, kalender konten, dan pengelolaan publikasi.",
          },
          {
            iconName: "imageAlt",
            title: "Produksi multimedia",
            description:
              "Foto, video, dan grafis, dengan strategi media sosial sebagai penunjang.",
          },
        ],
        statusNote:
          "BBM masih di tahap awal. Portofolionya akan kami tampilkan setelah proyek selesai dan klien menyetujui.",
        note: {
          title: "Independensi redaksi",
          body: "Creative Lead BBM memutuskan konten, narasi, dan jadwal publikasi. Direktur BBA mengawasi kontrak, keuangan, kepatuhan hukum, dan risiko reputasi, tetapi tidak ikut dalam keputusan redaksi harian. Kegiatan publikasi pers mengikuti UU Nomor 40 Tahun 1999 tentang Pers dan kode etik jurnalistik yang berlaku.",
        },
        cta: { label: "Diskusikan kerja sama BBM", href: "/#contact" },
      },
    ],
  },

  approach: {
    eyebrow: "Pendekatan kami",
    title: "Cara kami bekerja",
    intro:
      "Empat komitmen ini tertanam dalam cara kami beroperasi. Tim pengadaan, hukum, dan kepatuhan dapat meninjaunya langsung.",
    items: [
      {
        iconName: "box",
        title: "Dipisahkan sejak rancangan",
        description:
          "BBT dan BBM punya unit, tim, akun klien, dan data kerja sendiri. Akses lintas divisi hanya diberikan atas dasar need-to-know.",
      },
      {
        iconName: "filePdf",
        title: "Lingkup yang jelas",
        description:
          "Setiap kerja sama berdasar perjanjian tertulis yang mengatur lingkup, tanggung jawab, jadwal, dan penyelesaian sengketa. Setiap fungsi punya pemegang keputusan yang jelas.",
      },
      {
        iconName: "lock",
        title: "Kerahasiaan sebagai standar",
        description:
          "Hanya personel yang menangani suatu kerja sama yang bisa mengakses informasi kliennya. Informasi tidak berpindah antardivisi tanpa persetujuan tegas dari klien.",
      },
      {
        iconName: "shieldFillCheck",
        title: "Pengawasan di tingkat induk",
        description:
          "BBA memantau risiko kontraktual, hukum, dan reputasi. Keputusan teknis dan redaksi tetap berada di divisi masing-masing.",
      },
    ],
  },

  leadership: {
    eyebrow: "Kepemimpinan",
    title: "Siapa yang bertanggung jawab",
    intro:
      "Tata kelola ada pada Co-founders dan Direktur. Keputusan teknis dan redaksi ada pada pimpinan divisi.",
    people: [
      {
        id: "basilius-tengang",
        name: "Basilius Tengang",
        role: "SUPER_ADMIN",
        title: "CEO & Tech Delivery Lead",
        bio: "Memimpin tata kelola dan strategi perusahaan. Juga memimpin pengerjaan proyek teknologi.",
        published: true,
        photoSrc: People.basil,
      },
      {
        id: "fredy-berdani",
        name: "Fredy Berdani",
        role: "ADMIN",
        title: "Media Creative Lead",
        bio: "Memimpin tim kreatif dan menentukan arah konten, berita, dan publikasi.",
        published: true,
        photoSrc: People.fredy,
      },
      {
        id: "aric-krisnayar",
        name: "Aric Krisnayar",
        role: "ADMIN",
        title: "Business Development",
        bio: "Menangani pengembangan bisnis dan hubungan dengan calon klien.",
        published: true,
        photoSrc: People.aric,
      },
      {
        id: "rabel-batubara",
        name: "Rabel Gabriel Batubara",
        role: "ADMIN",
        title: "Legal & Compliance",
        bio: "Menangani berkas legal, urusan hukum dan kepatuhan perusahaan.",
        published: true,
        photoSrc: People.rabel,
      },
      {
        id: "karel-jocom",
        name: "Karel Immanuel F. Jocom",
        role: "ADMIN",
        title: "Public Relations",
        bio: "Menangani hubungan dan komunikasi dengan publik & lembaga.",
        published: true,
        photoSrc: People.karel,
      },
    ],
    authorityTitle: "Kewenangan keputusan",
    authority: [
      {
        brand: "tech",
        iconName: "codeSlash",
        title: "Tech Delivery Lead",
        description:
          "Memutuskan arsitektur sistem, metodologi pengembangan, dan prioritas pemeliharaan.",
      },
      {
        brand: "media",
        iconName: "newspaper",
        title: "Media Creative Lead",
        description: "Memutuskan konten, narasi, dan jadwal publikasi.",
      },
    ],
  },

  careers: {
    eyebrow: "Karier",
    title: "Dua tim, dibangun satu per satu.",
    body: "BBT dan BBM merekrut sendiri-sendiri. Saat ini belum ada posisi yang dibuka. Kalau Anda ingin memperkenalkan diri dan pekerjaan Anda, kami senang membacanya.",
    cta: { label: "Karier di BBA", href: "/careers" },
  },

  contact: {
    eyebrow: "Kontak",
    title: "Ceritakan kebutuhan Anda.",
    intro:
      "Ceritakan tentang keperluan Anda. Formulir ini akan membuka pesan di aplikasi email Anda.",
  },
};
