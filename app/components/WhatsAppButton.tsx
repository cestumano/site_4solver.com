import { contact } from '../data/site';
import Icon from './Icon';

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a 4Solver pelo WhatsApp"
    >
      <Icon name="Send" size={22} />
      <span>WhatsApp</span>
    </a>
  );
}
