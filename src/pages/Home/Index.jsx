import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() 
{
    return (
        <div className="container">
            <div className=" texto neon center">
                <h1>NerdQuiz</h1>
                <h4>Are you nerd enough?</h4>
                <Link to={"/login"} className='neon button'> Ready</Link>
            </div>
        </div>
    );
}