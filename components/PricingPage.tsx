
import React, { useEffect } from 'react';
import { ArrowLeft, Wallet, Clock, User, Users, Star, Zap, Gamepad2 } from 'lucide-react';

interface PricingPageProps {
  onBack: () => void;
  pricing: { title: string; hour: string; half: string }[];
}

const PricingPage: React.FC<PricingPageProps> = ({ onBack, pricing }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const icons = [
    <User className="w-6 h-6" />,
    <Users className="w-6 h-6" />,
    <Users className="w-6 h-6" />,
  ];

  return (
    <div className="min-h-screen relative bg-[#050505] overflow-x-hidden pb-20">
      <div 
        className="fixed inset-0 z-0 opacity-40 pointer-events-none brightness-[0.3]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors font-orbitron text-sm uppercase mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-neon-blue rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,229,255,0.4)]">
            <Wallet className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-4 uppercase">BOOKING <span className="neon-blue">& SLOTS</span></h1>
          <p className="text-gray-400 font-orbitron tracking-[0.3em] text-[10px] md:text-xs">PREMIUM GAMING RATES FOR ALL TITLES</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricing.slice(0, 3).map((item, idx) => (
            <div key={idx} className={`glass p-8 rounded-2xl border-t-4 ${idx % 2 === 0 ? 'border-neon-blue' : 'border-neon-green'} hover:scale-[1.02] transition-all`}>
              <div className="flex justify-between items-center mb-8">
                <div className={`p-4 rounded-xl ${idx % 2 === 0 ? 'bg-neon-blue/10 text-neon-blue' : 'bg-neon-green/10 text-neon-green'}`}>
                  {icons[idx]}
                </div>
                <span className="font-orbitron font-black text-white/5 text-5xl select-none">{idx === 2 ? '4P' : (idx + 1) + 'P'}</span>
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6 uppercase">{item.title}</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400 font-orbitron text-xs tracking-widest uppercase">1 Hour</span>
                  </div>
                  <span className={`text-2xl font-orbitron font-black ${idx % 2 === 0 ? 'text-neon-blue' : 'text-neon-green'}`}>Rs {item.hour}</span>
                </div>
                <div className="h-px bg-white/5 w-full"></div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400 font-orbitron text-xs tracking-widest uppercase">30 Minutes</span>
                  </div>
                  <span className="text-xl font-orbitron font-black text-white">Rs {item.half}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Star className="w-24 h-24 text-neon-blue" /></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4"><Zap className="w-5 h-5 text-neon-blue" /><span className="text-xs font-orbitron font-black text-neon-blue tracking-tighter uppercase">Unlimited Sessions</span></div>
                <div className="flex justify-between items-end mb-4">
                  <div><h3 className="text-3xl font-orbitron font-black text-white">{pricing[3]?.title}</h3><p className="text-gray-400 font-orbitron text-xs uppercase tracking-widest mt-1">24 Hours Non-Stop</p></div>
                  <span className="text-4xl font-orbitron font-black text-white">Rs {pricing[3]?.hour}</span>
                </div>
                <div className="h-1 bg-neon-blue/20 w-full rounded-full overflow-hidden"><div className="h-full bg-neon-blue w-full"></div></div>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4"><Zap className="w-5 h-5 text-gray-400" /><span className="text-xs font-orbitron font-black text-gray-400 tracking-tighter uppercase">Power Session</span></div>
                <div className="flex justify-between items-end">
                  <div><h3 className="text-3xl font-orbitron font-black text-white">Half Pass</h3><p className="text-gray-400 font-orbitron text-xs uppercase tracking-widest mt-1">12 Hours Straight</p></div>
                  <span className="text-4xl font-orbitron font-black text-white">Rs {pricing[3]?.half}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="glass p-10 rounded-2xl border-2 border-neon-green/40 flex-grow flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-neon-green/5 rounded-full blur-3xl group-hover:bg-neon-green/10 transition-all"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-neon-green p-4 rounded-xl"><Gamepad2 className="w-8 h-8 text-black" /></div>
                  <div><h3 className="text-3xl font-orbitron font-black text-white uppercase tracking-tighter leading-none">{pricing[4]?.title}</h3><p className="text-neon-green font-orbitron font-bold text-xs uppercase tracking-[0.2em] mt-2">Professional Grade</p></div>
                </div>
                <div className="flex items-baseline gap-2 mb-6"><span className="text-6xl font-orbitron font-black text-white">Rs {pricing[4]?.hour}</span><span className="text-xl font-orbitron font-bold text-gray-500 uppercase tracking-widest">/ 15 Min</span></div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10"><p className="text-xs text-gray-400 font-orbitron uppercase tracking-widest leading-loose">* Rates applicable to all PlayStation 5 consoles and VR2 stations across our entire library.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
