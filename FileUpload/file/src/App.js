import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "./page/Home"
import Upload from './page/Upload';
import Display from './page/Display';
import Dapp from  './Dapps/Dapp'

function App() {
  return (
    <div>

    
            <Routes>

<Route path="/" element={<Home />} />

<Route path="/upload" element={<Upload/>} />

<Route path="/display" element={<Display />} />


</Routes>
    </div>
  )
}

export default App