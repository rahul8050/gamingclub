
import React from 'react';
import { Users, Clock, Zap, Ticket, ChevronRight } from 'lucide-react';

interface PricingProps {
  onViewAllClick?: () => void;
}

const PricingItem: React.FC<{ label: string; hr: string; half: string; icon: React.ReactNode; color: 'blue' | 'green' }> = ({ label, hr, half, icon, color }) => (
  <div className={`glass p-6 rounded-lg border-l-4 ${color === 'blue' ? 'border-neon-blue' : 'border-neon-green'} relative overflow-hidden`}>
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-white/5 rounded-lg text-white">
        {icon}
      </div>
      <span className="font-orbitron font-black text-white/5 text-4xl absolute -right-2 top-0 select-none">
        {label[0]}
      </span>
    </div>
    <h4 className="font-orbitron font-bold text-xl text-white mb-4">{label}</h4>
    <div className="space-y-4">
      <div className="flex justify-between items-center pb-3 border-b border-white/5">
        <span className="text-gray-400 text-sm">60 Minutes</span>
        <span className="font-orbitron font-bold text-white text-xl">₹{hr}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm">30 Minutes</span>
        <span className="font-orbitron font-bold text-white text-xl">₹{half}</span>
      </div>
    </div>
  </div>
);

const Pricing: React.FC<PricingProps> = ({ onViewAllClick }) => {
  return (
    <section id="pricing" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-black mb-4 uppercase">
            Pricing <span className="neon-blue">Plans</span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto mb-4"></div>
          <p className="text-gray-500 font-orbitron text-[10px] uppercase tracking-[0.3em]">Affordable Pro Gaming for Everyone</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PricingItem 
            label="1 Player" 
            hr="90" 
            half="50" 
            icon={<Clock className="w-6 h-6" />} 
            color="blue"
          />
          <PricingItem 
            label="2 Players" 
            hr="80" 
            half="50" 
            icon={<Users className="w-6 h-6" />} 
            color="green"
          />
          <PricingItem 
            label="3/4 Players" 
            hr="75" 
            half="40" 
            icon={<Users className="w-6 h-6" />} 
            color="blue"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-neon-blue/20 to-transparent p-1 rounded-lg">
            <div className="bg-[#0a0a0a] p-8 rounded-lg flex flex-col h-full border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <Ticket className="text-neon-blue w-8 h-8" />
                <h3 className="font-orbitron font-black text-2xl">MEMBERSHIP PASSES</h3>
              </div>
              <div className="space-y-6 flex-grow">
                <div className="flex justify-between items-center p-4 rounded-md border border-neon-blue/30 bg-neon-blue/5">
                  <div>
                    <p className="font-orbitron font-bold text-white">Full Day Pass (24h)</p>
                    <p className="text-xs text-gray-400">Non-stop extreme gaming</p>
                  </div>
                  <span className="text-3xl font-orbitron font-black text-neon-blue">₹1800</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-md border border-white/10">
                  <div>
                    <p className="font-orbitron font-bold text-white">Half Day Pass (12h)</p>
                    <p className="text-xs text-gray-400">Power gaming session</p>
                  </div>
                  <span className="text-3xl font-orbitron font-black text-white">₹1000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-neon-green/20 to-transparent p-1 rounded-lg">
            <div className="bg-[#0a0a0a] p-8 rounded-lg flex flex-col h-full border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-neon-green w-8 h-8" />
                <h3 className="font-orbitron font-black text-2xl">POOL & MORE</h3>
              </div>
              <div className="space-y-6 flex-grow">
                <div className="flex justify-between items-center p-4 rounded-md border border-neon-green/30 bg-neon-green/5">
                  <div>
                    <p className="font-orbitron font-bold text-white">Professional Pool Table</p>
                    <p className="text-xs text-gray-400">Per 15 Minute Slot</p>
                  </div>
                  <span className="text-3xl font-orbitron font-black text-neon-green">₹30</span>
                </div>
                <div className="p-4 rounded-md border border-white/10 italic text-sm text-gray-400">
                  * Refreshments and snacks available separately at the lounge.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onViewAllClick}
            className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-neon-blue hover:text-neon-blue text-white px-10 py-4 rounded-sm font-orbitron font-black text-sm uppercase tracking-[0.2em] transition-all group"
          >
            VIEW ALL PLANS & DETAILS <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
