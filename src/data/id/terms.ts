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
  updated: "23 Oktober 2026",
  intro:
    "Ketentuan ini mengatur penggunaan Anda atas situs web Barito Bahalap Agency. Dengan mengakses atau menggunakan situs ini, Anda menyatakan telah membaca dan menyetujuinya. Jika Anda tidak setuju, mohon tidak menggunakan situs ini.",
  sections: [
    {
      id: "scope",
      heading: "Ruang lingkup",
      paragraphs: [
        `Situs web ini dioperasikan oleh ${siteConfig.legalName} (BBA). Situs ini menjelaskan BBA sebagai organisasi induk beserta dua merek operasionalnya, Barito Bahalap Tech (BBT) dan Barito Bahalap Media (BBM).`,
        "Ketentuan ini hanya berlaku untuk penggunaan situs web. Hubungan kerja sama dengan klien diatur secara terpisah dalam perjanjian tertulis.",
      ],
    },
    {
      id: "information-only",
      heading: "Hanya untuk informasi",
      paragraphs: [
        "Konten pada situs ini disediakan sebagai informasi umum. Konten ini bukan penawaran, penawaran harga, nasihat profesional, maupun kontrak. Layanan hanya diberikan berdasarkan perjanjian tertulis antara klien dan BBA, BBT, atau BBM, sebagaimana diatur dalam perjanjian tersebut.",
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
      id: "enquiries",
      heading: "Pertanyaan dan korespondensi",
      paragraphs: [
        "Mengirim email atau menggunakan formulir kontak tidak menimbulkan hubungan kerja sama, kewajiban untuk menanggapi, maupun kewajiban kerahasiaan sampai ada perjanjian tertulis. Mohon tidak mengirimkan informasi rahasia, dokumen sensitif, atau data pribadi yang tidak diperlukan melalui saluran ini.",
      ],
    },
    {
      id: "acceptable-use",
      heading: "Penggunaan yang diperbolehkan",
      paragraphs: ["Anda setuju untuk tidak:"],
      items: [
        "menggunakan situs ini untuk tujuan yang melanggar hukum atau merugikan pihak lain;",
        "mengganggu, membebani, atau berupaya memperoleh akses tidak sah ke situs, server, atau jaringan yang terhubung dengannya;",
        "menyebarkan kode berbahaya atau melakukan pemindaian kerentanan tanpa izin tertulis;",
        "menggunakan bot, scraper, atau alat otomatis untuk mengambil konten secara massal tanpa izin tertulis;",
        "menyatakan atau menyiratkan bahwa Anda berafiliasi dengan, atau didukung oleh, BBA, BBT, atau BBM tanpa persetujuan tertulis.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "Kekayaan intelektual",
      paragraphs: [
        "Teks, desain, logo, nama, merek, dan materi lain pada situs ini merupakan milik BBA atau pemberi lisensinya dan dilindungi oleh hukum kekayaan intelektual yang berlaku di Indonesia. Anda boleh melihat dan membagikan tautan ke situs ini, tetapi tidak boleh menyalin, mengubah, atau mendistribusikan ulang kontennya, atau menggunakan nama dan logo kami, tanpa izin tertulis.",
      ],
    },
    {
      id: "privacy",
      heading: "Data pribadi",
      paragraphs: [
        "Pengumpulan dan pemrosesan data pribadi melalui situs ini diatur dalam Kebijakan Privasi kami, yang merupakan bagian dari ketentuan ini.",
      ],
    },
    {
      id: "third-party-links",
      heading: "Tautan dan layanan pihak ketiga",
      paragraphs: [
        "Situs ini dapat memuat tautan ke situs web lain dan memuat sumber daya dari pihak ketiga, seperti font. Kami tidak mengendalikannya dan tidak bertanggung jawab atas konten, kebijakan, maupun praktiknya. Tautan tidak berarti kami mendukung situs tersebut.",
      ],
    },
    {
      id: "accuracy",
      heading: "Akurasi dan ketersediaan",
      paragraphs: [
        "Kami berupaya menjaga situs ini tetap akurat dan tersedia, tetapi situs ini disediakan apa adanya dan sebagaimana tersedia, tanpa jaminan jenis apa pun, baik tersurat maupun tersirat. Konten dapat berubah tanpa pemberitahuan, dan situs dapat sewaktu-waktu tidak tersedia, dibatasi, atau dihentikan.",
      ],
    },
    {
      id: "liability",
      heading: "Pembatasan tanggung jawab",
      paragraphs: [
        "Sejauh diizinkan oleh hukum Indonesia, BBA, BBT, BBM, beserta pengurus dan personelnya tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul dari penggunaan, ketidakmampuan menggunakan, atau ketergantungan Anda pada situs web ini. Tidak ada ketentuan di sini yang membatasi tanggung jawab yang menurut hukum tidak dapat dibatasi.",
      ],
    },
    {
      id: "severability",
      heading: "Keterpisahan",
      paragraphs: [
        "Apabila ada bagian dari ketentuan ini dinyatakan tidak sah atau tidak dapat dilaksanakan, bagian lainnya tetap berlaku.",
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
        "Kami dapat merevisi ketentuan ini sewaktu-waktu. Tanggal di bagian atas menunjukkan kapan ketentuan ini terakhir diperbarui. Dengan terus menggunakan situs, Anda menyetujui ketentuan yang telah direvisi.",
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
