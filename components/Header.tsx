
import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, Phone, MessageCircle, UserCircle } from 'lucide-react';

interface HeaderProps {
  onGamesClick?: () => void;
  onHomeClick?: () => void;
  onPricingClick?: () => void;
  onOffersClick?: () => void;
  onAboutClick?: () => void;
  onGalleryClick?: () => void;
  onOwnerClick?: () => void;
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  onGamesClick, 
  onHomeClick, 
  onPricingClick, 
  onOffersClick, 
  onAboutClick,
  onGalleryClick,
  onOwnerClick,
  isLoggedIn
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', onClick: onHomeClick },
    { name: 'Games', href: '#games', onClick: onGamesClick },
    { name: 'Pricing', href: '#pricing', onClick: onPricingClick },
    { name: 'Offers', href: '#offers', onClick: onOffersClick },
    { name: 'About Us', href: '#about', onClick: onAboutClick },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: any) => {
    if (link.onClick) {
      e.preventDefault();
      link.onClick();
    } else if (link.href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (onHomeClick) onHomeClick();
    }
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onHomeClick) {
      onHomeClick();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-neon-blue p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Gamepad2 className="text-black w-6 h-6" />
            </div>
            <span className="font-orbitron font-bold text-xl tracking-tighter uppercase">
              GAMING CLUB <span className="neon-blue">KAITHAL</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className="text-gray-300 hover:text-[#00e5ff] font-medium transition-colors text-sm uppercase tracking-widest font-orbitron"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="h-6 w-px bg-white/10"></div>
            
            <div className="flex items-center gap-4">
              <a 
                href="tel:8295255862" 
                className="flex items-center gap-2 text-white hover:text-neon-blue transition-colors group"
                title="Call 8295255862"
              >
                <div className="bg-white/5 p-2 rounded-full group-hover:bg-neon-blue/10">
                  <Phone className="w-4 h-4 text-neon-blue" />
                </div>
                <span className="font-orbitron text-[10px] font-bold">8295255862</span>
              </a>
              <a 
                href="https://wa.me/14163185862" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-neon-green transition-colors group"
                title="WhatsApp +1 (416) 318-5862"
              >
                <div className="bg-white/5 p-2 rounded-full group-hover:bg-neon-green/10">
                  <MessageCircle className="w-4 h-4 text-neon-green" />
                </div>
                <span className="font-orbitron text-[10px] font-bold">+1(416)3185862</span>
              </a>
            </div>

           
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={onOwnerClick}
              className={`p-2 rounded-lg transition-all ${isLoggedIn ? 'text-neon-green' : 'text-gray-400'}`}
            >
              <UserCircle className="w-6 h-6" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2" aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass absolute top-full left-0 w-full animate-in fade-in slide-in-from-top-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-gray-300 hover:text-[#00e5ff] block px-3 py-4 text-base font-orbitron font-medium border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:8295255862" 
              className="text-neon-blue flex items-center gap-3 px-3 py-4 text-base font-orbitron font-medium border-b border-white/5"
            >
              <Phone className="w-5 h-5" /> CALL: 8295255862
            </a>
            <a 
              href="https://wa.me/14163185862" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-green flex items-center gap-3 px-3 py-4 text-base font-orbitron font-medium border-b border-white/5"
            >
              <MessageCircle className="w-5 h-5" /> WHATSAPP US
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
