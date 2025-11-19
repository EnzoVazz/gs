import { useForm } from 'react-hook-form';
import type { ContatoForm } from '../../types/contato';

export default function Contato() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContatoForm>();

  const onSubmit = (data: ContatoForm) => {
    console.log("Mensagem enviada:", data);
    alert("Obrigado! Sua mensagem foi enviada com sucesso.");
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">Fale Conosco</h1>
      
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <p className="text-gray-600 mb-8 text-center">
          Dúvidas, sugestões ou feedback? Preencha o formulário abaixo.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
            <input 
              {...register("nome", { required: "Nome é obrigatório" })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              placeholder="Seu nome completo"
            />
            {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email"
              {...register("email", { required: "Email é obrigatório" })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              placeholder="seu@email.com"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
            <textarea 
              {...register("mensagem", { required: "Digite sua mensagem" })}
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              placeholder="Como podemos ajudar?"
            />
            {errors.mensagem && <span className="text-red-500 text-sm">{errors.mensagem.message}</span>}
          </div>

          <button 
            type="submit" 
            className="w-full py-3 px-4 bg-purple-700 text-white font-bold rounded-lg hover:bg-purple-800 transition shadow-md"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}