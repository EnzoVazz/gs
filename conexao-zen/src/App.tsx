import { Outlet } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Rodape from './components/Rodape/Rodape';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Menu />
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <Rodape />
    </div>
  );
}

export default App;