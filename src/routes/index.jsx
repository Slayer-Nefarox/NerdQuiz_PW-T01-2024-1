import { Routes, Route } from "react-router-dom";
import Home from "../App";
import Login from "../pages/Login";



function RoutesApp() {
    return (
      <Routes>
        <Route path="#" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }
  
  export default RoutesApp;