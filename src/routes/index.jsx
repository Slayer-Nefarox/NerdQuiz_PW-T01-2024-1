import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz"



function RoutesApp() 
{
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Quiz" element={<Quiz />} />
    </Routes>
  );
}
  
  export default RoutesApp;