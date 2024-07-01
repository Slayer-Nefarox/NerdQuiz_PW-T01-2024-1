import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/auth";

export default function Private({ children }) {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Se não estiver logado, redireciona para a página raiz
  if (!signed) {
    return <Navigate to="/" replace />;
  }

  return children;
}
