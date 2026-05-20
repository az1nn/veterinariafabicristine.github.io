import { motion } from 'framer-motion';
import {
  Bandage,
  CalendarCheck,
  ClipboardCheck,
  Heart,
  Leaf,
  PawPrint,
  Pill,
  ShieldCheck,
  Smile,
  Syringe
} from 'lucide-react';

const serviceImages = [
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80',
];

const services = [
  { title: 'Consulta veterinária domiciliar', description: 'Avaliação completa no conforto do lar para cães e gatos.', icon: PawPrint },
  { title: 'Vacinação', description: 'Proteção certificada com controle e lembrete vacinal.', icon: ShieldCheck },
  { title: 'Soroterapia', description: 'Hidratação e suporte médico com técnica segura e gentil.', icon: Syringe },
  { title: 'Aplicação de medicações', description: 'Administração precisa e apoio para tratamento contínuo.', icon: Pill },
  { title: 'Prescrição digital', description: 'Receitas digitais rápidas e organizadas no prontuário.', icon: ClipboardCheck },
  { title: 'Controle vacinal', description: 'Agenda e acompanhamento para imunização atualizada.', icon: CalendarCheck },
  { title: 'Atendimento geriátrico', description: 'Cuidado especializado para pets maduros com conforto.', icon: Heart },
  { title: 'Acompanhamento nutricional', description: 'Plano alimentar personalizado para cada fase da vida.', icon: Leaf },
  { title: 'Orientação comportamental', description: 'Apoio para hábitos tranquilos e convivência equilibrada.', icon: Smile },
  { title: 'Cuidados preventivos', description: 'Rotina de saúde que evita doenças e reduz ansiedade.', icon: Bandage }
];

export function Services() {
  return (
    <section id="servicos" className="px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua">Serviços</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Soluções completas para saúde, conforto e bem-estar dos seus pets.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Um portfólio de serviços pensado para disponibilizar o melhor atendimento veterinário domiciliar com tecnologia e atenção humanizada.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={serviceImages[index % serviceImages.length]}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-aqua/15 text-aqua transition duration-300 group-hover:bg-aqua/20">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
