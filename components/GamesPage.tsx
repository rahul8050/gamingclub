
import React, { useEffect } from 'react';
import { ArrowLeft, Gamepad2 } from 'lucide-react';
import { GameCardProps } from '../types';

interface GamesPageProps {
  onBack: () => void;
  games: GameCardProps[];
}

const GamesPage: React.FC<GamesPageProps> = ({ onBack, games }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#050505] overflow-x-hidden pb-24">
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none grayscale brightness-50"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors font-orbitron text-sm uppercase mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-neon-blue rounded-2xl mb-6 shadow-[0_0_30px_rgba(0,229,255,0.3)]">
            <Gamepad2 className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-4">
            THE PRO <span className="neon-blue">LIBRARY</span>
          </h1>
          <p className="text-gray-400 font-orbitron tracking-widest text-xs">ULTRA 4K HDR GAMING TITLES</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-xl border border-white/10 glass bg-black/40 hover:border-neon-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,229,255,0.2)]"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={game.imageUrl} 
                  alt={game.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <div className="w-8 h-1 bg-neon-blue mb-3 group-hover:w-16 transition-all"></div>
                  <h3 className="font-orbitron font-bold text-lg text-white leading-tight">{game.title}</h3>
                  <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-black font-orbitron text-neon-green tracking-tighter">PS5 ENHANCED</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
