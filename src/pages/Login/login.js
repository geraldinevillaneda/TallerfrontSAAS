import React, { useEffect, useState } from 'react'
import {Helmet} from 'react-helmet';
import {useHistory} from 'react-router-dom'
import './login.css'
import storage from '../../lib/storage'


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useHistory();



    const handleSubmit = (e) => {
        e.preventDefault();
        //alert(islogged)
        const data = {
            nombre_usuario: username,
            clave_usuario: password
        }
        console.log(data)
        fetch('http://localhost:5000/users/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then ((respuesta) =>{ 
            respuesta.json().then((result) => {
                console.log(result)
                if(result.Auth)
                {
                    sessionStorage.setItem('login', JSON.stringify({
                        token: result.succesfull,
                    }))
                    alert('Bienvenido  ' + result.done)
                    navigate.push('/')
                }
                else
                {
                    sessionStorage.setItem('login', JSON.stringify({
                        token: null,
                    }))
                    alert(result.error)
                }
                console.log(JSON.parse(sessionStorage.getItem('login')))
            })
        });
    };

    return (
        <>
            <div className="wrapper fadeInDown">
                <Helmet>
                    <title>Login|App</title>
                </Helmet>
                <div id="formContent">

                    <div className="fadeIn first">
                        <img src="logo512.png" id="icon" alt="User Icon" />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            id="login" 
                            className="fadeIn second" 
                            onChange={(e) => setUsername(e.target.value)} 
                            value={username} 
                            placeholder="username" 
                        />
                        <input 
                            type="password" 
                            id="password" 
                            className="fadeIn third" 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password} 
                            placeholder="password"
                        />
                        <button>INICIAR SECCION</button>
                    </form>

                    <div id="formFooter">
                        <a className="underlineHover" href="#">¿Olvido su Contraseña?</a>
                    </div>

                </div>
            </div>
        </>
    )
}