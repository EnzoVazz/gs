export default function Sobre() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-8 border-purple-600">
        <h1 className="text-4xl font-bold text-purple-800 mb-6">Sobre o Conexão Zen</h1>
        
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            O <strong>Conexão Zen</strong> nasceu com um propósito claro: humanizar o futuro do trabalho.
          </p>
          <p>
            Em um mundo cada vez mais digital, híbrido e acelerado, a saúde mental e o bem-estar dos colaboradores 
            muitas vezes ficam em segundo plano. Acreditamos que a tecnologia deve servir como uma ponte para o 
            autocuidado, e não como uma fonte de exaustão.
          </p>
          <p>
            Nossa plataforma oferece ferramentas simples e poderosas para que empresas e colaboradores caminhem juntos:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-purple-700 font-medium">
            <li>Monitoramento diário de humor e estresse.</li>
            <li>Acesso facilitado a programas de saúde mental.</li>
            <li>Cultura de transparência e apoio mútuo.</li>
          </ul>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-purple-200 rounded-lg border border-purple-100 text-center">
              <span className="text-3xl">🤝</span>
              <h3 className="font-bold text-purple-900 mt-2">Inclusão</h3>
            </div>
            <div className="p-4 bg-purple-200 rounded-lg border border-purple-100 text-center">
              <span className="text-3xl">🌱</span>
              <h3 className="font-bold text-purple-900 mt-2">Sustentabilidade</h3>
            </div>
            <div className="p-4 bg-purple-200 rounded-lg border border-purple-100 text-center">
              <span className="text-3xl">💡</span>
              <h3 className="font-bold text-purple-900 mt-2">Inovação</h3>
            </div>
        </div>
      </section>

      <section className="bg-purple-100 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-purple-900 mb-4">Nossa Missão</h2>
        <p className="text-lg text-purple-800 italic">
          "Transformar ambientes corporativos em espaços de acolhimento, onde a produtividade é consequência do bem-estar, não o custo dele."
        </p>
      </section>
    </div>
    
  );
}