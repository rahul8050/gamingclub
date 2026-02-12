
import React, { useEffect } from 'react';
import { ArrowLeft, Gift, Trophy, DollarSign, Cake, Info, Star } from 'lucide-react';
import { CASH_REWARDS } from '../constants';

interface OffersPageProps {
  onBack: () => void;
}

const OffersPage: React.FC<OffersPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#050505] overflow-x-hidden pb-20">
      {/* Background Image: Children jumping with joy / celebrating rewards */}
      <div 
        className="fixed inset-0 z-0 opacity-40 pointer-events-none brightness-[0.2]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1571210862729-78a52d3779a2?auto=format&fit=crop&q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Gradient Overlay */}
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
          <div className="inline-block p-4 bg-neon-green rounded-2xl mb-6 shadow-[0_0_20px_rgba(57,255,20,0.4)]">
            <Gift className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-4 uppercase">
            EXCLUSIVE <span className="neon-green">OFFERS</span>
          </h1>
          <p className="text-gray-400 font-orbitron tracking-[0.3em] text-[10px] md:text-xs">GET REWARDED FOR YOUR SKILLS</p>
        </div>

        {/* Free Sessions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass p-8 rounded-2xl border-l-8 border-neon-blue group hover:scale-[1.02] transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-neon-blue/10 rounded-xl">
                <Cake className="w-8 h-8 text-neon-blue" />
              </div>
              <h3 className="text-2xl font-orbitron font-black text-white uppercase tracking-tighter">Birthday Freebie</h3>
            </div>
            <p className="text-5xl font-orbitron font-black text-white mb-4">30 MIN <span className="text-neon-blue">FREE</span></p>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <Info className="w-5 h-5 text-neon-blue shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400 font-medium leading-relaxed uppercase tracking-widest">
                Physical Aadhar Card mandatory for verification on your actual birthday.
              </p>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl border-l-8 border-neon-green group hover:scale-[1.02] transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-neon-green/10 rounded-xl">
                <Trophy className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-2xl font-orbitron font-black text-white uppercase tracking-tighter">Completion Bonus</h3>
            </div>
            <p className="text-5xl font-orbitron font-black text-white mb-4">30 MIN <span className="text-neon-green">FREE</span></p>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <Star className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400 font-medium leading-relaxed uppercase tracking-widest">
                Get 30 minutes free time instantly upon full completion of any story mode game.
              </p>
            </div>
          </div>
        </div>

        {/* Play to Earn Section */}
        <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <DollarSign className="w-64 h-64 text-neon-green" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-neon-green p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-black" />
              </div>
              <h2 className="text-3xl md:text-5xl font-orbitron font-black text-white uppercase">
                EARN <span className="neon-green">CASH</span> REWARDS
              </h2>
            </div>

            <p className="text-gray-400 font-orbitron text-sm tracking-widest uppercase mb-12 border-b border-white/10 pb-4">
              Finish these legendary titles and get paid
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CASH_REWARDS.map((reward, idx) => (
                <div key={idx} className="flex justify-between items-center p-6 bg-black/40 rounded-xl border border-white/5 hover:border-neon-green/30 transition-all group">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-orbitron text-gray-500 uppercase tracking-widest mb-1">STORY MODE</span>
                    <span className="font-orbitron font-bold text-white group-hover:text-neon-green transition-colors">{reward.game}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-black font-orbitron text-neon-green tracking-tighter">PAYOUT</span>
                    <span className="text-2xl font-orbitron font-black text-white">Rs {reward.amount}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-8 bg-neon-green/5 border border-neon-green/20 rounded-2xl">
              <h4 className="font-orbitron font-black text-neon-green text-xl mb-4 uppercase">HOW IT WORKS</h4>
              <ul className="space-y-4">
                {[
                  "Inform our staff before starting a new story campaign.",
                  "Progress is tracked via console cloud saves/trophies.",
                  "Cash rewards are handed over immediately upon verification of final credits.",
                  "One reward per customer per game title."
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 text-gray-300 text-sm font-medium">
                    <span className="text-neon-green font-orbitron font-black">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
