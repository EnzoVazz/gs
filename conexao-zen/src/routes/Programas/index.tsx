import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { ProgramaType } from '../../types/programa';

const API_URL = "https://gs-quarkus.onrender.com"; 

export default function Programas() {
  const [programas, setProgramas] = useState<ProgramaType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProgramas = async () => {
      try {
        const response = await fetch(`${API_URL}/programa`);
        if (!response.ok) {
          throw new Error('Falha ao buscar dados dos programas.');
        }
        const data: ProgramaType[] = await response.json();
        setProgramas(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProgramas();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmacao = window.confirm("Tem certeza que deseja excluir este programa?");
    if (!confirmacao) return;

    try {
      const response = await fetch(`${API_URL}/programa/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Erro ao excluir o programa.");
      }

      setProgramas(listaAtual => listaAtual.filter(prog => prog.id_programa !== id));
      
      alert("Programa excluído com sucesso!");

    } catch (error: any) {
      console.error(error);
      alert("Erro ao tentar excluir: " + error.message);
    }
  };

  if (loading) return <p className="text-center p-4">Carregando programas...</p>;
  if (error) return <p className="text-center text-red-500 p-4">Erro: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-purple-800">
          Programas de Bem-Estar
        </h1>
        <Link 
          to="/programas/novo" 
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition font-semibold"
        >
          + Novo Programa
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programas.map((programa) => (
          <div 
            key={programa.id_programa}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold text-purple-900 mb-2">
                {programa.nm_programa}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Oferecido por: <span className="font-medium">{programa.empresa.nm_empresa}</span>
              </p>
              <p className="text-gray-700 mb-4">
                {programa.descricao_programa}
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Início: {new Date(programa.dt_inicio_programa).toLocaleDateString('pt-BR')}
              </p>
            </div>

            <button 
              onClick={() => handleDelete(programa.id_programa)}
              className="w-full bg-red-100 text-red-700 py-2 rounded hover:bg-red-200 transition font-semibold border border-red-200"
            >
              Excluir
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}