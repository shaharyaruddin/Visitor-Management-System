import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './pages/Header';
import Forms from './pages/Forms';
import Home from './pages/Home';
import MainScreen from './pages/MainScreen';

import {Route,Routes} from 'react-router-dom';


function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/mainscreen" element={<MainScreen />} />
      </Routes>
    
    
    
    </>
  )
}

export default App
