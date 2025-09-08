// PrivateRoute.jsx
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    // Se não houver token, redireciona para a tela de login
    return <Navigate to="/login" replace />;
  }

  // Se houver token, renderiza a rota normalmente
  return children;
}

export default PrivateRoute;
