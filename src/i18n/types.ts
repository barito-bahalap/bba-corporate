import type {
  CareersContent,
  HomeContent,
  LegalContent,
} from "@/domain/content";

export interface NotFoundSuggestion {
  label: string;
  description: string;
  href: string;
}

export interface UiContent {
  skipToContent: string;
  brandHome: string;
  loading: string;
  language: { label: string };
  menu: {
    open: string;
    close: string;
    primaryNav: string;
    mobileDialog: string;
    mobileNav: string;
  };
  footer: {
    firewall: string;
    divisions: string;
    follow: string;
    social: string;
    rights: string;
  };
  form: {
    generalOption: string;
    submit: string;
    consent: string;
    status: string;
    labels: {
      name: string;
      organization: string;
      email: string;
      division: string;
      message: string;
    };
    errors: {
      name: string;
      email: string;
      emailInvalid: string;
      message: string;
      consent: string;
    };
    mail: {
      subjectPrefix: string;
      name: string;
      organization: string;
      email: string;
      concerns: string;
    };
  };
  notFound: {
    seoTitle: string;
    code: string;
    title: string;
    sub: string;
    homeCta: string;
    suggestionsTitle: string;
    suggestions: NotFoundSuggestion[];
  };
}

export interface ContentBundle {
  home: HomeContent;
  careers: CareersContent;
  privacy: LegalContent;
  terms: LegalContent;
  ui: UiContent;
}
