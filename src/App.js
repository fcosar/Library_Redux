import React from 'react';
import './App.css';
import {useSelector} from"react-redux"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import NotFaund from './pages/NotFaund';

function App() {
  const {bookState}=useSelector(state=>state)
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/" element={<NotFaund/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
