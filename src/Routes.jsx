import React from 'react'
import Header from './components/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Clima from './pages/Clima.jsx'
import Contato from './pages/Contato.jsx'

function Rotas() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Clima />} />
        <Route exact path="/clima" element={<Clima />} />
        <Route exact path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas