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
import CadastroPrograma from './routes/Programas/cadastro.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
    {path:"/cadastro", element:<Cadastro/>},
    {path:"/login", element:<Login/>},
    {path:"/integrantes", element:<Integrantes/>},
    {path:"/programas", element:<Programas/>},
    {path:"/programas/novo", element:<CadastroPrograma/>}  
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
