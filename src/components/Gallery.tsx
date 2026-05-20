import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ImagePlus, Home, Heart, MessageCircle, PawPrint, X } from 'lucide-react';
import { getWhatsAppLink } from '../constants/contact';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const headingContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const modalContent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const modalItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const gallery = [
  {
    title: 'Pets felizes',
    icon: PawPrint,
    image: 'https://github.com/user-attachments/assets/ff8d2f9d-6d2d-4bdc-9b21-7d0fffeaea9c',
    description: 'Ambiente acolhedor e familiar para o seu animal.',
    detail: 'Retratos de saúde e alegria trazidos pelo atendimento personalizado em casa.'
  },
  {
    title: 'Atendimento domiciliar',
    icon: Home,
    image: 'https://github.com/user-attachments/assets/1030c7e5-29a7-4669-884d-1d040d8dfde4',
    description: 'Consultas no conforto do lar com todo carinho.',
    detail: 'Visitas cuidadosas que reduzem a ansiedade do pet e deixam o tutor mais tranquilo.'
  },
  {
    title: 'Vacinação',
    icon: ImagePlus,
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=600&q=80',
    description: 'Proteção responsável e segura para o seu pet.',
    detail: 'Cobertura vacinal com orientação preventiva e registro digital organizado.'
  },
  {
    title: 'Carinho e cuidado',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?auto=format&fit=crop&w=600&q=80',
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
    <section id="galeria" className="relative overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.12]"
        style={{
          backgroundImage: 'url(/pet-pattern.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '320px 320px',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mb-12 mx-auto max-w-2xl text-center"
          variants={headingContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua">Galeria</motion.p>
          <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Momentos de cuidado, carinho e tranquilidade nos lares cariocas.
          </motion.h2>
        </motion.div>
        <motion.div
          className="grid gap-6 grid-cols-2 xl:grid-cols-4"
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {gallery.map((item, index) => (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] bg-white text-left shadow-soft"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-gradient-to-br from-aqua/15 via-white to-sand/25 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white text-aqua shadow-sm transition duration-300 group-hover:scale-105">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
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
              <motion.div
                className="mt-8 space-y-6"
                variants={modalContent}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={modalItem} className="overflow-hidden rounded-[1.75rem]">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="h-64 w-full object-cover"
                  />
                </motion.div>
                <motion.div variants={modalItem} className="rounded-[1.75rem] bg-slate-100 p-8">
                  <p className="text-lg leading-8 text-slate-700">{activeItem.detail}</p>
                </motion.div>
                <motion.div variants={modalItem} className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={getWhatsAppLink(`Olá Dra. Fabi Cristine, vi na galeria sobre "${activeItem.title}" e gostaria de agendar um atendimento domiciliar.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-3xl bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-600 active:scale-95"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Agendar via WhatsApp
                  </a>
                  <span className="inline-flex items-center justify-center rounded-3xl bg-slate-50 px-4 py-3 text-sm text-slate-500">
                    Clique fora para fechar ou use o botão acima.
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
