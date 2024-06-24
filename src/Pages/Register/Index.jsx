import { useState, useContext  } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/auth'
export default function Register() 
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { register, loadingAuth } = useContext(AuthContext);

    // Função que é executada quando o formulário é submetido para cadastrar um novo usuário no sistema
    async function handleRegister(e) {
        e.preventDefault();

        // verifica se os campos email e password foram preenchidos
        if (email !== "" && password !== "") {
            await register(email, password,name)
        }
    }

    return (
        <div className="neon column center">
            <h2 className="texto" id="registro">NerdQuiz</h2>
            <form className="form" onSubmit={handleRegister}>
                <input 
                type="text" 
                placeholder="Seu nome"
                value={name}
                onChange={ (e) => setName(e.target.value) }
                />
                
                <input
                type="text"
                placeholder="Digite seu email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input
                type="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">{loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>
            </form>
            <Link to="/login">Já possui uma conta? Faça login</Link>
        </div>
    )
}