import { Instagram, Phone, Twitter, Youtube } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants/contact';

export function Footer() {
  const socialIcons = {
    Instagram,
    Twitter,
    YouTube: Youtube
  };

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua">Dra. Fabi Cristine Veterinária</p>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Atendimento domiciliar, vacinação e acompanhamento veterinário para cães e gatos no Rio de Janeiro.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
          <div className="space-y-2">
            <p className="font-semibold text-slate-900">WhatsApp</p>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-slate-900"
            >
              <Phone className="h-4 w-4" /> {CONTACT_INFO.whatsappNumber}
            </a>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-slate-900">Localização</p>
            <p>{CONTACT_INFO.location}</p>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-slate-900">Redes sociais</p>
            <div className="flex items-center gap-3 text-slate-600">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.name as keyof typeof socialIcons];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="hover:text-slate-900"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Dra. Fabi Cristine Veterinária. Todos os direitos reservados.
      </div>
    </footer>
  );
}
