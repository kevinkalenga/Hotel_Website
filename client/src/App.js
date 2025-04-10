import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

// components
import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import TopNav from "./components/TopNav";
import Dashboard from './user/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import DashboardSeller from './user/DashboardSeller';
import NewHotel from './hotels/NewHotel';






function App() {
  return (
    <BrowserRouter>

      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/seller" element={<DashboardSeller />} />
          <Route path="/hotels/new" element={<NewHotel />} />
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
    </BrowserRouter>
  );
}

export default App;
