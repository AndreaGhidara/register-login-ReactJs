import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { log } from 'console';

const Home = () => {
    const navigate = useNavigate();

    const [auth, setAuth] = useState(false);

    const [message, setMessage] = useState('')

    const [email, setEmail] = useState('')
    //invio automatico dei cookie con le chiamate axios
    axios.defaults.withCredentials = true;

    useEffect(() => {

        axios.get('http://localhost:8000')
        .then(res => {
            if (res.data.Status === 'Success') {
                setAuth(true);
                setEmail(res.data.Name);
            } else {
                setAuth(false);
                setMessage(res.data.Error)
            }
        })
        .catch(err => console.log(err))

    }, [])

    const handleDelate = () => {
        axios.get('http://localhost:8000/logout')
        .then(res => {
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div>
            {
                auth ?
                <div>
                    <h1>Accesso autorizzato ---- { email }</h1>
                    <button onClick={handleDelate} className='p-3 bg-red-400 hover:bg-red-500'>
                        logout
                    </button>
                </div>
                :
                <div>
                    <h2>
                        Devi loggarti {message}
                        <Link to="/auth/login" className='btn btn-primary'>
                            Login
                        </Link>
                    </h2>
                </div>
            }   
        </div>
    )
}

export default Home