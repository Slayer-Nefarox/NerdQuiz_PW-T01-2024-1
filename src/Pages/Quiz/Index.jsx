import { Link } from "react-router-dom";

export default function Quiz() 
{
    return (
        <div className="neon center">
            <div className = "quiz">
                <div className = "questions">
                    <h5> - Inserir questão aqui - </h5>
                </div>
                <div className="neon questions">
                    <div className="question_row">
                        <button type="button" className=" neon alt"> alternativa a</button>
                        <button type="button" className=" neon alt"> alternativa b</button>
                    </div>
                    <div className="question_row">
                        <button type="button" className=" neon alt"> alternativa c</button>
                        <button type="button" className=" neon alt"> alternativa d</button>
                    </div>
                </div>   
            </div>
        </div>
    )
}