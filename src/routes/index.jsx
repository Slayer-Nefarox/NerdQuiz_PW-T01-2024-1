import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Index";
import Login from "../Pages/Login/Index";
import Register from "../Pages/Register/Index";
import Menu from "../Pages/Menu/Index";
import Quiz from "../Pages/Quiz/Index";
import Score from "../Pages/Score/Index";

import Private from "./Private";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/menu"
        element={
          <Private>
            <Menu />
          </Private>
        }
      />
      <Route
        path="/quiz"
        element={
          <Private>
            <Quiz />
          </Private>
        }
      />
    
      <Route
        path="/score"
        element={
          <Private>
            <Score />
          </Private>
        }
      />
    </Routes>
  );
}

export default RoutesApp;