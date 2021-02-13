import React from 'react';
import {Link} from 'react-router-dom'
import './header.css'

export default function Header() {
    
    const variables = JSON.parse(sessionStorage.getItem('login'));
    //const tamaño = Object.keys(variables).length;
    //let islogged = true;
    let islogged = true;

    if(variables === null)
    {
        islogged = false
    }
    else if(variables.token === null)
    {
        islogged = true
    }
    if(variables != null)
    {
        console.log(islogged, variables.token, variables);
    }

    return(
            <nav className = 'navbar navbar-light bg-ligh gf-header'>
                <a className='navbar-brand logoNavbar' href= '/' >
                    <img src="logo192.png" widht='50' height='50' className="d-inline-block align-top" alt="Logo"/>
                </a>
                {
                    islogged 
                    ?<div className='lista'><ul className="navbar-nav botonHeader">
                        <li className="nav-item active ">
                            <Link to='/logout' >
                          
                                LOG OUT
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/registroGasolinera'>
                                REGISTRAR GASOLINERA
                            </Link>
                        </li>
                    </ul></div>
                    :<div className='lista'><ul className="navbar-nav botonHeader" >
                        <li className='nav-item active '>
                            <Link to='/login'>
                                LOG IN
                            </Link>
                        </li>
                    </ul></div>
                }
            </nav>
    );
}
