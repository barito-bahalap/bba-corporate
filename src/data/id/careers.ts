import { siteConfig } from "@barito-bahalap/config";
import type { CareersContent } from "@/domain/content";

export const careersContent: CareersContent = {
  seo: {
    title: "Karier",
    description:
      "Karier di Barito Bahalap Agency. BBT dan BBM membangun dan mengelola timnya secara mandiri.",
  },
  title: "Karier",
  intro:
    "Barito Bahalap Agency masih berada pada tahap awal. Kami membangun tim teknis dan redaksi di Palangka Raya, satu divisi demi satu divisi.",
  openings: {
    title: "Saat ini belum ada posisi yang dibuka.",
    sub: "Anda dipersilakan memperkenalkan diri. Kami menyimpan lamaran dan menghubungi Anda ketika posisi dibuka.",
  },
  hiringTitle: "Cara kami merekrut",
  hiringParagraphs: [
    "BBT dan BBM merekrut dan mengelola timnya secara mandiri. Posisi teknis bertanggung jawab kepada BBT, sedangkan posisi redaksi dan kreatif bertanggung jawab kepada BBM, sehingga masing-masing divisi menjaga praktik kerja, akun klien, dan datanya sendiri.",
    "Dalam perkenalan Anda, sampaikan divisi mana yang berkaitan dengan pekerjaan Anda, apa yang telah Anda bangun atau hasilkan, dan di mana Anda berdomisili.",
  ],
  rolesTitle: "Peran dalam organisasi kami",
  rolesIntro:
    "Berikut adalah fungsi dalam struktur organisasi kami. Pencantuman suatu peran di sini tidak berarti peran tersebut sedang dibuka.",
  roleGroups: [
    {
      brand: "tech",
      division: "Barito Bahalap Tech",
      roles: [
        "Delivery Lead",
        "Software Developer (Backend)",
        "Software Developer (Frontend)",
        "Quality Assurance",
        "UI/UX Designer",
      ],
    },
    {
      brand: "media",
      division: "Barito Bahalap Media",
      roles: [
        "Creative Lead",
        "Konten dan Copywriting",
        "Desain Grafis dan Multimedia",
        "Fotografi dan Videografi",
        "Account dan Relationship Contact",
      ],
    },
  ],
  cta: {
    title: "Perkenalkan diri Anda",
    body: "Kirim catatan singkat dan tautan ke karya Anda. Mohon sebutkan divisi mana yang Anda tuju.",
    primary: {
      label: "Kirim email",
      href: `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Perkenalan: karier")}`,
    },
  },
};
