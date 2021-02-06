import React from 'react';
import RenderPoints from './RenderPoint';
import './App.css';

const location = [4.08466, -76.19536];
const locationPrueba = [4.08470, -76.19550];
const zoom = 12;

function App() {
 
  return (
    <div className="App">
      <MapContainer center={location} zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        <Marker position={location}>
          <Popup minWidth={90}>
            Estacion: <br />
            Direccion: <br />
            Telefono: <br />
            Latitud: <br />
            Longitud: <br />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
