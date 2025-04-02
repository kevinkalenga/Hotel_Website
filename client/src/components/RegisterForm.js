import React, { useState } from 'react'

const RegisterForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, password })
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