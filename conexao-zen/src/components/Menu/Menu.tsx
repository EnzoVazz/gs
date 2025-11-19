import { Link, useNavigate } from 'react-router-dom';
import { useAutenticacao } from '../../context/ContextoAuten';
import BotaoTema from '../BotaoTema/BotaoTema';

export default function Menu() {
  const {estaAutenticado, sair} = useAutenticacao();
  const navigate = useNavigate();

  const fazerLogout = () => {
    sair();
    navigate('/login');
  }

  return (
    <nav className="bg-purple-800 dark:bg-gray-900 text-white p-4 shadow-md transition-colors duration-300">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="text-xl font-bold">Conexão Zen</Link>
        
        <ul className="flex gap-4 items-center">
          <li><BotaoTema /></li>
          {estaAutenticado ? (
            <>
              <li><Link to="/programas" className="hover:text-purple-200 font-semibold">Programas</Link></li>
              <li><Link to="/checkin" className="hover:text-purple-200 font-semibold">Check-in</Link></li>
              <li><Link to="/perfil" className="hover:text-purple-200 font-semibold">Meu Perfil</Link></li>
              <li>
                <button onClick={fazerLogout} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm font-bold">
                  Sair
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="hover:text-purple-200">Login</Link></li>
              <li><Link to="/cadastro" className="hover:text-purple-200">Cadastre-se</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}