
import React from 'react';
import { Astronaut } from './Astronaut';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center items-center">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-techBlue/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-techBlue/30 bg-techBlue/5 text-techBlue text-xs font-bold tracking-[0.2em] uppercase">
          Estrategistas de Autoridade Digital
        </div>
        
        <h1 className="text-4xl md:text-7xl font-tech font-bold mb-6 leading-[1.1] tracking-tight text-white">
          POSICIONE SUA <span className="text-techBlue glow-text">AUTORIDADE</span>.<br /> 
          ESCALE SEUS AGENDAMENTOS.
        </h1>

        <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Transformamos sua expertise técnica em um <span className="text-white font-semibold italic">Sistema de Autoridade</span> que converte visitantes em clientes de alto valor. Design futurista, copy ética e foco total em conversão.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/5500000000000" 
            target="_blank"
            className="w-full sm:w-auto bg-techBlue text-deepDark font-bold py-4 px-10 rounded-lg shadow-neonStrong hover:shadow-neon hover:scale-105 transition-all text-center"
          >
            QUERO MINHA LANDING PAGE
          </a>
          <a 
            href="#problema" 
            className="w-full sm:w-auto border border-slate-700 hover:border-techBlue/50 text-white font-semibold py-4 px-10 rounded-lg transition-all text-center"
          >
            VER COMO FUNCIONA
          </a>
        </div>
      </div>

      <div className="mt-16 w-full max-w-sm mx-auto">
        <Astronaut variant="floating" />
      </div>
    </section>
  );
};
