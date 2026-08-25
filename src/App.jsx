import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./components/Signup"
import Login from "./components/Login"

// import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Employees from "./pages/Employees";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>

      
{/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/:id" element={<Employees />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;