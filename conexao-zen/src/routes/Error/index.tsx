import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-purple-800 mb-4">Erro 404</h1>
      <p className="text-lg mb-6">Ops! A página que você está procurando não foi encontrada.</p>
      <Link 
        to="/" 
        className="bg-purple-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-900"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}