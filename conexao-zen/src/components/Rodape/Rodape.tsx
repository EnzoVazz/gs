import { Link } from 'react-router-dom';

export default function Rodape() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-purple-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 tracking-wide">
            Conexão Zen
          </h2>

          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <Link 
              to="/sobre" 
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/10 transition duration-300 font-medium"
            >
              📖 Sobre Nós
            </Link>
            
            <Link 
              to="/faq" 
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/10 transition duration-300 font-medium"
            >
              ❓ FAQ
            </Link>
            
            <Link 
              to="/contato" 
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/10 transition duration-300 font-medium"
            >
              ✉️ Contato
            </Link>
            
            <Link 
              to="/integrantes" 
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/10 transition duration-300 font-medium"
            >
              👥 Integrantes
            </Link>
          </nav>

          <div className="w-full max-w-md h-px bg-purple-700/50 mb-6"></div>

          <p className="text-purple-100 text-sm text-center">
            &copy; Conexão Zen - 1TDSPF - Global Solution
          </p>
        </div>

      </div>
    </footer>
  );
}