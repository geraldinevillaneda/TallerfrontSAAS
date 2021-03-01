import React from 'react'
import {Marker} from 'react-leaflet'
import {IconLocation} from './IconLocation'



const Markers = (props)=> {

    const {data} = props;

    const markers = data.map((gasolinera, i) => (
        /* {/* <Marker key={i} position = {{lat: gasolinera[i].latitud_estacion, lng: gasolinera[i].longitud_estacion}} icon={IconLocation}/> *//*} */
        console.log(gasolinera[i].latitud_estacion)
    )); 

    return markers;
};

export default Markers