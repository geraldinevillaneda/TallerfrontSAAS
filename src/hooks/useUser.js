import {useCallback, useContext} from 'react'
import Context from '../context/userContext'

export default function useUser ()
{
    const {jwt, setJwt} = useContext(Context);
 
    const login  = useCallback(() => {
        setJwt('test')
    }, [setJwt]);


    return {
        islogged: Boolean(jwt),
        login
    };
}