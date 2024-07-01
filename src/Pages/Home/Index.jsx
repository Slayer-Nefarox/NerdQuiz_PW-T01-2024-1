import { Link } from "react-router-dom";

export default function Home() 
{
    return (
        <div className="neon texto center">
            <div>
                <h1>NerdQuiz</h1>
                <h4>Are you nerd enough?</h4>
            </div>
            <Link to={"/Login"} className='neon list_row ready'> Ready</Link>
        </div>
    );
}