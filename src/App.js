import React from 'react';
import RenderPoints from './RenderPoint';
import './App.css';

const location = [4.08466, -76.19536];
const locationPrueba = [4.08470, -76.19550];
const zoom = 12;

const estacinesDeServicioTulua = {

};


function App() {
 
  return (
    <div className="App">
      <div>
      <RenderPoints />
      </div>
    </div>
  );
}

export default App;
