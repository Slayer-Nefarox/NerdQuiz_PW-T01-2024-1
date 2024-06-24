import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Menu() 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Função que é executada quando o formulário é submetido para cadastrar um novo usuário no sistema
    async function handleRegister(e) {
        e.preventDefault();

        // verifica se os campos email e password foram preenchidos
        if (email !== "" && password !== "") {
        // cria um novo usuário no sistema
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
            // se o usuário foi criado com sucesso, redireciona para a rota /admin da aplicação
            navigate("/admin", { replace: true });
            toast.success("Bem-Vindo ao Sistema!", {
                position: "top-right",
            });
            })
            .catch(() => {
            // se ocorreu algum erro ao criar o usuário, exibe uma mensagem de erro
            console.log("ERRO AO FAZER O CADASTRO");
            toast.error();("Erro ao Fazer Cadastro!", {
                position: "top-right",
            });
            });
        } else {
        // Caso os campos email e password não tenham sido preenchidos, exibe uma mensagem de erro
        alert("Preencha todos os campos!");
        toast.warn("Preencha todos os campos!", {
            position: "top-right",
        });
        }
    }

    return (
        <div class="neon column center">
            <h2 class="texto" id="registro">NerdQuiz</h2>
            <form className="form" onSubmit={handleRegister}>
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

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}