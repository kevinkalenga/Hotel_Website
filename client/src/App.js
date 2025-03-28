import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
