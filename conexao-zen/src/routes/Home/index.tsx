import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      
      <div className="relative rounded-xl overflow-hidden shadow-xl">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
          alt="Ambiente de trabalho zen" 
          className="w-full h-96 object-cover opacity-90"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-800/70 flex flex-col justify-center items-center text-center p-8">
          <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
            Bem-vindo ao Conexão Zen
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto font-medium drop-shadow-md">
            O futuro do trabalho é humano. Monitore seu bem-estar, acompanhe seu nível de estresse e encontre equilíbrio na sua jornada profissional.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/checkin" 
              className="bg-white text-purple-800 font-bold py-3 px-8 rounded-full hover:bg-purple-50 transition shadow-lg transform hover:scale-105"
            >
              Fazer Check-in Diário
            </Link>
            <Link 
              to="/programas" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transition shadow-lg"
            >
              Ver Programas
            </Link>
          </div>
        </div>
      </div>

      <section className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500 hover:shadow-lg transition">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-semibold text-purple-800 mb-2">Monitoramento</h3>
          <p className="text-gray-600">
            Acompanhe seu humor e nível de estresse diariamente para identificar padrões e prevenir o burnout.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500 hover:shadow-lg transition">
          <div className="text-4xl mb-4">🧘‍♀️</div>
          <h3 className="text-xl font-semibold text-purple-800 mb-2">Programas de Saúde</h3>
          <p className="text-gray-600">
            Acesse workshops, meditações e eventos exclusivos oferecidos pela sua empresa para melhorar sua qualidade de vida.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500 hover:shadow-lg transition">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-semibold text-purple-800 mb-2">Suporte Contínuo</h3>
          <p className="text-gray-600">
            Uma ferramenta pensada para o trabalho híbrido e remoto, mantendo você conectado com seu time e consigo mesmo.
          </p>
        </div>
      </section>

    </div>
  );
}