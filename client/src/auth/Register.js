import RegisterForm from "../components/RegisterForm";


const Register = () => {

    const registerForm = () => (
        <RegisterForm />
    )

    return (
        <>
            <div className='container-fluid bg-secondary p-5 text-center'>
                <h1>Register</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        {registerForm()}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Register