import { useTema } from "../../context/ThemeContext";


export default function BotaoTema() {
  const { tema, alternarTema } = useTema();

  return (
    <button
      onClick={alternarTema}
      className="p-2 rounded-full bg-purple-700 dark:bg-gray-700 text-yellow-300 hover:bg-purple-600 dark:hover:bg-gray-600 transition-colors shadow-sm"
      title="Alternar Tema (Claro/Escuro)"
    >
      {tema === "light" ? "🌙" : "☀️"}
    </button>
  );
}