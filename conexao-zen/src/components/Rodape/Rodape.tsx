import { Link } from "react-router-dom";

export default function Rodape() {
  return (
    <footer className="bg-purple-100 text-purple-900 py-8 mt-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-4 font-medium">
          <Link to="/sobre" className="hover:text-purple-600 transition">Sobre Nós</Link>
          <Link to="/faq" className="hover:text-purple-600 transition">FAQ</Link>
          <Link to="/contato" className="hover:text-purple-600 transition">Contato</Link>
          <Link to="/integrantes" className="hover:text-purple-600 transition">Integrantes</Link>
        </div>
        <p className="text-sm opacity-75">
          &copy; 2025 Conexão Zen - 1TDSPF - Global Solution
        </p>
      </div>
    </footer>
  );
}