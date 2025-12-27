
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-900 bg-deepDark">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div>
          <div className="text-techBlue font-tech font-bold text-2xl tracking-tighter mb-2">TECHVIEW</div>
          <p className="text-slate-500 text-sm max-w-xs">
            Estrategistas de Autoridade Digital para Experts que não aceitam o comum.
          </p>
        </div>
        
        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold mb-2">Navegação</span>
            <a href="#problema" className="text-slate-500 hover:text-techBlue transition-colors">O Problema</a>
            <a href="#solucao" className="text-slate-500 hover:text-techBlue transition-colors">A Solução</a>
            <a href="#processo" className="text-slate-500 hover:text-techBlue transition-colors">Processo</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold mb-2">Social</span>
            <a href="#" className="text-slate-500 hover:text-techBlue transition-colors">Instagram</a>
            <a href="#" className="text-slate-500 hover:text-techBlue transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-900 text-center text-slate-600 text-xs">
        © {new Date().getFullYear()} TECHVIEW. Todos os direitos reservados. Design Futurista e Estratégico.
      </div>
    </footer>
  );
};
