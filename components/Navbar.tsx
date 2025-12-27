
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-techBlue/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-techBlue font-tech font-bold text-2xl tracking-tighter">TECHVIEW</span>
        </div>
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#problema" className="hover:text-techBlue transition-colors uppercase tracking-wider text-xs">O Problema</a>
          <a href="#solucao" className="hover:text-techBlue transition-colors uppercase tracking-wider text-xs">A Solução</a>
          <a href="#processo" className="hover:text-techBlue transition-colors uppercase tracking-wider text-xs">Como Funciona</a>
          <a href="#provas" className="hover:text-techBlue transition-colors uppercase tracking-wider text-xs">Provas Reais</a>
        </div>
        <a 
          href="https://wa.me/5500000000000" 
          target="_blank" 
          className="bg-techBlue text-deepDark px-5 py-2 rounded-full text-xs font-bold shadow-neon hover:scale-105 transition-transform"
        >
          CONTATO
        </a>
      </div>
    </nav>
  );
};
