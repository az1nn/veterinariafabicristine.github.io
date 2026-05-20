export const CONTACT_INFO = {
  whatsappNumber: '(21) 99999-9999',
  whatsappUrl: 'https://wa.me/5521999999999',
  whatsappBookingMessage:
    'Olá Dra. Fabi Cristine, gostaria de agendar uma consulta para meu pet.',
  whatsappInfoMessage:
    'Olá Dra. Fabi Cristine, gostaria de saber mais sobre seu atendimento domiciliar.',
  email: 'contato@dra-fabi-cristine.com',
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
