import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Signup from "./components/Signup"

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Employees from "./pages/Employees";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>

      <Signup />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/:id" element={<Employees />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;