import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Index.jsx";
import Login from "../Pages/Login/Index.jsx";
import Register from "../Pages/Register/Index.jsx";
import Menu from "../Pages/Menu/Index.jsx";

import Quiz from "../Pages/Quiz/Index.jsx";
import Cloud from "../Pages/Quiz/Cloud/Index.jsx"
import DevOps from "../Pages/Quiz/DevOps/Index.jsx"
import Linux from "../Pages/Quiz/Linux/Index.jsx"
import Networking from "../Pages/Quiz/Networking/Index.jsx"
import Programming from "../Pages/Quiz/Programming/Index.jsx"
import Mixed from "../Pages/Quiz/Mixed/Index.jsx"

import Score from "../Pages/Score/Index.jsx";
import Cloud_Score from "../Pages/Score/Cloud/Index.jsx"
import DevOps_Score from "../Pages/Score/DevOps/Index.jsx"
import Linux_Score from "../Pages/Score/Linux/Index.jsx"
import Networking_Score from "../Pages/Score/Networking/Index.jsx"
import Programming_Score from "../Pages/Score/Programming/Index.jsx"
import Mixed_Score from "../Pages/Score/Mixed/Index.jsx"


import Private from "./Private";


function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/menu" element={<Private><Menu /></Private>}/>

      <Route path="/quiz" element={<Private><Quiz /></Private>}/>

      <Route path="/cloud" element={<Private><Cloud /></Private>}/>
      <Route path="/devops" element={<Private><DevOps /></Private>}/>
      <Route path="/linux" element={<Private><Linux /></Private>}/>
      <Route path="/networking" element={<Private><Networking /></Private>}/>
      <Route path="/programming" element={<Private><Programming /></Private>}/>
      <Route path="/mixed" element={<Private><Mixed /></Private>}/>

      <Route path="/score" element={<Private><Score /></Private>}/>

      <Route path="/cloud_score" element={<Private><Cloud_Score /></Private>}/>
      <Route path="/devops_score" element={<Private><DevOps_Score /></Private>}/>
      <Route path="/linux_score" element={<Private><Linux_Score /></Private>}/>
      <Route path="/networking_score" element={<Private><Networking_Score /></Private>}/>
      <Route path="/programming_score" element={<Private><Programming_Score /></Private>}/>
      <Route path="/mixed_score" element={<Private><Mixed_Score /></Private>}/>


    </Routes>
  );
}

export default RoutesApp;