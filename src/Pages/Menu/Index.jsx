import { useContext} from "react";
import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";

export default function Menu() 
{
    const { logout } = useContext(AuthContext);
    return (
        <div className="neon center">
            <div className = "quiz">
                <div className = "questions">
                    <h1> Nerd Quiz </h1>
                </div>
                <div className="questions">
                    <Link to={"/Quiz"} className='neon  alt button'> Start</Link>
                    <Link to={"/Score"} className='neon button alt'> Score</Link>
                    <button onClick={logout} className='neon button alt'>Exit</button>
                    
                </div>   
            </div>
        </div>
    )
}