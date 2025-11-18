import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { ProgramaForm } from '../../types/programa';


const API_URL = "https://gs-quarkus.onrender.com"; 

export default function CadastroPrograma() {
  const { register, handleSubmit, formState: { errors } } = useForm<ProgramaForm>();
  const navigate = useNavigate();

  const onSubmit = async (data: ProgramaForm) => {
    try {
      const payload = {
        nm_programa: data.nm_programa,
        dt_inicio_programa: data.dt_inicio_programa,
        dt_fim_programa: data.dt_fim_programa || null, 
        descricao_programa: data.descricao_programa,
        empresa: {
          id_empresa: Number(data.id_empresa)
        }
      };

      const response = await fetch(`${API_URL}/programa`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar programa.');
      }

      alert('Programa cadastrado com sucesso!');
      navigate('/programas'); 

    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">
        Novo Programa
      </h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome do Programa</label>
          <input 
            type="text"
            {...register('nm_programa', { required: 'Nome é obrigatório' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
          {errors.nm_programa && <small className="text-red-500">{errors.nm_programa.message}</small>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Início</label>
            <input 
              type="date"
              {...register('dt_inicio_programa', { required: 'Obrigatório' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
            {errors.dt_inicio_programa && <small className="text-red-500">{errors.dt_inicio_programa.message}</small>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Fim (Opcional)</label>
            <input 
              type="date"
              {...register('dt_fim_programa')}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Descrição</label>
          <textarea 
            {...register('descricao_programa', { required: 'Descrição é obrigatória' })}
            rows={3}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
          {errors.descricao_programa && <small className="text-red-500">{errors.descricao_programa.message}</small>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">ID da Empresa (ex: 1)</label>
          <input 
            type="number"
            {...register('id_empresa', { required: 'Obrigatório', valueAsNumber: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-purple-800 text-white font-semibold rounded-md hover:bg-purple-900 transition duration-200"
        >
          Salvar Programa
        </button>
      </form>
    </div>
  );
}