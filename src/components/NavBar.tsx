import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, MessageSquare, X } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../constants/contact';

const navLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' }
];

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.whatsappBookingMessage);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/60 bg-white/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
          <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-aqua/15 shadow-soft overflow-hidden">
            <img
              src="https://github.com/user-attachments/assets/86cb0704-f28a-4b9b-b9f8-a1bd2419b742"
              alt="Logo Veterinária Fabi Cristine"
              className="h-8 w-8 object-contain"
            />
          </div>
          Dra. Fabi Cristine
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-slate-800 lg:inline-flex"
          >
            <MessageSquare className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <nav className="space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
            >
              <MessageSquare className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
