import type { UiContent } from "@/i18n/types";

export const uiContent: UiContent = {
  skipToContent: "Skip to content",
  brandHome: "home",
  loading: "Loading",
  language: { label: "Language" },
  menu: {
    open: "Open menu",
    close: "Close menu",
    primaryNav: "Primary",
    mobileDialog: "Mobile navigation",
    mobileNav: "Mobile",
  },
  footer: {
    firewall:
      "BBT and BBM operate as separate brands with separate teams, client accounts and data.",
    divisions: "Divisions",
    follow: "Follow",
    social: "Social",
    rights: "All rights reserved.",
  },
  form: {
    generalOption: "General enquiry to BBA",
    submit: "Prepare email",
    consent:
      "I agree that the details above may be used to respond to my enquiry.",
    status:
      "Your email app should open with the message ready to send. If nothing opens, copy the address shown beside this form.",
    labels: {
      name: "Full name",
      organization: "Organization",
      email: "Email address",
      division: "Enquiry concerns",
      message: "Message",
    },
    errors: {
      name: "Please enter your name.",
      email: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      message: "Please enter a message.",
      consent: "Please confirm to continue.",
    },
    mail: {
      subjectPrefix: "Enquiry",
      name: "Name",
      organization: "Organization",
      email: "Email",
      concerns: "Concerns",
    },
  },
  notFound: {
    seoTitle: "Page not found",
    code: "404",
    title: "Page not found.",
    sub: "The page you are looking for does not exist or has moved.",
    homeCta: "Back to home",
    suggestionsTitle: "You may be looking for",
    suggestions: [
      {
        label: "Divisions",
        description: "Barito Bahalap Tech and Barito Bahalap Media.",
        href: "/#divisions",
      },
      {
        label: "Approach",
        description: "How we work and how we separate our divisions.",
        href: "/#approach",
      },
      {
        label: "Careers",
        description: "Introduce yourself to BBT or BBM.",
        href: "/careers",
      },
      {
        label: "Contact",
        description: "Start a conversation with BBA.",
        href: "/#contact",
      },
    ],
  },
};
