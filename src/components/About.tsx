import { motion } from 'framer-motion';
import { CalendarDays, ClipboardList, HeartPulse, UserCheck } from 'lucide-react';

const features = [
  { title: 'Consultas completas', description: 'Avaliação física, histórico e plano personalizado.', icon: ClipboardList },
  { title: 'Bem-estar animal', description: 'Cuidado que reduz estresse e valoriza o vínculo.', icon: HeartPulse },
  { title: 'Digital e organizado', description: 'Prontuário digital e lembrete vacinal em um só lugar.', icon: CalendarDays },
  { title: 'Atendimento humanizado', description: 'Respeito, carinho e comunicação transparente.', icon: UserCheck }
];

export function About() {
  return (
    <section id="sobre" className="px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua">Sobre a Dra. Fabi</p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
              Medicina veterinária com empatia, tecnologia e foco total no bem-estar de cães e gatos.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Sou médica veterinária apaixonada por saúde animal e atendimento domiciliar acolhedor. Meu trabalho une
              prevenção, acompanhamento clínico e apoio emocional para tutores que desejam segurança, agilidade e menos
              ansiedade para seus pets.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-aqua/15 text-aqua">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto max-w-xl rounded-[2rem] bg-gradient-to-br from-slate-950/5 to-white p-1 shadow-soft">
            <div className="rounded-[1.75rem] bg-white p-6 sm:p-8">
              <div className="space-y-4">
                <div className="h-80 overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <img
                    src="/hero-illustration.svg"
                    alt="Atendimento veterinário domiciliar com acolhimento e cuidado"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Atendimento humanizado</p>
                  <p className="text-lg font-semibold leading-7 text-slate-950">
                    A jornada do cuidado veterinário pensada para pets e tutores.
                  </p>
                  <p className="text-sm leading-6 text-slate-600">
                    Com prontuários digitais, lembretes vacinais e orientação comportamental, seu animal recebe cuidado integral e atenção contínua.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">Acompanhamento individual</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">Prevenção e vacinação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
