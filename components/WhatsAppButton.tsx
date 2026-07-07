import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/254769622996?text=Hi%20PragDev!%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20a%20website%20for%20my%20business."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PragDev on WhatsApp"
      className="fixed bottom-6 right-6 z-[999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </Link>
  );
}