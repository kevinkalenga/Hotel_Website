import React, { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"
import axios from "axios"

const RegisterForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log({ name, email, password })
            const res = await axios.post(`${process.env.REACT_APP_API}/register`, {
                name,
                email,
                password,
            });

            console.log("Register User => ", res)
            toast.success("Register was successful")
            navigate('/login')

        } catch (err) {
            console.log(err)
            if (err.response.status === 400) toast.error(err.response.data);
        }
    }

    return (

        <form onSubmit={handleSubmit} className="mt-5">
            <div className="form-group mb-3">
                <label className="form-label">Your name</label>
                <input type="name"
                    className="form-control"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

            </div>
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
            <button className="btn btn-primary">Submit</button>
        </form>



    )
}

export default RegisterForm