import React from 'react'
import Home from "./page/Home"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
            <Routes>

<Route path="/" element={<Home />} />

</Routes>
    </div>
  )
}

export default App
