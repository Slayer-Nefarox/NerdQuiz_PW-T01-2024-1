import "./Login.css";
import { Link } from "react-router-dom";


export function Login() 
{
  return (
    <div className="container">
      <div className="login">
        <form>
          <textarea name="login" id="login"></textarea>
        </form>
       
        <Link to="/register">Criar uma conta</Link>
      </div>
    </div>
  );
}
