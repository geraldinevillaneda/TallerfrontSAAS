import React from 'react'
import {useHistory} from 'react-router-dom'

export default function  LeerUsuario () {

    const valores =  JSON.parse(sessionStorage.getItem('login'));
    const id = valores.datos.id;
    const token = valores.datos.token;

    const navegacion = useHistory();

    const HandleSubmitDelete = (e) => {
        e.preventDefault();
        
        fetch('http://localhost:5000/users/delete/' + id.toString(), {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        }).then((respuesta) => {
            respuesta.json().then((result) => {
                if(result.Auth)
                {
                    alert(result.done);
                    navegacion.push('/');
                    sessionStorage.removeItem('login');
                }
                else
                {
                    alert(result.done);
                }
            })
        })
    }

    fetch('http://localhost:5000/users/' + id.toString(), {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    }).then((respuesta) => {
        respuesta.json().then((result) => {
            if(result.Auth)
            {                  
                //alert(result.done);
                /* const [userid, setUserId] = useState(identificacion);
                const [username, setUsername] = useState(nombre_usuario);
                const [userdocument, setUserDocument] = useState(tipo_documento);
                const [usersex, setUserSex] = useState(sexo_usuario);
                const [userphone, setUserPhone] = useState(telefono_usuario);
                const [useraddres, setUserAddres] = useState(direccion_usuario);
                const [usersource, setUserSource] = useState(nacionalidad); */
                return(
                    <>
                        {result}
                    </>
                );
            }
            else
            {
                if(!result.token)
                {
                    navigator.push('/login');
                    alert("El tiempo de sesion expiro");
                }
                else
                {
                    alert(result.done);
                }
            }
        })
    })

    return(
        <>
            <button className="btn btn-danger boton " type="submit"  onClickCapture={HandleSubmitDelete}>Eliminar Usuario</button>
        </>
    );

}
