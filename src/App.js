import React from 'react';
import './App.css';
import {useSelector} from"react-redux"

function App() {
  const {bookState}=useSelector(state=>state)
  return (
    <div className="App">
     hello
    </div>
  );
}

export default App;
