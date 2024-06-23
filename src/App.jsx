import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./Pages/Home/Index.jsx"
import Quiz from "./Pages/Quiz/Index.jsx"
import Score from "./Pages/Score/Index.jsx"
import Menu from "./Pages/Menu/Index.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/Menu' element = {<Menu/>}/>
            <Route path='/Quiz' element = {<Quiz/>}/>
            <Route path='/Score' element = {<Score/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
