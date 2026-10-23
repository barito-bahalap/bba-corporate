import { getSiteConfig } from "@barito-bahalap/config";
import type { LegalContent } from "@/domain/content";

const siteConfig = getSiteConfig("id");

export const privacyContent: LegalContent = {
  seo: {
    title: "Kebijakan Privasi",
    description:
      "Kebijakan Privasi PT Barito Bahalap Agency selaku pengendali Data Pribadi, berdasarkan UU Pelindungan Data Pribadi.",
    path: "/privacy",
  },
  title: "Kebijakan Privasi",
  updated: "22 Oktober 2026",
  intro:
    "Dalam Kebijakan Privasi ini, kami menyatakan bahwa Barito Bahalap Agency selaku pengendali Data Pribadi senantiasa memberikan keamanan dan pelindungan Data Pribadi klien. Kami mematuhi peraturan perundang-undangan yang berlaku, termasuk Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi beserta perubahannya (UU PDP).",
  sections: [
    {
      id: "who-we-are",
      heading: "Siapa kami",
      paragraphs: [
        `${siteConfig.legalName} (BBA) adalah organisasi induk yang berkedudukan di ${siteConfig.location}. BBA bertindak sebagai pengendali Data Pribadi dan bertanggung jawab atas informasi pribadi yang dijelaskan dalam kebijakan ini.`,
        `Anda dapat menghubungi kami melalui ${siteConfig.contactEmail}.`,
      ],
    },
    {
      id: "compliance",
      heading: "Kewajiban mematuhi kebijakan ini",
      paragraphs: [
        "Kepatuhan terhadap Kebijakan Privasi ini bersifat wajib. Kegagalan mematuhinya dapat mengakibatkan tindakan disipliner atau tindakan lain sesuai prosedur yang telah ditetapkan. Perseroan dapat mengambil setiap langkah yang diperlukan, termasuk tindakan hukum dan administratif, untuk menjaga kepatuhan terhadap kebijakan ini.",
      ],
    },
    {
      id: "uu-pdp",
      heading: "Dasar hukum: UU PDP",
      paragraphs: [
        "Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) mengatur asas; jenis Data Pribadi; hak subjek Data Pribadi; pemrosesan Data Pribadi; kewajiban pengendali dan prosesor Data Pribadi dalam pemrosesan; transfer Data Pribadi; sanksi administratif; kelembagaan; kerja sama internasional; partisipasi masyarakat; penyelesaian sengketa dan hukum acara; larangan dalam penggunaan Data Pribadi; dan ketentuan pidana terkait pelindungan Data Pribadi.",
        "Pelindungan Data Pribadi adalah keseluruhan upaya untuk melindungi Data Pribadi dalam rangkaian pemrosesan Data Pribadi guna menjamin hak konstitusional subjek Data Pribadi.",
      ],
    },
    {
      id: "information-we-collect",
      heading: "Informasi yang kami kumpulkan",
      paragraphs: [
        "Situs web ini adalah situs statis. Situs ini tidak memiliki akun pengguna dan tidak menyimpan apa yang Anda ketik pada formulir kontak.",
      ],
      items: [
        "Informasi yang Anda kirimkan kepada kami. Ketika Anda mengirim email, atau menggunakan formulir kontak untuk menyiapkan email, kami menerima keterangan yang Anda pilih untuk disertakan, seperti nama, organisasi, alamat email, dan pesan Anda.",
        "Data teknis. Penyedia hosting kami dapat mencatat data permintaan standar seperti alamat IP, jenis peramban, dan halaman yang diminta, demi keamanan dan keandalan operasional.",
        "Font. Situs ini memuat font dari Google Fonts, sehingga peramban Anda meminta font tersebut dari server Google dan Google menerima alamat IP Anda.",
        "Cookie dan pelacakan. Situs ini tidak memasang cookie sendiri dan tidak menggunakan pelacak iklan maupun analitik.",
      ],
    },
    {
      id: "how-we-use-information",
      heading: "Cara kami menggunakan informasi",
      items: [
        "Untuk menanggapi pertanyaan Anda dan membahas kemungkinan kerja sama.",
        "Untuk menyimpan catatan korespondensi bisnis dan kontrak kami.",
        "Untuk memenuhi kewajiban hukum, regulasi, dan akuntansi.",
      ],
    },
    {
      id: "division-separation",
      heading: "Pemisahan antar divisi",
      paragraphs: [
        "Berdasarkan kebijakan pemisahan operasional BBA, informasi mengenai pertanyaan untuk Barito Bahalap Tech ditangani oleh personel BBT, dan informasi mengenai pertanyaan untuk Barito Bahalap Media ditangani oleh personel BBM. Kami tidak membagikannya kepada divisi lain tanpa persetujuan tegas dari Anda.",
      ],
    },
    {
      id: "sharing",
      heading: "Pembagian informasi",
      paragraphs: [
        "Kami tidak menjual Data Pribadi. Kami membagikannya hanya kepada penyedia layanan yang membantu operasional kami, seperti penyedia hosting dan email, serta ketika diwajibkan oleh hukum.",
      ],
    },
    {
      id: "retention",
      heading: "Masa penyimpanan",
      paragraphs: [
        "Kami menyimpan korespondensi selama diperlukan untuk menangani pertanyaan Anda, melaksanakan kontrak yang timbul darinya, dan memenuhi kewajiban hukum. Setelah itu kami menghapus atau menganonimkannya.",
      ],
    },
    {
      id: "your-rights",
      heading: "Hak Anda",
      paragraphs: [
        "Berdasarkan UU PDP, Anda sebagai subjek Data Pribadi berhak meminta akses, perbaikan, atau penghapusan Data Pribadi Anda, menarik persetujuan yang telah diberikan, dan menyatakan keberatan atas pemrosesan tertentu. Untuk menggunakan hak tersebut, kirimkan email kepada kami dan sampaikan apa yang Anda inginkan.",
      ],
    },
    {
      id: "security",
      heading: "Keamanan",
      paragraphs: [
        "Kami membatasi akses terhadap korespondensi hanya kepada personel yang membutuhkannya dan menerapkan langkah teknis dan organisasi yang wajar. Tidak ada metode transmisi melalui internet yang sepenuhnya aman.",
      ],
    },
    {
      id: "sanctions",
      heading: "Sanksi bagi pelanggar",
      paragraphs: [
        "UU PDP menetapkan dua jalur sanksi, yaitu sanksi administratif dan ketentuan pidana. Untuk pelanggaran kewajiban administratif, Pasal 57 UU PDP mengatur sanksi berupa:",
      ],
      items: [
        "peringatan tertulis;",
        "penghentian sementara kegiatan pemrosesan Data Pribadi;",
        "penghapusan atau pemusnahan Data Pribadi; dan",
        "denda administratif paling tinggi 2 (dua) persen dari pendapatan tahunan pengendali Data Pribadi.",
      ],
    },
    {
      id: "changes",
      heading: "Perubahan kebijakan ini",
      paragraphs: [
        "Kami dapat memperbarui kebijakan ini seiring perubahan situs web atau kewajiban hukum kami. Tanggal di bagian atas menunjukkan kapan kebijakan ini terakhir diperbarui.",
      ],
    },
    {
      id: "contact",
      heading: "Kontak",
      paragraphs: [
        `Pertanyaan tentang kebijakan ini dapat dikirim ke ${siteConfig.contactEmail}.`,
      ],
    },
  ],
};
