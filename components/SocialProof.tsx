
import React from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  message: string;
  time: string;
}

const WhatsAppBubble: React.FC<TestimonialProps> = ({ name, role, message, time }) => (
  <div className="flex flex-col mb-8 last:mb-0 max-w-sm w-full animate-fade-in">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-10 rounded-full bg-techBlue/20 border border-techBlue/40 flex items-center justify-center text-techBlue font-bold text-xs">
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <h4 className="text-white font-bold text-sm leading-none">{name}</h4>
        <p className="text-techBlue text-[10px] uppercase tracking-widest mt-1 font-tech">{role}</p>
      </div>
    </div>
    
    <div className="relative glass-card p-4 rounded-2xl rounded-tl-none border-techBlue/20 shadow-neon/10">
      {/* WhatsApp tail equivalent */}
      <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-techBlue/10 border-r-[10px] border-r-transparent"></div>
      
      <p className="text-slate-200 text-sm leading-relaxed mb-2 italic">
        "{message}"
      </p>
      <div className="flex justify-end items-center gap-1">
        <span className="text-[9px] text-slate-500 font-mono">{time}</span>
        <svg className="w-3 h-3 text-techBlue" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 11.388L3.712 15.1l11.026-11.026 1.856 1.856L5.568 18.812 0 13.244l1.856-1.856zM11.026 13.244l5.458 5.458L24 11.026l-1.856-1.856-5.458 5.458-3.604-3.604-2.056 2.22z"/>
        </svg>
      </div>
    </div>
  </div>
);

export const SocialProof: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Dr. Ricardo Santos",
      role: "Odontologia Premium",
      message: "O número de pacientes qualificados que chegam pelo WhatsApp dobrou em 15 dias. A página realmente filtra os curiosos e atrai quem valoriza meu trabalho.",
      time: "09:42"
    },
    {
      name: "Dra. Camila Lins",
      role: "Direito Civil & Digital",
      message: "Meu posicionamento premium finalmente está claro. Os clientes já chegam na reunião respeitando meus honorários. Valeu cada centavo do investimento.",
      time: "14:15"
    },
    {
      name: "Dr. Henrique Vasconcelos",
      role: "Medicina Esportiva",
      message: "O agendamento direto é um game changer. Design impecável, passa muita confiança. Nunca vi nada igual no mercado jurídico ou médico.",
      time: "18:30"
    }
  ];

  return (
    <section id="provas" className="py-24 px-6 relative overflow-hidden bg-slate-950/30">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-techBlue/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-techBlue/30 bg-techBlue/5 text-techBlue text-[10px] font-bold tracking-[0.2em] uppercase">
            Impacto Real
          </div>
          <h2 className="text-3xl md:text-5xl font-tech font-bold text-white mb-6">
            O QUE DIZEM OS EXPERTS QUE <span className="text-techBlue italic glow-text">DECOLARAM</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Não é sobre cliques, é sobre conversas que se tornam faturamento. Veja o feedback de quem confiou na visão da TechView.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {testimonials.map((t, index) => (
            <WhatsAppBubble key={index} {...t} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 p-4 md:p-6 rounded-2xl bg-techBlue/5 border border-techBlue/20 glass-card">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-deepDark flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-techBlue/40"></div>
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-white">
              +47 experts agendando hoje via TechView
            </p>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
