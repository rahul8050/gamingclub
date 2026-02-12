
import React, { useState } from 'react';
import { ArrowLeft, Save, Plus, Trash2, LayoutDashboard, Zap, Wallet, Gamepad2, ImageIcon, Phone, LogOut } from 'lucide-react';
import { ContactDetails, GameCardProps } from '../types';

interface OwnerDashboardProps {
  onBack: () => void;
  offers: string[];
  setOffers: (o: string[]) => void;
  games: GameCardProps[];
  setGames: (g: GameCardProps[]) => void;
  pricing: any[];
  setPricing: (p: any[]) => void;
  contactInfo: ContactDetails;
  setContactInfo: (c: ContactDetails) => void;
  galleryPhotos: string[];
  setGalleryPhotos: (p: string[]) => void;
  onLogout: () => void;
}

const OwnerDashboard: React.FC<OwnerDashboardProps> = ({
  onBack,
  offers, setOffers,
  games, setGames,
  pricing, setPricing,
  contactInfo, setContactInfo,
  galleryPhotos, setGalleryPhotos,
  onLogout
}) => {
  const [activeTab, setActiveTab] = useState<'offers' | 'pricing' | 'games' | 'gallery' | 'contact'>('offers');
  const [newOffer, setNewOffer] = useState('');
  const [newGame, setNewGame] = useState({ title: '', imageUrl: '' });
  const [newPhoto, setNewPhoto] = useState('');

  const saveSuccess = () => {
    alert('Changes saved locally!');
  };

  const addOffer = () => {
    if (newOffer.trim()) {
      setOffers([...offers, newOffer]);
      setNewOffer('');
    }
  };

  const removeOffer = (index: number) => {
    setOffers(offers.filter((_, i) => i !== index));
  };

  const addGame = () => {
    if (newGame.title && newGame.imageUrl) {
      setGames([...games, { ...newGame }]);
      setNewGame({ title: '', imageUrl: '' });
    }
  };

  const removeGame = (title: string) => {
    setGames(games.filter(g => g.title !== title));
  };

  const addPhoto = () => {
    if (newPhoto.trim()) {
      setGalleryPhotos([newPhoto, ...galleryPhotos]);
      setNewPhoto('');
    }
  };

  const removePhoto = (url: string) => {
    setGalleryPhotos(galleryPhotos.filter(p => p !== url));
  };

  const inputStyles = "bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon-blue outline-none w-full text-sm";
  const labelStyles = "block text-[10px] font-orbitron text-gray-500 uppercase tracking-widest font-bold mb-2";

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-black border-r border-white/10 p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-neon-blue p-2 rounded-lg">
            <LayoutDashboard className="text-black w-5 h-5" />
          </div>
          <span className="font-orbitron font-black text-white text-sm uppercase tracking-tighter">CONTROL PANEL</span>
        </div>

        <nav className="space-y-2 flex-grow">
          {[
            { id: 'offers', label: 'Offer Line', icon: <Zap className="w-4 h-4" /> },
            { id: 'pricing', label: 'Prices', icon: <Wallet className="w-4 h-4" /> },
            { id: 'games', label: 'Games List', icon: <Gamepad2 className="w-4 h-4" /> },
            { id: 'gallery', label: 'Gallery', icon: <ImageIcon className="w-4 h-4" /> },
            { id: 'contact', label: 'Contact', icon: <Phone className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-orbitron text-[10px] uppercase tracking-widest transition-all ${
                activeTab === tab.id ? 'bg-neon-blue text-black font-black' : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </nav>

        <div className="mt-10 space-y-2 border-t border-white/10 pt-6">
          <button onClick={onBack} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-orbitron text-[10px] uppercase text-gray-400 hover:bg-white/5">
            <ArrowLeft className="w-4 h-4" /> Home Site
          </button>
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-orbitron text-[10px] uppercase text-red-500 hover:bg-red-500/10">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-6 md:p-12 overflow-y-auto max-h-screen">
        <div className="max-w-4xl mx-auto">
          <header className="flex justify-between items-end mb-12">
            <div>
              <h1 className="text-3xl font-orbitron font-black text-white uppercase tracking-tighter">
                {activeTab === 'offers' && 'UPDATE MOVING OFFERS'}
                {activeTab === 'pricing' && 'UPDATE PRICES'}
                {activeTab === 'games' && 'MANAGE GAMES'}
                {activeTab === 'gallery' && 'UPDATE PHOTO GALLERY'}
                {activeTab === 'contact' && 'CONTACT DETAILS'}
              </h1>
              <p className="text-gray-500 font-orbitron text-[10px] uppercase tracking-widest mt-2">Manage your club content in real-time</p>
            </div>
          </header>

          {/* Tab Content: Offers */}
          {activeTab === 'offers' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <div className="glass p-6 rounded-2xl border border-white/10">
                <label className={labelStyles}>Add New Offer Line</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={newOffer}
                    onChange={(e) => setNewOffer(e.target.value)}
                    placeholder="E.g. SUMMER SPECIAL: 20% OFF ON WEEKDAYS!"
                    className={inputStyles}
                  />
                  <button onClick={addOffer} className="bg-neon-green text-black px-6 py-3 rounded-lg font-orbitron font-black text-xs uppercase">ADD</button>
                </div>
              </div>

              <div className="space-y-3">
                {offers.map((offer, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 group">
                    <span className="text-gray-300 text-sm font-medium">{offer}</span>
                    <button onClick={() => removeOffer(idx)} className="p-2 text-gray-500 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content: Pricing */}
          {activeTab === 'pricing' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pricing.map((item, idx) => (
                  <div key={idx} className="glass p-6 rounded-2xl border border-white/10">
                    <h3 className="font-orbitron font-bold text-neon-blue text-xs uppercase mb-4">{item.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <label className={labelStyles}>{idx === 3 ? '24 Hour Price' : idx === 4 ? '15 Min Price' : '1 Hour Price'}</label>
                        <input 
                          type="text" 
                          value={item.hour}
                          onChange={(e) => {
                            const newPricing = [...pricing];
                            newPricing[idx].hour = e.target.value;
                            setPricing(newPricing);
                          }}
                          className={inputStyles}
                        />
                      </div>
                      <div>
                        <label className={labelStyles}>{idx === 3 ? '12 Hour Price' : idx === 4 ? '30 Min Price (Special)' : '30 Min Price'}</label>
                        <input 
                          type="text" 
                          value={item.half}
                          onChange={(e) => {
                            const newPricing = [...pricing];
                            newPricing[idx].half = e.target.value;
                            setPricing(newPricing);
                          }}
                          className={inputStyles}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={saveSuccess} className="w-full bg-neon-blue text-black font-orbitron font-black py-4 rounded-xl flex items-center justify-center gap-2">
                <Save className="w-5 h-5" /> SAVE ALL CHANGES
              </button>
            </div>
          )}

          {/* Tab Content: Games */}
          {activeTab === 'games' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
              <div className="glass p-8 rounded-2xl border border-white/10">
                <h3 className="font-orbitron font-black text-white text-lg uppercase mb-6">ADD NEW GAME</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className={labelStyles}>Game Title</label>
                    <input 
                      type="text" 
                      value={newGame.title}
                      onChange={(e) => setNewGame({...newGame, title: e.target.value})}
                      placeholder="God of War Ragnarok"
                      className={inputStyles}
                    />
                  </div>
                  <div>
                    <label className={labelStyles}>Banner Image URL</label>
                    <input 
                      type="text" 
                      value={newGame.imageUrl}
                      onChange={(e) => setNewGame({...newGame, imageUrl: e.target.value})}
                      placeholder="https://..."
                      className={inputStyles}
                    />
                  </div>
                </div>
                <button onClick={addGame} className="bg-neon-blue text-black px-10 py-4 rounded-xl font-orbitron font-black text-xs uppercase flex items-center gap-2">
                  <Plus className="w-5 h-5" /> ADD TO LIBRARY
                </button>
              </div>

              <div>
                <h3 className="font-orbitron font-black text-neon-green text-sm uppercase mb-6 tracking-[0.2em]">CURRENT LIBRARY ({games.length})</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {games.map((game, idx) => (
                    <div key={idx} className="relative group overflow-hidden rounded-xl border border-white/5 bg-white/5">
                      <img src={game.imageUrl} alt={game.title} className="w-full h-24 object-cover opacity-50" />
                      <div className="p-3">
                        <p className="text-white text-[10px] font-orbitron font-bold truncate">{game.title}</p>
                      </div>
                      <button 
                        onClick={() => removeGame(game.title)}
                        className="absolute top-2 right-2 p-1.5 bg-red-500 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content: Gallery */}
          {activeTab === 'gallery' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <div className="glass p-6 rounded-2xl border border-white/10">
                <label className={labelStyles}>Add Photo URL</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={newPhoto}
                    onChange={(e) => setNewPhoto(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className={inputStyles}
                  />
                  <button onClick={addPhoto} className="bg-neon-blue text-black px-6 py-3 rounded-lg font-orbitron font-black text-xs uppercase">ADD</button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryPhotos.map((url, idx) => (
                  <div key={idx} className="relative group rounded-xl overflow-hidden aspect-video border border-white/5">
                    <img src={url} alt="Gallery" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <button onClick={() => removePhoto(url)} className="p-2 bg-red-500 text-white rounded-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content: Contact */}
          {activeTab === 'contact' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <div className="glass p-8 rounded-2xl border border-white/10 space-y-6">
                <div>
                  <label className={labelStyles}>Club Phone</label>
                  <input 
                    type="text" 
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label className={labelStyles}>Email Address</label>
                  <input 
                    type="email" 
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label className={labelStyles}>Full Address</label>
                  <textarea 
                    rows={3}
                    value={contactInfo.address}
                    onChange={(e) => setContactInfo({...contactInfo, address: e.target.value})}
                    className={`${inputStyles} resize-none`}
                  />
                </div>
                <div>
                  <label className={labelStyles}>Instagram URL</label>
                  <input 
                    type="text" 
                    value={contactInfo.instagram}
                    onChange={(e) => setContactInfo({...contactInfo, instagram: e.target.value})}
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label className={labelStyles}>WhatsApp Number (Country Code Only digits)</label>
                  <input 
                    type="text" 
                    value={contactInfo.whatsapp}
                    onChange={(e) => setContactInfo({...contactInfo, whatsapp: e.target.value})}
                    className={inputStyles}
                  />
                </div>
              </div>
              <button onClick={saveSuccess} className="w-full bg-neon-blue text-black font-orbitron font-black py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                <Save className="w-5 h-5" /> UPDATE CONTACT INFO
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
