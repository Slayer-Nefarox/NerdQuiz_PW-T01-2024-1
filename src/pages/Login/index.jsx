import "./Login.css";
import { Link } from "react-router-dom";


export default function Login() {

  return (






    <div className="container">
      <div className="login">
        <form>
          <textarea name="login" id="arroz"></textarea>
        </form>
       
        <Link to="/register">Criar uma conta</Link>
      </div>
    </div>
  );
}
