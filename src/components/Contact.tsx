"use client";

import {
  FormEvent,
  ChangeEvent,
  useState,
  type ReactNode,
} from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Dictionary } from "@/i18n/dictionaries";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function validate(
  values: FormState,
  errorsCopy: Dictionary["contact"]["form"]["errors"]
): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = errorsCopy.nameRequired;
  else if (values.name.trim().length < 2) errors.name = errorsCopy.nameShort;

  if (!values.email.trim()) errors.email = errorsCopy.emailRequired;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = errorsCopy.emailInvalid;

  if (values.phone.trim() && !/^[\d\s+().-]{7,20}$/.test(values.phone.trim()))
    errors.phone = errorsCopy.phoneInvalid;

  if (!values.service) errors.service = errorsCopy.serviceRequired;

  if (!values.message.trim()) errors.message = errorsCopy.messageRequired;
  else if (values.message.trim().length < 10)
    errors.message = errorsCopy.messageShort;

  return errors;
}

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormState];
        return next;
      });
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values, c.form.errors);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="section-pad mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            {c.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-serif text-3xl tracking-tight text-rose-deep sm:text-4xl md:text-5xl"
          >
            {c.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone sm:text-lg">
            {c.intro}
          </p>

          <dl className="mt-10 space-y-6 text-sm sm:text-base">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-light">
                {c.addressLabel}
              </dt>
              <dd className="mt-2 space-y-4 text-rose-deep">
                {c.addresses.map((addr) => (
                  <div key={addr.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose">
                      {addr.label}
                    </p>
                    {addr.lines.map((line) => (
                      <p key={line} className="mt-0.5">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-light">
                {c.hoursLabel}
              </dt>
              <dd className="mt-1.5 text-rose-deep">
                {c.hoursLines[0]}
                <br />
                {c.hoursLines[1]}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-light">
                {c.phoneLabel}
              </dt>
              <dd className="mt-2 space-y-4">
                {c.phones.map((phone) => (
                  <div key={phone.tel} className="space-y-1.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose">
                      {phone.label}
                    </p>
                    <a
                      href={`tel:${phone.tel}`}
                      className="block text-rose-deep underline-offset-4 hover:underline"
                    >
                      {phone.display}
                    </a>
                    <a
                      href={phone.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-rose/25 bg-blush/30 px-3.5 py-1.5 text-xs font-semibold text-rose-deep transition-colors hover:border-rose/45 hover:bg-blush/50"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M17.47 14.38c-.28-.14-1.64-.81-1.9-.9-.25-.1-.44-.14-.62.14-.18.27-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.64-1.54-1.92-.16-.27-.02-.42.12-.55.13-.13.28-.32.42-.48.14-.16.18-.27.28-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.66 1.12 2.85c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32z" />
                        <path d="M12.04 2C6.58 2 2.15 6.42 2.15 11.87c0 1.95.54 3.77 1.48 5.34L2 22l4.93-1.55a9.86 9.86 0 004.11.89h.01c5.45 0 9.88-4.42 9.88-9.87C20.93 6.42 16.5 2 12.04 2zm0 18.03h-.01a8.17 8.17 0 01-4.16-1.14l-.3-.18-3.1.97 1-3.02-.2-.31a8.16 8.16 0 01-1.25-4.36c0-4.52 3.69-8.2 8.22-8.2 2.2 0 4.26.85 5.81 2.4a8.15 8.15 0 012.41 5.8c0 4.52-3.69 8.2-8.22 8.2z" />
                      </svg>
                      {c.whatsappCta}
                    </a>
                  </div>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-line bg-ivory p-6 shadow-[0_24px_50px_-36px_rgba(158,74,106,0.35)] sm:p-8">
          {submitted ? (
            <div
              className="flex min-h-[320px] flex-col items-start justify-center"
              role="status"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose">
                {c.form.received}
              </p>
              <h3 className="mt-3 font-serif text-3xl text-rose-deep">
                {c.form.thankYou} {values.name.trim().split(" ")[0]}.
              </h3>
              <p className="mt-3 max-w-md text-stone">{c.form.demoNote}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.phones.map((phone) => (
                  <a
                    key={phone.wa}
                    href={phone.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-cream hover:bg-rose-deep"
                  >
                    {c.whatsappCta} · {phone.label}
                  </a>
                ))}
              </div>
              <button
                type="button"
                className="mt-6 rounded-full border border-rose/25 px-5 py-2.5 text-sm font-semibold text-rose-deep hover:bg-blush/30"
                onClick={() => {
                  setSubmitted(false);
                  setValues(initial);
                }}
              >
                {c.form.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label={c.form.name} error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputClass(!!errors.name)}
                  />
                </Field>
                <Field id="email" label={c.form.email} error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClass(!!errors.email)}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="phone" label={c.form.phone} error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={handleChange}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={inputClass(!!errors.phone)}
                  />
                </Field>
                <Field id="service" label={c.form.service} error={errors.service}>
                  <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    aria-invalid={!!errors.service}
                    aria-describedby={
                      errors.service ? "service-error" : undefined
                    }
                    className={inputClass(!!errors.service)}
                  >
                    <option value="">{c.form.select}</option>
                    {c.form.serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field id="message" label={c.form.message} error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  placeholder={c.form.messagePlaceholder}
                  className={`${inputClass(!!errors.message)} resize-y`}
                />
              </Field>

              <button
                type="submit"
                className="w-full rounded-full bg-rose px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-rose-deep sm:w-auto"
              >
                {c.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-2xl border bg-cream px-4 py-3 text-sm text-rose-deep outline-none transition-shadow placeholder:text-stone-light focus:ring-2 focus:ring-rose/20 ${
    hasError
      ? "border-red-400 focus:ring-red-200"
      : "border-line focus:border-rose/30"
  }`;
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-rose-deep">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
