
import React from 'react';

const Card: React.FC<{ icon: string; title: string }> = ({ icon, title }) => (
  <div className="glass-card p-6 rounded-xl hover:shadow-neon transition-all flex flex-col items-center text-center group">
    <span className="text-4xl mb-4 group-hover:scale-110 transition-transform block">{icon}</span>
    <h4 className="font-bold text-white">{title}</h4>
  </div>
);

export const Audience: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-tech font-bold mb-4 uppercase">Feito para <span className="text-techBlue">Experts Premium</span></h2>
          <p className="text-slate-400">Se você busca um posicionamento acima da média, a TechView é para você.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Card icon="🦷" title="Dentistas" />
          <Card icon="🧠" title="Psicólogos" />
          <Card icon="⚖️" title="Advogados" />
          <Card icon="🩺" title="Médicos" />
          <Card icon="🥗" title="Nutris" />
          <Card icon="💎" title="Especialistas" />
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto p-8 rounded-2xl border border-slate-800 bg-slate-900/30">
          <p className="text-lg italic text-slate-300">
            "Não criamos apenas sites. Criamos a porta de entrada para a sua nova fase profissional. Uma fase onde você é visto como a autoridade que realmente é."
          </p>
          <div className="mt-4 text-techBlue font-bold">— TechView Team</div>
        </div>
      </div>
    </section>
  );
};
