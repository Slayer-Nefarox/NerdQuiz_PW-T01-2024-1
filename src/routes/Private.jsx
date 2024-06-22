import { useContext } from "react";
import { Navigate } from "react-router-dom";


export default function Private({ children }) {
  //console.log("Teste");
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return <div></div>;
  }

  //console.log(signed);
  // se não estiver logado, redireciona para a página Home
  if (!signed) {
    return <Navigate to="#" />;
  }

  return children;
}