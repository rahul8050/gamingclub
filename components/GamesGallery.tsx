
import React from 'react';
import { GAMES, COMING_SOON } from '../constants';

const GameCard: React.FC<{ title: string; imageUrl: string; isComingSoon?: boolean }> = ({ title, imageUrl, isComingSoon }) => (
  <div className="group relative overflow-hidden rounded-md border border-white/5 bg-[#121212] transition-all hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]">
    <div className="aspect-[16/9] overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
    <div className="absolute bottom-0 left-0 p-4 w-full">
      {isComingSoon && (
        <span className="mb-2 inline-block bg-neon-green text-black px-2 py-0.5 rounded-sm text-[10px] font-black font-orbitron">
          COMING SOON
        </span>
      )}
      <h3 className="font-orbitron font-bold text-lg text-white group-hover:neon-blue transition-colors">
        {title}
      </h3>
    </div>
  </div>
);

const GamesGallery: React.FC = () => {
  return (
    <section id="games" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-black mb-4">
            LIBRARY <span className="neon-blue">EXPLORER</span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our massive catalog of AAA titles running on the latest hardware. 
            All games are in stunning 4K resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAMES.map((game, idx) => (
            <GameCard key={idx} {...game} />
          ))}
        </div>

        <div className="mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-4xl font-orbitron font-black shrink-0">
              COMING <span className="neon-green">SOON</span>
            </h2>
            <div className="h-px bg-white/10 w-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-80">
            {COMING_SOON.map((game, idx) => (
              <GameCard key={idx} {...game} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesGallery;
