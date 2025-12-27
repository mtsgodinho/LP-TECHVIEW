
import React from 'react';

const Step: React.FC<{ num: string; title: string; text: string }> = ({ num, title, text }) => (
  <div className="relative pl-12 pb-12 last:pb-0">
    <div className="absolute left-0 top-0 w-8 h-8 rounded-full border border-techBlue/40 bg-navyDark flex items-center justify-center text-techBlue font-bold text-sm z-10">
      {num}
    </div>
    <div className="absolute left-4 top-8 bottom-0 w-[1px] bg-slate-800 last:hidden"></div>
    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
  </div>
);

export const Process: React.FC = () => {
  return (
    <section id="processo" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-tech font-bold mb-4">Como construímos seu <span className="text-techBlue">Sistema de Autoridade</span></h2>
          <p className="text-slate-400">Um processo ágil e premium, desenhado para experts ocupados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Step 
              num="01" 
              title="Diagnóstico Rápido" 
              text="Entendemos sua especialidade, seu público e seus objetivos de agendamento em uma breve conversa estratégica."
            />
            <Step 
              num="02" 
              title="Copy Personalizada" 
              text="Nossos copywriters criam os textos focados em ética e conversão, destacando seu diferencial no mercado."
            />
            <Step 
              num="03" 
              title="Design Premium" 
              text="Desenvolvemos o visual exclusivo seguindo a estética TechView — futurista, limpo e extremamente profissional."
            />
            <Step 
              num="04" 
              title="Lançamento Assistido" 
              text="Entregamos sua página pronta para rodar tráfego. Sem mensalidades, 100% sua para sempre."
            />
          </div>
          
          <div className="bg-navyDark p-8 rounded-2xl border border-techBlue/10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-white">Entrega em tempo recorde</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Sabemos que seu tempo é dinheiro. Por isso, nosso sistema permite uma entrega de alta qualidade sem os meses de espera das agências tradicionais.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-techBlue/5 border border-techBlue/10">
              <span className="text-3xl">🚀</span>
              <p className="text-sm font-semibold text-techBlue uppercase tracking-wider">Lançamento em até 7 dias úteis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
