import { BrowserRouter, Link } from "react-router-dom";
import RoutesApp from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <>
      <div className="container">
        <div className=" texto neon center">
            <h1>NerdQuiz</h1>
            <h4>Are you nerd enough?</h4>
            <Link to={"#"} className='neon button'> Ready</Link>
        </div>
      </div>
      <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={3000} />
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter></>

  )
}

export default App
