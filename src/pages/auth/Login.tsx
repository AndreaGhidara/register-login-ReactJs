import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setValues({ ...values, [event.target.name]: [event.target.value] })

    }

    const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        axios.post('http://localhost:8000/login', values)
            .then(res => {
                console.log(res.data);
                
                if (res.data.Status === "Success") {
                    console.log("Success");

                    navigate('/');
                }
            })
            .catch(err => console.log(err));

    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Preparati a ordinare fantastiche pietanze da tutti i ristoranti vicino a te.</p>
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
                                <label className="label">
                                    {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login