import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, HeartPulse, PawPrint } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../constants/contact';

export function Hero() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.whatsappBookingMessage);

  return (
    <section id="home" className="relative overflow-hidden px-6 py-14 sm:py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.18]"
        style={{
          backgroundImage: 'url(/pet-pattern.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '320px 320px',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-soft"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aqua/20 text-aqua">
              <PawPrint className="h-4 w-4" />
            </span>
            Veterinária domiciliar no Rio de Janeiro
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Cuidado veterinário humanizado no conforto do seu lar.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Atendimento domiciliar completo para cães e gatos no Rio de Janeiro com carinho, tecnologia e acompanhamento personalizado.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-slate-800"
              >
                Agendar Consulta
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-300 hover:bg-slate-50"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-soft sm:grid-cols-3"
          >
            {[
              { title: 'Atendimento domiciliar', icon: CalendarCheck },
              { title: 'Prontuário digital', icon: HeartPulse },
              { title: 'Acompanhamento personalizado', icon: ArrowRight }
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4 rounded-3xl bg-slate-50 p-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-aqua/15 text-aqua">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-slate-800">{item.title}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto max-w-xl overflow-hidden rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-aqua/15 via-white to-sand/20 p-2 shadow-soft"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-white">
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80"
              alt="Dra. Fabi Cristine atendendo pet em casa"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
