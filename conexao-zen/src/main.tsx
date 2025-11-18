import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './globals.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from './routes/Error/index.tsx';
import Cadastro from './routes/Cadastro/index.tsx';
import Login from './routes/Login/index.tsx';
import Integrantes from './routes/Integrantes/index.tsx';
import Programas from './routes/Programas/index.tsx';
import { ProvedorAutenticacao } from './context/ContextoAuten.tsx';
import Checkin from './routes/Checkin/index.tsx';
import RotaProtegida from './components/RotaProtegida/RotaProtegida.tsx';
import CadastroPrograma from './routes/Programas/cadastro.tsx';
import Home from './routes/Home/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      // --- Rotas públicas ---
      { path: "/cadastro", element: <Cadastro /> },
      { path:  "/", element: <Home/>},
      { path: "/login", element: <Login /> },
      { path: "/integrantes", element: <Integrantes /> },

      // --- Rotas protegidas ---
      {
        element: <RotaProtegida />,
        children: [
          { path: "/programas", element: <Programas /> },
          { path: "/programas/novo", element: <CadastroPrograma /> },
          { path: "/checkin", element: <Checkin /> }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProvedorAutenticacao>
      <RouterProvider router={router} />
    </ProvedorAutenticacao>
  </React.StrictMode>
);