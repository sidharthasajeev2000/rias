"use client";

import {
  FormEvent,
  ChangeEvent,
  useState,
  type ReactNode,
} from "react";

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

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  else if (values.name.trim().length < 2)
    errors.name = "Name should be at least 2 characters.";

  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";

  if (values.phone.trim() && !/^[\d\s+().-]{7,20}$/.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number.";

  if (!values.service) errors.service = "Please select a service.";

  if (!values.message.trim()) errors.message = "Please share a short message.";
  else if (values.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";

  return errors;
}

export default function Contact() {
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
    const nextErrors = validate(values);
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
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
            Visit & enquire
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-serif text-3xl tracking-tight text-navy sm:text-4xl md:text-5xl"
          >
            Book a fitting
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone sm:text-lg">
            Tell us a little about what you need. We’ll reply to arrange a
            convenient time in the atelier.
          </p>

          <dl className="mt-10 space-y-6 text-sm sm:text-base">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-stone-light">
                Address
              </dt>
              <dd className="mt-1.5 text-navy">
                14 Threadneedle Lane
                <br />
                Suite 2, Meadowbrook
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-stone-light">
                Hours
              </dt>
              <dd className="mt-1.5 text-navy">
                Tue–Sat · 10:00–18:00
                <br />
                Sundays by appointment
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-stone-light">
                Phone
              </dt>
              <dd className="mt-1.5">
                <a
                  href="tel:+15550142890"
                  className="text-navy underline-offset-4 hover:underline"
                >
                  +1 (555) 014-2890
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-stone-light">
                Email
              </dt>
              <dd className="mt-1.5">
                <a
                  href="mailto:hello@rias-atelier.example"
                  className="text-navy underline-offset-4 hover:underline"
                >
                  hello@rias-atelier.example
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-line bg-ivory p-6 shadow-[0_24px_50px_-36px_rgba(26,39,68,0.4)] sm:p-8">
          {submitted ? (
            <div
              className="flex min-h-[320px] flex-col items-start justify-center"
              role="status"
            >
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold">
                Received
              </p>
              <h3 className="mt-3 font-serif text-3xl text-navy">
                Thank you, {values.name.trim().split(" ")[0]}.
              </h3>
              <p className="mt-3 max-w-md text-stone">
                This is a demo form with client-side validation only—no message
                was sent. In production, this would reach the atelier inbox.
              </p>
              <button
                type="button"
                className="mt-8 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-medium text-navy hover:bg-cream"
                onClick={() => {
                  setSubmitted(false);
                  setValues(initial);
                }}
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
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
                <Field id="email" label="Email" error={errors.email}>
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
                <Field id="phone" label="Phone (optional)" error={errors.phone}>
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
                <Field id="service" label="Service" error={errors.service}>
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
                    <option value="">Select…</option>
                    <option value="custom-suits">Custom suits</option>
                    <option value="alterations">Alterations</option>
                    <option value="fittings">Fittings</option>
                    <option value="bridal-formal">Bridal & formal</option>
                    <option value="restyling">Restyling</option>
                  </select>
                </Field>
              </div>

              <Field id="message" label="Message" error={errors.message}>
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
                  className={`${inputClass(!!errors.message)} resize-y`}
                />
              </Field>

              <button
                type="submit"
                className="w-full rounded-full bg-navy px-7 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-navy-soft sm:w-auto"
              >
                Send enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-cream px-4 py-3 text-sm text-navy outline-none transition-shadow placeholder:text-stone-light focus:ring-2 focus:ring-navy/20 ${
    hasError
      ? "border-red-400 focus:ring-red-200"
      : "border-line focus:border-navy/30"
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
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
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
