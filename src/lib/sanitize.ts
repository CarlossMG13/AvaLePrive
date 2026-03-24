/**
 * Strips HTML tags, decodes common HTML entities, and trims whitespace.
 * Safe to use before building WhatsApp message strings.
 */
export function sanitizeText(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")          // strip HTML tags
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/[\u0000-\u001F\u007F]/g, "") // strip control characters
    .trim();
}

/**
 * Sanitizes all fields of the contact form.
 * Returns clean values ready to use in the WhatsApp message.
 */
export function sanitizeContactForm(raw: {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  guests: string;
  eventDate: string;
  details: string;
}) {
  return {
    fullName:    sanitizeText(raw.fullName).slice(0, 100),
    email:       sanitizeText(raw.email).slice(0, 150),
    phone:       sanitizeText(raw.phone).replace(/[^\d\s\+\-\(\)]/g, "").slice(0, 20),
    serviceType: sanitizeText(raw.serviceType).slice(0, 60),
    guests:      raw.guests.replace(/\D/g, "").slice(0, 4),
    eventDate:   sanitizeText(raw.eventDate).replace(/[^\d\/\-\s]/g, "").slice(0, 10),
    details:     sanitizeText(raw.details).slice(0, 600),
  };
}
