export const businessContact = {
  displayPhone: "+234 916 305 2838",
  phoneE164: "+2349163052838",
  whatsappNumber: "2349163052838",
  whatsappMessage:
    "Hello P.D. Interior Concepts, I am interested in your interior decoration and furnishing services. I would like to make an enquiry.",
  email: "pdinteriorconcepts@gmail.com",
  address: "MB 105, Abraham Adesanya Housing Estate, Ajah, Lagos, Nigeria.",
} as const;

export function createWhatsAppUrl(): string {
  return `https://wa.me/${businessContact.whatsappNumber}?text=${encodeURIComponent(businessContact.whatsappMessage)}`;
}