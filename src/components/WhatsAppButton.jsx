import { MessageCircle } from 'lucide-react';
import { whatsappLink, productEnquiryLink } from '../data/siteConfig.js';

// variant: solid | outline | light | floating. Pass `product` to include the product name in the message.
export default function WhatsAppButton({ product, label, variant = 'solid', className = '', message }) {
  const href = message ? whatsappLink(message) : product ? productEnquiryLink(product) : whatsappLink();
  const text = label ?? (product ? 'Enquire on WhatsApp' : 'WhatsApp enquiry');

  if (variant === 'floating') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hadge Jewellers on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center bg-[#1FA855] text-white shadow-lg transition-transform duration-300 hover:scale-105 rounded-full"
      >
        <MessageCircle size={26} />
      </a>
    );
  }
  const styles = { solid: 'btn-gold', outline: 'btn-outline', light: 'btn-outline-light' };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles[variant]} ${className}`}>
      <MessageCircle size={17} strokeWidth={1.6} />
      {text}
    </a>
  );
}
