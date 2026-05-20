export const CONTACT_INFO = {
  whatsappNumber: '(21) 97002-3845',
  whatsappUrl: 'https://wa.me/5521970023845',
  whatsappBookingMessage:
    'Olá Dra. Fabi Cristine, gostaria de agendar uma consulta para meu pet.',
  whatsappInfoMessage:
    'Olá Dra. Fabi Cristine, gostaria de saber mais sobre seu atendimento domiciliar.',
  email: 'veterinariafabiola@gmail.com',
  location: 'Rio de Janeiro, RJ'
};

export const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://instagram.com' },
  { name: 'Twitter', href: 'https://x.com' },
  { name: 'YouTube', href: 'https://youtube.com' }
];

export function getWhatsAppLink(message: string) {
  return `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
