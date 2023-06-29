import { useState } from 'react'
import './App.css'
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
