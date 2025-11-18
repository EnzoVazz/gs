const integrantes = [
  {
    nome: "Enzo Vaz",
    rm: "RM561702",
    turma: "1TDSPF",
    github: "https://github.com/EnzoVazz",
    linkedin: "https://www.linkedin.com/in/enzo-vaz-740a33330/",
    foto: "https://github.com/EnzoVazz.png" 
  },
  {
    nome: "Lucas Ryuji Fukuda",
    rm: "RM562152",
    turma: "1TDSPF",
    github: "https://github.com/LucasFukuda2408", 
    linkedin: "https://www.linkedin.com/in/lucas-fukuda-a31847379/", 
    foto: "https://github.com/LucasFukuda2408.png" 
  }
];

export default function Integrantes() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center">
        Integrantes do Grupo
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {integrantes.map((dev) => (
          <div 
            key={dev.rm} 
            className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center"
          >
            <img 
              src={dev.foto} 
              alt={`Foto de ${dev.nome}`} 
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-200"
            />
            
            <h2 className="text-2xl font-semibold text-purple-900">{dev.nome}</h2>
            <p className="text-gray-600">{dev.rm} | {dev.turma}</p>

            <div className="flex justify-center gap-4 mt-5">
              <a 
                href={dev.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-700"
              >
                GitHub
              </a>
              <a 
                href={dev.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-700"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}