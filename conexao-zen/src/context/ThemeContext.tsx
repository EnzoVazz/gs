import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Tema = "light" | "dark";

interface PropsContextoTema {
  tema: Tema;
  alternarTema: () => void;
}

const ContextoTema = createContext<PropsContextoTema | undefined>(undefined);

export function ProvedorTema({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Tema>(() => {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo) {
      return temaSalvo as Tema;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove("light", "dark");
    root.classList.add(tema);
    
    localStorage.setItem("tema", tema);
  }, [tema]);

  function alternarTema() {
    setTema((anterior) => (anterior === "light" ? "dark" : "light"));
  }

  return (
    <ContextoTema.Provider value={{ tema, alternarTema }}>
      {children}
    </ContextoTema.Provider>
  );
}

export function useTema() {
  const contexto = useContext(ContextoTema);
  if (!contexto) {
    throw new Error("useTema deve ser usado dentro de um ProvedorTema");
  }
  return contexto;
}