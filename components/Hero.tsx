
import React from 'react';
import { ChevronRight, Zap, Monitor, Headphones, Image as ImageIcon, MessageCircle } from 'lucide-react';

interface HeroProps {
  onPricingClick?: () => void;
  onGalleryClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPricingClick, onGalleryClick }) => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/5 text-neon-green text-xs font-bold font-orbitron mb-6 animate-pulse">
              <Zap className="w-3 h-3" /> NOW OPEN IN KAITHAL
            </div>
            
            <h1 className="text-5xl md:text-7xl font-orbitron font-black leading-none mb-6 uppercase">
              THE ULTIMATE <br />
              <span className="neon-blue">ARENA</span> <br />
              FOR PRO PLAY
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Experience next-gen performance with <span className="text-white font-bold">PS5</span>, immersion like never before on <span className="text-white font-bold">VR2</span>, and stunning <span className="text-white font-bold">4K Graphics</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/14163185862"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-neon-blue text-black px-8 py-4 rounded-sm font-orbitron font-extrabold tracking-tighter hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)]"
              >
                WHATSAPP TO BOOK <MessageCircle className="w-5 h-5" />
              </a>
                
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Monitor className="text-neon-blue w-6 h-6" />
                <span className="text-xs font-orbitron text-gray-400 uppercase tracking-widest">4K Ultra HD</span>
              </div>
              <div className="flex items-center gap-3">
                <Headphones className="text-neon-green w-6 h-6" />
                <span className="text-xs font-orbitron text-gray-400 uppercase tracking-widest">3D Audio</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="text-neon-blue w-6 h-6" />
                <span className="text-xs font-orbitron text-gray-400 uppercase tracking-widest">Low Latency</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 scale-110">
              <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070" 
                  alt="Gaming Club Kaithal Pro Setup" 
                  className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-transparent pointer-events-none"></div>
              </div>
             
            </div>
            {/* Background glowing rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
