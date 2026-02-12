
import React from 'react';
import { DollarSign, Cake, Info } from 'lucide-react';
import { CASH_REWARDS } from '../constants';

const Rewards: React.FC = () => {
  return (
    <section id="offers" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <DollarSign className="text-neon-green w-10 h-10" />
              <h2 className="text-3xl md:text-5xl font-orbitron font-black uppercase tracking-tighter">
                Earn <span className="neon-green">CASH</span> Rewards
              </h2>
            </div>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              We reward our community! Complete designated titles in our club and earn actual cash rewards 
              directly to your wallet. It's time to get paid for your skills.
            </p>

            <div className="space-y-4">
              {CASH_REWARDS.map((reward, idx) => (
                <div key={idx} className="flex justify-between items-center p-5 bg-white/5 rounded-lg border border-white/5 hover:border-neon-green/30 transition-colors group">
                  <span className="font-orbitron font-bold text-gray-200 group-hover:text-white">{reward.game}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-neon-green uppercase tracking-widest">Reward</span>
                    <span className="font-orbitron font-black text-xl text-white">₹{reward.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="glass p-10 rounded-2xl border-2 border-neon-blue relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-blue/10 rounded-full blur-2xl group-hover:bg-neon-blue/20 transition-all"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-block p-4 bg-neon-blue rounded-full mb-6">
                  <Cake className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-3xl font-orbitron font-black text-white mb-4 uppercase">
                  BIRTHDAY <span className="neon-blue">BONUS</span>
                </h3>
                <p className="text-5xl font-orbitron font-black text-white mb-6">30 MIN <span className="text-2xl text-neon-blue">FREE</span></p>
                
                <div className="bg-white/5 p-4 rounded-lg flex items-start gap-3 text-left">
                  <Info className="w-5 h-5 text-neon-blue shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">
                    Valid only on your actual birthday. A physical Aadhar Card is mandatory for verification. 
                    Valid for all active gaming consoles.
                  </p>
                </div>

                <button className="mt-8 w-full py-4 bg-neon-blue text-black font-orbitron font-black uppercase tracking-widest hover:brightness-110 transition-all rounded-sm">
                  REDEEM NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
