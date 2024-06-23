import { Link } from "react-router-dom";

export default function Menu() 
{
    return (
        <div className="neon center">
            <div className = "quiz">
                <div className = "questions">
                    <h1> Nerd Quiz </h1>
                </div>
                <div className="questions">
                    <Link to={"/Quiz"} className='neon  alt button'> Start</Link>
                    <Link to={"/Score"} className='neon button alt'> Score</Link>
                    <Link to={"/"} className='neon button alt'> Exit</Link>
                    
                </div>   
            </div>
        </div>
    )
}