
import React, { useEffect } from 'react';
import { ArrowLeft, Image as ImageIcon, Sparkles } from 'lucide-react';

interface GalleryPageProps {
  onBack: () => void;
  photos: string[];
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onBack, photos }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#050505] overflow-x-hidden pb-24">
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-[#0a0a0a]"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors font-orbitron text-sm uppercase mb-12 group"><ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />Back to Home</button>
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-neon-blue rounded-2xl mb-6 shadow-[0_0_30px_rgba(0,229,255,0.4)]"><ImageIcon className="w-10 h-10 text-black" /></div>
          <h1 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-4 uppercase tracking-tighter">CLUB <span className="neon-blue">INTERIORS</span></h1>
          <p className="text-gray-400 font-orbitron tracking-[0.3em] text-[10px] md:text-xs">TAKE A VIRTUAL TOUR OF THE ARENA</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {photos.map((photo, i) => (
            <div key={i} className="relative group overflow-hidden rounded-2xl border border-white/10 glass break-inside-avoid hover:border-neon-blue transition-all duration-500">
              <img src={photo} alt={`Scene ${i + 1}`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <h3 className="text-white font-orbitron font-bold text-sm uppercase tracking-widest">SCENE {i + 1}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
