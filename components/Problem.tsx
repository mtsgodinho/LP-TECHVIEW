
import React from 'react';

const ProblemItem: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-red-500/30 transition-all">
    <h3 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-red-500"></span>
      {title}
    </h3>
    <p className="text-slate-400 leading-relaxed text-sm">
      {text}
    </p>
  </div>
);

export const Problem: React.FC = () => {
  return (
    <section id="problema" className="py-24 px-6 bg-deepDark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-tech font-bold mb-4 uppercase tracking-wider">
            Por que depender de <span className="text-red-500">indicações lentas</span> ou do caos das redes sociais?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Muitos experts têm o conhecimento técnico, mas falham em apresentar uma imagem profissional que transmita segurança imediata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProblemItem 
            title="Instagram não agenda" 
            text="Seguidores não são leads. Se você depende só de stories para agendar, está à mercê do algoritmo." 
          />
          <ProblemItem 
            title="Indicação é volátil" 
            text="Indicações são ótimas, mas você não tem controle sobre o volume. Seu crescimento não pode ser passivo." 
          />
          <ProblemItem 
            title="Site genérico" 
            text="Sites institucionais antigos confundem o visitante. Se ele não vê o valor em 5 segundos, ele sai." 
          />
          <ProblemItem 
            title="Parecer amador" 
            text="Para cobrar o valor que sua técnica merece, seu posicionamento digital precisa ser premium." 
          />
        </div>
      </div>
    </section>
  );
};
