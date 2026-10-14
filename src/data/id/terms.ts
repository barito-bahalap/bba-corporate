import { siteConfig } from "@barito-bahalap/config";
import type { LegalContent } from "@/domain/content";

export const termsContent: LegalContent = {
  seo: {
    title: "Ketentuan Penggunaan",
    description:
      "Ketentuan yang mengatur penggunaan situs web Barito Bahalap Agency.",
    path: "/terms",
  },
  title: "Ketentuan Penggunaan",
  updated: "Oktober 2026",
  intro:
    "Ketentuan ini mengatur penggunaan Anda atas situs web Barito Bahalap Agency. Dengan menggunakan situs ini, Anda menyetujuinya.",
  sections: [
    {
      id: "scope",
      heading: "Ruang lingkup",
      paragraphs: [
        `Situs web ini dioperasikan oleh ${siteConfig.legalName} (BBA). Situs ini menjelaskan BBA sebagai organisasi induk beserta dua merek operasionalnya, Barito Bahalap Tech (BBT) dan Barito Bahalap Media (BBM).`,
      ],
    },
    {
      id: "information-only",
      heading: "Hanya untuk informasi",
      paragraphs: [
        "Konten pada situs ini disediakan sebagai informasi umum. Konten ini bukan penawaran, penawaran harga, maupun kontrak. Layanan hanya diberikan berdasarkan perjanjian tertulis antara klien dan BBA, BBT, atau BBM, sebagaimana diatur dalam perjanjian tersebut.",
      ],
    },
    {
      id: "separate-brands",
      heading: "Merek yang terpisah",
      paragraphs: [
        "BBT dan BBM adalah merek operasional yang terpisah. Tidak ada bagian situs ini yang merupakan penawaran layanan gabungan, dan tidak ada bagian situs ini yang merupakan publikasi pers. Konten redaksi yang dipublikasikan BBM ditentukan secara independen oleh BBM.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "Kekayaan intelektual",
      paragraphs: [
        "Teks, desain, logo, dan materi lain pada situs ini merupakan milik BBA atau pemberi lisensinya. Anda boleh melihat dan membagikan tautan ke situs ini, tetapi tidak boleh menyalin, mengubah, atau mendistribusikan ulang kontennya tanpa izin tertulis.",
      ],
    },
    {
      id: "third-party-links",
      heading: "Tautan pihak ketiga",
      paragraphs: [
        "Situs ini dapat memuat tautan ke situs web lain. Kami tidak mengendalikannya dan tidak bertanggung jawab atas konten maupun praktiknya.",
      ],
    },
    {
      id: "accuracy",
      heading: "Akurasi dan ketersediaan",
      paragraphs: [
        "Kami berupaya menjaga situs ini tetap akurat dan tersedia, tetapi situs ini disediakan apa adanya. Konten dapat berubah tanpa pemberitahuan, dan situs dapat sewaktu-waktu tidak tersedia.",
      ],
    },
    {
      id: "liability",
      heading: "Pembatasan tanggung jawab",
      paragraphs: [
        "Sejauh diizinkan oleh hukum Indonesia, BBA tidak bertanggung jawab atas kerugian yang timbul dari penggunaan atau ketergantungan Anda pada situs web ini.",
      ],
    },
    {
      id: "governing-law",
      heading: "Hukum yang berlaku",
      paragraphs: [
        "Ketentuan ini diatur oleh hukum Republik Indonesia. Sengketa diselesaikan terlebih dahulu melalui musyawarah antara para pihak, dan apabila tidak tercapai, melalui pengadilan yang berwenang di Indonesia.",
      ],
    },
    {
      id: "changes",
      heading: "Perubahan ketentuan",
      paragraphs: [
        "Kami dapat merevisi ketentuan ini. Tanggal di bagian atas menunjukkan kapan ketentuan ini terakhir diperbarui. Dengan terus menggunakan situs, Anda menyetujui ketentuan yang telah direvisi.",
      ],
    },
    {
      id: "contact",
      heading: "Kontak",
      paragraphs: [
        `Pertanyaan tentang ketentuan ini dapat dikirim ke ${siteConfig.contactEmail}.`,
      ],
    },
  ],
};
