
import React, { useState, useEffect } from 'react';
import { ArrowLeft, CreditCard, User, Phone, Mail, Clock, CheckCircle2, Download, QrCode } from 'lucide-react';

interface BookingPageProps {
  onBack: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    time: '',
    phone: '',
    email: ''
  });
  const [isPaid, setIsPaid] = useState(false);
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // UPI Details
    const upiId = "arshwaraich151-1@okicici";
    const name = "Gaming Club Kaithal";
    const amount = "20";
    const note = `Slot Booking for ${formData.name}`;
    
    // Deep link for mobile UPI apps
    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
    
    // In a real scenario, we'd wait for a web-hook or confirmation.
    // For this demo, we'll open the UPI link and simulate the "Paid" state transition.
    window.location.href = upiUrl;
    
    // Since we can't detect payment success in a browser deep link without a backend,
    // we simulate the success for the user to see the receipt.
    setTimeout(() => {
      setBookingId('GCK-' + Math.random().toString(36).substr(2, 9).toUpperCase());
      setIsPaid(true);
    }, 2000);
  };

  const inputStyles = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all placeholder:text-gray-600";
  const labelStyles = "block text-xs font-orbitron text-gray-400 uppercase tracking-widest mb-2 font-bold";

  if (isPaid) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <div className="max-w-md w-full glass p-8 rounded-3xl border border-neon-blue/30 text-center animate-in zoom-in-95 duration-300">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-neon-blue/10 rounded-full mb-6">
            <CheckCircle2 className="w-12 h-12 text-neon-blue" />
          </div>
          <h2 className="text-3xl font-orbitron font-black text-white mb-2 uppercase">BOOKING CONFIRMED</h2>
          <p className="text-gray-400 text-sm mb-8">Your slot has been reserved successfully!</p>
          
          <div className="bg-white/5 rounded-2xl p-6 mb-8 text-left border border-white/10">
            <div className="flex justify-between mb-4 border-b border-white/5 pb-2">
              <span className="text-xs font-orbitron text-gray-500">BOOKING ID</span>
              <span className="text-sm font-orbitron text-white font-bold">{bookingId}</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-xs text-gray-400 uppercase">Customer</span>
                <span className="text-sm text-white font-medium">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-400 uppercase">Arrival Time</span>
                <span className="text-sm text-white font-medium">{formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-400 uppercase">Phone</span>
                <span className="text-sm text-white font-medium">{formData.phone}</span>
              </div>
              <div className="flex justify-between mt-4 pt-4 border-t border-white/10">
                <span className="text-xs font-bold text-neon-blue">AMOUNT PAID</span>
                <span className="text-lg font-orbitron font-black text-white">₹20.00</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => window.print()} 
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white py-3 rounded-xl font-orbitron text-xs font-bold hover:bg-white/10 transition-all"
            >
              <Download className="w-4 h-4" /> RECEIPT
            </button>
            <button 
              onClick={onBack} 
              className="bg-neon-blue text-black py-3 rounded-xl font-orbitron text-xs font-bold hover:brightness-110 transition-all"
            >
              DONE
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-[#0a0a0a] overflow-x-hidden pb-20">
      {/* Simple Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-tr from-[#0a0a0a] via-[#111] to-[#0a0a0a]"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors font-orbitron text-sm uppercase mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-orbitron font-black text-white mb-4 uppercase">
            QUICK <span className="neon-blue">BOOKING</span>
          </h1>
          <p className="text-gray-400 font-orbitron tracking-widest text-[10px] uppercase">Secure your session in seconds</p>
        </div>

        <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
          <form onSubmit={handlePayment} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className={labelStyles}>Your Name</label>
                <div className="relative">
                  <User className="absolute right-4 top-3.5 w-5 h-5 text-gray-500" />
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter full name"
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className={labelStyles}>Arrival Time</label>
                <div className="relative">
                  <Clock className="absolute right-4 top-3.5 w-5 h-5 text-gray-500" />
                  <input 
                    type="time" 
                    required 
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className={labelStyles}>Phone Number</label>
                <div className="relative">
                  <Phone className="absolute right-4 top-3.5 w-5 h-5 text-gray-500" />
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 XXXXX XXXXX"
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className={labelStyles}>Email Address (Optional)</label>
                <div className="relative">
                  <Mail className="absolute right-4 top-3.5 w-5 h-5 text-gray-500" />
                  <input 
                    type="email" 
                    placeholder="example@gmail.com"
                    className={inputStyles}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="p-6 bg-neon-blue/5 border border-neon-blue/20 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs font-orbitron font-bold text-neon-blue mb-1 uppercase tracking-tighter">Booking Fee</p>
                <p className="text-2xl font-orbitron font-black text-white">₹20.00</p>
              </div>
              <div className="text-right">
                <QrCode className="w-8 h-8 text-neon-blue ml-auto mb-1 opacity-50" />
                <p className="text-[10px] text-gray-500 font-bold uppercase">UPI Payment</p>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-neon-blue text-black font-orbitron font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:scale-[1.01] transition-all hover:brightness-110 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            >
              <CreditCard className="w-5 h-5" /> PAY & BOOK SLOT
            </button>
            
            <div className="pt-4 border-t border-white/5">
              <p className="text-center text-[9px] text-gray-500 uppercase tracking-widest font-bold leading-relaxed">
                * Booking fee of ₹20 is non-refundable and will be adjusted in your final bill at the club.
                <br />Secure Payment via UPI ID: <span className="text-white">arshwaraich151-1@okicici</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
