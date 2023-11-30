import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: "",
        passwordConfirm: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setValues({ ...values, [event.target.name]: [event.target.value] })

    }

    const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        if (values.password.toString() === values.passwordConfirm.toString()) {

            axios.post('http://localhost:8000/register', values)

                .then(res => {
                    if (res.data.Status === "Success") {
                        console.log("success");
                        
                        navigate('/auth/login');
                    }
                })
                .catch(err => console.log(err));

        } else {
            alert('le due password non coincidono');
        }
    }

    return (
        <>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Registrati e controllo l' email</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handelSubmit} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={handleChange} name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={handleChange} name='password' type="password" placeholder="password" autoComplete='on' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Repeat Password</span>
                                </label>
                                <input onChange={handleChange} type="password" name='passwordConfirm' placeholder="password Confirm" autoComplete='off' className="input input-bordered" required />
                                <label className="label">
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register