import { useState, useEffect } from 'react';
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

  if (loading) {
    return <p className="text-center p-4">Carregando programas...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 p-4">Erro: {error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center">
        Programas de Bem-Estar
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programas.map((programa) => (
          <div 
            key={programa.id_programa}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-purple-900 mb-2">
              {programa.nm_programa}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Oferecido por: {programa.empresa.nm_empresa}
            </p>
            <p className="text-gray-700 mb-2">
              {programa.descricao_programa}
            </p>
            <p className="text-sm text-gray-600">
              Início: {new Date(programa.dt_inicio_programa).toLocaleDateString('pt-BR')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}