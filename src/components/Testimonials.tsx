import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    author: 'Mariana Alves',
    role: 'Tutora de Luna',
    text: 'A Dra. Fabi é cuidadosa, pontual e fez toda a diferença no tratamento da minha gatinha. O atendimento em casa trouxe muito conforto para todos nós.'
  },
  {
    author: 'Felipe Gomes',
    role: 'Tutor do Thor',
    text: 'O acompanhamento nutricional e as consultas preventivas deixaram meu cão mais ativo e feliz. Recomendo a atenção humanizada e profissional.'
  },
  {
    author: 'Renata Souza',
    role: 'Tutora da Nina',
    text: 'A comunicação é transparente e o prontuário digital facilita todo o processo. Meu pet se adaptou muito bem ao atendimento domiciliar.'
  }
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua">Depoimentos</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Tutores satisfeitos com um atendimento delicado e profissional.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.author}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft"
            >
              <div className="flex items-center gap-4 text-aqua">
                <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-aqua/10">
                  <Quote className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{item.author}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-600">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
