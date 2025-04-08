import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const TopNav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { auth } = useSelector((state) => ({ ...state }))

    const logout = () => {
        dispatch({
            type: "LOGOUT",
            payload: null
        });
        window.localStorage.removeItem('auth');
        navigate('/login')
    }

    return (
        <div className="nav bg-light d-flex justify-content-between boxshadow">
            <Link className="nav-link" to="/">
                Home
            </Link>

            {
                auth !== null && (
                    <Link onClick={logout} className="nav-link" to="/login">
                        Logout
                    </Link>
                )
            }


            {
                auth === null && (
                    <>
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                        <Link className="nav-link" to="/register">
                            Register
                        </Link>
                    </>
                )
            }



        </div>
    )
}

export default TopNav