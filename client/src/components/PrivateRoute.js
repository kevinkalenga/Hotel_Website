import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ ...rest }) => {
    // Outlet is the children of PrivateRoute whitch is Dashboard
    const { auth } = useSelector((state) => ({ ...state }))

    return auth && auth.token ? <Outlet {...rest} /> : <Navigate to="/login" />

}

export default PrivateRoute