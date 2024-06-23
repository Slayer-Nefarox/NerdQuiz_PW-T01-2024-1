import { Link } from "react-router-dom";

export default function Score() 
{
    return (
        <div className="neon center">
            <div className = "quiz">
                <div className = "neon list_row">
                    <h3>.1:</h3>
                </div>
                <div className = "neon list_row">
                    <h3>.2:</h3>
                </div>
                <div className = "neon list_row">
                    <h3>.3:</h3>
                </div>
                <div className = "neon list_row">
                    <h3>.4:</h3>
                </div>
                <div className = "neon list_row">
                    <h3>.5:</h3>
                </div>
                <div className = "neon list_row">
                    <h3>.6:</h3>
                </div>
                <div className = "neon list_row">
                    <h3>.7:</h3>
                </div>
                <div className = "neon list_row">
                    <h3>.8:</h3>
                </div>
                <div className = "neon list_row">
                    <h3>.9:</h3>
                </div>
                <div className = "neon list_row">
                    <h3>.10:</h3>
                </div>
                <div className="neon resultado">
                    <Link to={"/Menu"} className='neon button alt'> Menu</Link>
                </div>
            </div>
        </div>
    )
}