import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import RoutesApp from './Routes'

import AuthProvider from "./Contexts/auth";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <AuthProvider>  
          <RoutesApp />
      </AuthProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
