
import React, { useState } from 'react';
import { ArrowLeft, Lock, User, AlertCircle } from 'lucide-react';

interface OwnerLoginPageProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

const OwnerLoginPage: React.FC<OwnerLoginPageProps> = ({ onBack, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'rahul8059' && password === '8059066110') {
      onLoginSuccess();
    } else {
      setError('Invalid credentials. Please check your username and password.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full glass p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-green to-neon-blue"></div>
        
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-orbitron text-[10px] uppercase mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Club
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl mb-4 border border-white/10">
            <Lock className="w-8 h-8 text-neon-blue" />
          </div>
          <h1 className="text-2xl font-orbitron font-black text-white uppercase tracking-tighter">OWNER LOGIN</h1>
          <p className="text-gray-500 text-[10px] font-orbitron uppercase tracking-widest mt-2">Secure Admin Portal</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-500 text-xs font-medium">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[10px] font-orbitron text-gray-400 uppercase tracking-widest mb-2 font-bold">Username</label>
            <div className="relative">
              <User className="absolute right-4 top-3.5 w-5 h-5 text-gray-600" />
              <input 
                type="text" 
                required 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Admin username"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-neon-blue transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-orbitron text-gray-400 uppercase tracking-widest mb-2 font-bold">Password</label>
            <div className="relative">
              <Lock className="absolute right-4 top-3.5 w-5 h-5 text-gray-600" />
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-neon-blue transition-all"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-neon-blue text-black font-orbitron font-black py-4 rounded-xl hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)]"
          >
            ENTER DASHBOARD
          </button>
        </form>
      </div>
    </div>
  );
};

export default OwnerLoginPage;
