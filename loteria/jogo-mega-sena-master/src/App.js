import React from 'react';
import './App.css';
import Mega from './components/mega/Mega';
import Card from './components/layout/Card.jsx';
//import Input from './components/form/Input';

function App() {

  return (
    <>
    <div className="App">
      <header className="App-header">             
        <h2 style={{ color: '#fff' }}>Mega-Sena</h2>
      </header>      

      <div className="Cards">
        {/*
        <Card titulo="Definir a quantidade de números" color="#354458">     
          <br />
          <br />
          <br />
          <br />     
          <Input></Input>
        </Card>
        */}
        <Card titulo="Gerar resultado aleatório" color="#5BB12F">           
           {/* <Mega qtdNumero={6} />  */}
           <Mega /> 
        </Card>      


      </div>

    </div>
    </>
  );
}

export default App;
