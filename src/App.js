import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Header from './components/Header';
import Mans from './components/Mans';
import About from './components/About';
import Womans from './components/Womans';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/mans' element={<Mans/>}/>
        <Route path='/womans' element={<Womans/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

