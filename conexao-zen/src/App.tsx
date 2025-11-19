import { Outlet } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Rodape from './components/Rodape/Rodape';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Menu />
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <Rodape />
    </div>
  );
}

export default App;