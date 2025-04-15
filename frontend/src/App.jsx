import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './page/Home';
import Notfound from './page/Notfound';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
  )
}

export default App
