import { siteConfig } from "@barito-bahalap/config";
import type { CareersContent } from "@/domain/content";

export const careersContent: CareersContent = {
  seo: {
    title: "Karier",
    description:
      "Karier di Barito Bahalap Agency. Saat ini belum ada posisi yang dibuka, tetapi kami menerima perkenalan dari orang yang ingin bergabung dengan tim kami di Palangka Raya.",
  },
  title: "Karier",
  intro:
    "Kami sedang membangun tim teknis dan tim kreatif. Orang yang bergabung lebih awal ikut menentukan cara kami bekerja.",
  openings: {
    title: "Saat ini belum ada posisi yang dibuka.",
    sub: "Tetap perkenalkan diri Anda. Kami menyimpan setiap lamaran dan menghubungi Anda ketika ada posisi yang cocok.",
  },
  hiringTitle: "Cara melamar",
  hiringParagraphs: [
    "Kirim email berisi perkenalan singkat dan tautan ke karya Anda, misalnya repositori, portofolio, tulisan, atau hasil produksi video.",
    "Sebutkan juga bidang yang Anda tuju dan kota tempat Anda tinggal.",
  ],
  rolesTitle: "Peran yang kami butuhkan",
  rolesIntro:
    "Setiap divisi merekrut untuk timnya sendiri. Daftar ini menunjukkan peran yang ada atau akan kami butuhkan, belum tentu sedang dibuka.",
  roleGroups: [
    {
      brand: "tech",
      division: "Barito Bahalap Tech",
      roles: [ 
        "UI/UX Designer",
        "Software Developer (Frontend)",
        "Software Developer (Backend)",
        "Quality Assurance",
      ],
    },
    {
      brand: "media",
      division: "Barito Bahalap Media",
      roles: [ 
        "Konten dan Copywriting",
        "Desain Grafis dan Multimedia",
        "Fotografi dan Videografi",
        "Account dan Relationship Contact",
      ],
    },
  ],
  cta: {
    title: "Perkenalkan diri Anda",
    body: "Kirim catatan singkat dan tautan ke karya Anda. Sebutkan bidang yang Anda tuju.",
    primary: {
      label: "Kirim email",
      href: `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Perkenalan: karier")}`,
    },
  },
};