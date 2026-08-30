import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Send, CheckCircle2, AlertCircle, MapPin, Phone } from 'lucide-react';
import { Magnetic } from '@/components/Magnetic';
import { SectionHeading } from '@/components/SectionHeading';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { siteConfig } from '@/data/siteConfig';

 const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sharukhjayker@gmail.com', href: 'mailto:sharukhjayker@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+92 (316) 3078238', href: 'tel:+923163078238' },
    { icon: MapPin, label: 'Location', value: 'Remote · Worldwide', href: '#' },
  ];

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(values.email)) errors.email = 'Please enter a valid email address.';
  if (!values.message.trim()) errors.message = 'Please tell me about your project.';
  else if (values.message.trim().length < 10) errors.message = 'A little more detail helps (10+ characters).';
  return errors;
}

export function Contact() {
  const reduced = useReducedMotion();
  const [values, setValues] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (field: keyof FormState, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  // const onSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   const validation = validate(values);
  //   setErrors(validation);
  //   if (Object.keys(validation).length > 0) return;

  //   setStatus('submitting');
  //   try {
  //     const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/contact_submissions`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  //         Prefer: 'return=minimal',
  //       },
  //       body: JSON.stringify(values),
  //     });
  //     if (!res.ok) throw new Error('Request failed');
  //     setStatus('success');
  //     setValues({ name: '', email: '', projectType: '', budget: '', message: '' });
  //   } catch {
  //     setStatus('error');
  //   }
  // };
const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const validation = validate(values);
  setErrors(validation);

  if (Object.keys(validation).length > 0) return;

  setStatus('submitting');

  try {
    const res = await fetch('https://formspree.io/f/mgaevlgy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
      }),
    });

    if (!res.ok) {
      throw new Error('Form submission failed');
    }

    setStatus('success');

    setValues({
      name: '',
      email: '',
      message: '',
    });
  } catch (error) {
    console.error(error);
    setStatus('error');
  }
};
 
  return (
    <section id="contact" className="relative overflow-hidden pt-10">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/8 blur-[140px]" />
      </div>

      <div className="container-max section-pad">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — pitch */}
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Let's build something together"
              description="Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours."
            />

             <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                className="group flex items-center gap-4  rounded-2xl mt-5"
              >
                <div className="w-11 h-11 rounded-2xl border bg-elevated border-[#1FFF1F]/30   hover:border-accent/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <info.icon size={20}  className=" text-[#1FFF1F]  transition-colors group-hover:text-fg" />
                </div>
                <div>
                  <div className="text-md font-display font-bold text-fg text-balance leading-[0.92] tracking-tightest uppercase ">{info.label}</div>
                  <div className="text-sm  text-muted font-mono mt-1">{info.value}</div>
                </div>
              </a>
            ))}
</motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border  border-[#1FFF1F]/30 bg-card p-8  backdrop-blur-sm flex flex-col justify-center"
          >
            {status === 'success' ? (
<motion.div
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="flex h-full min-h-[300px] space-y-3 flex-col items-center justify-center text-center"
>                <motion.span
  animate={{
    scale: [1, 1.08, 1],
    boxShadow: [
      '0 0 0px rgba(31, 255, 31, 0)',
      '0 0 25px rgba(31, 255, 31, 0.45)',
      '0 0 0px rgba(31, 255, 31, 0)',
    ],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="flex h-14 w-14 items-center justify-center rounded-full bg-elevated text-[#1FFF1F]"
>
  <CheckCircle2 size={40} strokeWidth={1.8} />
</motion.span>
                <h3 className="font-display text-2xl font-bold text-fg text-balance leading-[0.92] tracking-tightest">Message <span className='text-[#1FFF1F]'>sent</span></h3>
                <p className="text-md text-muted font-mono ">
                  Thanks for reaching out — I'll get back to you shortly.
                </p>
                <Magnetic>
                <button
                  onClick={() => setStatus('idle')}
                  className="group inline-flex items-center justify-center gap-2 font-display tracking-[0.em] rounded-full bg-[#1FFF1F] px-7 py-3.5 text-sm font-semibold text-black shadow-[0_8px_30px_-8px_rgb(var(--accent-glow)/0.5)] transition-shadow hover:shadow-[0_12px_40px_-6px_rgb(var(--accent-glow)/0.7)] disabled:opacity-70"
                >
                  Send another message
                </button>
                </Magnetic>
              </motion.div>
            ) : (
              <motion.form
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
  }}
  onSubmit={onSubmit}
  noValidate
  className="space-y-5"
>
                <div className="grid gap-5 sm:grid-cols-2 ">
                  <Field label="Name" error={errors.name}>
                    <input
                      type="text"
                      value={values.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      name="name"
                      className="input-base font-mono"
                    />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input
                      type="email"
                      value={values.email}
                      name="email"
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                      className="input-base font-mono"
                    />
                  </Field>
                </div>

                

                <Field label="Message" error={errors.message}>
                  <textarea
                    value={values.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell me about your project, goals and timeline…"
                    rows={5}
                    name="message"
                    aria-invalid={!!errors.message}
                    className="input-base resize-none font-mono"
                  />
                </Field>

                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}
                
                <Magnetic as="button" className=''>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group inline-flex items-center justify-center gap-2 font-display tracking-[0.em] rounded-full bg-[#1FFF1F] px-7 py-3.5 text-sm font-semibold text-black shadow-[0_8px_30px_-8px_rgb(var(--accent-glow)/0.5)] transition-shadow hover:shadow-[0_12px_40px_-6px_rgb(var(--accent-glow)/0.7)] disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-950/30 border-t-ink-950" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
                </Magnetic>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .input-base {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgb(31 255 31 / 30%);
          background-color: rgb(var(--bg-elev) / 0.6);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: rgb(var(--fg));
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input-base::placeholder { color: rgb(var(--fg-subtle) / 0.7); }
        .input-base:focus {
          outline: none;
          border-color: rgb(var(--accent) / 0.6);
          box-shadow: 0 0 0 3px rgb(var(--accent) / 0.12);
        }
        .input-base option { background-color: rgb(var(--bg-card)); color: rgb(var(--fg)); }
      `}</style>
                        <div className="section-divider mt-10" />

    </section>
  );
}

function Field({
  label,
  error,
  optional,
  children,
}: {
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm text-muted font-mono">
        {label}
        {optional && <span className="text-subtle/60">(optional)</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs font-mono text-red-400">{error}</span>}
    </label>
  );
}
