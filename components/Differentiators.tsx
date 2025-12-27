
import React from 'react';

export const Differentiators: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-deepDark">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-tech font-bold mb-8 uppercase leading-tight">
              O Padrão <span className="text-techBlue">TechView</span> de Qualidade
            </h2>
            <p className="text-slate-400 mb-10 text-lg">
              Esqueça tudo o que você sabe sobre sites comuns. Estamos em outro patamar de entrega tecnológica e estratégica.
            </p>
            
            <ul className="space-y-4">
              {[
                "100% Mobile First (otimização extrema)",
                "Alta Conversão (foco em agendamentos)",
                "Visual Premium (estética futurista)",
                "Sem Mensalidade (sua página é sua)",
                "Entrega Expressa (foco na sua velocidade)",
                "Suporte Especializado"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <div className="w-5 h-5 rounded-full bg-techBlue flex items-center justify-center text-[10px] text-deepDark font-bold">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="gradient-border p-px">
              <div className="gradient-border-content p-8 md:p-12">
                <h3 className="text-2xl font-tech font-bold mb-4 text-white uppercase italic tracking-widest">Aviso de Autoridade</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Não trabalhamos com quem busca "o mais barato". Trabalhamos com quem busca ser o melhor e entende que o design é a primeira prova social da sua competência.
                </p>
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank"
                  className="block w-full text-center bg-white text-deepDark font-bold py-4 rounded-lg hover:bg-techBlue transition-all"
                >
                  SOLICITAR ORÇAMENTO PREMIUM
                </a>
              </div>
            </div>
            {/* Decal decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-techBlue opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-techBlue opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
