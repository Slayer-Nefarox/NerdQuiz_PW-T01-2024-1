import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";

export default function Menu() {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="neon center">
      <div className="quiz">
        <div className="questions">
          <h1>Nerd Quiz</h1>
        </div>
        <div className="questions">
          <Link to={"/Quiz"} className='neon alt list_row'>Start</Link>
          <Link to={"/Score"} className='neon alt list_row'>Score</Link>
          <Link to={"/"} className='neon alt list_row' onClick={handleLogout}>Exit</Link>
        </div>
      </div>
    </div>
  );
}
