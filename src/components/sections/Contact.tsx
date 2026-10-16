"use client";

import { CheckIcon, CopyIcon, PaperPlaneTiltIcon, WarningCircleIcon } from "@phosphor-icons/react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useId, useRef, useState, type FormEvent } from "react";
import { projectTypes } from "@/content/services";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Section } from "@/components/ui/Section";
import { setProjectType, useProjectType } from "@/lib/contact-intent";
import { easeOut, spring } from "@/lib/motion";

type Field = "name" | "email" | "message";
type Status = "idle" | "sending" | "success" | "error";

const validators: Record<Field, (v: string) => string | null> = {
  name: (v) => (v.trim().length < 2 ? "Indiquez votre nom." : null),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? null : "Cette adresse e-mail ne semble pas valide."),
  message: (v) => (v.trim().length < 10 ? "Décrivez votre projet en quelques mots (10 caractères minimum)." : null),
};

const inputClass =
  "block w-full rounded-[14px] border border-black/20 bg-white px-4 py-3 text-[16px] text-fg placeholder:text-[#6e6e73] transition-[border-color,box-shadow] duration-150 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15 aria-[invalid=true]:border-danger aria-[invalid=true]:focus:ring-danger/15";

function FieldError({ id, message }: { id: string; message: string | null }) {
  return (
    <AnimatePresence initial={false}>
      {message && (
        <motion.p
          id={id}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="mt-1.5 flex items-center gap-1.5 text-[13.5px] text-danger"
        >
          <WarningCircleIcon size={15} weight="fill" className="shrink-0" />
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export function Contact() {
  const uid = useId();
  const form = useRef<HTMLFormElement>(null);
  const projectType = useProjectType();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<Field, string | null>>({ name: null, email: null, message: null });
  const [copied, setCopied] = useState(false);

  const check = (field: Field, value: string) => setErrors((e) => ({ ...e, [field]: validators[field](value) }));

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next = {
      name: validators.name(String(data.get("name") ?? "")),
      email: validators.email(String(data.get("email") ?? "")),
      message: validators.message(String(data.get("message") ?? "")),
    };
    setErrors(next);
    const firstInvalid = (Object.keys(next) as Field[]).find((k) => next[k]);
    if (firstInvalid) {
      const field = form.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`);
      field?.scrollIntoView({ block: "center", behavior: "smooth" });
      field?.focus({ preventScroll: true });
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(serviceId, templateId, e.currentTarget, { publicKey });
      setStatus("success");
      form.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const fieldProps = (field: Field) => ({
    id: `${uid}-${field}`,
    name: field,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${uid}-${field}-error` : undefined,
    onBlur: (e: { target: { value: string } }) => e.target.value && check(field, e.target.value),
    onChange: (e: { target: { value: string } }) => errors[field] && check(field, e.target.value),
  });

  return (
    <Section id="contact" surface="paper" label="Contact">
      <Container className="grid gap-14 py-[clamp(6rem,16vh,10rem)] lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="type-display text-[clamp(2.6rem,6vw,5rem)]">Parlons de votre projet.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="type-body mt-6 max-w-[38ch] text-[19px] text-fg-muted">
              Une idée, une question, une opportunité ? Écrivez-moi, je réponds rapidement.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <Image src={site.photo} alt="" width={56} height={56} className="size-14 rounded-full object-cover" />
              <div className="min-w-0">
                <p className="font-semibold">{site.name}</p>
                <div className="flex items-center gap-2">
                  <a href={`mailto:${site.email}`} className="truncate text-[15px] text-accent hover:underline">
                    {site.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="pressable grid size-8 shrink-0 place-items-center rounded-full text-fg-muted hover:bg-black/5"
                    aria-label={copied ? "Adresse copiée" : "Copier l'adresse e-mail"}
                  >
                    {copied ? <CheckIcon size={15} weight="bold" className="text-success" /> : <CopyIcon size={15} />}
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-[28px] bg-white p-6 shadow-[0_1px_2px_rgb(29_29_31/0.04),0_30px_70px_-40px_rgb(29_29_31/0.3)] sm:p-9">
            <AnimatePresence mode="wait" initial={false}>
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: easeOut }}
                  className="flex min-h-[460px] flex-col items-center justify-center text-center"
                  role="status"
                >
                  <svg viewBox="0 0 64 64" className="size-20" aria-hidden>
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="29"
                      fill="none"
                      stroke="var(--color-success)"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, ease: easeOut }}
                    />
                    <motion.path
                      d="M20 33 l8 8 l16 -18"
                      fill="none"
                      stroke="var(--color-success)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.35, delay: 0.35, ease: easeOut }}
                    />
                  </svg>
                  <p className="type-title mt-6 text-[28px]">Message envoyé.</p>
                  <p className="mt-2 max-w-[34ch] text-[16px] text-fg-muted">
                    Merci ! Je reviens vers vous très vite à l&apos;adresse indiquée.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="pressable mt-8 h-11 rounded-full bg-fg/[0.06] px-5 text-[14px] font-medium hover:bg-fg/10"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={form}
                  onSubmit={submit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <fieldset>
                    <legend className="text-[14px] font-medium">Type de projet</legend>
                    <input type="hidden" name="project_type" value={projectTypes.find((t) => t.value === projectType)?.label} />
                    <div className="mt-2 grid grid-cols-2 gap-1 rounded-[18px] bg-paper-2 p-1 sm:grid-cols-4">
                      {projectTypes.map((t) => (
                        <label key={t.value} className="relative cursor-pointer">
                          <input
                            type="radio"
                            name="project_type_choice"
                            value={t.value}
                            checked={projectType === t.value}
                            onChange={() => setProjectType(t.value)}
                            className="peer sr-only"
                          />
                          {projectType === t.value && (
                            <motion.span layoutId="project-type" transition={spring} className="absolute inset-0 rounded-[14px] bg-white shadow-sm" />
                          )}
                          <span className="relative flex h-10 items-center justify-center rounded-[14px] text-[13.5px] font-medium text-fg-muted peer-checked:text-fg peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-accent">
                            {t.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor={`${uid}-name`} className="text-[14px] font-medium">
                        Nom complet
                      </label>
                      <input {...fieldProps("name")} type="text" autoComplete="name" required className={`mt-2 ${inputClass}`} />
                      <FieldError id={`${uid}-name-error`} message={errors.name} />
                    </div>
                    <div>
                      <label htmlFor={`${uid}-email`} className="text-[14px] font-medium">
                        Adresse e-mail
                      </label>
                      <input
                        {...fieldProps("email")}
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        required
                        className={`mt-2 ${inputClass}`}
                      />
                      <FieldError id={`${uid}-email-error`} message={errors.email} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={`${uid}-phone`} className="text-[14px] font-medium">
                      Téléphone <span className="font-normal text-fg-muted">(facultatif)</span>
                    </label>
                    <input id={`${uid}-phone`} name="phone" type="tel" autoComplete="tel" className={`mt-2 ${inputClass}`} />
                  </div>

                  <div>
                    <label htmlFor={`${uid}-message`} className="text-[14px] font-medium">
                      Votre projet
                    </label>
                    <textarea
                      {...fieldProps("message")}
                      rows={5}
                      required
                      placeholder="Bonjour Mattéo, je souhaite..."
                      className={`mt-2 resize-y ${inputClass}`}
                    />
                    <FieldError id={`${uid}-message-error`} message={errors.message} />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="pressable inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-[15px] font-medium text-white hover:bg-[#1d4ad8] disabled:opacity-70"
                    >
                      {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                      <PaperPlaneTiltIcon size={16} weight="bold" className={status === "sending" ? "animate-pulse" : ""} />
                    </button>
                    <div aria-live="polite" className="text-[14px]">
                      {status === "error" && (
                        <p className="flex items-start gap-1.5 text-danger">
                          <WarningCircleIcon size={16} weight="fill" className="mt-0.5 shrink-0" />
                          <span>
                            L&apos;envoi a échoué. Écrivez-moi directement à{" "}
                            <a href={`mailto:${site.email}`} className="underline">
                              {site.email}
                            </a>
                            .
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
