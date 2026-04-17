import { Sparkles, AlertTriangle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-main flex flex-col items-center justify-center p-4 font-sans selection:bg-accent-cyan selection:text-black" style={{ background: 'radial-gradient(circle at center, #111 0%, #050505 100%)' }}>
      <div className="max-w-md w-full bg-surface border border-[#222] rounded-xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] space-y-6 text-center relative overflow-hidden">
        {/* Decorative Theme Bar */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-cyan via-accent-green to-accent-pink"></div>
        
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[rgba(0,243,255,0.05)] border border-accent-cyan text-accent-cyan mb-2 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
          <AlertTriangle className="w-8 h-8" />
        </div>
        
        <div className="font-mono text-[10px] uppercase tracking-[2px] text-text-dim -mb-2">System Status</div>
        <h1 className="text-2xl font-semibold tracking-tight text-white">Neural Link Reset</h1>
        
        <div className="bg-[rgba(255,255,255,0.03)] border border-transparent rounded-lg p-5 w-full text-left">
          <p className="text-text-main text-sm mb-4 leading-relaxed">
            I lost the context of our previous conversation due to an unexpected error.
          </p>
          <p className="text-text-dim text-xs font-mono">
            Please let me know what we were working on, and we can continue building your app!
          </p>
        </div>
      </div>
    </div>
  );
}
