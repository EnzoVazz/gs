import { useNavigate } from 'react-router-dom';
import { useAutenticacao } from '../../context/ContextoAuten';

const API_URL = "https://gs-quarkus.onrender.com";

export default function Perfil() {
  const { usuario, sair } = useAutenticacao();
  const navigate = useNavigate();

  const handleExcluirConta = async () => {
    if (!usuario) return;

    const confirmacao = window.confirm(
      "ATENÇÃO: Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita."
    );

    if (confirmacao) {
      try {
        const response = await fetch(`${API_URL}/funcionario/${usuario.id_funcionario}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error("Erro ao excluir a conta.");
        }

        alert("Sua conta foi excluída. Sentiremos sua falta!");
        
        sair();
        navigate('/');

      } catch (error) {
        console.error(error);
        alert("Erro ao tentar excluir.");
      }
    }
  };

  if (!usuario) return <p>Carregando...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-purple-100">
        
        <div className="bg-purple-800 p-8 text-center">
          <div className="w-24 h-24 bg-purple-200 rounded-full mx-auto flex items-center justify-center text-4xl mb-4 border-4 border-white shadow-sm">
            👤
          </div>
          <h1 className="text-3xl font-bold text-white">{usuario.nm_funcionario}</h1>
          <p className="text-purple-200">{usuario.cargo}</p>
        </div>

        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Email Corporativo</p>
              <p className="font-semibold text-gray-800">{usuario.email}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Empresa</p>
              <p className="font-semibold text-gray-800">{usuario.nome_empresa}</p>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="pt-4">
            <h3 className="text-red-600 font-bold mb-2">Zona de Perigo</h3>
            <p className="text-sm text-gray-500 mb-4">
              Ao excluir sua conta, todos os seus dados e histórico de check-ins serão apagados permanentemente.
            </p>
            <button 
              onClick={handleExcluirConta}
              className="w-full border-2 border-red-500 text-red-500 font-bold py-3 px-4 rounded-lg hover:bg-red-50 transition"
            >
              Excluir Minha Conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}