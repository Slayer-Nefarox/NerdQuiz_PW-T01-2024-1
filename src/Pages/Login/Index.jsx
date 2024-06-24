import { Link } from "react-router-dom";

import { auth } from "../../firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

export default function Login() 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function handleLogin(e) {
        e.preventDefault();
    
        // verifica se os campos email e password foram preenchidos para fazer o login
        if (email !== "" && password !== "") {
          // faz o login no sistema com o email e password informados
          await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
              // navegar para /admin
              // se o login foi realizado com sucesso, redireciona para a rota /admin da aplicação
              // replace: true é utilizado para substituir a rota atual pela rota /admin
              navigate("/admin", { replace: true });
              toast.success("Bem-Vindo ao Sistema!", {
                position: "top-right",
              });
            })
            .catch(() => {
              // se ocorreu algum erro ao fazer o login, exibe uma mensagem de erro
              console.log("ERRO AO FAZER O LOGIN");
              toast.error();("Erro ao Fazer o Login!", {
                position: "top-right",
              });
            });
        } else {
          // caso os campos email e password não tenham sido preenchidos, exibe uma mensagem de erro
          //alert("Preencha todos os campos!");
          toast.warn("Preencha todos os campos!", {
            position: "top-right",
          });
        }
    }

    return (
        <div className="neon column center">
            <h2 className="texto" id="login">NerdQuiz</h2>
            <form className="form" onSubmit={handleLogin}>
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

                <button type="submit">Acessar</button>
            </form>
        </div>
    );
}