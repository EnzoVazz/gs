import { Navigate, Outlet } from 'react-router-dom';
import { useAutenticacao } from '../../context/ContextoAuten';


export default function RotaProtegida() {
  const { estaAutenticado } = useAutenticacao();

  if (!estaAutenticado) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}