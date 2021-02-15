import React from 'react'

import '../../pages/Login/login'

export default function userCreate (){
    return (
        <>
            <h2 className='titulo'>Formulario de ingreso de usuarios</h2>
            <form className="row g-3 formulario" >

                <label className="form-label col-sm-2 labelForm">Numero de documento</label>
                <div className="col-md-10">
                    <input type="text" className="form-control" id="documento" placeholder="Nro de documento"/>
                </div>

                
                <label className="form-label col-sm-2 labelForm">Nombres</label>
                <div className="col-md-10">
                    <input type="text" className="form-control" id="nombre" placeholder="Nombre completo"/>
                </div>

                
                <label className="form-label col-sm-2 labelForm">Tipo de documento</label>
                <div className="col-md-10 listaOpciones">
                    <select className="form-select" id="tipoD" required>
                        <option value='CC'>Cedula de Ciudadania</option>
                        <option value='TI'>Tarjeta de Identidad</option>
                    </select>
                </div>

                
                <label className="form-label col-sm-2 labelForm">Sexo</label>
                <div className="col-md-10 listaOpciones">
                    <select className="form-select" id="sexo" required>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                        <option value="O">Otro</option>
                    </select>
                </div>

                
                <label className="form-label col-sm-2 labelForm">Telefono</label>
                <div className="col-md-10">
                    <input type="text" className="form-control" id="telefono"  placeholder="Telefono" />
                </div>

                
                <label htmlFor="validationDefault03" className="form-label col-sm-2 labelForm">Direccion</label>
                <div className="col-md-10 ">
                    <input type="text" className="form-control" id="direccion" placeholder="Direccion"/>
                </div>

                
                <label className="form-label col-sm-2 labelForm">Nacionalidad</label>
                <div className="col-md-10 listaOpciones">
                    <select className="form-select" id="nacionalidad" required>
                        <option value="Colombia">Colombiano(a)</option>
                        <option value="Extranjero">Extranjero(a)</option>
                    </select>
                </div>

                
                
                <label htmlFor="validationDefault03" type = "password" className="form-label col-sm-2 labelForm">Crea Contraseña</label>
                <div className="col-md-10">
                    <input type="password" className="form-control" id="direccion" placeholder="Contrasena"/>
                </div>

                
                
                <label htmlFor="validationDefault03"  className="form-label col-sm-2 labelForm">Repite Contreseña</label>
                <div className="col-md-10">
                    <input type="password" className="form-control" id="direccion" placeholder="Contrasena2"/>
                </div>
            </form>
        </>
    );
}

