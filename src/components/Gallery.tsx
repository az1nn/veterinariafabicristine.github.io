import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ImagePlus, Home, Heart, PawPrint, X } from 'lucide-react';

const gallery = [
  {
    title: 'Pets felizes',
    icon: PawPrint,
    description: 'Ambiente acolhedor e familiar para o seu animal.',
    detail: 'Retratos de saúde e alegria trazidos pelo atendimento personalizado em casa.'
  },
  {
    title: 'Atendimento domiciliar',
    icon: Home,
    description: 'Consultas no conforto do lar com todo carinho.',
    detail: 'Visitas cuidadosas que reduzem a ansiedade do pet e deixam o tutor mais tranquilo.'
  },
  {
    title: 'Vacinação',
    icon: ImagePlus,
    description: 'Proteção responsável e segura para o seu pet.',
    detail: 'Cobertura vacinal com orientação preventiva e registro digital organizado.'
  },
  {
    title: 'Carinho e cuidado',
    icon: Heart,
    description: 'Atenção dedicada em cada etapa do tratamento.',
    detail: 'O carinho é parte do protocolo para garantir conforto e vínculo no atendimento.'
  }
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex !== null ? gallery[activeIndex] : null;

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }
    }

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section id="galeria" className="px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua">Galeria</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Momentos de cuidado, carinho e tranquilidade nos lares cariocas.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((item, index) => (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] bg-gradient-to-br from-aqua/15 via-white to-sand/25 p-6 text-left shadow-soft"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-aqua shadow-sm transition duration-300 group-hover:scale-105">
                <item.icon className="h-7 w-7" />
              </div>
              <div className="mt-8 space-y-3">
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-6"
            onClick={() => setActiveIndex(null)}
            role="presentation"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-3xl rounded-[2rem] bg-white p-8 shadow-soft"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-modal-title"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-aqua">Galeria</p>
                  <h3 id="gallery-modal-title" className="mt-4 text-3xl font-semibold text-slate-950">
                    {activeItem.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100"
                  aria-label="Fechar visualização"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-8 space-y-6">
                <div className="rounded-[1.75rem] bg-slate-100 p-8">
                  <p className="text-lg leading-8 text-slate-700">{activeItem.detail}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <span className="rounded-3xl bg-aqua/10 px-4 py-3 text-sm font-semibold text-slate-900">Conteúdo visual</span>
                  <span className="rounded-3xl bg-slate-50 px-4 py-3 text-sm text-slate-600">Clique fora para fechar ou use o botão acima.</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
