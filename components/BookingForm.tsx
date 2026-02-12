
import React, { useState } from 'react';
import { Send, Calendar, Clock, User, Phone, Gamepad2 } from 'lucide-react';
import { WHATSAPP_NUMBER, GAMES } from '../constants';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    game: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*NEW BOOKING REQUEST*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Game:* ${formData.game}`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const inputStyles = "w-full bg-[#1a1a1a] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all placeholder:text-gray-600 font-medium";
  const labelStyles = "block text-xs font-orbitron text-gray-400 uppercase tracking-widest mb-2 font-bold";

  return (
    <section id="book" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass p-8 md:p-12 rounded-lg border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-orbitron font-black mb-4">
              RESERVE <span className="neon-blue">STATION</span>
            </h2>
            <div className="w-20 h-1 bg-neon-blue mx-auto mb-4"></div>
            <p className="text-gray-400 uppercase text-xs font-bold tracking-[0.2em]">Skip the queue and secure your spot</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelStyles}>Full Name</label>
                <div className="relative">
                  <User className="absolute right-4 top-3.5 w-5 h-5 text-white/20" />
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className={labelStyles}>Phone Number</label>
                <div className="relative">
                  <Phone className="absolute right-4 top-3.5 w-5 h-5 text-white/20" />
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelStyles}>Date</label>
                <div className="relative">
                  <Calendar className="absolute right-4 top-3.5 w-5 h-5 text-white/20" />
                  <input 
                    type="date" 
                    required
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className={labelStyles}>Preferred Time</label>
                <div className="relative">
                  <Clock className="absolute right-4 top-3.5 w-5 h-5 text-white/20" />
                  <select 
                    required
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  >
                    <option value="">Select a slot</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="08:00 PM">08:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className={labelStyles}>Select Game (Optional)</label>
              <div className="relative">
                <Gamepad2 className="absolute right-4 top-3.5 w-5 h-5 text-white/20" />
                <select 
                  className={inputStyles}
                  onChange={(e) => setFormData({...formData, game: e.target.value})}
                >
                  <option value="">Any Game</option>
                  {GAMES.map(g => <option key={g.title} value={g.title}>{g.title}</option>)}
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-neon-blue text-black font-orbitron font-black py-4 rounded-sm flex items-center justify-center gap-3 hover:scale-[1.01] transition-all hover:brightness-110 shadow-lg"
            >
              SEND BOOKING REQUEST <Send className="w-5 h-5" />
            </button>
            <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">
              * By clicking, you'll be redirected to WhatsApp to confirm your slot.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
