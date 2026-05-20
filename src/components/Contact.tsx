import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent('Contato para consulta');
    const body = encodeURIComponent(
      `Nome: ${formState.name}\nEmail: ${formState.email}\nMensagem: ${formState.message}`
    );
    const mailto = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  }

  return (
    <section id="contato" className="bg-[#F5F7F8] px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 xl:grid-cols-[0.9fr_0.8fr]">
        <div className="space-y-6 rounded-[2rem] bg-white p-8 shadow-soft sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua">Contato</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Seu pet merece cuidado profissional sem sair de casa.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            Agende a visita domiciliar e tenha atenção dedicada, organização digital e suporte contínuo para cães e gatos no Rio de Janeiro.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-3xl bg-slate-50 p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-aqua/15 text-aqua">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-slate-950">WhatsApp</p>
                <p className="text-sm text-slate-600">{CONTACT_INFO.whatsappNumber}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-3xl bg-slate-50 p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-aqua/15 text-aqua">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-slate-950">Localização</p>
                <p className="text-sm text-slate-600">{CONTACT_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 rounded-[2rem] bg-slate-950 p-8 text-white shadow-soft sm:p-10"
        >
          <div className="space-y-3">
            <label htmlFor="name" className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
              Nome
            </label>
            <input
              id="name"
              name="name"
              required
              value={formState.name}
              onChange={(event) => setFormState({ ...formState, name: event.target.value })}
              className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-5 py-4 text-sm text-white outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
              placeholder="Seu nome"
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="email" className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={formState.email}
              onChange={(event) => setFormState({ ...formState, email: event.target.value })}
              className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-5 py-4 text-sm text-white outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
              placeholder="seu@email.com"
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="message" className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formState.message}
              onChange={(event) => setFormState({ ...formState, message: event.target.value })}
              className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-5 py-4 text-sm text-white outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
              placeholder="Gostaria de agendar uma consulta domiciliar para meu pet..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-aqua px-6 py-4 text-sm font-semibold text-slate-950 shadow-soft hover:bg-[#6cc5b1]"
          >
            Enviar mensagem
            <Send className="h-4 w-4" />
          </button>
          {submitted && <p className="text-sm text-slate-300">Abrindo seu app de e-mail com os dados preenchidos...</p>}
        </motion.form>
      </div>
    </section>
  );
}
