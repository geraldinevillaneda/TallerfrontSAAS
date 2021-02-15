import React from 'react'
import {Helmet} from 'react-helmet';

import CreateUser from '../../components/UserCreate/index'
import Header from '../../components/Header/index'

import './userCreate.css'

export default function CreateUserPage () {
    return(
        <>
            <Helmet>
                <title>Nuevo usuario</title>
            </Helmet>
            <Header />
            <div className="wrapper fadeInDown">
                {/* <div id="formContent" className="contenedor">
                    <CreateUser />
                </div>
                <div className="col-12 ">
                    <button className="btn btn-primary boton divBoton" type="submit" >Crear Usuario</button>
                </div> */}
            </div>
        </>
    );
}