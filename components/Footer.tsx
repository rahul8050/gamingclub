
import React from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Gamepad2 } from 'lucide-react';
import { ContactDetails } from '../types';

interface FooterProps {
  onAboutClick?: () => void;
  contactInfo: ContactDetails;
}

const Footer: React.FC<FooterProps> = ({ onAboutClick, contactInfo }) => {
  return (
    <footer id="about" className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-neon-blue p-2 rounded-lg"><Gamepad2 className="text-black w-6 h-6" /></div>
              <span className="font-orbitron font-bold text-xl">GAMING CLUB <span className="neon-blue">KAITHAL</span></span>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">Kaithal's premier gaming hub featuring the latest PS5, VR2, and professional pool tables.</p>
            <div className="flex gap-4">
              <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-neon-blue hover:text-black transition-all"><Instagram className="w-5 h-5" /></a>
              <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-neon-green hover:text-black transition-all"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-orbitron font-bold text-white mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><MapPin className="text-neon-blue w-5 h-5 shrink-0" /><a href="https://maps.app.goo.gl/ZM1Fr7G1u83bsgFKA" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-neon-blue transition-colors leading-relaxed">{contactInfo.address}</a></li>
              <li className="flex items-center gap-3"><Phone className="text-neon-blue w-5 h-5 shrink-0" /><a href={`tel:${contactInfo.phone}`} className="text-gray-400 text-sm hover:text-neon-blue transition-colors tracking-widest">{contactInfo.phone}</a></li>
              <li className="flex items-center gap-3"><Mail className="text-neon-blue w-5 h-5 shrink-0" /><a href={`mailto:${contactInfo.email}`} className="text-gray-400 text-sm hover:text-neon-blue transition-colors">{contactInfo.email}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-orbitron font-bold text-white mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={(e) => { e.preventDefault(); onAboutClick?.(); }} className="text-gray-400 hover:text-neon-blue transition-colors text-sm text-left">About Us</button></li>
              <li><a href="https://wa.me/14163185862" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors text-sm text-left block">Contact WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 text-center"><p className="text-gray-500 text-xs font-medium uppercase tracking-widest">&copy; {new Date().getFullYear()} Gaming Club Kaithal. All Rights Reserved.</p></div>
      </div>
    </footer>
  );
};

export default Footer;
