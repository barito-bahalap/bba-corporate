import { useState } from "react";
// Config
import { divisions, siteConfig } from "@barito-bahalap/config";
// Types
import type {
  ContactField,
  ContactFormErrors,
  ContactFormValues,
  SelectOption,
} from "@barito-bahalap/components";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  organization: "",
  email: "",
  division: "general",
  message: "",
  consent: false,
};

const DIVISION_OPTIONS: readonly SelectOption[] = [
  { value: "general", label: "General enquiry to BBA" },
  ...divisions.map((division) => ({
    value: division.id,
    label: `${division.name} (${division.shortName})`,
  })),
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!values.message.trim()) errors.message = "Please enter a message.";
  if (!values.consent) errors.consent = "Please confirm to continue.";
  return errors;
}

function buildMailto(values: ContactFormValues): string {
  const label =
    DIVISION_OPTIONS.find((option) => option.value === values.division)
      ?.label ?? "General enquiry to BBA";
  const subject = `Enquiry: ${label}`;
  const body = [
    `Name: ${values.name.trim()}`,
    `Organization: ${values.organization.trim() || "-"}`,
    `Email: ${values.email.trim()}`,
    `Concerns: ${label}`,
    "",
    values.message.trim(),
  ].join("\r\n");
  return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "prepared">("idle");

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
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    window.location.href = buildMailto(values);
    setStatus("prepared");
  }

  return {
    values,
    errors,
    status,
    divisionOptions: DIVISION_OPTIONS,
    onChange,
    onSubmit,
  };
}
