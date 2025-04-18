import React, { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { login } from '../actions/auth'

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Send Login data => ", { email, password })
        try {

            const res = await login({ email, password });
            if (res.data) {
                console.log("Login response in redux");

            }
            window.localStorage.setItem("auth", JSON.stringify(res.data))
            dispatch({
                type: "LOGGED_IN_USER",
                payload: res.data
            })
            toast.success("Login was successful")
            navigate('/dashboard')

        } catch (err) {
            console.log(err)
            if (err.response.status === 400) toast.error(err.response.data);
        }
    }

    return (

        <form onSubmit={handleSubmit} className="mt-5">

            <div className="form-group mb-3">
                <label className="form-label">Email address</label>
                <input type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

            </div>
            <div className="form-group mb-3">
                <label className="form-label">Password</label>
                <input type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

            </div>
            <button disabled={!email || !password} className="btn btn-primary">Submit</button>
        </form>



    )
}

export default LoginForm