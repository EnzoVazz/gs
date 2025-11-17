import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { CadastroForm } from '../../types/cadastro';

const API_URL = "https://gs-quarkus.onrender.com"; 

export default function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm<CadastroForm>();
  const navigate = useNavigate();

  const onSubmit = async (data: CadastroForm) => {
    try {
      const payload = {
        nm_funcionario: data.nm_funcionario,
        email: data.email,
        senha: data.senha,
        cargo: data.cargo,
        empresa: {
          id_empresa: Number(data.id_empresa) 
        }
      };

      const response = await fetch(`${API_URL}/funcionario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar. Verifique os dados.');
      }

      alert('Cadastro realizado com sucesso! Faça o login.');
      navigate('/login'); 

    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">
        Crie sua Conta
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
          <input 
            type="text"
            {...register('nm_funcionario', { required: 'Nome é obrigatório' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
          {errors.nm_funcionario && <small className="text-red-500">{errors.nm_funcionario.message}</small>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email"
            {...register('email', { required: 'Email é obrigatório' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
          {errors.email && <small className="text-red-500">{errors.email.message}</small>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Senha</label>
          <input 
            type="password"
            {...register('senha', { required: 'Senha é obrigatória' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
          {errors.senha && <small className="text-red-500">{errors.senha.message}</small>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cargo (ex: Dev, Analista)</label>
          <input 
            type="text"
            {...register('cargo', { required: 'Cargo é obrigatório' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
          {errors.cargo && <small className="text-red-500">{errors.cargo.message}</small>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">ID da Empresa (ex: 1)</label>
          <input 
            type="number"
            {...register('id_empresa', { required: 'ID da Empresa é obrigatório', valueAsNumber: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
          {errors.id_empresa && <small className="text-red-500">{errors.id_empresa.message}</small>}
        </div>

        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-purple-800 text-white font-semibold rounded-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}