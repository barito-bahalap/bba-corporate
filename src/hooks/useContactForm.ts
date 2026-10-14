import { useMemo, useState } from "react";
// Config
import { getDivisions } from "@barito-bahalap/config";
// Hooks
import { useLocale } from "./useLocale";
// Types
import type {
  ContactField,
  ContactFormErrors,
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
  consent: false,
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
  if (!values.consent) errors.consent = copy.consent;
  return errors;
}

function buildMailto(
  values: ContactFormValues,
  options: readonly SelectOption[],
  copy: UiContent["form"],
  recipient: string,
): string {
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
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function useContactForm() {
  const { locale, ui, site } = useLocale();
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "prepared">("idle");

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
    window.location.href = buildMailto(
      values,
      divisionOptions,
      ui.form,
      site.contactEmail,
    );
    setStatus("prepared");
  }

  return {
    values,
    errors,
    status,
    divisionOptions,
    onChange,
    onSubmit,
    labels: ui.form.labels,
    submitLabel: ui.form.submit,
    consentLabel: ui.form.consent,
    statusMessage: ui.form.status,
  };
}
