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

    async function handleRegister(e) {
        e.preventDefault();

        if (email !== "" && password !== "") {
 
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
           
            navigate("/admin", { replace: true });
            toast.success("Bem-Vindo ao Sistema!", {
                position: "top-right",
            });
            })
            .catch(() => {
            console.log("ERRO AO FAZER O CADASTRO");
            toast.error();("Erro ao Fazer Cadastro!", {
                position: "top-right",
            });
            });
        } else {
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