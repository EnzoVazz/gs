import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { LoginForm } from '../../types/login'; 
import { Link } from 'react-router-dom';

const API_URL = "https://gs-quarkus.onrender.com"; 

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    try {
      const payload = {
        email: data.email,
        senha: data.senha
      };

      const response = await fetch(`${API_URL}/funcionario/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Email ou senha inválidos.');
      }

      const funcionarioLogado = await response.json();
      
      alert(`Bem-vindo, ${funcionarioLogado.nm_funcionario}!`);
      navigate('/'); 

    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">
        Login
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
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

        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-purple-800 text-white font-semibold rounded-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Entrar
        </button>

        <p className="text-center text-sm text-gray-600">
          Não tem uma conta?{' '}
          <Link to="/cadastro" className="font-medium text-purple-800 hover:text-purple-600">
            Cadastre-se
          </Link>
        </p>

      </form>
    </div>
  );
}