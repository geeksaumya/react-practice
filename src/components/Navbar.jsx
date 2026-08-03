import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        background: "#282c34",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/employees">Employees</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;