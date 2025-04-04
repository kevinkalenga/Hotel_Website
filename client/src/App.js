import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import TopNav from "./components/TopNav";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";





function App() {
  return (
    <BrowserRouter>

      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
