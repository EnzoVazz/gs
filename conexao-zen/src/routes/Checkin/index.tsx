import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAutenticacao } from '../../context/ContextoAuten';
import type { CheckinForm } from '../../types/checkin';

const API_URL = "https://gs-quarkus.onrender.com"; 

export default function Checkin() {
  const { register, handleSubmit } = useForm<CheckinForm>();
  const navigate = useNavigate();
  
  const { usuario } = useAutenticacao();

  const onSubmit = async (data: CheckinForm) => {
    if (!usuario?.id_funcionario) {
      alert("Erro: Usuário não identificado. Faça login novamente.");
      navigate('/login');
      return;
    }

    try {
      const payload = {
        dt_checkin: data.dt_checkin,
        nr_humor: Number(data.nr_humor),
        nr_estresse: Number(data.nr_estresse),
        funcionario: {
          id_funcionario: usuario.id_funcionario
        }
      };

      const response = await fetch(`${API_URL}/checkin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Erro ao registrar check-in.');
      }

      alert('Check-in realizado com sucesso! Mantenha-se zen.');
      navigate('/programas'); 

    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-600">
        <h1 className="text-3xl font-bold text-purple-800 mb-2 text-center">
          Check-in Diário
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Olá, <strong>{usuario?.nm_funcionario}</strong>! Como você está se sentindo hoje?
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Data</label>
            <input 
              type="date"
              {...register('dt_checkin', { required: 'A data é obrigatória' })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              defaultValue={new Date().toISOString().split('T')[0]} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nível de Humor
            </label>
            <select
              {...register('nr_humor', { required: true, valueAsNumber: true })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="5">5 - Excelente 😁</option>
              <option value="4">4 - Bom 🙂</option>
              <option value="3">3 - Neutro 😐</option>
              <option value="2">2 - Ruim 😞</option>
              <option value="1">1 - Péssimo 😫</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nível de Estresse
            </label>
            <select
              {...register('nr_estresse', { required: true, valueAsNumber: true })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="1">1 - Zen (Baixo) 🧘</option>
              <option value="2">2 - Leve</option>
              <option value="3">3 - Moderado</option>
              <option value="4">4 - Alto 😤</option>
              <option value="5">5 - Explosivo (Burnout) 🤯</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 px-4 bg-purple-700 text-white font-bold rounded-lg hover:bg-purple-800 transition duration-300 shadow-md"
          >
            Registrar Check-in
          </button>
        </form>
      </div>
    </div>
  );
}