import type { UiContent } from "@/i18n/types";

export const uiContent: UiContent = {
  skipToContent: "Skip to main content",
  brandHome: "home",
  loading: "Loading",
  language: { label: "Language" },
  menu: {
    open: "Menu",
    close: "Close menu",
    primaryNav: "Primary",
    mobileDialog: "Mobile navigation",
    mobileNav: "Mobile",
  },
  footer: {
    firewall:
      "BBT and BBM are two brands with separate teams, client accounts, and data.",
    divisions: "Divisions",
    follow: "Follow",
    social: "Social media",
    rights: "All rights reserved.",
  },
  form: {
    generalOption: "General inquiry for BBA",
    submit: "Prepare email",
    consent: "I agree to this data being used to respond to my inquiry.",
    status:
      "Your email app will open with a message ready to send. If it does not open, copy the email address next to this form.",
    labels: {
      name: "Full name",
      organization: "Organization",
      email: "Email address",
      division: "This inquiry is about",
      message: "Message",
    },
    errors: {
      name: "Please enter your name.",
      email: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      message: "Please enter your message.",
      consent: "Please tick the consent box to continue.",
    },
    mail: {
      subjectPrefix: "Inquiry",
      name: "Name",
      organization: "Organization",
      email: "Email",
      concerns: "Directed to",
    },
  },
  notFound: {
    seoTitle: "Page not found",
    code: "404",
    title: "Page not found.",
    sub: "This page does not exist or has been moved.",
    homeCta: "Back to home",
    suggestionsTitle: "You might be looking for",
    suggestions: [
      {
        label: "Divisions",
        description: "Barito Bahalap Tech and Barito Bahalap Media.",
        href: "/divisions",
      },
      {
        label: "Approach",
        description: "How we work.",
        href: "/approach",
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
