export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center">
        Perguntas Frequentes
      </h1>

      <div className="space-y-4">
        
        <details className="group bg-white rounded-lg shadow-sm border border-gray-200">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-purple-900 hover:bg-purple-50 transition">
            <span>Como funciona o Check-in diário?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
            </span>
          </summary>
          <div className="text-gray-600 px-6 pb-6">
            <p>O check-in é uma ferramenta rápida onde você registra seu nível de humor e estresse. Esses dados são anônimos e ajudam a empresa a entender o clima organizacional.</p>
          </div>
        </details>

        <details className="group bg-white rounded-lg shadow-sm border border-gray-200">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-purple-900 hover:bg-purple-50 transition">
            <span>Quem pode ver meus dados?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
            </span>
          </summary>
          <div className="text-gray-600 px-6 pb-6">
            <p>Seus dados individuais são confidenciais. O RH recebe apenas relatórios agregados (médias da equipe) para tomar decisões sobre programas de bem-estar.</p>
          </div>
        </details>

        <details className="group bg-white rounded-lg shadow-sm border border-gray-200">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-purple-900 hover:bg-purple-50 transition">
            <span>Como me inscrevo nos programas?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
            </span>
          </summary>
          <div className="text-gray-600 px-6 pb-6">
            <p>Acesse a aba "Programas" no menu principal. Lá você verá todas as iniciativas disponíveis e poderá visualizar os detalhes de datas e horários.</p>
          </div>
        </details>

      </div>
    </div>
  );
}