import { createContext, useContext, useState, type ReactNode } from 'react';

interface UsuarioLogado {
  id_funcionario: number;
  nm_funcionario: string;
  email: string;
}

interface TipoContextoAuth {
  usuario: UsuarioLogado | null;
  estaAutenticado: boolean;
  entrar: (dadosUsuario: UsuarioLogado) => void;
  sair: () => void;
}

const ContextoAuth = createContext<TipoContextoAuth | undefined>(undefined);

export function ProvedorAutenticacao({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<UsuarioLogado | null>(() => {
    const dadosSalvos = localStorage.getItem('usuario_logado');
    return dadosSalvos ? JSON.parse(dadosSalvos) : null;
  });

  const entrar = (dadosUsuario: UsuarioLogado) => {
    setUsuario(dadosUsuario);
    localStorage.setItem('usuario_logado', JSON.stringify(dadosUsuario));
  };

  const sair = () => {
    setUsuario(null);
    localStorage.removeItem('usuario_logado');
  };

  return (
    <ContextoAuth.Provider 
      value={{ 
        usuario, 
        estaAutenticado: !!usuario, 
        entrar, 
        sair 
      }}
    >
      {children}
    </ContextoAuth.Provider>
  );
}

export function useAutenticacao() {
  const contexto = useContext(ContextoAuth);
  if (!contexto) {
    throw new Error('useAutenticacao deve ser usado dentro de um ProvedorAutenticacao');
  }
  return contexto;
}