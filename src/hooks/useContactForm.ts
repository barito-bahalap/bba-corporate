import { useMemo, useState } from "react";
// Config
import { getDivisions } from "@barito-bahalap/config";
// Hooks
import { useLocale } from "./useLocale";
// Types
import type {
  ContactField,
  ContactFormErrors,
  ContactFormLinks,
  ContactFormValues,
  SelectOption,
} from "@barito-bahalap/components";
import type { UiContent } from "@/i18n/types";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  organization: "",
  email: "",
  division: "general",
  message: "",
  consent: true,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(
  values: ContactFormValues,
  copy: UiContent["form"]["errors"],
): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!values.name.trim()) errors.name = copy.name;
  if (!values.email.trim()) errors.email = copy.email;
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = copy.emailInvalid;
  if (!values.message.trim()) errors.message = copy.message;
  return errors;
}

function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  if (/Android|iPhone|iPad|iPod|Mobile/i.test(ua)) return true;
  // iPadOS reports as Macintosh
  return /Macintosh/i.test(ua) && navigator.maxTouchPoints > 1;
}

function buildLinks(
  values: ContactFormValues,
  options: readonly SelectOption[],
  copy: UiContent["form"],
  recipient: string,
): ContactFormLinks {
  const label =
    options.find((option) => option.value === values.division)?.label ??
    copy.generalOption;
  const subject = `${copy.mail.subjectPrefix}: ${label}`;
  const body = [
    `${copy.mail.name}: ${values.name.trim()}`,
    `${copy.mail.organization}: ${values.organization.trim() || "-"}`,
    `${copy.mail.email}: ${values.email.trim()}`,
    `${copy.mail.concerns}: ${label}`,
    "",
    values.message.trim(),
  ].join("\r\n");

  const to = encodeURIComponent(recipient);
  const su = encodeURIComponent(subject);
  const bd = encodeURIComponent(body);

  return {
    mailto: `mailto:${recipient}?subject=${su}&body=${bd}`,
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${bd}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}&body=${bd}`,
  };
}

export function useContactForm() {
  const { locale, ui, site } = useLocale();
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "prepared">("idle");
  const [links, setLinks] = useState<ContactFormLinks | undefined>();

  const divisionOptions = useMemo<readonly SelectOption[]>(
    () => [
      { value: "general", label: ui.form.generalOption },
      ...getDivisions(locale).map((division) => ({
        value: division.id,
        label: `${division.name} (${division.shortName})`,
      })),
    ],
    [locale, ui.form.generalOption],
  );

  function onChange(field: ContactField, value: string | boolean) {
    setValues(
      (previous) => ({ ...previous, [field]: value }) as ContactFormValues,
    );
    setErrors((previous) => {
      if (!previous[field]) return previous;
      const next = { ...previous };
      delete next[field];
      return next;
    });
    setStatus("idle");
  }

  function onSubmit() {
    const found = validate(values, ui.form.errors);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const built = buildLinks(
      values,
      divisionOptions,
      ui.form,
      site.contactEmail,
    );
    setLinks(built);
    setStatus("prepared");

    if (isMobileDevice()) {
      window.location.href = built.mailto;
    } else {
      window.open(built.gmail, "_blank", "noopener,noreferrer");
    }
  }

  return {
    values,
    errors,
    status,
    links,
    divisionOptions,
    onChange,
    onSubmit,
    labels: ui.form.labels,
    submitLabel: ui.form.submit,
    statusMessage: ui.form.status,
  };
}
