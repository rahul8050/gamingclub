
import React, { useEffect } from 'react';
import { ArrowLeft, MapPin, Gamepad2, Info, Star, Target, Users, Monitor, Headphones } from 'lucide-react';
import { ContactDetails } from '../types';

interface AboutPageProps {
  onBack: () => void;
  contactInfo: ContactDetails;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack, contactInfo }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#050505] overflow-x-hidden pb-20">
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=2070")',
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors font-orbitron text-sm uppercase mb-12 group"><ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />Back to Home</button>

        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-neon-blue rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,229,255,0.4)]"><Gamepad2 className="w-10 h-10 text-black" /></div>
          <h1 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-4 uppercase">ABOUT <span className="neon-blue">GAMING CLUB</span></h1>
          <p className="text-gray-400 font-orbitron tracking-[0.3em] text-[10px] md:text-xs">PREMIUM GAMING ARENA KAITHAL</p>
        </div>

        <div className="glass p-8 rounded-3xl mb-12 border border-white/10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-neon-blue p-1 bg-black/50 shrink-0 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
            <img src="../public/images/fifa23.jpg" alt="Owner" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-orbitron font-black text-white uppercase tracking-tighter mb-2">ARSHWARAICH</h2>
            <p className="text-neon-blue font-orbitron font-bold text-xs uppercase tracking-widest mb-4">Founder & Visionary</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">Building the ultimate community space for gamers in Kaithal. Our mission is to provide top-tier hardware and a competitive atmosphere for everyone.</p>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl mb-12 border-2 border-neon-green/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><MapPin className="w-24 h-24 text-neon-green" /></div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-neon-green/10 p-4 rounded-xl text-neon-green"><MapPin className="w-10 h-10" /></div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-orbitron font-black text-white uppercase mb-1">Find Us Here</h3>
              <p className="text-gray-300 font-medium tracking-wide">{contactInfo.address}</p>
            </div>
            <a href="https://maps.app.goo.gl/ZM1Fr7G1u83bsgFKA" target="_blank" rel="noopener noreferrer" className="md:ml-auto px-6 py-3 bg-neon-green text-black font-orbitron font-black text-xs uppercase tracking-widest rounded-lg hover:brightness-110 transition-all shadow-[0_0_15px_rgba(57,255,20,0.3)]">GET DIRECTIONS</a>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-3xl border border-white/10">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl md:text-4xl font-orbitron font-black text-white uppercase mb-8 border-b border-white/10 pb-6">Welcome to the <span className="neon-blue">ultimate gaming destination</span> in Kaithal!</h2>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">At Gaming Club Kaithal, we believe gaming is more than just a hobby—it’s an experience. We have built a state-of-the-art facility designed for gamers who crave the best technology and a vibrant community atmosphere.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6"><Star className="text-neon-blue w-6 h-6" /><h3 className="text-xl font-orbitron font-black text-white uppercase m-0">Why Choose Us?</h3></div>
                <ul className="space-y-6 m-0 p-0 list-none">
                  {[
                    { title: "Next-Gen Consoles", desc: "Multiple PS5 setups.", icon: <Monitor className="w-5 h-5" /> },
                    { title: "Virtual Reality", desc: "VR 2 stations.", icon: <Headphones className="w-5 h-5" /> },
                    { title: "Classic Entertainment", desc: "Professional Pool Table.", icon: <Target className="w-5 h-5" /> }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="text-neon-blue shrink-0 mt-1 bg-neon-blue/10 p-2 rounded-lg group-hover:bg-neon-blue group-hover:text-black transition-all">{item.icon}</div>
                      <div><strong className="block text-white font-orbitron text-xs uppercase tracking-widest mb-1">{item.title}</strong><span className="text-gray-400 text-xs">{item.desc}</span></div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-6"><Target className="text-neon-green w-6 h-6" /><h3 className="text-xl font-orbitron font-black text-white uppercase m-0">Our Mission</h3></div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/5 flex-grow group hover:border-neon-green/30 transition-all">
                  <p className="text-gray-200 leading-relaxed italic text-lg">"Our mission is to provide a world-class gaming environment where players can compete, socialize, and level up."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
