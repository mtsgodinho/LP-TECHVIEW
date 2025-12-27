
import React from 'react';
import { Astronaut } from './Astronaut';

export const Solution: React.FC = () => {
  return (
    <section id="solucao" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-techBlue/10 blur-[100px] -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 order-2 md:order-1">
          <div className="mb-6 px-4 py-1 inline-block rounded-full border border-techBlue/30 bg-techBlue/5 text-techBlue text-xs font-bold uppercase">
            A Solução TechView
          </div>
          <h2 className="text-3xl md:text-5xl font-tech font-bold mb-8 leading-tight">
            A Landing Page que fala a língua do seu <span className="text-techBlue">cliente premium.</span>
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-techBlue/10 border border-techBlue/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-techBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Copy Ética e Persuasiva</h4>
                <p className="text-slate-400 text-sm">Focada em converter sem promessas milagrosas. Usamos gatilhos de autoridade reais.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-techBlue/10 border border-techBlue/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-techBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Design de Alto Nível</h4>
                <p className="text-slate-400 text-sm">Estética Dark Tech que diferencia você da concorrência "comum". Você não é apenas mais um.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-techBlue/10 border border-techBlue/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-techBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Foco Mobile First</h4>
                <p className="text-slate-400 text-sm">90% dos seus clientes te verão pelo celular. Sua página será impecável em telas pequenas.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <a href="https://wa.me/5500000000000" target="_blank" className="inline-flex items-center gap-3 bg-techBlue text-deepDark font-bold py-4 px-8 rounded-lg shadow-neon hover:scale-105 transition-all">
              <span>AGENDAR MEU DIAGNÓSTICO</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>

        <div className="flex-1 order-1 md:order-2">
          <div className="relative">
             <div className="absolute inset-0 bg-techBlue/5 rounded-full blur-3xl"></div>
             <Astronaut variant="standing" className="w-64 md:w-full mx-auto" />
             <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 glass-card px-6 py-4 rounded-xl border border-techBlue/30 w-full max-w-[280px]">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-sm font-tech font-bold text-white">Sua página pronta para decolar</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
