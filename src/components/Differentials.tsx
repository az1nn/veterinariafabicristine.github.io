import { motion } from 'framer-motion';
import { Home, Inbox, Layers, Smile, Sparkles, MessageCircle } from 'lucide-react';

const items = [
  { title: 'Atendimento em domicílio', icon: Home },
  { title: 'Prontuário digital', icon: Inbox },
  { title: 'Receitas digitais', icon: Layers },
  { title: 'Atendimento humanizado', icon: Smile },
  { title: 'Redução do estresse', icon: Sparkles },
  { title: 'Comunicação direta', icon: MessageCircle }
];

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-white px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua">Diferenciais</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Um atendimento premium que transforma a rotina do tutor e do pet.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.02 }}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-soft text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-aqua/15 text-aqua">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
