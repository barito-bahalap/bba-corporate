import { getSiteConfig } from "@barito-bahalap/config";
import type { LegalContent } from "@/domain/content";

const siteConfig = getSiteConfig("id");

export const privacyContent: LegalContent = {
  seo: {
    title: "Kebijakan Privasi",
    description:
      "Cara Barito Bahalap Agency mengelola informasi pribadi yang dikumpulkan melalui situs web ini.",
    path: "/privacy",
  },
  title: "Kebijakan Privasi",
  updated: "Oktober 2026",
  intro:
    "Kebijakan ini menjelaskan informasi pribadi apa yang dikumpulkan Barito Bahalap Agency melalui situs web ini, tujuannya, dan pilihan yang Anda miliki.",
  sections: [
    {
      id: "who-we-are",
      heading: "Siapa kami",
      paragraphs: [
        `${siteConfig.legalName} (BBA) adalah organisasi induk yang berkedudukan di ${siteConfig.location}. BBA bertanggung jawab atas informasi pribadi yang dijelaskan dalam kebijakan ini.`,
        `Anda dapat menghubungi kami melalui ${siteConfig.contactEmail}.`,
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
        "Kami tidak menjual informasi pribadi. Kami membagikannya hanya kepada penyedia layanan yang membantu operasional kami, seperti penyedia hosting dan email, serta ketika diwajibkan oleh hukum.",
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
        "Berdasarkan Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda berhak meminta akses, perbaikan, atau penghapusan data pribadi Anda, menarik persetujuan yang telah diberikan, dan menyatakan keberatan atas pemrosesan tertentu. Untuk menggunakan hak tersebut, kirimkan email kepada kami dan sampaikan apa yang Anda inginkan.",
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
      id: "changes",
      heading: "Perubahan kebijakan ini",
      paragraphs: [
        "Kami dapat memperbarui kebijakan ini seiring perubahan situs web atau kewajiban hukum kami. Tanggal di bagian atas menunjukkan kapan kebijakan ini terakhir direvisi.",
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
