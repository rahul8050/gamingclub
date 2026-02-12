
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import GamesPage from './components/GamesPage';
import PricingPage from './components/PricingPage';
import OffersPage from './components/OffersPage';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import OwnerLoginPage from './components/OwnerLoginPage';
import OwnerDashboard from './components/OwnerDashboard';
import { GAMES } from './constants';
import { ContactDetails } from './types';
import { Phone, MessageCircle } from 'lucide-react';

const ScrollingTicker: React.FC<{ offers: string[] }> = ({ offers }) => {
  return (
    <div className="fixed top-[72px] w-full z-40 bg-neon-green overflow-hidden py-1 shadow-[0_0_20px_rgba(57,255,20,0.4)]">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...offers, ...offers].map((offer, idx) => (
          <span key={idx} className="flex items-center mx-8">
            <span className="text-black font-orbitron font-black text-[10px] tracking-widest uppercase italic opacity-70">
              OFFER:
            </span>
            <span className="ml-3 text-black font-orbitron font-black text-[10px] tracking-widest uppercase">
              {offer}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

const ContactFloatingWidget: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a 
        href="https://wa.me/14163185862" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform flex items-center justify-center"
        title="WhatsApp Us"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a 
        href="tel:8295255862" 
        className="bg-neon-blue text-black p-4 rounded-full shadow-[0_4px_15px_rgba(0,229,255,0.4)] hover:scale-110 transition-transform flex items-center justify-center"
        title="Call Us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'games' | 'pricing' | 'offers' | 'about' | 'gallery' | 'owner-login' | 'owner-dashboard'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Global State for editable content
  const [offers, setOffers] = useState<string[]>([
    "FREE 30 MINS ON YOUR BIRTHDAY (AADHAR CARD REQUIRED)!",
    "EARN UP TO ₹400 CASH REWARDS FOR COMPLETING GAMES!",
    "PS5 & VR2 GAMING STARTING @ ₹90/HR!",
    "PROFESSIONAL POOL TABLES - JUST ₹30 PER 15 MINS!",
    "COMPLETION BONUS: FINISH A GAME AND GET 30 MINS FREE!",
    "NEW YEAR SPECIAL DEALS ON SNACKS & REFRESHMENTS!"
  ]);

  const [games, setGames] = useState(GAMES);
  const [galleryPhotos, setGalleryPhotos] = useState<string[]>(
    Array.from({ length: 20 }, (_, i) => `https://picsum.photos/seed/gck_interior_${i + 1}/800/600`)
  );
  
  const [contactInfo, setContactInfo] = useState<ContactDetails>({
    phone: "8295255862",
    email: "Naviwaraich786@gmail.com",
    address: "Opposite Jat School Gate Number 4, Karnal Road, 136027, Kaithal",
    instagram: "https://www.instagram.com/gamingclub_kaithal?igsh=Y3FsbnM2Y3FmenA4",
    whatsapp: "14163185862"
  });

  const [pricing, setPricing] = useState([
    { title: "1 Player", hour: "90", half: "50" },
    { title: "2 Players", hour: "80", half: "50" },
    { title: "3/4 Players", hour: "75", half: "40" },
    { title: "Full Pass", hour: "1800", half: "1000" }, // hour = 24h, half = 12h
    { title: "Pool Table", hour: "30", half: "30" } // price per 15 min
  ]);

  const goToHome = () => setCurrentPage('home');
  const goToGames = () => setCurrentPage('games');
  const goToPricing = () => setCurrentPage('pricing');
  const goToOffers = () => setCurrentPage('offers');
  const goToAbout = () => setCurrentPage('about');
  const goToGallery = () => setCurrentPage('gallery');
  const goToOwnerLogin = () => {
    if (isLoggedIn) setCurrentPage('owner-dashboard');
    else setCurrentPage('owner-login');
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage('owner-dashboard');
  };

  // Proper conditional rendering for sub-pages
  if (currentPage === 'games') return <GamesPage onBack={goToHome} games={games} />;
  if (currentPage === 'pricing') return <PricingPage onBack={goToHome} pricing={pricing} />;
  if (currentPage === 'offers') return <OffersPage onBack={goToHome} />;
  if (currentPage === 'about') return <AboutPage onBack={goToHome} contactInfo={contactInfo} />;
  if (currentPage === 'gallery') return <GalleryPage onBack={goToHome} photos={galleryPhotos} />;
  if (currentPage === 'owner-login') return <OwnerLoginPage onBack={goToHome} onLoginSuccess={handleLoginSuccess} />;
  if (currentPage === 'owner-dashboard') return (
    <OwnerDashboard 
      onBack={goToHome} 
      offers={offers} setOffers={setOffers}
      games={games} setGames={setGames}
      pricing={pricing} setPricing={setPricing}
      contactInfo={contactInfo} setContactInfo={setContactInfo}
      galleryPhotos={galleryPhotos} setGalleryPhotos={setGalleryPhotos}
      onLogout={() => { setIsLoggedIn(false); goToHome(); }}
    />
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <Header 
        onGamesClick={goToGames} 
        onHomeClick={goToHome} 
        onPricingClick={goToPricing} 
        onOffersClick={goToOffers} 
        onAboutClick={goToAbout}
        onGalleryClick={goToGallery}
        onOwnerClick={goToOwnerLogin}
        isLoggedIn={isLoggedIn}
      />
      <ScrollingTicker offers={offers} />
      <main className="flex-grow">
        <Hero onPricingClick={goToPricing} onGalleryClick={goToGallery} />
      </main>
      <ContactFloatingWidget />
      <Footer onAboutClick={goToAbout} contactInfo={contactInfo} />
    </div>
  );
};

export default App;
