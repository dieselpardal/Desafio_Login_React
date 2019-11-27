import React from 'react';
import Login from './login.js'
import './App.css';


function Welcome(props) {
  return <h1>Desafio {props.name}</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Welcome name = "Diesel"></Welcome>
       <Login></Login>
      </header>
    </div>
  );
}

export default App;
