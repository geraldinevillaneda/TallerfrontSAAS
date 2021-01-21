import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';
import icono from 'leaflet/dist/images/marker-icon.png';
import isombra from 'leaflet/dist/images/marker-shadow.png';
import retina from 'leaflet/dist/images/marker-icon-2x.png';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: retina,
  iconUrl: icono,
  shadowUrl: isombra,
});

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
