"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, LoaderCircle, X } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  privacyConsent: boolean;
  website: string;
};

type FieldName = keyof FormValues;
type FormErrors = Partial<Record<FieldName, string>>;
type FormStatus = "idle" | "submitting";

type Toast = {
  type: "success" | "error";
  message: string;
  id: number;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
  privacyConsent: false,
  website: "",
};

const serviceOptions = [
  { value: "bank-finance", label: "Credit & Banking Advisory" },
  { value: "ibc-nclt", label: "IBC & NCLT Consultancy" },
  { value: "capital-markets", label: "Capital Markets & Fundraising" },
  { value: "taxation", label: "Direct & Indirect Taxation" },
  { value: "general", label: "General Enquiry" },
];

function validateField(
  field: FieldName,
  values: FormValues,
): string | undefined {
  switch (field) {
    case "name": {
      const value = values.name.trim();
      if (!value) return "Please enter your full name.";
      if (value.length < 2) {
        return "Your name must contain at least 2 characters.";
      }
      if (value.length > 100) {
        return "Your name cannot exceed 100 characters.";
      }
      return undefined;
    }

    case "email": {
      const value = values.email.trim();
      if (!value) return "Please enter your email address.";
      if (value.length > 254) return "Your email address is too long.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "Please enter a valid email address.";
      }
      return undefined;
    }

    case "company":
      if (values.company.length > 120) {
        return "Company name cannot exceed 120 characters.";
      }
      return undefined;

    case "phone":
      if (values.phone.length > 30) {
        return "Phone number cannot exceed 30 characters.";
      }
      return undefined;

    case "service":
      if (!values.service) return "Please select a service.";
      if (!serviceOptions.some((option) => option.value === values.service)) {
        return "Please select a valid service.";
      }
      return undefined;

    case "message": {
      const value = values.message.trim();
      if (!value) return "Please describe your requirement.";
      if (value.length < 10) return "Please enter at least 10 characters.";
      if (value.length > 3000) {
        return "Your message cannot exceed 3000 characters.";
      }
      return undefined;
    }

    case "privacyConsent":
      return values.privacyConsent
        ? undefined
        : "Please acknowledge the information-use notice.";

    case "website":
      return undefined;
  }
}

function validateForm(values: FormValues): FormErrors {
  const fields: FieldName[] = [
    "name",
    "email",
    "company",
    "phone",
    "service",
    "message",
    "privacyConsent",
  ];

  const errors: FormErrors = {};

  for (const field of fields) {
    const error = validateField(field, values);
    if (error) errors[field] = error;
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<
    Partial<Record<FieldName, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    if (!toast) return;

    const timer = window.setTimeout(() => {
      setToast((current) => (current?.id === toast.id ? null : current));
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [toast]);

  function showToast(type: Toast["type"], message: string) {
    setToast({ type, message, id: Date.now() });
  }

  function updateField<K extends FieldName>(field: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function markTouched(field: FieldName) {
    setTouched((current) => ({ ...current, [field]: true }));
  }

  const currentErrors = validateForm(values);
  const isFormValid = Object.keys(currentErrors).length === 0;
  const canSubmit = isFormValid && status !== "submitting";

  const inputClassName =
    "mt-2 w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#172b42] outline-none transition focus:ring-2 disabled:cursor-wait disabled:bg-slate-100";

  function fieldClass(field: FieldName) {
    const showError = Boolean(
      (touched[field] || submitted) && currentErrors[field],
    );

    return `${inputClassName} ${
      showError
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
        : "border-slate-300 focus:border-[#98713c] focus:ring-[#98713c]/15"
    }`;
  }

  function fieldError(field: FieldName) {
    if (!(touched[field] || submitted)) return null;

    const error = currentErrors[field];
    if (!error) return null;

    return (
      <p id={`${field}-error`} className="mt-1.5 text-sm text-red-600">
        {error}
      </p>
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    setSubmitted(true);

    const submittedValues: FormValues = {
      ...values,
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      phone: values.phone.trim(),
      service: values.service.trim(),
      message: values.message.trim(),
    };
    setValues(submittedValues);

    const validationErrors = validateForm(submittedValues);
    if (Object.keys(validationErrors).length > 0) {
      showToast(
        "error",
        "Please correct the highlighted fields before submitting.",
      );
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submittedValues),
      });

      // Some error responses may not contain valid JSON.
      const result = (await response.json().catch(() => ({}))) as {
        message?: unknown;
        error?: unknown;
      };

      const serverMessage =
        typeof result.message === "string"
          ? result.message
          : typeof result.error === "string"
            ? result.error
            : undefined;

      if (!response.ok) {
        throw new Error(
          serverMessage ?? "Your enquiry could not be submitted. Please try again.",
        );
      }

      setValues(initialValues);
      setTouched({});
      setSubmitted(false);

      showToast(
        "success",
        serverMessage ?? "Your enquiry has been submitted successfully.",
      );
    } catch (error) {
      showToast(
        "error",
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later.",
      );
    } finally {
      setStatus("idle");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <>
      {toast && (
        <div
          className="fixed right-4 top-4 z-[100] w-[calc(100%-2rem)] max-w-md sm:right-6 sm:top-6"
          role={toast.type === "error" ? "alert" : "status"}
          aria-live={toast.type === "error" ? "assertive" : "polite"}
        >
          <div
            className={`flex items-start gap-3 rounded-xl border p-4 shadow-xl ${
              toast.type === "success"
                ? "border-emerald-200 bg-white text-emerald-950"
                : "border-red-200 bg-white text-red-950"
            }`}
          >
            <span
              className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-bold ${
                toast.type === "success"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-red-100 text-red-700"
              }`}
              aria-hidden="true"
            >
              {toast.type === "success" ? "✓" : "!"}
            </span>

            <div className="min-w-0 flex-1">
              <p className="font-semibold">
                {toast.type === "success"
                  ? "Enquiry submitted"
                  : "Unable to submit"}
              </p>
              <p className="mt-1 break-words text-sm leading-6 text-slate-600">
                {toast.message}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setToast(null)}
              className="rounded-md p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              aria-label="Dismiss notification"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-[#172b42]">
              Full name <span aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={(event) => updateField("name", event.target.value)}
              onBlur={() => markTouched("name")}
              disabled={isSubmitting}
              required
              maxLength={100}
              autoComplete="name"
              aria-invalid={Boolean((touched.name || submitted) && currentErrors.name)}
              aria-describedby={
                currentErrors.name && (touched.name || submitted)
                  ? "name-error"
                  : undefined
              }
              className={fieldClass("name")}
              placeholder="Your full name"
            />
            {fieldError("name")}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-[#172b42]">
              Email address <span aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              onBlur={() => markTouched("email")}
              disabled={isSubmitting}
              required
              maxLength={254}
              autoComplete="email"
              aria-invalid={Boolean((touched.email || submitted) && currentErrors.email)}
              aria-describedby={
                currentErrors.email && (touched.email || submitted)
                  ? "email-error"
                  : undefined
              }
              className={fieldClass("email")}
              placeholder="you@company.com"
            />
            {fieldError("email")}
          </div>

          <div>
            <label htmlFor="company" className="text-sm font-medium text-[#172b42]">
              Company name
            </label>
            <input
              id="company"
              name="company"
              value={values.company}
              onChange={(event) => updateField("company", event.target.value)}
              onBlur={() => markTouched("company")}
              disabled={isSubmitting}
              maxLength={120}
              autoComplete="organization"
              aria-invalid={Boolean((touched.company || submitted) && currentErrors.company)}
              aria-describedby={
                currentErrors.company && (touched.company || submitted)
                  ? "company-error"
                  : undefined
              }
              className={fieldClass("company")}
              placeholder="Your company (optional)"
            />
            {fieldError("company")}
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium text-[#172b42]">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              onBlur={() => markTouched("phone")}
              disabled={isSubmitting}
              maxLength={30}
              autoComplete="tel"
              aria-invalid={Boolean((touched.phone || submitted) && currentErrors.phone)}
              aria-describedby={
                currentErrors.phone && (touched.phone || submitted)
                  ? "phone-error"
                  : undefined
              }
              className={fieldClass("phone")}
              placeholder="Your phone number (optional)"
            />
            {fieldError("phone")}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="service" className="text-sm font-medium text-[#172b42]">
              Service required <span aria-hidden="true">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={values.service}
              onChange={(event) => updateField("service", event.target.value)}
              onBlur={() => markTouched("service")}
              disabled={isSubmitting}
              required
              aria-invalid={Boolean((touched.service || submitted) && currentErrors.service)}
              aria-describedby={
                currentErrors.service && (touched.service || submitted)
                  ? "service-error"
                  : undefined
              }
              className={fieldClass("service")}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {fieldError("service")}
          </div>

          <div className="sm:col-span-2">
            <div className="flex items-center justify-between gap-3">
              <label htmlFor="message" className="text-sm font-medium text-[#172b42]">
                How can we help? <span aria-hidden="true">*</span>
              </label>
              <span className="text-xs text-slate-500" aria-live="polite">
                {values.message.length}/3000
              </span>
            </div>
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={(event) => updateField("message", event.target.value)}
              onBlur={() => markTouched("message")}
              disabled={isSubmitting}
              required
              minLength={10}
              maxLength={3000}
              rows={5}
              aria-invalid={Boolean((touched.message || submitted) && currentErrors.message)}
              aria-describedby={
                currentErrors.message && (touched.message || submitted)
                  ? "message-error"
                  : undefined
              }
              placeholder="Briefly describe your requirement. Do not include confidential financial or identity documents."
              className={`${fieldClass("message")} resize-y`}
            />
            {fieldError("message")}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute -left-[9999px] h-px w-px overflow-hidden"
        >
          <label htmlFor="website">Leave this field empty</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => updateField("website", event.target.value)}
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="privacyConsent"
            className="flex items-start gap-3 text-sm leading-6 text-slate-600"
          >
            <input
              id="privacyConsent"
              name="privacyConsent"
              type="checkbox"
              checked={values.privacyConsent}
              onChange={(event) => updateField("privacyConsent", event.target.checked)}
              onBlur={() => markTouched("privacyConsent")}
              disabled={isSubmitting}
              required
              aria-invalid={Boolean(
                (touched.privacyConsent || submitted) && currentErrors.privacyConsent,
              )}
              aria-describedby={
                currentErrors.privacyConsent &&
                (touched.privacyConsent || submitted)
                  ? "privacyConsent-error"
                  : undefined
              }
              className="mt-1 h-4 w-4 shrink-0 accent-[#172b42]"
            />
            <span>
              I acknowledge that my information will be used to respond to this
              enquiry. Please do not submit confidential documents through this
              form.
            </span>
          </label>
          {fieldError("privacyConsent")}
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#172b42] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#263f59] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:opacity-80"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle className="animate-spin" size={17} />
              Submitting...
            </>
          ) : (
            <>
              Submit Enquiry
              <ArrowRight size={17} />
            </>
          )}
        </button>

        <p className="mt-4 text-xs leading-5 text-slate-500">
          Submitting this form does not establish a professional engagement.
          Services remain subject to confirmation by the relevant provider.
        </p>
      </form>
    </>
  );
}
