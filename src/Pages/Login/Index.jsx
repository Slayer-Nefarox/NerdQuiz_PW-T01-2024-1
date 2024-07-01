import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/auth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, loadingAuth } = useContext(AuthContext);

    async function handleLogin(e) {
      e.preventDefault();
      // verifica se os campos email e password foram preenchidos para fazer o login
      if (email !== "" && password !== "") {
        login(email, password);
      };
    }
    

    return (
      <div className="neon column center">
        <ToastContainer />
        <h2 className="texto" id="login">NerdQuiz</h2>
        <form className="form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="neon ready list_row">{loadingAuth ? "Carregando..." : "Acessar"}</button>
          <Link className="neon ready list_row" to="/register">Criar uma conta</Link>
        </form>
        
      </div>
    );
}