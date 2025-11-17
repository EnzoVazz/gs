import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="bg-purple-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        
        <Link to="/" className="text-xl font-bold">
          Conexão Zen
        </Link>
        
        <ul className="flex gap-4">
          <li><Link to="/programas" className="hover:text-purple-200">Programas</Link></li>
          <li><Link to="/checkin" className="hover:text-purple-200">Check-in</Link></li>
          <li><Link to="/integrantes" className="hover:text-purple-200">Integrantes</Link></li>
        </ul>

        <ul className="flex gap-4">
          <li><Link to="/login" className="hover:text-purple-200">Login</Link></li>
          <li><Link to="/cadastro" className="hover:text-purple-200">Cadastre-se</Link></li>
        </ul>
      </div>
    </nav>
  );
}